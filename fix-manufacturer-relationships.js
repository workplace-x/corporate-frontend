#!/usr/bin/env node

// Load environment variables
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

async function fixManufacturerRelationships() {
  console.log('🔗 Fixing Manufacturer → Product Relationships')
  console.log('=' .repeat(55))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // Get all manufacturers from Webflow to build ID → Name mapping
    console.log('📋 Building manufacturer ID → Name mapping...')
    
    const collections = await migration.getCollections()
    const partnersCollection = collections.find(c => c.displayName === 'Partners')
    
    if (!partnersCollection) {
      throw new Error('Partners collection not found')
    }

    const webflowPartners = await migration.getCollectionItems(partnersCollection.id)
    
    // Create ID to name mapping from Webflow data
    const webflowIdToName = new Map()
    webflowPartners.forEach(partner => {
      if (partner.id && partner.fieldData.name) {
        webflowIdToName.set(partner.id, partner.fieldData.name.toLowerCase())
      }
    })
    
    console.log(`📦 Found ${webflowIdToName.size} Webflow manufacturer ID mappings`)
    
    // Get all Sanity manufacturers
    const sanityManufacturers = await sanity.fetch(`
      *[_type == "manufacturer"]{_id, name, slug}
    `)
    
    const nameToSanityId = new Map()
    sanityManufacturers.forEach(mfg => {
      nameToSanityId.set(mfg.name.toLowerCase(), mfg._id)
    })
    
    console.log(`🏭 Found ${sanityManufacturers.length} Sanity manufacturers`)
    
    // Get products that need manufacturer relationships
    const productsWithoutManufacturers = await sanity.fetch(`
      *[_type == "product" && !defined(manufacturer)]{
        _id,
        title,
        "webflowManufacturer": verticalMarketRaw
      }
    `)
    
    console.log(`📦 Found ${productsWithoutManufacturers.length} products needing manufacturer links`)
    
    // Get Webflow products to find manufacturer IDs
    const webflowProductsCollection = collections.find(c => 
      c.displayName === 'Featured Products' || c.slug === 'featured-products'
    )
    
    if (!webflowProductsCollection) {
      throw new Error('Featured Products collection not found')
    }
    
    const webflowProducts = await migration.getCollectionItems(webflowProductsCollection.id)
    
    // Create mapping of product names to manufacturer IDs
    const productToManufacturerIdMap = new Map()
    webflowProducts.forEach(product => {
      if (product.fieldData.name && product.fieldData.manufacturer) {
        productToManufacturerIdMap.set(
          product.fieldData.name.toLowerCase(),
          product.fieldData.manufacturer
        )
      }
    })
    
    console.log('\n🔗 Starting relationship fixes...')
    
    let linked = 0
    let notFound = 0
    
    for (const product of productsWithoutManufacturers) {
      try {
        const productNameLower = product.title.toLowerCase()
        const webflowManufacturerId = productToManufacturerIdMap.get(productNameLower)
        
        if (webflowManufacturerId) {
          const manufacturerName = webflowIdToName.get(webflowManufacturerId)
          
          if (manufacturerName) {
            const sanityManufacturerId = nameToSanityId.get(manufacturerName)
            
            if (sanityManufacturerId) {
              // Update the product with manufacturer reference
              await sanity
                .patch(product._id)
                .set({
                  manufacturer: {
                    _type: 'reference',
                    _ref: sanityManufacturerId
                  }
                })
                .commit()
              
              linked++
              console.log(`   ✅ Linked "${product.title}" → "${manufacturerName}"`)
            } else {
              notFound++
              console.log(`   ⚠️ Manufacturer "${manufacturerName}" not found in Sanity`)
            }
          } else {
            notFound++
            console.log(`   ⚠️ Webflow manufacturer ID "${webflowManufacturerId}" not found`)
          }
        } else {
          notFound++
          // console.log(`   ⚠️ No manufacturer ID found for "${product.title}"`)
        }
        
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        console.error(`   ❌ Failed to fix "${product.title}": ${error.message}`)
      }
    }
    
    console.log('\n🎉 Relationship Fixing Complete!')
    console.log(`   ✅ Successfully linked: ${linked}`)
    console.log(`   ⚠️ Could not link: ${notFound}`)
    console.log(`   📊 Success rate: ${Math.round(linked / (linked + notFound) * 100)}%`)
    
    // Final verification
    console.log('\n📊 Verification...')
    const finalLinkedCount = await sanity.fetch(`count(*[_type == "product" && defined(manufacturer)])`)
    console.log(`🔗 Total products with manufacturers: ${finalLinkedCount}`)
    
  } catch (error) {
    console.error('❌ Failed to fix relationships:', error.message)
  }
}

if (require.main === module) {
  fixManufacturerRelationships()
} 