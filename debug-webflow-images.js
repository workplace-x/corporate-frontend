#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const AIEnhancedMigration = require('./ai-enhanced-migration.js')

async function debugWebflowImages() {
  console.log('🔍 Debugging Webflow Image Structure')
  console.log('=' .repeat(50))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // Get Partners collection
    const collections = await migration.getCollections()
    const partnersCollection = collections.find(c => c.displayName === 'Partners')
    
    const webflowPartners = await migration.getCollectionItems(partnersCollection.id)
    
    // Look at first 5 partners with logos
    const partnersWithLogos = webflowPartners
      .filter(p => p.fieldData.logo)
      .slice(0, 5)
    
    console.log(`📦 Found ${partnersWithLogos.length} partners with logos to examine`)
    
    for (const partner of partnersWithLogos) {
      console.log(`\n🏭 ${partner.fieldData.name}`)
      console.log('   Logo data structure:')
      console.log('   ', JSON.stringify(partner.fieldData.logo, null, 2))
      
      if (partner.fieldData.logo.url) {
        console.log(`   📸 Testing image URL: ${partner.fieldData.logo.url}`)
        
        // Test if we can fetch the image
        try {
          const response = await fetch(partner.fieldData.logo.url)
          console.log(`   Status: ${response.status} ${response.statusText}`)
          console.log(`   Content-Type: ${response.headers.get('content-type')}`)
          console.log(`   Content-Length: ${response.headers.get('content-length')}`)
          
          if (response.ok) {
            console.log(`   ✅ Image accessible`)
          } else {
            console.log(`   ❌ Image not accessible`)
          }
        } catch (error) {
          console.log(`   ❌ Fetch failed: ${error.message}`)
        }
      }
    }
    
    // Also check the full field data structure
    console.log('\n📋 Full Partner Data Structure (first partner):')
    if (webflowPartners[0]) {
      console.log(JSON.stringify(webflowPartners[0].fieldData, null, 2))
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

if (require.main === module) {
  debugWebflowImages()
} 