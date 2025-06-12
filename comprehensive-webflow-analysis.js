#!/usr/bin/env node

/**
 * Comprehensive Webflow Collections Analysis
 * 
 * Analyzes ALL Webflow collections to:
 * - Identify content and structure
 * - Find AI enhancement opportunities 
 * - Map to Sanity schemas
 * - Recommend migration priorities
 * - Suggest new schemas needed
 */

const fs = require('fs').promises
const path = require('path')

const WEBFLOW_TOKEN = process.env.WEBFLOW_API_TOKEN || 'd6d5120f1545c3d29216cd753c5406b0f40f2d7f0c5c112f5b5b3f4299e5cb58'
const SITE_ID = process.env.WEBFLOW_SITE_ID || '5d4c9442574a7829f9d4809f'

class ComprehensiveWebflowAnalysis {
  constructor() {
    this.analysisReport = {
      timestamp: new Date().toISOString(),
      totalCollections: 0,
      collections: {},
      schemaRecommendations: {},
      migrationPriorities: [],
      enhancementOpportunities: [],
      newSchemasNeeded: []
    }
  }

  async webflowRequest(endpoint) {
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

  async getAllCollections() {
    const data = await this.webflowRequest(`/sites/${SITE_ID}/collections`)
    return data.collections || []
  }

  async getCollectionItems(collectionId, limit = 3) {
    try {
      const response = await this.webflowRequest(`/collections/${collectionId}/items?limit=${limit}`)
      return response.items || []
    } catch (error) {
      console.warn(`⚠️  Failed to get items for collection ${collectionId}: ${error.message}`)
      return []
    }
  }

  analyzeFieldStructure(fieldData) {
    const analysis = {
      textFields: [],
      imageFields: [],
      referenceFields: [],
      dateFields: [],
      numberFields: [],
      booleanFields: [],
      urlFields: [],
      emailFields: [],
      phoneFields: [],
      richTextFields: [],
      unknownFields: []
    }

    for (const [key, value] of Object.entries(fieldData)) {
      if (typeof value === 'string') {
        if (this.isDateString(value)) {
          analysis.dateFields.push(key)
        } else if (this.isUrl(value)) {
          analysis.urlFields.push(key)
        } else if (this.isEmail(value)) {
          analysis.emailFields.push(key)
        } else if (this.isPhone(value)) {
          analysis.phoneFields.push(key)
        } else if (this.isRichText(value)) {
          analysis.richTextFields.push(key)
        } else {
          analysis.textFields.push(key)
        }
      } else if (typeof value === 'number') {
        analysis.numberFields.push(key)
      } else if (typeof value === 'boolean') {
        analysis.booleanFields.push(key)
      } else if (value && typeof value === 'object') {
        if (value.url && (value.url.includes('image') || value.url.includes('uploads') || value.fileId)) {
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

  isUrl(str) {
    if (typeof str !== 'string') return false
    return str.startsWith('http') || str.startsWith('www.')
  }

  isEmail(str) {
    if (typeof str !== 'string') return false
    return str.includes('@') && str.includes('.')
  }

  isPhone(str) {
    if (typeof str !== 'string') return false
    return /[\d\-\(\)\+\s]{10,}/.test(str) && str.length < 20
  }

  isRichText(str) {
    if (typeof str !== 'string') return false
    return str.includes('<p>') || str.includes('<div>') || str.includes('<h')
  }

  calculateEnhancementPotential(fieldAnalysis, sampleData) {
    let totalFields = 0
    let enhanceable = 0

    // Text fields that could be enhanced
    fieldAnalysis.textFields.forEach(field => {
      totalFields++
      const value = sampleData[field]
      if (!value || value.length < 50 || (field.includes('description') || field.includes('bio'))) {
        enhanceable++
      }
    })

    // Rich text fields that could be enhanced
    fieldAnalysis.richTextFields.forEach(field => {
      totalFields++
      enhanceable++ // Rich text can almost always be enhanced
    })

    // Images that need alt text
    fieldAnalysis.imageFields.forEach(field => {
      totalFields++
      const value = sampleData[field]
      if (!value?.alt) {
        enhanceable++
      }
    })

    return totalFields > 0 ? Math.round((enhanceable / totalFields) * 100) : 0
  }

  identifyEnhancementOpportunities(collectionName, fieldAnalysis, sampleData) {
    const opportunities = []

    // Text enhancement opportunities
    fieldAnalysis.textFields.forEach(field => {
      const value = sampleData[field]
      if (!value || value.length < 10) {
        opportunities.push({
          type: 'missing-content',
          field: field,
          priority: 'high',
          description: 'Generate missing content with AI'
        })
      } else if (value.length < 100 && (field.includes('description') || field.includes('summary'))) {
        opportunities.push({
          type: 'content-expansion',
          field: field,
          priority: 'medium',
          description: 'Expand and enhance content'
        })
      }

      if (field.includes('description') || field.includes('bio') || field.includes('summary')) {
        opportunities.push({
          type: 'professional-writing',
          field: field,
          priority: 'medium',
          description: 'AI writing improvement for professional tone'
        })
      }
    })

    // Rich text opportunities
    fieldAnalysis.richTextFields.forEach(field => {
      opportunities.push({
        type: 'rich-text-enhancement',
        field: field,
        priority: 'high',
        description: 'Convert HTML to Sanity blocks and enhance content'
      })
    })

    // Image opportunities
    fieldAnalysis.imageFields.forEach(field => {
      const value = sampleData[field]
      if (!value?.alt) {
        opportunities.push({
          type: 'image-analysis',
          field: field,
          priority: 'high',
          description: 'Generate alt text and image metadata with AI vision'
        })
      }
    })

    // SEO opportunities
    if (!fieldAnalysis.textFields.some(f => f.includes('meta'))) {
      opportunities.push({
        type: 'seo-enhancement',
        field: 'metaDescription',
        priority: 'medium',
        description: 'Generate SEO meta descriptions'
      })
    }

    return opportunities
  }

  mapToSanitySchema(collectionName, fieldAnalysis, sampleData) {
    const mapping = {
      suggestedSchemaName: this.suggestSchemaName(collectionName),
      existingSchema: this.findExistingSchema(collectionName),
      fieldMappings: {},
      newFieldsNeeded: [],
      referenceRelationships: []
    }

    // Map each field type
    const allFields = [
      ...fieldAnalysis.textFields,
      ...fieldAnalysis.richTextFields,
      ...fieldAnalysis.imageFields,
      ...fieldAnalysis.referenceFields,
      ...fieldAnalysis.dateFields,
      ...fieldAnalysis.numberFields,
      ...fieldAnalysis.booleanFields,
      ...fieldAnalysis.urlFields,
      ...fieldAnalysis.emailFields
    ]

    allFields.forEach(field => {
      mapping.fieldMappings[field] = this.mapFieldToSanityType(field, sampleData[field], fieldAnalysis)
    })

    // Identify reference relationships
    fieldAnalysis.referenceFields.forEach(field => {
      const value = sampleData[field]
      if (Array.isArray(value) && value.length > 0) {
        mapping.referenceRelationships.push({
          field: field,
          type: 'array',
          targetCollection: this.guessTargetCollection(field),
          description: `References to ${field} collection`
        })
      }
    })

    return mapping
  }

  suggestSchemaName(collectionName) {
    const schemaMap = {
      'projects': 'project',
      'team': 'teamMember', 
      'employees': 'teamMember',
      'blog': 'blogPost',
      'products': 'product',
      'partners': 'partner',
      'events': 'event',
      'locations': 'location',
      'services': 'service',
      'categories': 'category',
      'manufacturers': 'manufacturer',
      'departments': 'department'
    }

    return schemaMap[collectionName] || collectionName.replace(/-/g, '').replace(/s$/, '')
  }

  findExistingSchema(collectionName) {
    const existingSchemas = [
      'project', 'teamMember', 'product', 'partner', 'blogPost', 'service', 'publication'
    ]

    const suggested = this.suggestSchemaName(collectionName)
    return existingSchemas.includes(suggested) ? suggested : null
  }

  mapFieldToSanityType(fieldName, sampleValue, fieldAnalysis) {
    if (fieldAnalysis.textFields.includes(fieldName)) {
      if (fieldName.includes('description') || fieldName.includes('bio') || fieldName.includes('content')) {
        return { type: 'text', rows: 4 }
      }
      return { type: 'string' }
    }

    if (fieldAnalysis.richTextFields.includes(fieldName)) {
      return { type: 'array', of: [{ type: 'block' }] }
    }

    if (fieldAnalysis.imageFields.includes(fieldName)) {
      return { 
        type: 'image', 
        options: { hotspot: true },
        fields: [{ name: 'alt', type: 'string', title: 'Alternative Text' }]
      }
    }

    if (fieldAnalysis.referenceFields.includes(fieldName)) {
      return { 
        type: 'array', 
        of: [{ type: this.guessTargetCollection(fieldName) }]
      }
    }

    if (fieldAnalysis.urlFields.includes(fieldName)) {
      return { type: 'url' }
    }

    if (fieldAnalysis.emailFields.includes(fieldName)) {
      return { type: 'email' }
    }

    if (fieldAnalysis.dateFields.includes(fieldName)) {
      return { type: 'datetime' }
    }

    if (fieldAnalysis.numberFields.includes(fieldName)) {
      return { type: 'number' }
    }

    if (fieldAnalysis.booleanFields.includes(fieldName)) {
      return { type: 'boolean' }
    }

    return { type: 'string' }
  }

  guessTargetCollection(fieldName) {
    const referenceMap = {
      'team': 'teamMember',
      'products': 'product',
      'partners': 'partner',
      'categories': 'category',
      'locations': 'location',
      'departments': 'department',
      'manufacturers': 'manufacturer'
    }

    for (const [key, value] of Object.entries(referenceMap)) {
      if (fieldName.includes(key)) {
        return value
      }
    }

    return fieldName.replace(/-/g, '').replace(/s$/, '')
  }

  async analyzeAllCollections() {
    console.log('🔍 Comprehensive Webflow Collections Analysis')
    console.log('=' .repeat(60))

    try {
      const collections = await this.getAllCollections()
      this.analysisReport.totalCollections = collections.length

      console.log(`📋 Found ${collections.length} collections to analyze\n`)

      for (let i = 0; i < collections.length; i++) {
        const collection = collections[i]
        console.log(`📦 [${i + 1}/${collections.length}] Analyzing: ${collection.displayName || collection.name}`)

        try {
          const items = await this.getCollectionItems(collection.id, 3)
          
          if (items.length > 0) {
            const sampleItem = items[0]
            
            if (sampleItem.fieldData) {
              const fieldAnalysis = this.analyzeFieldStructure(sampleItem.fieldData)
              const enhancementPotential = this.calculateEnhancementPotential(fieldAnalysis, sampleItem.fieldData)
              const opportunities = this.identifyEnhancementOpportunities(collection.slug, fieldAnalysis, sampleItem.fieldData)
              const schemaMapping = this.mapToSanitySchema(collection.slug, fieldAnalysis, sampleItem.fieldData)

              this.analysisReport.collections[collection.slug] = {
                displayName: collection.displayName || collection.name,
                id: collection.id,
                itemCount: items.length,
                fieldAnalysis: fieldAnalysis,
                enhancementPotential: enhancementPotential,
                opportunities: opportunities,
                schemaMapping: schemaMapping,
                sampleData: this.sanitizeSampleData(sampleItem.fieldData)
              }

              console.log(`   📊 ${Object.keys(sampleItem.fieldData).length} fields, ${enhancementPotential}% enhancement potential`)
              console.log(`   🤖 ${opportunities.length} AI opportunities found`)
              
              if (!schemaMapping.existingSchema) {
                this.analysisReport.newSchemasNeeded.push({
                  collection: collection.slug,
                  suggestedName: schemaMapping.suggestedSchemaName,
                  priority: this.calculateSchemaPriority(collection.slug, fieldAnalysis, enhancementPotential)
                })
              }

            } else {
              console.log(`   ⚠️  No field data available`)
            }
          } else {
            console.log(`   ⚠️  No items found`)
          }

          // Rate limiting
          if (i % 10 === 9) {
            console.log('   ⏸️  Pausing to respect rate limits...')
            await new Promise(resolve => setTimeout(resolve, 2000))
          }

        } catch (error) {
          console.log(`   ❌ Analysis failed: ${error.message}`)
        }
      }

      this.generateRecommendations()
      await this.saveReport()

    } catch (error) {
      console.error('❌ Comprehensive analysis failed:', error.message)
    }
  }

  sanitizeSampleData(fieldData) {
    const sanitized = {}
    for (const [key, value] of Object.entries(fieldData)) {
      if (typeof value === 'string') {
        sanitized[key] = value.length > 100 ? value.substring(0, 100) + '...' : value
      } else if (value && typeof value === 'object') {
        if (value.url) {
          sanitized[key] = `[IMAGE] ${value.url.substring(0, 50)}...`
        } else if (Array.isArray(value)) {
          sanitized[key] = `[ARRAY] ${value.length} items`
        } else {
          sanitized[key] = `[OBJECT] ${Object.keys(value).join(', ')}`
        }
      } else {
        sanitized[key] = value
      }
    }
    return sanitized
  }

  calculateSchemaPriority(collectionSlug, fieldAnalysis, enhancementPotential) {
    const highPriorityCollections = ['projects', 'team', 'products', 'partners', 'blog', 'events']
    const fieldCount = Object.values(fieldAnalysis).flat().length
    
    let priority = 0
    
    if (highPriorityCollections.includes(collectionSlug)) priority += 50
    if (enhancementPotential > 70) priority += 30
    if (fieldCount > 10) priority += 20
    if (fieldAnalysis.imageFields.length > 0) priority += 10
    if (fieldAnalysis.richTextFields.length > 0) priority += 15
    if (fieldAnalysis.referenceFields.length > 0) priority += 10

    return priority
  }

  generateRecommendations() {
    console.log('\n🎯 Generating Migration Recommendations...')

    // Sort collections by enhancement potential and priority
    const sortedCollections = Object.entries(this.analysisReport.collections)
      .sort(([,a], [,b]) => {
        const priorityA = this.calculateSchemaPriority(a.displayName.toLowerCase(), a.fieldAnalysis, a.enhancementPotential)
        const priorityB = this.calculateSchemaPriority(b.displayName.toLowerCase(), b.fieldAnalysis, b.enhancementPotential)
        return priorityB - priorityA
      })

    // Migration priorities
    this.analysisReport.migrationPriorities = sortedCollections.slice(0, 10).map(([slug, data], index) => ({
      rank: index + 1,
      collection: slug,
      displayName: data.displayName,
      priority: this.calculateSchemaPriority(slug, data.fieldAnalysis, data.enhancementPotential),
      enhancementPotential: data.enhancementPotential,
      reason: this.generatePriorityReason(data)
    }))

    // Overall enhancement opportunities
    this.analysisReport.enhancementOpportunities = sortedCollections
      .filter(([, data]) => data.opportunities.length > 0)
      .map(([slug, data]) => ({
        collection: slug,
        displayName: data.displayName,
        totalOpportunities: data.opportunities.length,
        highPriority: data.opportunities.filter(op => op.priority === 'high').length,
        types: [...new Set(data.opportunities.map(op => op.type))]
      }))

    console.log('✅ Recommendations generated')
  }

  generatePriorityReason(data) {
    const reasons = []
    
    if (data.enhancementPotential > 70) reasons.push('High AI enhancement potential')
    if (data.fieldAnalysis.richTextFields.length > 0) reasons.push('Rich content for enhancement')
    if (data.fieldAnalysis.imageFields.length > 0) reasons.push('Images need metadata')
    if (data.fieldAnalysis.referenceFields.length > 0) reasons.push('Complex relationships')
    if (data.opportunities.filter(op => op.priority === 'high').length > 3) reasons.push('Many high-priority opportunities')

    return reasons.length > 0 ? reasons.join(', ') : 'Good migration candidate'
  }

  async saveReport() {
    const reportPath = path.join(__dirname, 'comprehensive-webflow-analysis.json')
    await fs.writeFile(reportPath, JSON.stringify(this.analysisReport, null, 2))
    
    console.log('\n📊 Analysis Complete!')
    console.log(`📝 Detailed report saved to: ${reportPath}`)
    console.log(`🔍 Collections analyzed: ${this.analysisReport.totalCollections}`)
    console.log(`🆕 New schemas needed: ${this.analysisReport.newSchemasNeeded.length}`)
    console.log(`🤖 Total enhancement opportunities: ${this.analysisReport.enhancementOpportunities.length}`)
  }

  displaySummary() {
    console.log('\n📋 MIGRATION SUMMARY')
    console.log('=' .repeat(50))

    console.log('\n🏆 Top 10 Migration Priorities:')
    this.analysisReport.migrationPriorities.forEach(item => {
      console.log(`   ${item.rank}. ${item.displayName} (${item.enhancementPotential}% potential)`)
      console.log(`      ${item.reason}`)
    })

    console.log('\n🆕 New Schemas Needed:')
    this.analysisReport.newSchemasNeeded
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 10)
      .forEach(schema => {
        console.log(`   - ${schema.suggestedName} (from ${schema.collection})`)
      })

    console.log('\n🤖 AI Enhancement Opportunities:')
    this.analysisReport.enhancementOpportunities
      .slice(0, 10)
      .forEach(item => {
        console.log(`   - ${item.displayName}: ${item.totalOpportunities} opportunities (${item.highPriority} high priority)`)
        console.log(`     Types: ${item.types.join(', ')}`)
      })
  }
}

async function main() {
  const analyzer = new ComprehensiveWebflowAnalysis()
  
  console.log('🚀 Starting Comprehensive Webflow Analysis...')
  console.log('   This will analyze ALL collections for AI enhancement opportunities')
  console.log('   and map them to Sanity schemas.\n')

  await analyzer.analyzeAllCollections()
  analyzer.displaySummary()

  console.log('\n🎉 Analysis complete! Check the detailed JSON report for full results.')
  console.log('\nNext steps:')
  console.log('1. Review the migration priorities')
  console.log('2. Create any new Sanity schemas needed')
  console.log('3. Start migration with highest priority collections')
}

if (require.main === module) {
  main().catch(console.error)
}

module.exports = ComprehensiveWebflowAnalysis 