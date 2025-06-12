#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' })

const { createClient } = require('@sanity/client')
const AIEnhancedMigration = require('./ai-enhanced-migration.js')

const sanity = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

async function debugManufacturerMapping() {
  console.log('🔍 Debug: Manufacturer Mapping Investigation')
  console.log('=' .repeat(60))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // 1. Check all available collections
    console.log('\n📋 Available Webflow Collections:')
    const collections = await migration.getCollections()
    collections.forEach(c => {
      console.log(`   • ${c.displayName} (slug: ${c.slug})`)
    })
    
    // 2. Sample a few products to see their structure
    console.log('\n📦 Sample Webflow Products Structure:')
    const webflowProductsCollection = collections.find(c => 
      c.displayName === 'Featured Products' || c.slug === 'featured-products'
    )
    
    if (webflowProductsCollection) {
      const webflowProducts = await migration.getCollectionItems(webflowProductsCollection.id)
      console.log(`   Found ${webflowProducts.length} products`)
      
      // Show first 3 products with their manufacturer fields
      webflowProducts.slice(0, 3).forEach((product, i) => {
        console.log(`\n   Product ${i + 1}: ${product.fieldData.name}`)
        console.log(`     • manufacturer: ${product.fieldData.manufacturer}`)
        console.log(`     • manufacturer-2: ${product.fieldData['manufacturer-2']}`)
        console.log(`     • All fields:`, Object.keys(product.fieldData))
      })
    }
    
    // 3. Check Partners collection
    console.log('\n🤝 Sample Partners/Manufacturers:')
    const partnersCollection = collections.find(c => c.displayName === 'Partners')
    if (partnersCollection) {
      const partners = await migration.getCollectionItems(partnersCollection.id)
      console.log(`   Found ${partners.length} partners`)
      
      partners.slice(0, 5).forEach((partner, i) => {
        console.log(`   ${i + 1}. ${partner.fieldData.name} (ID: ${partner.id})`)
      })
    }
    
    // 4. Check if there's a dedicated Manufacturers collection
    const manufacturersCollection = collections.find(c => 
      c.displayName === 'Manufacturers' || c.slug === 'manufacturers'
    )
    
    if (manufacturersCollection) {
      console.log('\n🏭 Found Manufacturers Collection!')
      const manufacturers = await migration.getCollectionItems(manufacturersCollection.id)
      console.log(`   Found ${manufacturers.length} manufacturers`)
      
      manufacturers.slice(0, 5).forEach((mfg, i) => {
        console.log(`   ${i + 1}. ${mfg.fieldData.name} (ID: ${mfg.id})`)
      })
    } else {
      console.log('\n⚠️ No dedicated Manufacturers collection found')
    }
    
    // 5. Check what manufacturers exist in Sanity
    console.log('\n📊 Sanity Manufacturers Sample:')
    const sanityManufacturers = await sanity.fetch(`
      *[_type == "manufacturer"][0..5]{name, slug}
    `)
    
    sanityManufacturers.forEach((mfg, i) => {
      console.log(`   ${i + 1}. ${mfg.name} (slug: ${mfg.slug})`)
    })
    
    // 6. Check Sanity products for manufacturer field structure
    console.log('\n📦 Sanity Products Sample (checking manufacturer fields):')
    const sanityProducts = await sanity.fetch(`
      *[_type == "product"][0..3]{
        title,
        manufacturer->{name},
        "rawManufacturer": verticalMarketRaw
      }
    `)
    
    sanityProducts.forEach((product, i) => {
      console.log(`   ${i + 1}. ${product.title}`)
      console.log(`      • manufacturer: ${product.manufacturer?.name || 'None'}`)
      console.log(`      • rawManufacturer: ${product.rawManufacturer}`)
    })
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

if (require.main === module) {
  debugManufacturerMapping()
}

module.exports = debugManufacturerMapping 