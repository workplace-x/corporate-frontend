const fs = require('fs');
const csv = require('csv-parser');
const fetch = require('node-fetch');
const { createClient } = require('@sanity/client');

// Sanity client configuration
const client = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
  apiVersion: '2023-12-01',
});

// Helper function to convert HTML to rich text blocks
function htmlToBlocks(html) {
  if (!html || html.trim() === '') return undefined;
  
  // Simple HTML to blocks conversion - you might want to use a proper library
  // For now, just convert to simple text blocks
  const cleanText = html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .trim();
  
  if (!cleanText) return undefined;
  
  return [
    {
      _type: 'block',
      _key: Math.random().toString(36).substr(2, 9),
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: Math.random().toString(36).substr(2, 9),
          text: cleanText,
          marks: [],
        },
      ],
    },
  ];
}

// Helper function to parse boolean values
function parseBoolean(value) {
  return value === 'true' || value === true;
}

// Helper function to create slug from name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to map department values
function mapDepartment(csvDepartment) {
  if (!csvDepartment) return null;
  
  const departmentMap = {
    'leadership': 'leadership',
    'design': 'design',
    'project-management': 'project-management',
    'sales': 'sales',
    'operations': 'operations',
    'technology': 'technology',
    'customer-service': 'customer-service',
    'accounting': 'accounting',
    'marketing': 'marketing',
    'construction-services': 'construction-services',
    'construction-trades': 'construction-trades',
    'engineering': 'engineering',
    'move': 'move',
    'foreman': 'foreman',
    'it': 'it',
    'steelcase': 'steelcase',
    'ancillary': 'ancillary',
    'central-valley': 'central-valley',
  };
  
  // Handle multiple departments separated by semicolons
  const departments = csvDepartment.split(';').map(d => d.trim());
  const primaryDepartment = departments[0];
  
  return departmentMap[primaryDepartment] || primaryDepartment;
}

// Helper function to upload image from URL
async function uploadImageFromUrl(imageUrl, alt) {
  if (!imageUrl || imageUrl.trim() === '') return null;
  
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.warn(`Failed to fetch image: ${imageUrl}`);
      return null;
    }
    
    const buffer = await response.buffer();
    const asset = await client.assets.upload('image', buffer, {
      filename: alt ? `${alt.replace(/[^a-z0-9]/gi, '-')}.jpg` : 'employee-photo.jpg',
    });
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
      alt: alt || 'Employee photo',
    };
  } catch (error) {
    console.warn(`Error uploading image ${imageUrl}:`, error.message);
    return null;
  }
}

// Main import function
async function importEmployees() {
  const employees = [];
  const csvPath = '../../Tangram - Employees (2).csv';
  
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => {
        // Skip archived employees if you want
        if (parseBoolean(row['Archived'])) {
          console.log(`Skipping archived employee: ${row['Name']}`);
          return;
        }
        
        const employee = {
          _type: 'teamMember',
          name: row['Name'],
          slug: {
            _type: 'slug',
            current: row['Slug'] || createSlug(row['Name']),
          },
          title: row['Title'],
          department: mapDepartment(row['Department']),
          manager: row['Manager'] || undefined,
          businessUnit: row['Business Unit'] || undefined,
          location: row['Location'] || undefined,
          yearHired: row['Year Hired'] ? parseInt(row['Year Hired']) : undefined,
          almaMater: row['Alma Mater'] || undefined,
          bio: htmlToBlocks(row['BIO']),
          email: row['Email'],
          phone: row['Phone Number'] || undefined,
          linkedin: row['Linkedin Profile'] || undefined,
          // Boolean flags
          featured: false, // Set manually later
          boardOfDirectors: parseBoolean(row['Board of Directors?']),
          seniorLeadership: parseBoolean(row['Senior Leadership']),
          unitLeader: parseBoolean(row['Unit Leader']),
          executiveTeam: parseBoolean(row['Executive Team']),
          salesLeadership: parseBoolean(row['Sales Leadership']),
          pacificHoldings: parseBoolean(row['Pacific Holdings?']),
          pacificHoldingsTitle: row['Pacific Holdings Title'] || undefined,
          archived: parseBoolean(row['Archived']),
          // Store image URL for later processing
          _imageUrl: row['Avatar'],
        };
        
        employees.push(employee);
      })
      .on('end', async () => {
        console.log(`Parsed ${employees.length} employees from CSV`);
        
        // Process employees in batches
        const batchSize = 10;
        for (let i = 0; i < employees.length; i += batchSize) {
          const batch = employees.slice(i, i + batchSize);
          console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(employees.length / batchSize)}`);
          
          // Process images and upload documents
          for (const employee of batch) {
            try {
              // Upload headshot if available
              if (employee._imageUrl) {
                const headshot = await uploadImageFromUrl(employee._imageUrl, employee.name);
                if (headshot) {
                  employee.headshot = headshot;
                }
                delete employee._imageUrl;
              }
              
              // Create document in Sanity
              const result = await client.create(employee);
              console.log(`✅ Created: ${employee.name} (${result._id})`);
              
              // Small delay to avoid rate limiting
              await new Promise(resolve => setTimeout(resolve, 100));
              
            } catch (error) {
              console.error(`❌ Error creating ${employee.name}:`, error.message);
            }
          }
        }
        
        console.log('🎉 Import completed!');
        resolve();
      })
      .on('error', reject);
  });
}

// Run the import
if (require.main === module) {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('Please set SANITY_API_TOKEN environment variable');
    process.exit(1);
  }
  
  importEmployees()
    .then(() => {
      console.log('Import finished successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Import failed:', error);
      process.exit(1);
    });
}

module.exports = { importEmployees }; 