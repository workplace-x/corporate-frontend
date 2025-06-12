#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const AIEnhancedMigration = require('./ai-enhanced-migration.js')

async function testVerticalMarketseMigration() {
  console.log('🧪 Testing Vertical Markets Migration (First 2 Only)')
  console.log('=' .repeat(55))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // Get Vertical Markets collection
    const collections = await migration.getCollections()
    const verticalMarketsCollection = collections.find(c => 
      c.displayName === 'Vertical Markets' || c.slug === 'vertical-markets'
    )
    
    if (!verticalMarketsCollection) {
      console.log('❌ Vertical Markets collection not found')
      console.log('📋 Available collections:')
      collections.forEach(c => console.log(`   - ${c.displayName} (${c.slug})`))
      return
    }

    const webflowMarkets = await migration.getCollectionItems(verticalMarketsCollection.id)
    
    // Test with just first 2 vertical markets
    const testMarkets = webflowMarkets.slice(0, 2)
    console.log(`📦 Testing with first ${testMarkets.length} vertical markets from ${webflowMarkets.length} total`)

    if (testMarkets.length === 0) {
      console.log('⚠️ No vertical markets found to test')
      return
    }

    console.log('\n📋 Available Vertical Markets:')
    webflowMarkets.forEach((market, i) => {
      console.log(`   ${i + 1}. ${market.fieldData.name || 'Unnamed Market'}`)
    })

    let success = 0
    let failed = 0

    for (const market of testMarkets) {
      try {
        console.log(`\n🏢 Testing: ${market.fieldData.name}`)
        
        const enhancedMarket = await migration.enhanceVerticalMarket(market)
        await migration.createEnhancedVerticalMarket(enhancedMarket)
        
        success++
        console.log(`   ✅ Success! ${enhancedMarket.sections.length} sections created`)
        
        // Wait between requests
        await new Promise(resolve => setTimeout(resolve, 3000))
        
      } catch (error) {
        failed++
        console.error(`   ❌ Failed: ${error.message}`)
      }
    }

    console.log('\n🎯 Test Results:')
    console.log(`   ✅ Successful: ${success}/${testMarkets.length}`)
    console.log(`   ❌ Failed: ${failed}/${testMarkets.length}`)
    
    if (success > 0) {
      console.log('\n🚀 Test passed! Vertical Markets migration ready.')
      console.log(`   📊 Total to migrate: ${webflowMarkets.length} vertical markets`)
      console.log('   🎯 Run: node ai-enhanced-migration.js vertical-markets')
    } else {
      console.log('\n⚠️ All tests failed. Check the errors above.')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

if (require.main === module) {
  testVerticalMarketseMigration()
} 