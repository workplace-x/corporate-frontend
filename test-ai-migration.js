#!/usr/bin/env node

/**
 * Test AI-Enhanced Migration Setup
 * 
 * This script tests all the components needed for AI-enhanced migration:
 * - OpenAI API connectivity
 * - Webflow API access
 * - Sanity client connection
 * - Content analysis capabilities
 */

const { createClient } = require('@sanity/client')
const OpenAI = require('openai')

// Initialize clients
const sanity = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

class MigrationTester {
  constructor() {
    this.webflowToken = process.env.WEBFLOW_API_TOKEN
    this.siteId = process.env.WEBFLOW_SITE_ID
  }

  async testEnvironmentVariables() {
    console.log('🔐 Testing Environment Variables...')
    
    const required = [
      'OPENAI_API_KEY',
      'WEBFLOW_API_TOKEN', 
      'WEBFLOW_SITE_ID',
      'SANITY_API_TOKEN'
    ]
    
    const missing = required.filter(key => !process.env[key])
    
    if (missing.length > 0) {
      console.error('❌ Missing environment variables:', missing.join(', '))
      return false
    }
    
    console.log('✅ All environment variables present')
    return true
  }

  async testOpenAI() {
    console.log('\n🤖 Testing OpenAI API...')
    
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ 
          role: "user", 
          content: "Test: Enhance this text for a professional furniture company: 'Office chair for sale'"
        }],
        max_tokens: 100
      })
      
      const enhanced = response.choices[0].message.content
      console.log('✅ OpenAI API working')
      console.log('   Sample enhancement:', enhanced.substring(0, 100) + '...')
      return true
    } catch (error) {
      console.error('❌ OpenAI API failed:', error.message)
      return false
    }
  }

  async testWebflowAPI() {
    console.log('\n🌐 Testing Webflow API...')
    
    try {
      const response = await fetch(`https://api.webflow.com/v2/sites/${this.siteId}/collections`, {
        headers: {
          'Authorization': `Bearer ${this.webflowToken}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const data = await response.json()
      console.log('✅ Webflow API working')
      console.log(`   Found ${data.collections?.length || 0} collections`)
      
      // List collections
      if (data.collections) {
        data.collections.forEach(collection => {
          console.log(`   - ${collection.displayName || collection.name} (${collection.slug})`)
        })
      }
      
      return true
    } catch (error) {
      console.error('❌ Webflow API failed:', error.message)
      return false
    }
  }

  async testSanityClient() {
    console.log('\n📊 Testing Sanity Client...')
    
    try {
      // Test read access
      const projects = await sanity.fetch(`*[_type == "project"][0..2] { _id, title }`)
      console.log('✅ Sanity read access working')
      console.log(`   Found ${projects.length} sample projects`)
      
      // Test write access (create a test document and immediately delete it)
      try {
        const testDoc = await sanity.create({
          _type: 'test',
          title: 'Migration Test Document',
          createdAt: new Date().toISOString()
        })
        
        await sanity.delete(testDoc._id)
        console.log('✅ Sanity write access working')
      } catch (writeError) {
        console.warn('⚠️  Sanity write access limited:', writeError.message)
      }
      
      return true
    } catch (error) {
      console.error('❌ Sanity client failed:', error.message)
      return false
    }
  }

  async testImageAnalysis() {
    console.log('\n📸 Testing Image Analysis...')
    
    try {
      // Test with a sample office furniture image
      const testImageUrl = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600'
      
      const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [{
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this office furniture image briefly. Return as JSON with keys: style, furniture, mood"
            },
            {
              type: "image_url",
              image_url: { url: testImageUrl }
            }
          ]
        }],
        max_tokens: 200
      })
      
      const analysis = response.choices[0].message.content
      console.log('✅ Image analysis working')
      console.log('   Sample analysis:', analysis.substring(0, 150) + '...')
      return true
    } catch (error) {
      console.error('❌ Image analysis failed:', error.message)
      return false
    }
  }

  async runAnalysisPreview() {
    console.log('\n🔍 Running Migration Analysis Preview...')
    
    try {
      const collections = await this.getWebflowCollections()
      
      for (const collection of collections) {
        const items = await this.getCollectionItems(collection.id, 1) // Just get 1 sample
        
        if (items.length > 0) {
          const sampleItem = items[0]
          console.log(`\n📋 ${collection.displayName}:`)
          console.log(`   Items: ${items.length}+ (showing sample)`)
          
          if (sampleItem.fieldData) {
            const fields = Object.keys(sampleItem.fieldData)
            console.log(`   Fields: ${fields.join(', ')}`)
            
            // Analyze content quality
            let textFields = 0
            let imageFields = 0
            let missingContent = 0
            
            for (const [key, value] of Object.entries(sampleItem.fieldData)) {
              if (typeof value === 'string') {
                textFields++
                if (!value || value.length < 10) missingContent++
              }
              if (value && typeof value === 'object' && value.url) {
                imageFields++
              }
            }
            
            console.log(`   Text fields: ${textFields}, Image fields: ${imageFields}, Missing/short content: ${missingContent}`)
            
            const enhancementPotential = textFields > 0 ? Math.round((missingContent / textFields) * 100) : 0
            console.log(`   Enhancement potential: ${enhancementPotential}%`)
          }
        }
      }
      
      return true
    } catch (error) {
      console.error('❌ Analysis preview failed:', error.message)
      return false
    }
  }

  async getWebflowCollections() {
    const response = await fetch(`https://api.webflow.com/v2/sites/${this.siteId}/collections`, {
      headers: {
        'Authorization': `Bearer ${this.webflowToken}`,
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json()
    return data.collections || []
  }

  async getCollectionItems(collectionId, limit = 100) {
    const response = await fetch(`https://api.webflow.com/v2/collections/${collectionId}/items?limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${this.webflowToken}`,
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json()
    return data.items || []
  }
}

async function main() {
  console.log('🧪 AI-Enhanced Migration Test Suite')
  console.log('=' .repeat(50))
  
  const tester = new MigrationTester()
  const results = []
  
  // Run all tests
  results.push(await tester.testEnvironmentVariables())
  results.push(await tester.testOpenAI())
  results.push(await tester.testWebflowAPI())
  results.push(await tester.testSanityClient())
  results.push(await tester.testImageAnalysis())
  results.push(await tester.runAnalysisPreview())
  
  // Summary
  const passed = results.filter(Boolean).length
  const total = results.length
  
  console.log('\n' + '=' .repeat(50))
  console.log(`🎯 Test Results: ${passed}/${total} passed`)
  
  if (passed === total) {
    console.log('🎉 All systems ready for AI-enhanced migration!')
    console.log('\nNext steps:')
    console.log('1. Run analysis: node ai-enhanced-migration.js analyze')
    console.log('2. Test with single collection: node ai-enhanced-migration.js projects')
    console.log('3. Full migration: node ai-enhanced-migration.js all')
  } else {
    console.log('⚠️  Some tests failed. Please resolve issues before migrating.')
  }
}

if (require.main === module) {
  main().catch(console.error)
} 