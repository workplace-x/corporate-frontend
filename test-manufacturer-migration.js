#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const AIEnhancedMigration = require('./ai-enhanced-migration.js')

async function testManufacturerMigration() {
  console.log('🧪 Testing Manufacturer Migration (First 3 Only)')
  console.log('=' .repeat(50))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // Get Partners collection
    const collections = await migration.getCollections()
    const partnersCollection = collections.find(c => c.displayName === 'Partners')
    
    if (!partnersCollection) {
      throw new Error('Partners collection not found in Webflow')
    }

    const webflowPartners = await migration.getCollectionItems(partnersCollection.id)
    
    // Test with just first 3 manufacturers
    const testPartners = webflowPartners.slice(0, 3)
    console.log(`📦 Testing with first ${testPartners.length} manufacturers`)

    let success = 0
    let failed = 0

    for (const partner of testPartners) {
      try {
        console.log(`\n🏭 Testing: ${partner.fieldData.name}`)
        
        const enhancedManufacturer = await migration.enhanceManufacturer(partner)
        await migration.createEnhancedManufacturer(enhancedManufacturer)
        
        success++
        console.log(`   ✅ Success!`)
        
        // Wait between requests
        await new Promise(resolve => setTimeout(resolve, 2000))
        
      } catch (error) {
        failed++
        console.error(`   ❌ Failed: ${error.message}`)
      }
    }

    console.log('\n🎯 Test Results:')
    console.log(`   ✅ Successful: ${success}/${testPartners.length}`)
    console.log(`   ❌ Failed: ${failed}/${testPartners.length}`)
    
    if (success > 0) {
      console.log('\n🚀 Test passed! Ready for full migration.')
      console.log('   Run: node ai-enhanced-migration.js manufacturers')
    } else {
      console.log('\n⚠️  All tests failed. Check the errors above.')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

if (require.main === module) {
  testManufacturerMigration()
} 