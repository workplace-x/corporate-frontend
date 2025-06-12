#!/usr/bin/env node

// Test script to check total counts in Webflow collections
const WEBFLOW_TOKEN = process.env.WEBFLOW_API_TOKEN
const SITE_ID = process.env.WEBFLOW_SITE_ID

async function webflowRequest(endpoint) {
  const response = await fetch(`https://api.webflow.com/v2${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
  
  if (!response.ok) {
    throw new Error(`Webflow API error: ${response.statusText}`)
  }
  
  return response.json()
}

async function getCollectionItemCount(collectionId, collectionName) {
  let totalCount = 0
  let offset = 0
  const limit = 100
  let hasMore = true
  
  console.log(`📋 Counting items in "${collectionName}"...`)
  
  while (hasMore) {
    const response = await webflowRequest(`/collections/${collectionId}/items?limit=${limit}&offset=${offset}`)
    
    if (response.items && response.items.length > 0) {
      totalCount += response.items.length
      offset += response.items.length
      
      hasMore = response.items.length === limit
    } else {
      hasMore = false
    }
  }
  
  return totalCount
}

async function checkTotalCounts() {
  try {
    console.log('🔍 Checking total counts in all Webflow collections...')
    console.log('=' .repeat(60))
    
    // Get all collections
    const collectionsData = await webflowRequest(`/sites/${SITE_ID}/collections`)
    const collections = collectionsData.collections
    
    // Find key collections
    const employeeCollection = collections.find(c => 
      (c.slug && c.slug === 'team') ||
      (c.displayName && c.displayName.toLowerCase().includes('employee'))
    )
    
    const projectCollection = collections.find(c => 
      (c.slug && c.slug === 'projects') ||
      (c.displayName && c.displayName.toLowerCase().includes('project'))
    )
    
    let employeeCount = 0
    let projectCount = 0
    
    if (employeeCollection) {
      employeeCount = await getCollectionItemCount(employeeCollection.id, employeeCollection.displayName)
      console.log(`👥 Employees: ${employeeCount} total items`)
    }
    
    if (projectCollection) {
      projectCount = await getCollectionItemCount(projectCollection.id, projectCollection.displayName)
      console.log(`🏗️  Projects: ${projectCount} total items`)
    }
    
    console.log('=' .repeat(60))
    console.log(`📊 TOTAL ITEMS TO MIGRATE: ${employeeCount + projectCount}`)
    console.log('=' .repeat(60))
    
    if (employeeCount > 0 || projectCount > 0) {
      console.log('✅ Ready to run full migration!')
      console.log('💡 Run: export $(cat .env.local | xargs) && node webflow-api-migration.js')
    }
    
  } catch (error) {
    console.error('❌ Count check failed:', error.message)
  }
}

checkTotalCounts() 