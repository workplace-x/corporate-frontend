#!/usr/bin/env node

/**
 * Webflow Data Explorer
 * 
 * This script explores your Webflow data structure to help plan the migration:
 * - Lists all collections and their fields
 * - Shows sample data from each collection
 * - Identifies relationships and reference fields
 * - Helps plan the AI enhancement strategy
 */

class WebflowDataExplorer {
  constructor() {
    this.webflowToken = process.env.WEBFLOW_API_TOKEN
    this.siteId = process.env.WEBFLOW_SITE_ID
  }

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

  async getCollections() {
    const data = await this.webflowRequest(`/sites/${this.siteId}/collections`)
    return data.collections
  }

  async getCollectionItems(collectionId, limit = 3) {
    const response = await this.webflowRequest(`/collections/${collectionId}/items?limit=${limit}`)
    return response.items || []
  }

  async exploreAllCollections() {
    console.log('🔍 Exploring Webflow Data Structure...')
    console.log('=' .repeat(60))
    
    try {
      const collections = await this.getCollections()
      console.log(`📋 Found ${collections.length} collections:\n`)
      
      const explorationReport = {
        timestamp: new Date().toISOString(),
        collections: {}
      }
      
      for (const collection of collections) {
        console.log(`📦 ${collection.displayName || collection.name} (${collection.slug})`)
        console.log(`   ID: ${collection.id}`)
        
        try {
          const items = await this.getCollectionItems(collection.id)
          
          if (items.length > 0) {
            const sampleItem = items[0]
            const fieldData = sampleItem.fieldData
            
            if (fieldData) {
              console.log(`   Items: ${items.length}+ total`)
              console.log(`   Fields: ${Object.keys(fieldData).length}`)
              
              // Analyze field types
              const fieldAnalysis = this.analyzeFields(fieldData)
              
              console.log(`   Text fields: ${fieldAnalysis.textFields.length}`)
              console.log(`   Image fields: ${fieldAnalysis.imageFields.length}`)
              console.log(`   Reference fields: ${fieldAnalysis.referenceFields.length}`)
              console.log(`   Date fields: ${fieldAnalysis.dateFields.length}`)
              console.log(`   Number fields: ${fieldAnalysis.numberFields.length}`)
              
              // Show sample data
              console.log('\n   📄 Sample Item Structure:')
              this.displayFieldData(fieldData, '      ')
              
              // Store in report
              explorationReport.collections[collection.slug] = {
                displayName: collection.displayName || collection.name,
                id: collection.id,
                itemCount: items.length,
                sampleData: fieldData,
                fieldAnalysis: fieldAnalysis,
                enhancementOpportunities: this.identifyEnhancementOpportunities(fieldData)
              }
            }
          } else {
            console.log(`   No items found`)
          }
          
        } catch (itemError) {
          console.log(`   ❌ Error fetching items: ${itemError.message}`)
        }
        
        console.log('\n' + '-'.repeat(50) + '\n')
      }
      
      // Save detailed report
      await this.saveReport(explorationReport)
      
      // Generate migration recommendations
      this.generateMigrationRecommendations(explorationReport)
      
    } catch (error) {
      console.error('❌ Exploration failed:', error.message)
    }
  }

  analyzeFields(fieldData) {
    const analysis = {
      textFields: [],
      imageFields: [],
      referenceFields: [],
      dateFields: [],
      numberFields: [],
      unknownFields: []
    }
    
    for (const [key, value] of Object.entries(fieldData)) {
      if (typeof value === 'string') {
        if (this.isDateString(value)) {
          analysis.dateFields.push(key)
        } else {
          analysis.textFields.push(key)
        }
      } else if (typeof value === 'number') {
        analysis.numberFields.push(key)
      } else if (value && typeof value === 'object') {
        if (value.url && (value.url.includes('image') || value.url.includes('uploads'))) {
          analysis.imageFields.push(key)
        } else if (Array.isArray(value)) {
          analysis.referenceFields.push(key)
        } else {
          analysis.unknownFields.push(key)
        }
      }
    }
    
    return analysis
  }

  isDateString(str) {
    if (typeof str !== 'string') return false
    return !isNaN(Date.parse(str)) && str.includes('-')
  }

  displayFieldData(fieldData, indent = '') {
    for (const [key, value] of Object.entries(fieldData)) {
      if (typeof value === 'string') {
        const truncated = value.length > 80 ? value.substring(0, 80) + '...' : value
        console.log(`${indent}${key}: "${truncated}"`)
      } else if (typeof value === 'number') {
        console.log(`${indent}${key}: ${value}`)
      } else if (value && typeof value === 'object') {
        if (value.url) {
          console.log(`${indent}${key}: [IMAGE] ${value.url}`)
        } else if (Array.isArray(value)) {
          console.log(`${indent}${key}: [ARRAY] ${value.length} items`)
        } else {
          console.log(`${indent}${key}: [OBJECT] ${Object.keys(value).join(', ')}`)
        }
      } else {
        console.log(`${indent}${key}: ${value}`)
      }
    }
  }

  identifyEnhancementOpportunities(fieldData) {
    const opportunities = []
    
    for (const [key, value] of Object.entries(fieldData)) {
      if (typeof value === 'string') {
        if (!value || value.length < 10) {
          opportunities.push({
            field: key,
            type: 'missing-content',
            priority: 'high',
            description: 'Field is empty or too short'
          })
        } else if (value.length < 50 && (key.includes('description') || key.includes('bio'))) {
          opportunities.push({
            field: key,
            type: 'content-enhancement',
            priority: 'medium',
            description: 'Content could be expanded and enhanced'
          })
        }
        
        if (key.includes('description') || key.includes('bio') || key.includes('summary')) {
          opportunities.push({
            field: key,
            type: 'ai-enhancement',
            priority: 'medium',
            description: 'Professional writing improvement opportunity'
          })
        }
      }
      
      if (value && typeof value === 'object' && value.url && !value.alt) {
        opportunities.push({
          field: key,
          type: 'image-metadata',
          priority: 'high',
          description: 'Missing alt text and metadata'
        })
      }
    }
    
    return opportunities
  }

  async saveReport(report) {
    const fs = require('fs').promises
    const path = require('path')
    
    const reportPath = path.join(__dirname, 'webflow-data-exploration.json')
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2))
    console.log(`📝 Detailed report saved to: ${reportPath}`)
  }

  generateMigrationRecommendations(report) {
    console.log('\n🎯 Migration Strategy Recommendations:')
    console.log('=' .repeat(50))
    
    const collections = Object.values(report.collections)
    
    // Prioritize collections by enhancement potential
    const collectionsByPriority = collections.sort((a, b) => {
      return b.enhancementOpportunities.length - a.enhancementOpportunities.length
    })
    
    console.log('\n📊 Collection Priority for AI Enhancement:')
    collectionsByPriority.forEach((collection, index) => {
      const priority = index < 2 ? 'HIGH' : index < 4 ? 'MEDIUM' : 'LOW'
      console.log(`   ${index + 1}. ${collection.displayName} - ${priority} Priority`)
      console.log(`      ${collection.enhancementOpportunities.length} enhancement opportunities`)
      console.log(`      ${collection.fieldAnalysis.textFields.length} text fields, ${collection.fieldAnalysis.imageFields.length} images`)
    })
    
    console.log('\n🚀 Recommended Migration Order:')
    console.log('1. Start with PROJECTS collection (likely highest impact)')
    console.log('2. Follow with TEAM/EMPLOYEES (important for references)')
    console.log('3. Add PRODUCTS/PARTNERS for multi-reference tagging')
    console.log('4. Migrate remaining collections')
    
    console.log('\n💡 Key Opportunities Identified:')
    collections.forEach(collection => {
      if (collection.enhancementOpportunities.length > 0) {
        console.log(`\n   ${collection.displayName}:`)
        collection.enhancementOpportunities.forEach(opp => {
          console.log(`   - ${opp.field}: ${opp.description} (${opp.priority} priority)`)
        })
      }
    })
    
    console.log('\n🔗 Recommended Multi-Reference Strategy:')
    console.log('- Link projects to team members who worked on them')
    console.log('- Tag projects with featured products/furniture pieces')
    console.log('- Connect projects to relevant business partners')
    console.log('- Create categorization tags for better filtering')
  }

  async exploreSpecificCollection(collectionSlug) {
    console.log(`🔍 Deep Dive: ${collectionSlug} Collection`)
    console.log('=' .repeat(40))
    
    try {
      const collections = await this.getCollections()
      const collection = collections.find(c => c.slug === collectionSlug)
      
      if (!collection) {
        console.log('❌ Collection not found. Available collections:')
        collections.forEach(c => console.log(`   - ${c.slug}`))
        return
      }
      
      const items = await this.getCollectionItems(collection.id, 5) // Get more items
      
      console.log(`📦 ${collection.displayName}`)
      console.log(`   ID: ${collection.id}`)
      console.log(`   Items found: ${items.length}`)
      
      items.forEach((item, index) => {
        console.log(`\n📄 Item ${index + 1}:`)
        if (item.fieldData) {
          this.displayFieldData(item.fieldData, '   ')
        }
        console.log('   ---')
      })
      
    } catch (error) {
      console.error('❌ Deep dive failed:', error.message)
    }
  }
}

// ==========================================
// MAIN EXECUTION
// ==========================================

async function main() {
  const explorer = new WebflowDataExplorer()
  
  const args = process.argv.slice(2)
  const command = args[0]
  
  // Check environment variables
  if (!process.env.WEBFLOW_API_TOKEN || !process.env.WEBFLOW_SITE_ID) {
    console.error('❌ Missing environment variables:')
    console.error('   WEBFLOW_API_TOKEN and WEBFLOW_SITE_ID are required')
    process.exit(1)
  }
  
  try {
    if (command) {
      // Explore specific collection
      await explorer.exploreSpecificCollection(command)
    } else {
      // Explore all collections
      await explorer.exploreAllCollections()
    }
    
    console.log('\n🎉 Exploration complete!')
    console.log('\nNext steps:')
    console.log('1. Review the generated report: webflow-data-exploration.json')
    console.log('2. Explore specific collections: node webflow-data-explorer.js projects')
    console.log('3. Plan your migration strategy based on the recommendations')
    
  } catch (error) {
    console.error('❌ Exploration failed:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = WebflowDataExplorer 