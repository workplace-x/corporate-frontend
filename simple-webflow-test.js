#!/usr/bin/env node

/**
 * Simple Webflow Data Test
 * 
 * Tests API access and shows one project record structure
 */

const WEBFLOW_TOKEN = process.env.WEBFLOW_API_TOKEN
const SITE_ID = process.env.WEBFLOW_SITE_ID

async function testWebflowData() {
  console.log('🔍 Testing Webflow API Access...')
  
  if (!WEBFLOW_TOKEN || !SITE_ID) {
    console.error('❌ Missing environment variables')
    console.error('   WEBFLOW_API_TOKEN:', WEBFLOW_TOKEN ? 'Present' : 'Missing')
    console.error('   WEBFLOW_SITE_ID:', SITE_ID ? 'Present' : 'Missing')
    return
  }

  try {
    // 1. Get all collections
    console.log('\n📋 Getting collections...')
    const collectionsResponse = await fetch(`https://api.webflow.com/v2/sites/${SITE_ID}/collections`, {
      headers: {
        'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    
    if (!collectionsResponse.ok) {
      throw new Error(`HTTP ${collectionsResponse.status}: ${collectionsResponse.statusText}`)
    }
    
    const collectionsData = await collectionsResponse.json()
    console.log(`✅ Found ${collectionsData.collections?.length || 0} collections`)
    
    // List all collections
    if (collectionsData.collections) {
      console.log('\n📦 Available Collections:')
      collectionsData.collections.forEach((collection, index) => {
        console.log(`   ${index + 1}. ${collection.displayName || collection.name} (${collection.slug})`)
        console.log(`      ID: ${collection.id}`)
      })
    }
    
    // 2. Find and test project collection
    const projectCollection = collectionsData.collections?.find(c => 
      (c.slug && c.slug === 'projects') ||
      (c.displayName && c.displayName.toLowerCase().includes('project'))
    )
    
    if (projectCollection) {
      console.log(`\n🏗️  Testing Project Collection: ${projectCollection.displayName}`)
      
      // Get ONE project to see structure
      const projectsResponse = await fetch(`https://api.webflow.com/v2/collections/${projectCollection.id}/items?limit=1`, {
        headers: {
          'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (!projectsResponse.ok) {
        throw new Error(`HTTP ${projectsResponse.status}: ${projectsResponse.statusText}`)
      }
      
      const projectsData = await projectsResponse.json()
      
      if (projectsData.items && projectsData.items.length > 0) {
        const sampleProject = projectsData.items[0]
        
        console.log('\n📄 Sample Project Structure:')
        console.log('   Basic Info:')
        console.log(`     ID: ${sampleProject.id}`)
        console.log(`     Created: ${sampleProject.createdOn}`)
        console.log(`     Updated: ${sampleProject.lastUpdated}`)
        console.log(`     Published: ${sampleProject.publishedOn || 'Not published'}`)
        console.log(`     Archived: ${sampleProject.isArchived}`)
        
        if (sampleProject.fieldData) {
          console.log('\n   📋 Available Fields:')
          const fields = Object.keys(sampleProject.fieldData)
          fields.forEach((field, index) => {
            const value = sampleProject.fieldData[field]
            let displayValue = value
            
            if (typeof value === 'object' && value !== null) {
              if (value.url) {
                displayValue = `[IMAGE] ${value.url.substring(0, 50)}...`
              } else if (Array.isArray(value)) {
                displayValue = `[ARRAY] ${value.length} items`
              } else {
                displayValue = `[OBJECT] ${Object.keys(value).join(', ')}`
              }
            } else if (typeof value === 'string' && value.length > 100) {
              displayValue = `"${value.substring(0, 100)}..."`
            } else if (typeof value === 'string') {
              displayValue = `"${value}"`
            }
            
            console.log(`     ${index + 1}. ${field}: ${displayValue}`)
          })
          
          console.log('\n🎯 Analysis for AI Migration:')
          
          // Analyze field types
          let textFields = 0
          let imageFields = 0
          let referenceFields = 0
          let missingContent = 0
          
          for (const [key, value] of Object.entries(sampleProject.fieldData)) {
            if (typeof value === 'string') {
              textFields++
              if (!value || value.length < 10) missingContent++
            } else if (value && typeof value === 'object' && value.url) {
              imageFields++
            } else if (Array.isArray(value)) {
              referenceFields++
            }
          }
          
          console.log(`   📊 Field Analysis:`)
          console.log(`     Text fields: ${textFields}`)
          console.log(`     Image fields: ${imageFields}`)
          console.log(`     Reference/Array fields: ${referenceFields}`)
          console.log(`     Empty/short content: ${missingContent}`)
          
          const enhancementPotential = textFields > 0 ? Math.round((missingContent / textFields) * 100) : 0
          console.log(`     🤖 AI Enhancement Potential: ${enhancementPotential}%`)
          
          // Show full sample for reference
          console.log('\n📄 Full Sample Project Data:')
          console.log(JSON.stringify(sampleProject, null, 2))
        }
      } else {
        console.log('❌ No projects found in collection')
      }
    } else {
      console.log('❌ No project collection found')
    }
    
    // 3. Test employee collection if exists
    const employeeCollection = collectionsData.collections?.find(c => 
      (c.slug && c.slug === 'team') ||
      (c.displayName && c.displayName.toLowerCase().includes('employee'))
    )
    
    if (employeeCollection) {
      console.log(`\n👥 Found Employee Collection: ${employeeCollection.displayName}`)
      
      const employeeResponse = await fetch(`https://api.webflow.com/v2/collections/${employeeCollection.id}/items?limit=1`, {
        headers: {
          'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (employeeResponse.ok) {
        const employeeData = await employeeResponse.json()
        if (employeeData.items && employeeData.items.length > 0) {
          console.log('   📄 Sample Employee Fields:')
          const empFields = Object.keys(employeeData.items[0].fieldData || {})
          empFields.forEach(field => console.log(`     - ${field}`))
        }
      }
    }
    
    console.log('\n🎉 Webflow API Test Complete!')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

testWebflowData() 