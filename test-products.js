#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const AIEnhancedMigration = require('./ai-enhanced-migration.js')

async function testProductsMigration() {
  console.log('🧪 Testing Products Migration (First 5 Only)')
  console.log('=' .repeat(50))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // Get Featured Products collection
    const collections = await migration.getCollections()
    const productsCollection = collections.find(c => 
      c.displayName === 'Featured Products' || c.slug === 'featured-products'
    )
    
    if (!productsCollection) {
      console.log('❌ Featured Products collection not found')
      console.log('📋 Available collections:')
      collections.forEach(c => console.log(`   - ${c.displayName} (${c.slug})`))
      return
    }

    const webflowProducts = await migration.getCollectionItems(productsCollection.id)
    
    // Get existing manufacturers for relationship testing
    const manufacturers = await migration.sanity.fetch(`*[_type == "manufacturer"]{_id, name, slug}`)
    const manufacturerMap = new Map(manufacturers.map(m => [m.name.toLowerCase(), m]))
    
    console.log(`🔗 Found ${manufacturers.length} manufacturers for relationship testing`)
    
    // Test with first 5 products
    const testProducts = webflowProducts.slice(0, 5)
    console.log(`📦 Testing with first ${testProducts.length} products from ${webflowProducts.length} total`)

    if (testProducts.length === 0) {
      console.log('⚠️ No products found to test')
      return
    }

    console.log('\n📋 Test Products:')
    testProducts.forEach((product, i) => {
      const manufacturer = product.fieldData.manufacturer || 'No manufacturer'
      console.log(`   ${i + 1}. ${product.fieldData.name} (${manufacturer})`)
    })

    let success = 0
    let failed = 0
    let withManufacturers = 0
    let withImages = 0

    for (const product of testProducts) {
      try {
        console.log(`\n📦 Testing: ${product.fieldData.name}`)
        
        const enhancedProduct = await migration.enhanceProduct(product, manufacturerMap)
        await migration.createEnhancedProduct(enhancedProduct)
        
        success++
        if (enhancedProduct.manufacturer) withManufacturers++
        if (enhancedProduct.featuredImage) withImages++
        
        console.log(`   ✅ Success! Quality: ${Math.round(enhancedProduct.enhancementMetrics.qualityScore)}%`)
        
        // Rate limiting for products
        await new Promise(resolve => setTimeout(resolve, 2000))
        
      } catch (error) {
        failed++
        console.error(`   ❌ Failed: ${error.message}`)
      }
    }

    console.log('\n🎯 Test Results:')
    console.log(`   ✅ Successful: ${success}/${testProducts.length}`)
    console.log(`   ❌ Failed: ${failed}/${testProducts.length}`)
    console.log(`   🔗 With Manufacturers: ${withManufacturers}/${success}`)
    console.log(`   📸 With Images: ${withImages}/${success}`)
    
    if (success > 0) {
      console.log('\n🚀 Test passed! Products migration ready.')
      console.log(`   📊 Total to migrate: ${webflowProducts.length} products`)
      const estimatedHours = Math.ceil(webflowProducts.length * 4 / 3600) // 4 seconds per product
      console.log(`   ⏱️ Estimated time: ~${estimatedHours} hours`)
      console.log('   🎯 Run: node ai-enhanced-migration.js products')
      
      // Check manufacturer relationship coverage
      const manufacturersInProducts = new Set()
      webflowProducts.forEach(p => {
        if (p.fieldData.manufacturer) {
          manufacturersInProducts.add(p.fieldData.manufacturer.toLowerCase())
        }
      })
      
      const matchingManufacturers = Array.from(manufacturersInProducts).filter(m => 
        manufacturerMap.has(m)
      ).length
      
      console.log(`\n📊 Relationship Analysis:`)
      console.log(`   🏭 Unique manufacturers in products: ${manufacturersInProducts.size}`)
      console.log(`   🔗 Will link to existing: ${matchingManufacturers}`)
      console.log(`   ⚠️ Missing relationships: ${manufacturersInProducts.size - matchingManufacturers}`)
      
    } else {
      console.log('\n⚠️ All tests failed. Check the errors above.')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

if (require.main === module) {
  testProductsMigration()
} 