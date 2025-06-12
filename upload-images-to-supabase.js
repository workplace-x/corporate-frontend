const fs = require('fs');
const https = require('https');
const http = require('http');

console.log('🖼️  Starting Employee Image Upload to Supabase');
console.log('');

// Check for required environment variables
if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ Missing SANITY_API_TOKEN environment variable');
  process.exit(1);
}

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error('❌ Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variable');
  console.log('Add to your .env.local:');
  console.log('SUPABASE_URL=your_supabase_url');
  console.log('SUPABASE_ANON_KEY=your_supabase_anon_key');
  process.exit(1);
}

const csvPath = '../../Tangram - Employees (2).csv';

// Simple CSV parser
function parseCSV(content) {
  const lines = content.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  const rows = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      const values = lines[i].split(',');
      const row = {};
      
      headers.forEach((header, index) => {
        if (values[index]) {
          row[header] = values[index].trim().replace(/"/g, '');
        }
      });
      
      if (row.Name && row.Avatar) {
        rows.push(row);
      }
    }
  }
  
  return rows;
}

// Simple Supabase Storage client
class SimpleSupabaseStorage {
  constructor(url, anonKey) {
    this.url = url;
    this.anonKey = anonKey;
    this.storageUrl = `${url}/storage/v1/object`;
  }
  
  async uploadImage(imageUrl, fileName) {
    try {
      // Download image
      console.log(`  📥 Downloading: ${imageUrl}`);
      const imageBuffer = await this.downloadImage(imageUrl);
      
      // Upload to Supabase
      console.log(`  📤 Uploading: ${fileName}`);
      const uploadUrl = `${this.storageUrl}/employee-photos/${fileName}`;
      
      return new Promise((resolve, reject) => {
        const url = new URL(uploadUrl);
        
        const options = {
          method: 'POST',
          hostname: url.hostname,
          path: url.pathname + url.search,
          headers: {
            'Authorization': `Bearer ${this.anonKey}`,
            'Content-Type': this.getContentType(fileName),
            'Content-Length': imageBuffer.length,
            'x-upsert': 'true' // Overwrite if exists
          }
        };
        
        const req = https.request(options, (res) => {
          let data = '';
          
          res.on('data', (chunk) => {
            data += chunk;
          });
          
          res.on('end', () => {
            if (res.statusCode === 200 || res.statusCode === 201) {
              const publicUrl = `${this.url}/storage/v1/object/public/employee-photos/${fileName}`;
              resolve(publicUrl);
            } else {
              reject(new Error(`Upload failed: ${res.statusCode} - ${data}`));
            }
          });
        });
        
        req.on('error', reject);
        req.write(imageBuffer);
        req.end();
      });
      
    } catch (error) {
      throw new Error(`Failed to upload ${fileName}: ${error.message}`);
    }
  }
  
  async downloadImage(imageUrl) {
    return new Promise((resolve, reject) => {
      const protocol = imageUrl.startsWith('https:') ? https : http;
      
      protocol.get(imageUrl, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download: ${res.statusCode}`));
          return;
        }
        
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      }).on('error', reject);
    });
  }
  
  getContentType(fileName) {
    const ext = fileName.toLowerCase().split('.').pop();
    const types = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'webp': 'image/webp',
      'gif': 'image/gif'
    };
    return types[ext] || 'image/jpeg';
  }
}

// Simple Sanity client for updates
class SimpleSanityClient {
  constructor(projectId, dataset, token) {
    this.projectId = projectId;
    this.dataset = dataset;
    this.token = token;
    this.baseUrl = `https://${projectId}.api.sanity.io/v2023-12-01/data`;
  }
  
  async query(query) {
    const url = `${this.baseUrl}/query/${this.dataset}?query=${encodeURIComponent(query)}`;
    
    return new Promise((resolve, reject) => {
      https.get(url, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      }, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            const result = JSON.parse(data);
            resolve(result.result);
          } catch (error) {
            reject(error);
          }
        });
      }).on('error', reject);
    });
  }
  
  async patch(documentId, operations) {
    const mutation = {
      mutations: [
        {
          patch: {
            id: documentId,
            ...operations
          }
        }
      ]
    };
    
    const url = `${this.baseUrl}/mutate/${this.dataset}`;
    
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
      
      const req = https.request(url, options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
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
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getFileExtension(url) {
  const match = url.match(/\.(jpg|jpeg|png|webp|gif)(\?|$)/i);
  return match ? match[1].toLowerCase() : 'jpg';
}

function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
}

// Main upload function
async function uploadEmployeeImages() {
  console.log('📄 Reading CSV file...');
  
  try {
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const employees = parseCSV(csvContent);
    
    console.log(`✅ Found ${employees.length} employees with images`);
    
    const supabaseStorage = new SimpleSupabaseStorage(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );
    
    const sanityClient = new SimpleSanityClient(
      '4q7mxake',
      'production',
      process.env.SANITY_API_TOKEN
    );
    
    let successCount = 0;
    let errorCount = 0;
    
    // Process images one by one
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      
      try {
        console.log(`\n📸 ${i + 1}/${employees.length}: ${employee.Name}`);
        
        // Create filename
        const slug = employee.Slug || createSlug(employee.Name);
        const ext = getFileExtension(employee.Avatar);
        const fileName = `${sanitizeFileName(slug)}.${ext}`;
        
        // Upload image to Supabase
        const supabaseUrl = await supabaseStorage.uploadImage(employee.Avatar, fileName);
        console.log(`  ✅ Uploaded to: ${supabaseUrl}`);
        
        // Find the Sanity document
        const query = `*[_type == "teamMember" && slug.current == "${slug}"][0]`;
        const sanityDoc = await sanityClient.query(query);
        
        if (sanityDoc && sanityDoc._id) {
          // Update Sanity record with image URL
          await sanityClient.patch(sanityDoc._id, {
            set: {
              headshotUrl: supabaseUrl // Store as simple URL for now
            }
          });
          console.log(`  ✅ Updated Sanity record: ${sanityDoc._id}`);
        } else {
          console.log(`  ⚠️  Sanity record not found for: ${employee.Name}`);
        }
        
        successCount++;
        
        // Small delay to avoid overwhelming APIs
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        errorCount++;
        console.error(`  ❌ Failed ${employee.Name}: ${error.message}`);
      }
    }
    
    console.log('\n🎉 Image upload completed!');
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${errorCount}`);
    console.log('\n📝 Next steps:');
    console.log('1. Check your Supabase Storage bucket "employee-photos"');
    console.log('2. Update your frontend to use the headshotUrl field');
    console.log('3. Optionally convert URLs to proper Sanity image assets later');
    
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    process.exit(1);
  }
}

// Run the upload
uploadEmployeeImages(); 