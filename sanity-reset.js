#!/usr/bin/env node

/**
 * Sanity Reset & Migration Test
 * 
 * Safely clears Sanity data and tests migration setup
 */

const { createClient } = require('@sanity/client')

const sanity = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'skQ31Mbn7hE5dNPRkBnlGjVSTm53USeE1TcIgpxelhqIZ8HqnONdQjtr07F49X1Ja5S5NhWaeC8HcxlvLZPd3hRCdBZq8EYSobMV2X7EkNObPBowQc9KPu10CILUGWN2I3lpJT2JeKD1bp0MUdE2c8Q5iuLp86Hh2xBpG4Ewvk89azg449Wv',
  apiVersion: '2024-01-01'
})

class SanityReset {
  async analyzeCurrentData() {
    console.log('📊 Analyzing Current Sanity Data...')
    
    try {
      // Check each document type
      const documentTypes = ['project', 'teamMember', 'product', 'partner', 'blogPost']
      const analysis = {}
      
      for (const type of documentTypes) {
        const count = await sanity.fetch(`count(*[_type == "${type}"])`)
        const sample = await sanity.fetch(`*[_type == "${type}"][0..2] { _id, title, name }`)
        
        analysis[type] = {
          count: count,
          samples: sample
        }
        
        console.log(`   ${type}: ${count} documents`)
        if (sample.length > 0) {
          sample.forEach(doc => {
            console.log(`     - ${doc.title || doc.name || doc._id}`)
          })
        }
      }
      
      return analysis
    } catch (error) {
      console.error('❌ Analysis failed:', error.message)
      return {}
    }
  }

  async clearDocumentType(type) {
    console.log(`🗑️  Clearing ${type} documents...`)
    
    try {
      // Get all document IDs of this type
      const docs = await sanity.fetch(`*[_type == "${type}"] { _id }`)
      
      if (docs.length === 0) {
        console.log(`   ✅ No ${type} documents to clear`)
        return
      }
      
      console.log(`   Found ${docs.length} ${type} documents to delete`)
      
      // Delete in batches to avoid rate limits
      const batchSize = 10
      for (let i = 0; i < docs.length; i += batchSize) {
        const batch = docs.slice(i, i + batchSize)
        const transaction = sanity.transaction()
        
        batch.forEach(doc => {
          transaction.delete(doc._id)
        })
        
        await transaction.commit()
        console.log(`   Deleted batch ${Math.ceil((i + 1) / batchSize)} of ${Math.ceil(docs.length / batchSize)}`)
      }
      
      console.log(`   ✅ Cleared all ${type} documents`)
    } catch (error) {
      console.error(`   ❌ Failed to clear ${type}:`, error.message)
    }
  }

  async clearAllData() {
    console.log('🧹 Clearing All Sanity Data...')
    console.log('=' .repeat(40))
    
    // Clear in reverse dependency order
    const clearOrder = ['project', 'blogPost', 'teamMember', 'product', 'partner']
    
    for (const type of clearOrder) {
      await this.clearDocumentType(type)
    }
    
    console.log('\n✅ Sanity clear complete!')
  }

  async testConnections() {
    console.log('🔗 Testing Connections...')
    
    // Test Sanity
    try {
      const sanityTest = await sanity.fetch(`*[_type == "project"][0..1] { _id }`)
      console.log('✅ Sanity connection working')
    } catch (error) {
      console.error('❌ Sanity connection failed:', error.message)
      return false
    }
    
    // Test Webflow
    const WEBFLOW_TOKEN = process.env.WEBFLOW_API_TOKEN || 'd6d5120f1545c3d29216cd753c5406b0f40f2d7f0c5c112f5b5b3f4299e5cb58'
    const SITE_ID = process.env.WEBFLOW_SITE_ID || '5d4c9442574a7829f9d4809f'
    
    try {
      const response = await fetch(`https://api.webflow.com/v2/sites/${SITE_ID}/collections`, {
        headers: {
          'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        console.log(`✅ Webflow connection working (${data.collections?.length || 0} collections)`)
      } else {
        throw new Error(`HTTP ${response.status}`)
      }
    } catch (error) {
      console.error('❌ Webflow connection failed:', error.message)
      return false
    }
    
    return true
  }

  async createTestDocument() {
    console.log('🧪 Creating Test Document...')
    
    try {
      const testDoc = await sanity.create({
        _type: 'project',
        title: 'Migration Test Project',
        slug: { _type: 'slug', current: 'migration-test' },
        subHeader: 'Testing AI-enhanced migration system',
        yearCompleted: 2025,
        squareFootage: '1,000 sq ft',
        address: {
          _type: 'object',
          street: 'Test Street',
          cityState: 'Test City, TX',
          coordinates: {
            lat: 32.7767,
            lng: -96.7970
          }
        },
        writeUp: 'This is a test project created to verify the migration system is working correctly.',
        featured: false,
        archived: false
      })
      
      console.log(`✅ Test document created: ${testDoc._id}`)
      
      // Clean up test document
      await sanity.delete(testDoc._id)
      console.log(`✅ Test document cleaned up`)
      
      return true
    } catch (error) {
      console.error('❌ Test document creation failed:', error.message)
      return false
    }
  }
}

async function main() {
  const reset = new SanityReset()
  const args = process.argv.slice(2)
  const command = args[0]
  
  console.log('🚀 Sanity Reset & Migration Test')
  console.log('=' .repeat(50))
  
  switch (command) {
    case 'analyze':
      await reset.analyzeCurrentData()
      break
      
    case 'clear':
      console.log('⚠️  This will DELETE ALL Sanity data!')
      console.log('   Make sure you want to proceed...')
      
      // Simple confirmation
      if (process.argv.includes('--confirm')) {
        await reset.clearAllData()
      } else {
        console.log('\n❌ Add --confirm flag to proceed with deletion')
        console.log('   Example: node sanity-reset.js clear --confirm')
      }
      break
      
    case 'test':
      const connectionsOk = await reset.testConnections()
      if (connectionsOk) {
        await reset.createTestDocument()
      }
      break
      
    default:
      console.log(`
🛠️  Sanity Reset & Migration Test Commands

Usage:
  node sanity-reset.js <command>

Commands:
  analyze     - Show current Sanity data overview
  clear       - Clear all Sanity data (requires --confirm)
  test        - Test all connections and create/delete test document

Examples:
  node sanity-reset.js analyze
  node sanity-reset.js clear --confirm
  node sanity-reset.js test

Environment Setup:
  SANITY_API_TOKEN - Your Sanity API token
  WEBFLOW_API_TOKEN - Your Webflow API token  
  WEBFLOW_SITE_ID - Your Webflow site ID
      `)
  }
}

if (require.main === module) {
  main().catch(console.error)
}

module.exports = SanityReset 