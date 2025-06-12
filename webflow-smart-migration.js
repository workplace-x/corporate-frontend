#!/usr/bin/env node

/**
 * SMART Webflow API → Sanity Migration
 * 
 * Handles reference dependencies by migrating in proper order:
 * 1️⃣ First: Reference collections (categories, business units, etc.)
 * 2️⃣ Then: Collections that reference them (products, projects, etc.) 
 * 3️⃣ Graceful handling of missing references
 */

const { createClient } = require('@sanity/client')

// Sanity client
const sanity = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

class WebflowSmartMigration {
  constructor() {
    this.webflowToken = process.env.WEBFLOW_API_TOKEN
    this.siteId = process.env.WEBFLOW_SITE_ID
    this.stats = {
      collections: 0,
      totalItems: 0,
      successfulItems: 0,
      failedItems: 0,
      skippedItems: 0,
      imageFailures: 0,
      referencesSkipped: 0
    }
    
    // Define migration order - reference targets first
    this.migrationOrder = [
      // Phase 1: Reference collections (no dependencies)
      'business-units', 'service', 'departments', 'department', 'locations', 
      'vertical-markets', 'project-industry', 'project-category', 'category',
      'blog-categories', 'blog-tags', 'product-categories', 'manufacturers',
      'partners', 'event-type', 'rendering-categories',
      
      // Phase 2: Content collections (may reference Phase 1)
      'team', 'projects', 'blog', 'products', 'sku', 'events', 'podcast',
      'magazine', 'internal-videos', 'files-pdfs', 'issuu-publication',
      'tangram-services', 'spaces', 'microsite', 'frames', 'featured-image',
      'renderings', 'instagram-photos', 'philanthropy',
      
      // Phase 3: Complex collections (may reference Phase 1 & 2)
      'featured-products', 'wfh-childrens', 'client-list', 'featured-guest',
      'service-links', 'hello', 'intro-packages'
    ]
  }

  // Webflow API helper
  async webflowRequest(endpoint) {
    const response = await fetch(`https://api.webflow.com/v2${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${this.webflowToken}`,
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) {
      throw new Error(`Webflow API error: ${response.statusText}`)
    }
    
    return response.json()
  }

  // Get all collections from Webflow
  async getCollections() {
    const data = await this.webflowRequest(`/sites/${this.siteId}/collections`)
    return data.collections
  }

  // Get ALL items from a collection with pagination
  async getCollectionItems(collectionId) {
    let allItems = []
    let offset = 0
    const limit = 100
    let hasMore = true
    
    while (hasMore) {
      const response = await this.webflowRequest(`/collections/${collectionId}/items?limit=${limit}&offset=${offset}`)
      
      if (response.items && response.items.length > 0) {
        allItems = allItems.concat(response.items)
        offset += response.items.length
        hasMore = response.items.length === limit
      } else {
        hasMore = false
      }
    }
    
    return allItems
  }

  // Create a Sanity slug from any string
  createSlug(text) {
    if (!text) return 'unnamed-item'
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 96)
  }

  // Map Webflow collection to Sanity document type
  mapToSanityType(webflowCollection) {
    const slug = webflowCollection.slug
    
    // Map specific collections to existing Sanity types
    const typeMap = {
      'team': 'teamMember',
      'projects': 'project',
      'blog': 'post',
      'products': 'product',
      'events': 'event',
      'podcast': 'podcast',
      'partners': 'partner',
      'locations': 'location'
    }
    
    return typeMap[slug] || `webflow_${slug.replace(/-/g, '_')}`
  }

  // Process image with error handling
  async processImage(imageData, baseName, fieldName = 'image') {
    if (!imageData || !imageData.url) return null

    try {
      const asset = await sanity.assets.upload('image', imageData.url, {
        filename: `${baseName}-${fieldName}.jpg`
      })
      
      return {
        _type: 'image',
        asset: { _ref: asset._id, _type: 'reference' },
        alt: imageData.alt || `${baseName} ${fieldName}`
      }
    } catch (error) {
      this.stats.imageFailures++
      console.warn(`   ⚠️  Image upload failed (${fieldName}): ${error.message}`)
      return null
    }
  }

  // Transform HTML to Sanity blocks
  async transformRichText(htmlContent) {
    if (!htmlContent || typeof htmlContent !== 'string') return null
    
    const cleanText = htmlContent.replace(/<[^>]*>/g, '').trim()
    if (!cleanText) return null
    
    return [
      {
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: Math.random().toString(36).substr(2, 9),
            text: cleanText,
            marks: []
          }
        ]
      }
    ]
  }

  // Check if a reference exists in Sanity
  async checkReferenceExists(webflowId) {
    try {
      const existing = await sanity.fetch(
        `*[webflowId == $webflowId][0]._id`,
        { webflowId }
      )
      return existing || null
    } catch (error) {
      return null
    }
  }

  // Process references safely
  async processReferences(referenceIds) {
    if (!Array.isArray(referenceIds)) return []
    
    const validReferences = []
    
    for (const webflowId of referenceIds) {
      if (typeof webflowId === 'string' && webflowId.length === 24) {
        const sanityId = await this.checkReferenceExists(webflowId)
        if (sanityId) {
          validReferences.push({ _ref: sanityId, _type: 'reference' })
        } else {
          this.stats.referencesSkipped++
          console.warn(`   ⚠️  Skipping reference to non-existent document: ${webflowId}`)
        }
      }
    }
    
    return validReferences
  }

  // Process any Webflow item to Sanity document (with safe references)
  async processWebflowItem(webflowItem, sanityType, collectionName) {
    const fieldData = webflowItem.fieldData || {}
    
    // Create slug from name field or fallback
    const nameField = fieldData.name || fieldData.title || fieldData.slug || `item-${webflowItem.id}`
    const slug = fieldData.slug || this.createSlug(nameField)
    
    // Check if already exists
    const existing = await sanity.fetch(
      `*[_type == $type && slug.current == $slug][0]`,
      { type: sanityType, slug }
    )
    
    if (existing) {
      this.stats.skippedItems++
      return { status: 'skipped', reason: 'already exists' }
    }

    // Base Sanity document
    const sanityDoc = {
      _type: sanityType,
      slug: { _type: 'slug', current: slug },
      
      // Preserve original Webflow data for reference tracking
      webflowId: webflowItem.id,
      webflowCollectionId: webflowItem.cmsLocaleId,
      webflowUpdated: webflowItem.lastUpdated,
      isArchived: webflowItem.isArchived || false,
      isDraft: webflowItem.isDraft || false,
      lastSynced: new Date().toISOString()
    }

    // Process all fields from fieldData
    for (const [fieldName, fieldValue] of Object.entries(fieldData)) {
      if (!fieldValue) continue

      // Handle different field types
      if (fieldName === 'slug') {
        // Already handled above
        continue
      } else if (fieldName.includes('image') || fieldName === 'logo' || fieldName === 'avatar' || fieldName === 'photo') {
        // Handle image fields
        if (fieldValue.url) {
          const imageResult = await this.processImage(fieldValue, slug, fieldName)
          if (imageResult) {
            sanityDoc[fieldName] = imageResult
          }
        }
      } else if (Array.isArray(fieldValue)) {
        // Handle arrays - check if they're references
        if (fieldValue.length > 0 && typeof fieldValue[0] === 'string' && fieldValue[0].length === 24) {
          // Looks like Webflow reference IDs - process safely
          const validReferences = await this.processReferences(fieldValue)
          if (validReferences.length > 0) {
            sanityDoc[fieldName] = validReferences
          }
        } else {
          sanityDoc[fieldName] = fieldValue
        }
      } else if (typeof fieldValue === 'string' && fieldValue.includes('<')) {
        // Looks like HTML content
        const blocks = await this.transformRichText(fieldValue)
        if (blocks) {
          sanityDoc[fieldName] = blocks
        }
      } else if (typeof fieldValue === 'object' && fieldValue.url) {
        // Handle embedded objects like files or assets
        if (fieldValue.url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
          // It's an image
          const imageResult = await this.processImage(fieldValue, slug, fieldName)
          if (imageResult) {
            sanityDoc[fieldName] = imageResult
          }
        } else {
          // It's a file or other asset
          sanityDoc[fieldName] = fieldValue
        }
      } else if (typeof fieldValue === 'string' && fieldValue.length === 24) {
        // Single reference - check if it exists
        const sanityId = await this.checkReferenceExists(fieldValue)
        if (sanityId) {
          sanityDoc[fieldName] = { _ref: sanityId, _type: 'reference' }
        } else {
          this.stats.referencesSkipped++
          console.warn(`   ⚠️  Skipping reference field ${fieldName}: ${fieldValue}`)
        }
      } else {
        // Handle primitive values
        sanityDoc[fieldName] = fieldValue
      }
    }

    // Create in Sanity
    try {
      const result = await sanity.create(sanityDoc)
      this.stats.successfulItems++
      return { status: 'success', sanityId: result._id }
    } catch (error) {
      this.stats.failedItems++
      throw error
    }
  }

  // Migrate collections in dependency order
  async migrateAllCollectionsSmart() {
    console.log('🧠 Starting SMART Webflow → Sanity Migration...')
    console.log('📋 Fetching all collections...')
    
    const allCollections = await this.getCollections()
    this.stats.collections = allCollections.length
    
    console.log(`🎯 Found ${allCollections.length} collections`)
    console.log('📐 Organizing by dependency order...')
    
    // Create lookup map
    const collectionMap = new Map()
    allCollections.forEach(col => {
      collectionMap.set(col.slug, col)
    })
    
    // Order collections by dependency
    const orderedCollections = []
    
    // Add collections in migration order
    for (const slug of this.migrationOrder) {
      if (collectionMap.has(slug)) {
        orderedCollections.push(collectionMap.get(slug))
        collectionMap.delete(slug)
      }
    }
    
    // Add any remaining collections at the end
    for (const [slug, collection] of collectionMap) {
      orderedCollections.push(collection)
    }
    
    console.log('🚀 Starting migration in dependency order...')
    console.log('=' .repeat(80))

    // Process each collection in order
    for (let i = 0; i < orderedCollections.length; i++) {
      const collection = orderedCollections[i]
      const sanityType = this.mapToSanityType(collection)
      
      console.log(`\n📁 [${i + 1}/${orderedCollections.length}] Processing: ${collection.displayName || collection.name}`)
      console.log(`   📝 Webflow slug: ${collection.slug}`)
      console.log(`   🏷️  Sanity type: ${sanityType}`)
      
      try {
        // Get all items from this collection
        console.log(`   📥 Fetching items...`)
        const items = await this.getCollectionItems(collection.id)
        console.log(`   📄 Found ${items.length} items`)
        
        if (items.length === 0) {
          console.log(`   ⏭️  Skipping empty collection`)
          continue
        }
        
        this.stats.totalItems += items.length
        
        // Process each item
        let collectionSuccess = 0
        let collectionFailed = 0
        
        for (let j = 0; j < items.length; j++) {
          const item = items[j]
          const itemName = item.fieldData?.name || item.fieldData?.title || `Item ${j + 1}`
          
          try {
            const result = await this.processWebflowItem(item, sanityType, collection.displayName)
            
            if (result.status === 'success') {
              collectionSuccess++
              console.log(`   ✅ [${j + 1}/${items.length}] ${itemName}`)
            } else if (result.status === 'skipped') {
              console.log(`   ⏭️  [${j + 1}/${items.length}] ${itemName} (already exists)`)
            }
          } catch (error) {
            collectionFailed++
            console.error(`   ❌ [${j + 1}/${items.length}] ${itemName}: ${error.message}`)
          }
        }
        
        console.log(`   📊 Collection Summary: ✅ ${collectionSuccess} success, ❌ ${collectionFailed} failed, ⏭️ ${items.length - collectionSuccess - collectionFailed} skipped`)
        
      } catch (error) {
        console.error(`   ❌ Collection failed: ${error.message}`)
      }
    }
    
    // Final summary
    console.log('\n' + '=' .repeat(80))
    console.log('🎉 SMART MIGRATION FINISHED!')
    console.log('📊 Final Statistics:')
    console.log(`   📁 Collections processed: ${this.stats.collections}`)
    console.log(`   📄 Total items found: ${this.stats.totalItems}`)
    console.log(`   ✅ Successfully migrated: ${this.stats.successfulItems}`)
    console.log(`   ❌ Failed: ${this.stats.failedItems}`)
    console.log(`   ⏭️  Skipped (already exist): ${this.stats.skippedItems}`)
    console.log(`   🖼️  Image upload failures: ${this.stats.imageFailures}`)
    console.log(`   🔗 References skipped (missing): ${this.stats.referencesSkipped}`)
    console.log('=' .repeat(80))
  }
}

// Main execution
async function main() {
  const migration = new WebflowSmartMigration()
  
  try {
    await migration.migrateAllCollectionsSmart()
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { WebflowSmartMigration } 