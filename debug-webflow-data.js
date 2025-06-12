#!/usr/bin/env node

// Debug script to see Webflow data structure
const WEBFLOW_TOKEN = process.env.WEBFLOW_API_TOKEN
const SITE_ID = process.env.WEBFLOW_SITE_ID

async function debugWebflowData() {
  try {
    // Get collections
    const collectionsResponse = await fetch(`https://api.webflow.com/v2/sites/${SITE_ID}/collections`, {
      headers: {
        'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    
    const collections = await collectionsResponse.json()
    
    // Find employee collection
    const employeeCollection = collections.collections.find(c => 
      (c.slug && c.slug === 'team') ||
      (c.displayName && c.displayName.toLowerCase().includes('employee'))
    )
    
    if (employeeCollection) {
      console.log('📋 Employee Collection:', employeeCollection.displayName)
      
      // Get first employee
      const employeesResponse = await fetch(`https://api.webflow.com/v2/collections/${employeeCollection.id}/items?limit=1`, {
        headers: {
          'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      
      const employees = await employeesResponse.json()
      
      if (employees.items && employees.items.length > 0) {
        console.log('\n👤 Sample Employee Data Structure:')
        console.log(JSON.stringify(employees.items[0], null, 2))
      }
    }
    
    // Find project collection
    const projectCollection = collections.collections.find(c => 
      (c.slug && c.slug === 'projects') ||
      (c.displayName && c.displayName.toLowerCase().includes('project'))
    )
    
    if (projectCollection) {
      console.log('\n📋 Project Collection:', projectCollection.displayName)
      
      // Get first project
      const projectsResponse = await fetch(`https://api.webflow.com/v2/collections/${projectCollection.id}/items?limit=1`, {
        headers: {
          'Authorization': `Bearer ${WEBFLOW_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      
      const projects = await projectsResponse.json()
      
      if (projects.items && projects.items.length > 0) {
        console.log('\n🏗️ Sample Project Data Structure:')
        console.log(JSON.stringify(projects.items[0], null, 2))
      }
    }
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message)
  }
}

debugWebflowData() 