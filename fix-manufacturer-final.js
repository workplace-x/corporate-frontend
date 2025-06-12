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

async function fixManufacturersFinal() {
  console.log('🔗 FINAL FIX: Manufacturer → Product Relationships')
  console.log('=' .repeat(60))
  
  const migration = new AIEnhancedMigration()
  
  try {
    // 1. Get all Sanity manufacturers (name to ID mapping)
    console.log('📋 Getting Sanity manufacturers...')
    const sanityManufacturers = await sanity.fetch(`
      *[_type == "manufacturer"]{_id, name, slug}
    `)
    
    const nameToSanityId = new Map()
    sanityManufacturers.forEach(mfg => {
      // Try multiple name variations
      const cleanName = mfg.name.toLowerCase().trim()
      nameToSanityId.set(cleanName, mfg._id)
      nameToSanityId.set(mfg.name, mfg._id) // exact case
      nameToSanityId.set(mfg.name.toLowerCase(), mfg._id)
    })
    
    console.log(`🏭 Found ${sanityManufacturers.length} Sanity manufacturers`)
    
    // 2. Get Webflow MANUFACTURERS collection (not Partners!)
    console.log('📋 Getting Webflow manufacturers from MANUFACTURERS collection...')
    const collections = await migration.getCollections()
    const manufacturersCollection = collections.find(c => 
      c.displayName === 'Manufacturers' || c.slug === 'manufacturers'
    )
    
    if (!manufacturersCollection) {
      throw new Error('Manufacturers collection not found')
    }

    const webflowManufacturers = await migration.getCollectionItems(manufacturersCollection.id)
    
    // Create ID to name mapping from Webflow data
    const webflowIdToName = new Map()
    webflowManufacturers.forEach(mfg => {
      if (mfg.id && mfg.fieldData.name) {
        webflowIdToName.set(mfg.id, mfg.fieldData.name)
      }
    })
    
    console.log(`📦 Found ${webflowIdToName.size} Webflow manufacturer mappings`)
    
    // 3. Get Webflow products for name-to-manufacturer mapping
    console.log('📋 Getting Webflow products for manufacturer mapping...')
    const webflowProductsCollection = collections.find(c => 
      c.displayName === 'Featured Products' || c.slug === 'featured-products'
    )
    
    if (!webflowProductsCollection) {
      throw new Error('Featured Products collection not found')
    }
    
    const webflowProducts = await migration.getCollectionItems(webflowProductsCollection.id)
    
    // Create mapping of product names to manufacturer names
    const productToManufacturerNameMap = new Map()
    webflowProducts.forEach(product => {
      if (product.fieldData.name && product.fieldData.manufacturer) {
        const webflowManufacturerId = product.fieldData.manufacturer
        const manufacturerName = webflowIdToName.get(webflowManufacturerId)
        
        if (manufacturerName) {
          productToManufacturerNameMap.set(
            product.fieldData.name.toLowerCase().trim(),
            manufacturerName
          )
        }
      }
    })
    
    console.log(`🔗 Created ${productToManufacturerNameMap.size} product → manufacturer name mappings`)
    
    // 4. Get products that need manufacturer relationships
    console.log('📦 Getting products without manufacturers...')
    const productsWithoutManufacturers = await sanity.fetch(`
      *[_type == "product" && !defined(manufacturer)]{
        _id,
        title
      }
    `)
    
    console.log(`📦 Found ${productsWithoutManufacturers.length} products needing manufacturer links`)
    console.log('\n🔗 Starting relationship fixes...')
    
    let linked = 0
    let notFound = 0
    let errors = 0
    
    for (const product of productsWithoutManufacturers) {
      try {
        const productNameKey = product.title.toLowerCase().trim()
        const manufacturerName = productToManufacturerNameMap.get(productNameKey)
        
        if (manufacturerName) {
          // Try to find the manufacturer in Sanity by name variations
          let sanityManufacturerId = null
          
          // Try exact name match
          sanityManufacturerId = nameToSanityId.get(manufacturerName)
          if (!sanityManufacturerId) {
            sanityManufacturerId = nameToSanityId.get(manufacturerName.toLowerCase())
          }
          if (!sanityManufacturerId) {
            sanityManufacturerId = nameToSanityId.get(manufacturerName.toLowerCase().trim())
          }
          
          if (sanityManufacturerId) {
            // Update the product with the manufacturer reference
            await sanity.patch(product._id).set({
              manufacturer: {
                _type: 'reference',
                _ref: sanityManufacturerId
              }
            }).commit()
            
            linked++
            if (linked <= 10) { // Show first 10 for progress
              console.log(`   ✅ Linked "${product.title}" → "${manufacturerName}"`)
            } else if (linked % 50 === 0) {
              console.log(`   ✅ Linked ${linked} products so far...`)
            }
          } else {
            if (notFound < 5) { // Show first 5 missing
              console.log(`   ⚠️ Manufacturer "${manufacturerName}" not found in Sanity`)
            }
            notFound++
          }
        } else {
          notFound++
        }
        
        // Rate limiting
        if ((linked + notFound + errors) % 50 === 0) {
          await new Promise(resolve => setTimeout(resolve, 500))
        }
        
      } catch (error) {
        errors++
        if (errors < 5) {
          console.error(`   ❌ Error linking ${product.title}:`, error.message)
        }
      }
    }
    
    console.log('\n🎉 Relationship Fixing Complete!')
    console.log(`   ✅ Successfully linked: ${linked}`)
    console.log(`   ⚠️ Could not link: ${notFound}`)
    console.log(`   ❌ Errors: ${errors}`)
    console.log(`   📊 Success rate: ${Math.round(linked / productsWithoutManufacturers.length * 100)}%`)
    
    // Final verification
    console.log('\n📊 Final Verification...')
    const totalLinkedProducts = await sanity.fetch(`
      count(*[_type == "product" && defined(manufacturer)])
    `)
    
    const totalProducts = await sanity.fetch(`count(*[_type == "product"])`)
    const linkageRate = Math.round(totalLinkedProducts / totalProducts * 100)
    
    console.log(`🔗 Products with manufacturers: ${totalLinkedProducts}/${totalProducts} (${linkageRate}%)`)
    
    if (totalLinkedProducts > 0) {
      console.log('\n🎉 SUCCESS! Manufacturer relationships have been restored!')
      console.log('   🚀 Your Webflow AI sync is now complete!')
      console.log('   📊 Run: node enhanced-progress-monitor.js to see final stats')
    } else {
      console.log('\n⚠️ Still no relationships linked. Need further investigation.')
    }
    
  } catch (error) {
    console.error('❌ Failed to fix manufacturer relationships:', error.message)
    throw error
  }
}

if (require.main === module) {
  fixManufacturersFinal()
}

module.exports = fixManufacturersFinal 