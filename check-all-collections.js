#!/usr/bin/env node

// Check ALL Webflow collections and item counts
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

async function getCollectionItemCount(collectionId) {
  let totalCount = 0
  let offset = 0
  const limit = 100
  let hasMore = true
  
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

async function checkAllCollections() {
  try {
    console.log('🔍 Checking ALL Webflow collections...')
    console.log('=' .repeat(80))
    
    // Get all collections
    const collectionsData = await webflowRequest(`/sites/${SITE_ID}/collections`)
    const collections = collectionsData.collections
    
    console.log(`📋 Found ${collections.length} total collections`)
    console.log('=' .repeat(80))
    
    let totalItems = 0
    const collectionSummary = []
    
    // Check each collection
    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i]
      console.log(`📁 [${i + 1}/${collections.length}] Checking: ${collection.displayName}...`)
      
      try {
        const itemCount = await getCollectionItemCount(collection.id)
        totalItems += itemCount
        
        collectionSummary.push({
          name: collection.displayName,
          slug: collection.slug,
          count: itemCount,
          id: collection.id
        })
        
        console.log(`   📄 ${itemCount} items`)
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}`)
        collectionSummary.push({
          name: collection.displayName,
          slug: collection.slug,
          count: 'ERROR',
          id: collection.id
        })
      }
    }
    
    // Summary
    console.log('\n' + '=' .repeat(80))
    console.log('📊 COMPLETE COLLECTION SUMMARY:')
    console.log('=' .repeat(80))
    
    // Sort by item count (descending)
    collectionSummary
      .filter(c => typeof c.count === 'number')
      .sort((a, b) => b.count - a.count)
      .forEach(collection => {
        console.log(`📁 ${collection.name.padEnd(30)} | ${String(collection.count).padStart(6)} items | ${collection.slug}`)
      })
    
    // Show collections with errors
    const errorCollections = collectionSummary.filter(c => c.count === 'ERROR')
    if (errorCollections.length > 0) {
      console.log('\n❌ Collections with errors:')
      errorCollections.forEach(collection => {
        console.log(`   ${collection.name} (${collection.slug})`)
      })
    }
    
    console.log('\n' + '=' .repeat(80))
    console.log(`🎯 TOTAL ITEMS ACROSS ALL COLLECTIONS: ${totalItems.toLocaleString()}`)
    console.log(`📁 TOTAL COLLECTIONS: ${collections.length}`)
    console.log('=' .repeat(80))
    
    if (totalItems > 0) {
      console.log('\n✅ Ready for COMPLETE migration!')
      console.log('💡 Run: export $(cat .env.local | xargs) && node webflow-complete-migration.js')
      console.log(`⏰ Estimated time: ${Math.ceil(totalItems / 50)} - ${Math.ceil(totalItems / 30)} minutes`)
    }
    
  } catch (error) {
    console.error('❌ Collection check failed:', error.message)
  }
}

checkAllCollections() 