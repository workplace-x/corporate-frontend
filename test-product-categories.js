#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const AIEnhancedMigration = require('./ai-enhanced-migration.js')

async function testProductCategoriesMigration() {
  console.log('🧪 Testing Product Categories Migration (First 3 Only)')
  console.log('=' .repeat(55))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // Get Categories collection
    const collections = await migration.getCollections()
    const categoriesCollection = collections.find(c => 
      c.displayName === 'Categories' || c.slug === 'categories'
    )
    
    if (!categoriesCollection) {
      console.log('❌ Categories collection not found')
      console.log('📋 Available collections:')
      collections.forEach(c => console.log(`   - ${c.displayName} (${c.slug})`))
      return
    }

    const webflowCategories = await migration.getCollectionItems(categoriesCollection.id)
    
    // Test with just first 3 categories
    const testCategories = webflowCategories.slice(0, 3)
    console.log(`📦 Testing with first ${testCategories.length} categories from ${webflowCategories.length} total`)

    if (testCategories.length === 0) {
      console.log('⚠️ No categories found to test')
      return
    }

    console.log('\n📋 Available Categories:')
    webflowCategories.forEach((category, i) => {
      console.log(`   ${i + 1}. ${category.fieldData.name || 'Unnamed Category'}`)
    })

    let success = 0
    let failed = 0

    for (const category of testCategories) {
      try {
        console.log(`\n📂 Testing: ${category.fieldData.name}`)
        
        const enhancedCategory = await migration.enhanceProductCategory(category)
        await migration.createEnhancedProductCategory(enhancedCategory)
        
        success++
        console.log(`   ✅ Success! Quality: ${Math.round(enhancedCategory.enhancementMetrics.qualityScore)}%`)
        
        // Shorter wait for categories
        await new Promise(resolve => setTimeout(resolve, 1000))
        
      } catch (error) {
        failed++
        console.error(`   ❌ Failed: ${error.message}`)
      }
    }

    console.log('\n🎯 Test Results:')
    console.log(`   ✅ Successful: ${success}/${testCategories.length}`)
    console.log(`   ❌ Failed: ${failed}/${testCategories.length}`)
    
    if (success > 0) {
      console.log('\n🚀 Test passed! Product Categories migration ready.')
      console.log(`   📊 Total to migrate: ${webflowCategories.length} categories`)
      console.log('   ⚡ Estimated time: ~${Math.ceil(webflowCategories.length * 0.5 / 60)} minutes')
      console.log('   🎯 Run: node ai-enhanced-migration.js product-categories')
    } else {
      console.log('\n⚠️ All tests failed. Check the errors above.')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

if (require.main === module) {
  testProductCategoriesMigration()
} 