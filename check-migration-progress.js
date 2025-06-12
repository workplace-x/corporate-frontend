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

async function checkProgress() {
  try {
    console.log('📊 Checking Migration Progress...')
    console.log('=' .repeat(40))
    
    const manufacturerCount = await sanity.fetch(`count(*[_type == "manufacturer"])`)
    const verticalMarketCount = await sanity.fetch(`count(*[_type == "verticalMarket"])`)
    const productCount = await sanity.fetch(`count(*[_type == "product"])`)
    const projectCount = await sanity.fetch(`count(*[_type == "project"])`)
    const teamMemberCount = await sanity.fetch(`count(*[_type == "teamMember"])`)
    
    console.log('🏭 Manufacturers:', manufacturerCount)
    console.log('🏢 Vertical Markets:', verticalMarketCount) 
    console.log('📦 Products:', productCount)
    console.log('🏗️  Projects:', projectCount)
    console.log('👥 Team Members:', teamMemberCount)
    
    console.log('\n📈 Migration Status:')
    if (manufacturerCount > 0) {
      console.log(`✅ Manufacturer migration: ${manufacturerCount}/85 complete`)
      
      // Show recent manufacturers
      const recentManufacturers = await sanity.fetch(`
        *[_type == "manufacturer"] | order(_createdAt desc)[0..4] {
          name,
          "qualityScore": enhancementMetrics.qualityScore,
          _createdAt
        }
      `)
      
      console.log('\n🏭 Recently Created:')
      recentManufacturers.forEach(m => {
        const time = new Date(m._createdAt).toLocaleTimeString()
        console.log(`   ${m.name} (${Math.round(m.qualityScore)}%) - ${time}`)
      })
    } else {
      console.log('⏳ Manufacturer migration starting...')
    }
    
  } catch (error) {
    console.error('❌ Error checking progress:', error.message)
  }
}

if (require.main === module) {
  checkProgress()
} 