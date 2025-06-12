#!/usr/bin/env node

// Simple Webflow API test
const WEBFLOW_TOKEN = process.env.WEBFLOW_API_TOKEN
const SITE_ID = process.env.WEBFLOW_SITE_ID

async function testWebflowAPI() {
  console.log('🔍 Testing Webflow API connection...')
  console.log(`Site ID: ${SITE_ID}`)
  console.log(`Token: ${WEBFLOW_TOKEN ? WEBFLOW_TOKEN.substring(0, 10) + '...' : 'MISSING'}`)
  
  try {
    // Test basic site access
    const response = await fetch(`https://api.webflow.com/v2/sites/${SITE_ID}`, {
      headers: {
        'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    
    console.log(`Response status: ${response.status}`)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.log(`Error response: ${errorText}`)
      throw new Error(`API error: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log('✅ Successfully connected to Webflow API!')
    console.log(`Site name: ${data.site?.displayName || data.displayName}`)
    
    // Test collections access
    const collectionsResponse = await fetch(`https://api.webflow.com/v2/sites/${SITE_ID}/collections`, {
      headers: {
        'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    
    if (collectionsResponse.ok) {
      const collections = await collectionsResponse.json()
      console.log(`📋 Found ${collections.collections?.length || 0} collections`)
      if (collections.collections) {
        collections.collections.forEach(col => {
          console.log(`  - ${col.displayName} (${col.slug})`)
        })
      }
    } else {
      console.log(`⚠️  Collections access failed: ${collectionsResponse.statusText}`)
    }
    
  } catch (error) {
    console.error('❌ Webflow API test failed:', error.message)
    process.exit(1)
  }
}

testWebflowAPI() 