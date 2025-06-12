#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const { createClient } = require('@sanity/client')

const sanity = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

async function enhancedProgressMonitor() {
  try {
    console.log('📊 Enhanced Migration Progress Monitor')
    console.log('=' .repeat(50))
    
    // Get all content type counts
    const [
      manufacturerCount,
      verticalMarketCount,
      productCategoryCount,
      productCount,
      projectCount,
      teamMemberCount,
      partnerCount
    ] = await Promise.all([
      sanity.fetch(`count(*[_type == "manufacturer"])`),
      sanity.fetch(`count(*[_type == "verticalMarket"])`),
      sanity.fetch(`count(*[_type == "productCategory"])`),
      sanity.fetch(`count(*[_type == "product"])`),
      sanity.fetch(`count(*[_type == "project"])`),
      sanity.fetch(`count(*[_type == "teamMember"])`),
      sanity.fetch(`count(*[_type == "partner"])`)
    ])
    
    // Expected totals from Webflow analysis
    const expected = {
      manufacturers: 85,
      verticalMarkets: 16, // estimated from analysis
      productCategories: 26,
      products: 986,
      projects: 166,
      teamMembers: 352 // existing
    }
    
    console.log('📈 Migration Status Overview:')
    console.log(`🏭 Manufacturers:     ${manufacturerCount}/${expected.manufacturers} (${Math.round(manufacturerCount/expected.manufacturers*100)}%)`)
    console.log(`🏢 Vertical Markets:  ${verticalMarketCount}/${expected.verticalMarkets} (${Math.round(verticalMarketCount/expected.verticalMarkets*100)}%)`)
    console.log(`📂 Product Categories: ${productCategoryCount}/${expected.productCategories} (${Math.round(productCategoryCount/expected.productCategories*100)}%)`)
    console.log(`📦 Products:          ${productCount}/${expected.products} (${Math.round(productCount/expected.products*100)}%)`)
    console.log(`🏗️  Projects:          ${projectCount}/${expected.projects} (${Math.round(projectCount/expected.projects*100)}%)`)
    console.log(`👥 Team Members:      ${teamMemberCount} (preserved)`)
    console.log(`🤝 Partners:          ${partnerCount} (legacy)`)
    
    // Calculate overall progress
    const totalExpected = expected.manufacturers + expected.verticalMarkets + 
                         expected.productCategories + expected.products + expected.projects
    const totalMigrated = manufacturerCount + verticalMarketCount + 
                         productCategoryCount + productCount + projectCount
    const overallProgress = Math.round(totalMigrated / totalExpected * 100)
    
    console.log(`\n🎯 Overall Progress: ${totalMigrated}/${totalExpected} (${overallProgress}%)`)
    
    // Show recent activity for active migrations
    if (manufacturerCount > 0) {
      console.log('\n🏭 Recent Manufacturers:')
      const recentManufacturers = await sanity.fetch(`
        *[_type == "manufacturer"] | order(_createdAt desc)[0..4] {
          name,
          "qualityScore": enhancementMetrics.qualityScore,
          _createdAt
        }
      `)
      
      recentManufacturers.forEach(m => {
        const time = new Date(m._createdAt).toLocaleTimeString()
        const quality = Math.round(m.qualityScore || 0)
        console.log(`   • ${m.name} (${quality}%) - ${time}`)
      })
    }
    
    if (verticalMarketCount > 0) {
      console.log('\n🏢 Recent Vertical Markets:')
      const recentMarkets = await sanity.fetch(`
        *[_type == "verticalMarket"] | order(_createdAt desc)[0..3] {
          name,
          "sections": count(sections),
          "qualityScore": enhancementMetrics.qualityScore,
          _createdAt
        }
      `)
      
      recentMarkets.forEach(m => {
        const time = new Date(m._createdAt).toLocaleTimeString()
        const quality = Math.round(m.qualityScore || 0)
        console.log(`   • ${m.name} (${m.sections} sections, ${quality}%) - ${time}`)
      })
    }
    
    if (productCount > 0) {
      console.log('\n📦 Recent Products:')
      const recentProducts = await sanity.fetch(`
        *[_type == "product"] | order(_createdAt desc)[0..3] {
          title,
          "manufacturer": manufacturer->name,
          "qualityScore": enhancementMetrics.qualityScore,
          _createdAt
        }
      `)
      
      recentProducts.forEach(p => {
        const time = new Date(p._createdAt).toLocaleTimeString()
        const quality = Math.round(p.qualityScore || 0)
        const mfg = p.manufacturer || 'No manufacturer'
        console.log(`   • ${p.title} (${mfg}, ${quality}%) - ${time}`)
      })
    }
    
    // Migration phase recommendations
    console.log('\n🚀 Next Steps:')
    
    if (manufacturerCount < expected.manufacturers) {
      const remaining = expected.manufacturers - manufacturerCount
      const estimatedTime = Math.ceil(remaining * 1.5 / 60) // 1.5 minutes per manufacturer
      console.log(`   1. ⏳ Continue manufacturer migration (${remaining} remaining, ~${estimatedTime} min)`)
    } else {
      console.log(`   ✅ Manufacturers complete`)
    }
    
    if (manufacturerCount >= expected.manufacturers && productCategoryCount === 0) {
      console.log(`   2. 🚀 Ready to start product categories (fast: ~15 minutes)`)
      console.log(`      Run: node ai-enhanced-migration.js product-categories`)
    }
    
    if (productCategoryCount >= expected.productCategories && verticalMarketCount === 0) {
      console.log(`   3. 🚀 Ready to start vertical markets (~45 minutes)`)
      console.log(`      Run: node ai-enhanced-migration.js vertical-markets`)
    }
    
    if (manufacturerCount >= expected.manufacturers && productCount === 0) {
      console.log(`   4. 🚀 Ready to start products migration (~3-4 hours)`)
      console.log(`      Run: node ai-enhanced-migration.js products`)
    }
    
    if (productCount >= expected.products && projectCount < expected.projects) {
      console.log(`   5. 🚀 Ready to enhance projects (~1 hour)`)
      console.log(`      Run: node ai-enhanced-migration.js projects`)
    }
    
    if (overallProgress >= 100) {
      console.log(`   🎉 MIGRATION COMPLETE! All content types migrated successfully!`)
    }
    
    // Quality analytics
    if (manufacturerCount > 0 || productCount > 0) {
      console.log('\n📊 Quality Analytics:')
      
      if (manufacturerCount > 0) {
        const avgManufacturerQuality = await sanity.fetch(`
          math::avg(*[_type == "manufacturer"].enhancementMetrics.qualityScore)
        `)
        console.log(`   🏭 Avg Manufacturer Quality: ${Math.round(avgManufacturerQuality)}%`)
      }
      
      if (productCount > 0) {
        const avgProductQuality = await sanity.fetch(`
          math::avg(*[_type == "product"].enhancementMetrics.qualityScore)
        `)
        console.log(`   📦 Avg Product Quality: ${Math.round(avgProductQuality)}%`)
      }
      
      if (verticalMarketCount > 0) {
        const avgMarketQuality = await sanity.fetch(`
          math::avg(*[_type == "verticalMarket"].enhancementMetrics.qualityScore)
        `)
        console.log(`   🏢 Avg Market Quality: ${Math.round(avgMarketQuality)}%`)
      }
    }
    
    // Relationship analytics
    if (productCount > 0 && manufacturerCount > 0) {
      console.log('\n🔗 Relationship Analytics:')
      
      const productsWithManufacturers = await sanity.fetch(`
        count(*[_type == "product" && defined(manufacturer)])
      `)
      
      const manufacturerCoverage = Math.round(productsWithManufacturers / productCount * 100)
      console.log(`   📦→🏭 Products with manufacturers: ${productsWithManufacturers}/${productCount} (${manufacturerCoverage}%)`)
    }
    
    console.log('\n' + '=' .repeat(50))
    console.log('💡 Tip: Run this monitor anytime with: node enhanced-progress-monitor.js')
    
  } catch (error) {
    console.error('❌ Error monitoring progress:', error.message)
  }
}

if (require.main === module) {
  enhancedProgressMonitor()
}

module.exports = { enhancedProgressMonitor } 