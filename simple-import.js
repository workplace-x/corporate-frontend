const fs = require('fs');
const https = require('https');
const http = require('http');

console.log('🚀 Starting Simplified Employee Import for Sanity CMS');
console.log('');

// Check for API token
if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Missing SANITY_API_TOKEN environment variable');
  console.log('');
  console.log('To get your token:');
  console.log('1. Visit: https://sanity.io/manage/personal/project/4q7mxake/api');
  console.log('2. Create a new token with Editor permissions');
  console.log('3. Add it to your .env.local file: SANITY_API_TOKEN=your_token_here');
  console.log('4. Run: source .env.local');
  console.log('5. Then run this script again');
  process.exit(1);
}

const csvPath = '../../Tangram - Employees (2).csv';

// Simple CSV parser using built-in modules
function parseCSV(content) {
  const lines = content.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const rows = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      // Basic CSV parsing - this is simplified and may need adjustment for complex CSV
      const values = lines[i].split(',');
      const row = {};
      
      headers.forEach((header, index) => {
        if (values[index]) {
          row[header] = values[index].trim().replace(/"/g, '');
        }
      });
      
      if (row.Name) { // Only include rows with names
        rows.push(row);
      }
    }
  }
  
  return rows;
}

// Simple Sanity API client
class SimpleSanityClient {
  constructor(projectId, dataset, token) {
    this.projectId = projectId;
    this.dataset = dataset;
    this.token = token;
    this.baseUrl = `https://${projectId}.api.sanity.io/v2023-12-01/data/mutate/${dataset}`;
  }
  
  async create(document) {
    const mutation = {
      mutations: [
        {
          create: {
            _type: document._type,
            ...document
          }
        }
      ]
    };
    
    return new Promise((resolve, reject) => {
      const postData = JSON.stringify(mutation);
      
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
          'Content-Length': Buffer.byteLength(postData)
        }
      };
      
      const req = https.request(this.baseUrl, options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          try {
            const result = JSON.parse(data);
            if (res.statusCode === 200) {
              resolve(result);
            } else {
              reject(new Error(`HTTP ${res.statusCode}: ${data}`));
            }
          } catch (error) {
            reject(error);
          }
        });
      });
      
      req.on('error', reject);
      req.write(postData);
      req.end();
    });
  }
}

// Helper functions
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseBoolean(value) {
  return value === 'true' || value === true;
}

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
  
  const departments = csvDepartment.split(';').map(d => d.trim());
  const primaryDepartment = departments[0];
  
  return departmentMap[primaryDepartment] || primaryDepartment;
}

function htmlToBlocks(html) {
  if (!html || html.trim() === '') return undefined;
  
  const cleanText = html
    .replace(/<[^>]*>/g, '')
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

// Main import function
async function importEmployees() {
  console.log('📄 Reading CSV file...');
  
  try {
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const employees = parseCSV(csvContent);
    
    console.log(`✅ Parsed ${employees.length} employees from CSV`);
    
    // Filter out archived employees
    const activeEmployees = employees.filter(emp => !parseBoolean(emp.Archived));
    console.log(`📝 Processing ${activeEmployees.length} active employees`);
    
    const client = new SimpleSanityClient('4q7mxake', 'production', process.env.SANITY_API_TOKEN);
    
    let successCount = 0;
    let errorCount = 0;
    
    // Process employees one by one
    for (let i = 0; i < activeEmployees.length; i++) {
      const row = activeEmployees[i];
      
      try {
        const employee = {
          _type: 'teamMember',
          name: row.Name,
          slug: {
            _type: 'slug',
            current: row.Slug || createSlug(row.Name),
          },
          title: row.Title,
          department: mapDepartment(row.Department),
          manager: row.Manager || undefined,
          businessUnit: row['Business Unit'] || undefined,
          location: row.Location || undefined,
          yearHired: row['Year Hired'] ? parseInt(row['Year Hired']) : undefined,
          almaMater: row['Alma Mater'] || undefined,
          bio: htmlToBlocks(row.BIO),
          email: row.Email,
          phone: row['Phone Number'] || undefined,
          linkedin: row['Linkedin Profile'] || undefined,
          featured: false,
          boardOfDirectors: parseBoolean(row['Board of Directors?']),
          seniorLeadership: parseBoolean(row['Senior Leadership']),
          unitLeader: parseBoolean(row['Unit Leader']),
          executiveTeam: parseBoolean(row['Executive Team']),
          salesLeadership: parseBoolean(row['Sales Leadership']),
          pacificHoldings: parseBoolean(row['Pacific Holdings?']),
          pacificHoldingsTitle: row['Pacific Holdings Title'] || undefined,
          archived: false,
        };
        
        // Note: Images will need to be uploaded manually due to complexity
        if (row.Avatar) {
          console.log(`  ⚠️  Image for ${row.Name}: ${row.Avatar} (manual upload needed)`);
        }
        
        await client.create(employee);
        successCount++;
        console.log(`  ✅ ${i + 1}/${activeEmployees.length}: ${row.Name}`);
        
        // Small delay to avoid overwhelming the API
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (error) {
        errorCount++;
        console.error(`  ❌ ${i + 1}/${activeEmployees.length}: ${row.Name} - ${error.message}`);
      }
    }
    
    console.log('');
    console.log('🎉 Import completed!');
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${errorCount}`);
    console.log('');
    console.log('📸 Note: Employee photos need to be uploaded manually to Sanity Studio');
    console.log('🎛️  Access Sanity Studio at: http://localhost:3333 (run: npm run studio)');
    
  } catch (error) {
    console.error('❌ Import failed:', error.message);
    process.exit(1);
  }
}

// Run the import
importEmployees(); 