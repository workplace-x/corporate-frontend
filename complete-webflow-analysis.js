#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' })

const { createClient } = require('@sanity/client')
const AIEnhancedMigration = require('./ai-enhanced-migration.js')
const fs = require('fs').promises

const sanity = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

class CompleteWebflowAnalysis {
  constructor() {
    this.migration = new AIEnhancedMigration()
    this.analysis = {
      collections: {},
      totalItems: 0,
      aiEnhancementOpportunities: [],
      migrationStrategy: {}
    }
  }

  async analyzeAllCollections() {
    console.log('🔍 COMPREHENSIVE WEBFLOW ANALYSIS')
    console.log('=' .repeat(60))
    console.log('📊 Analyzing all collections for AI enhancement opportunities...\n')

    try {
      const collections = await this.migration.getCollections()
      console.log(`📋 Found ${collections.length} Webflow collections to analyze\n`)

      for (let i = 0; i < collections.length; i++) {
        const collection = collections[i]
        console.log(`[${i + 1}/${collections.length}] Analyzing: ${collection.displayName}`)
        
        await this.analyzeCollection(collection)
        
        // Progress indicator
        if (i % 5 === 0 && i > 0) {
          console.log(`   📊 Analyzed ${i}/${collections.length} collections...`)
        }
      }

      await this.generateComprehensiveReport()
      await this.createMigrationPlan()

    } catch (error) {
      console.error('❌ Analysis failed:', error.message)
      throw error
    }
  }

  async analyzeCollection(collection) {
    try {
      const items = await this.migration.getCollectionItems(collection.id)
      const sampleItem = items[0]
      
      if (!sampleItem) {
        this.analysis.collections[collection.slug] = {
          displayName: collection.displayName,
          id: collection.id,
          itemCount: 0,
          status: 'empty'
        }
        return
      }

      // Analyze field structure and content types
      const fieldAnalysis = this.analyzeFields(sampleItem.fieldData)
      const aiOpportunities = this.identifyAIOpportunities(sampleItem.fieldData, collection.displayName)
      const sanityMapping = this.suggestSanitySchema(collection, fieldAnalysis)

      this.analysis.collections[collection.slug] = {
        displayName: collection.displayName,
        id: collection.id,
        itemCount: items.length,
        fieldAnalysis,
        enhancementPotential: this.calculateEnhancementPotential(fieldAnalysis, aiOpportunities),
        opportunities: aiOpportunities,
        schemaMapping: sanityMapping,
        sampleData: this.sanitizeSampleData(sampleItem.fieldData),
        priority: this.calculateMigrationPriority(items.length, aiOpportunities)
      }

      this.analysis.totalItems += items.length

    } catch (error) {
      console.error(`   ❌ Error analyzing ${collection.displayName}:`, error.message)
      this.analysis.collections[collection.slug] = {
        displayName: collection.displayName,
        id: collection.id,
        error: error.message,
        status: 'error'
      }
    }
  }

  analyzeFields(fieldData) {
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

    Object.entries(fieldData).forEach(([key, value]) => {
      if (typeof value === 'string') {
        if (value.includes('@') && value.includes('.')) {
          analysis.emailFields.push(key)
        } else if (value.startsWith('http') || value.startsWith('www')) {
          analysis.urlFields.push(key)
        } else if (value.match(/^\+?[\d\s\-\(\)\.]+$/)) {
          analysis.phoneFields.push(key)
        } else if (value.length > 200 || value.includes('<') || value.includes('\n')) {
          analysis.richTextFields.push(key)
        } else {
          analysis.textFields.push(key)
        }
      } else if (typeof value === 'number') {
        analysis.numberFields.push(key)
      } else if (typeof value === 'boolean') {
        analysis.booleanFields.push(key)
      } else if (value && typeof value === 'object') {
        if (value.url || value.alt) {
          analysis.imageFields.push(key)
        } else if (Array.isArray(value) || (typeof value === 'string' && value.length === 24)) {
          analysis.referenceFields.push(key)
        } else {
          analysis.unknownFields.push(key)
        }
      } else {
        analysis.unknownFields.push(key)
      }
    })

    return analysis
  }

  identifyAIOpportunities(fieldData, collectionName) {
    const opportunities = []

    // Text enhancement opportunities
    const textFields = Object.entries(fieldData).filter(([key, value]) => 
      typeof value === 'string' && value.length > 10 && value.length < 200
    )

    textFields.forEach(([key, value]) => {
      if (key.includes('title') || key.includes('name')) {
        opportunities.push({
          type: 'seo-enhancement',
          field: key,
          priority: 'high',
          description: 'Enhance title/name with SEO optimization'
        })
      }
      
      if (key.includes('description') || key.includes('summary')) {
        opportunities.push({
          type: 'content-enhancement',
          field: key,
          priority: 'high',
          description: 'AI-enhance description with professional language'
        })
      }
    })

    // Missing content opportunities
    if (!fieldData.description && !fieldData.summary) {
      opportunities.push({
        type: 'content-generation',
        field: 'metaDescription',
        priority: 'medium',
        description: 'Generate SEO meta descriptions'
      })
    }

    // Rich content opportunities
    const richTextFields = Object.entries(fieldData).filter(([key, value]) => 
      typeof value === 'string' && value.length > 200
    )

    richTextFields.forEach(([key, value]) => {
      opportunities.push({
        type: 'content-optimization',
        field: key,
        priority: 'medium',
        description: 'Optimize and enhance long-form content'
      })
    })

    return opportunities
  }

  suggestSanitySchema(collection, fieldAnalysis) {
    const schemaName = collection.slug.replace(/-/g, '').toLowerCase()
    
    const fieldMappings = {}
    
    // Map text fields
    fieldAnalysis.textFields.forEach(field => {
      fieldMappings[field] = { type: 'string' }
    })
    
    // Map rich text fields
    fieldAnalysis.richTextFields.forEach(field => {
      fieldMappings[field] = { type: 'text', rows: 4 }
    })
    
    // Map images
    fieldAnalysis.imageFields.forEach(field => {
      fieldMappings[field] = {
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text'
          }
        ]
      }
    })
    
    // Map references
    fieldAnalysis.referenceFields.forEach(field => {
      fieldMappings[field] = {
        type: 'array',
        of: [{ type: field.replace(/-/g, '').toLowerCase() }]
      }
    })

    return {
      suggestedSchemaName: schemaName,
      existingSchema: this.findExistingSchema(schemaName),
      fieldMappings,
      newFieldsNeeded: this.identifyNewFields(fieldMappings),
      referenceRelationships: this.identifyReferences(fieldAnalysis)
    }
  }

  findExistingSchema(schemaName) {
    // Common existing schemas
    const existingSchemas = [
      'product', 'project', 'teamMember', 'manufacturer', 
      'verticalMarket', 'productCategory', 'blogPost', 'event'
    ]
    
    return existingSchemas.find(schema => 
      schema.toLowerCase().includes(schemaName) || 
      schemaName.includes(schema.toLowerCase())
    ) || null
  }

  identifyNewFields(fieldMappings) {
    // AI-enhanced fields to add
    return [
      { name: 'aiEnhanced', type: 'boolean', default: false },
      { name: 'enhancementMetrics', type: 'object', fields: [
        { name: 'qualityScore', type: 'number' },
        { name: 'lastEnhanced', type: 'datetime' },
        { name: 'enhancementCount', type: 'number' }
      ]},
      { name: 'seoMetadata', type: 'object', fields: [
        { name: 'metaDescription', type: 'text' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }] }
      ]}
    ]
  }

  identifyReferences(fieldAnalysis) {
    return fieldAnalysis.referenceFields.map(field => ({
      field,
      type: 'array',
      targetCollection: field.replace(/-/g, '').toLowerCase(),
      description: `References to ${field} collection`
    }))
  }

  calculateEnhancementPotential(fieldAnalysis, opportunities) {
    const textFieldsCount = fieldAnalysis.textFields.length + fieldAnalysis.richTextFields.length
    const opportunitiesCount = opportunities.length
    
    return Math.min(100, (textFieldsCount * 20) + (opportunitiesCount * 15))
  }

  calculateMigrationPriority(itemCount, opportunities) {
    const highPriorityOps = opportunities.filter(op => op.priority === 'high').length
    const contentValue = Math.min(100, itemCount * 2)
    const enhancementValue = highPriorityOps * 25
    
    const score = contentValue + enhancementValue
    
    if (score > 150) return 'critical'
    if (score > 75) return 'high'
    if (score > 25) return 'medium'
    return 'low'
  }

  sanitizeSampleData(fieldData) {
    const sample = {}
    Object.entries(fieldData).slice(0, 5).forEach(([key, value]) => {
      if (typeof value === 'string' && value.length > 100) {
        sample[key] = value.substring(0, 100) + '...'
      } else if (Array.isArray(value)) {
        sample[key] = `[ARRAY] ${value.length} items`
      } else {
        sample[key] = value
      }
    })
    return sample
  }

  async generateComprehensiveReport() {
    console.log('\n📊 COMPREHENSIVE ANALYSIS COMPLETE')
    console.log('=' .repeat(60))

    // Summary statistics
    const totalCollections = Object.keys(this.analysis.collections).length
    const collectionsWithContent = Object.values(this.analysis.collections)
      .filter(c => c.itemCount > 0).length
    
    const totalOpportunities = Object.values(this.analysis.collections)
      .reduce((sum, c) => sum + (c.opportunities?.length || 0), 0)

    console.log(`📋 Collections Analyzed: ${totalCollections}`)
    console.log(`📦 Collections with Content: ${collectionsWithContent}`)
    console.log(`📄 Total Items: ${this.analysis.totalItems.toLocaleString()}`)
    console.log(`🤖 AI Enhancement Opportunities: ${totalOpportunities}`)

    // Priority breakdown
    console.log('\n🎯 Migration Priorities:')
    const priorities = { critical: 0, high: 0, medium: 0, low: 0 }
    Object.values(this.analysis.collections).forEach(c => {
      if (c.priority) priorities[c.priority]++
    })
    
    Object.entries(priorities).forEach(([priority, count]) => {
      console.log(`   ${priority.toUpperCase()}: ${count} collections`)
    })

    // Save detailed report
    await fs.writeFile(
      'complete-webflow-analysis.json',
      JSON.stringify(this.analysis, null, 2)
    )
    
    console.log(`\n💾 Detailed analysis saved to: complete-webflow-analysis.json`)
  }

  async createMigrationPlan() {
    console.log('\n🚀 CREATING COMPREHENSIVE MIGRATION PLAN')
    console.log('=' .repeat(60))

    // Sort collections by priority and content volume
    const sortedCollections = Object.entries(this.analysis.collections)
      .filter(([slug, data]) => data.itemCount > 0)
      .sort(([a, dataA], [b, dataB]) => {
        const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 }
        const priorityDiff = (priorityOrder[dataB.priority] || 0) - (priorityOrder[dataA.priority] || 0)
        if (priorityDiff !== 0) return priorityDiff
        return dataB.itemCount - dataA.itemCount
      })

    this.analysis.migrationStrategy = {
      phases: this.createMigrationPhases(sortedCollections),
      estimatedDuration: this.calculateTotalDuration(sortedCollections),
      aiEnhancementPlan: this.createAIEnhancementPlan(),
      dependencies: this.identifyDependencies(sortedCollections)
    }

    console.log('📋 Migration Phases Created:')
    this.analysis.migrationStrategy.phases.forEach((phase, i) => {
      console.log(`   Phase ${i + 1}: ${phase.collections.length} collections (${phase.estimatedTime})`)
      phase.collections.forEach(col => {
        console.log(`     • ${col.displayName} (${col.itemCount} items)`)
      })
    })

    console.log(`\n⏱️ Total Estimated Duration: ${this.analysis.migrationStrategy.estimatedDuration}`)
    console.log(`🤖 AI Enhancement: ${this.analysis.migrationStrategy.aiEnhancementPlan.totalEnhancements} opportunities`)
  }

  createMigrationPhases(sortedCollections) {
    const phases = []
    let currentPhase = []
    let currentPhaseItems = 0
    
    sortedCollections.forEach(([slug, data]) => {
      // Start new phase if current phase has >5000 items or >10 collections
      if (currentPhaseItems > 5000 || currentPhase.length >= 10) {
        if (currentPhase.length > 0) {
          phases.push({
            collections: [...currentPhase],
            estimatedTime: this.estimatePhaseTime(currentPhase),
            itemCount: currentPhaseItems
          })
          currentPhase = []
          currentPhaseItems = 0
        }
      }
      
      currentPhase.push(data)
      currentPhaseItems += data.itemCount
    })
    
    // Add final phase
    if (currentPhase.length > 0) {
      phases.push({
        collections: currentPhase,
        estimatedTime: this.estimatePhaseTime(currentPhase),
        itemCount: currentPhaseItems
      })
    }
    
    return phases
  }

  estimatePhaseTime(collections) {
    const totalItems = collections.reduce((sum, c) => sum + c.itemCount, 0)
    const totalOpportunities = collections.reduce((sum, c) => sum + (c.opportunities?.length || 0), 0)
    
    // Base time: 1 item per second, AI enhancement adds 2 seconds per opportunity
    const baseTime = totalItems
    const aiTime = totalOpportunities * 2
    const totalSeconds = baseTime + aiTime
    
    const hours = Math.ceil(totalSeconds / 3600)
    return hours > 1 ? `${hours} hours` : `${Math.ceil(totalSeconds / 60)} minutes`
  }

  calculateTotalDuration(collections) {
    const totalItems = collections.reduce((sum, [slug, data]) => sum + data.itemCount, 0)
    const totalHours = Math.ceil(totalItems / 1800) // ~1800 items per hour with AI enhancement
    
    if (totalHours > 24) {
      return `${Math.ceil(totalHours / 24)} days`
    } else {
      return `${totalHours} hours`
    }
  }

  createAIEnhancementPlan() {
    const totalOpportunities = Object.values(this.analysis.collections)
      .reduce((sum, c) => sum + (c.opportunities?.length || 0), 0)
    
    return {
      totalEnhancements: totalOpportunities,
      types: {
        'content-enhancement': 0,
        'seo-optimization': 0,
        'content-generation': 0,
        'content-optimization': 0
      },
      estimatedImprovement: '40-60% content quality increase'
    }
  }

  identifyDependencies(collections) {
    // Collections that should be migrated first (referenced by others)
    const foundationalCollections = [
      'manufacturers', 'product-categories', 'vertical-markets',
      'blog-categories', 'blog-tags', 'departments', 'locations'
    ]
    
    return {
      foundational: foundationalCollections,
      dependent: collections.filter(([slug]) => !foundationalCollections.includes(slug))
    }
  }
}

async function main() {
  const analyzer = new CompleteWebflowAnalysis()
  
  try {
    await analyzer.analyzeAllCollections()
    console.log('\n🎉 ANALYSIS COMPLETE!')
    console.log('   📄 Check complete-webflow-analysis.json for full details')
    console.log('   🚀 Ready to build comprehensive migration system')
    
  } catch (error) {
    console.error('❌ Analysis failed:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = CompleteWebflowAnalysis 