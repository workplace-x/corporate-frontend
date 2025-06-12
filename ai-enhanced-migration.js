#!/usr/bin/env node

// Load environment variables
require('dotenv').config({ path: '.env.local' })

/**
 * AI-Enhanced Webflow → Sanity Migration
 * 
 * This advanced migration system:
 * ✅ Analyzes existing content with AI
 * ✅ Refactors and improves text content
 * ✅ Optimizes and categorizes images
 * ✅ Generates missing content (meta descriptions, alt text, etc.)
 * ✅ Ensures consistent tone and style
 * ✅ Creates structured, high-quality Sanity documents
 */

const { createClient } = require('@sanity/client')
const OpenAI = require('openai')
const fs = require('fs').promises
const path = require('path')

// Sanity client
const sanity = createClient({
  projectId: '4q7mxake',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

class AIEnhancedMigration {
  constructor() {
    this.webflowToken = process.env.WEBFLOW_API_TOKEN
    this.siteId = process.env.WEBFLOW_SITE_ID
    this.progressLog = []
    
    // AI Enhancement settings
    this.brandTone = {
      voice: "professional yet approachable",
      style: "sophisticated, design-focused",
      audience: "corporate decision-makers, architects, designers",
      keywords: ["workplace design", "furniture solutions", "space optimization", "commercial interiors"]
    }
  }

  // ==========================================
  // AI CONTENT ANALYSIS & ENHANCEMENT
  // ==========================================

  async analyzeAndEnhanceText(content, contentType, context = {}) {
    if (!content || typeof content !== 'string') return content

    const prompt = `
You are a content strategist for Tangram Interiors, a leading commercial furniture and design company.

BRAND CONTEXT:
- Voice: ${this.brandTone.voice}
- Style: ${this.brandTone.style}
- Audience: ${this.brandTone.audience}
- Key themes: ${this.brandTone.keywords.join(', ')}

CONTENT TYPE: ${contentType}
ORIGINAL CONTENT: "${content}"

CONTEXT: ${JSON.stringify(context)}

Please analyze and enhance this content by:
1. Improving clarity and professionalism
2. Ensuring brand voice consistency
3. Optimizing for the target audience
4. Adding relevant industry terminology where appropriate
5. Maintaining the original meaning and key information

Return only the enhanced content, no explanations.`

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
        temperature: 0.3
      })

      const enhanced = response.choices[0].message.content.trim()
      
      this.logProgress('ai-enhancement', {
        type: contentType,
        original: content.substring(0, 100) + '...',
        enhanced: enhanced.substring(0, 100) + '...',
        improvement: enhanced.length > content.length ? 'expanded' : 'refined'
      })

      return enhanced
    } catch (error) {
      console.warn(`⚠️  AI enhancement failed for ${contentType}: ${error.message}`)
      return content // Fallback to original
    }
  }

  async generateMissingContent(type, context) {
    const prompts = {
      description: `Write a compelling 2-3 sentence description for a ${context.type} project titled "${context.title}" in ${context.location}. Focus on the design impact and business outcomes.`,
      
      metaDescription: `Write a 150-character meta description for "${context.title}" - a commercial ${context.type} project. Include location and key benefits.`,
      
      altText: `Write descriptive alt text for an image showing "${context.title}" - a ${context.type} project. Focus on visible design elements and spatial qualities.`,
      
      bio: `Write a professional 2-3 sentence bio for ${context.name}, ${context.title} at Tangram Interiors. Highlight expertise and contributions to commercial design.`,
      
      headline: `Write a compelling headline for ${context.name} - a ${context.type} focus area at Tangram Interiors. Keep it under 60 characters and emphasize design innovation.`,
      
      tags: `Generate 5-8 relevant tags for a ${context.type} project. Include design styles, industries, and functional elements. Return as comma-separated list.`
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ 
          role: "user", 
          content: `${prompts[type]}\n\nBrand context: Tangram Interiors - sophisticated commercial furniture and design solutions.`
        }],
        max_tokens: 200,
        temperature: 0.4
      })

      return response.choices[0].message.content.trim()
    } catch (error) {
      console.warn(`⚠️  Failed to generate ${type}: ${error.message}`)
      return null
    }
  }

  async analyzeImage(imageUrl, context = {}) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{
          role: "user",
          content: [
            {
              type: "text",
              text: `Analyze this commercial interior/furniture image. Provide:
1. Primary design style (modern, traditional, industrial, etc.)
2. Key furniture pieces visible
3. Color palette (3-4 main colors)
4. Space type (office, healthcare, education, etc.)
5. Design mood/atmosphere
6. Suggested alt text (descriptive, professional)

Context: ${JSON.stringify(context)}

Return as JSON with keys: style, furniture, colors, spaceType, mood, altText`
            },
            {
              type: "image_url",
              image_url: { url: imageUrl }
            }
          ]
        }],
        max_tokens: 500
      })

      const responseContent = response.choices[0].message.content.trim()
      
      // Try to parse as JSON, handle cases where AI returns plain text
      let analysis
      try {
        analysis = JSON.parse(responseContent)
      } catch (jsonError) {
        console.warn(`⚠️  AI returned non-JSON response: ${responseContent.substring(0, 100)}...`)
        
        // Create fallback analysis based on context
        analysis = {
          style: 'contemporary',
          furniture: ['commercial furniture'],
          colors: ['neutral tones'],
          spaceType: context.type === 'manufacturer logo' ? 'commercial' : 'office',
          mood: 'professional',
          altText: context.type === 'manufacturer logo' 
            ? `${context.company} logo` 
            : 'Commercial interior space featuring modern furniture design'
        }
      }
      
      this.logProgress('image-analysis', {
        url: imageUrl,
        analysis: analysis,
        success: true
      })

      return analysis
    } catch (error) {
      console.warn(`⚠️  Image analysis failed: ${error.message}`)
      return {
        style: 'contemporary',
        furniture: ['office furniture'],
        colors: ['neutral tones'],
        spaceType: 'commercial',
        mood: 'professional',
        altText: context.type === 'manufacturer logo' 
          ? `${context.company} logo` 
          : 'Commercial interior space featuring modern furniture design'
      }
    }
  }

  // ==========================================
  // ENHANCED WEBFLOW DATA PROCESSING
  // ==========================================

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

  // ==========================================
  // AI-ENHANCED PROJECT MIGRATION
  // ==========================================

  async migrateProjectsWithAI() {
    console.log('🤖 Starting AI-Enhanced Project Migration...')
    
    const collections = await this.getCollections()
    const projectCollection = collections.find(c => 
      (c.name && c.name.toLowerCase().includes('project')) ||
      (c.slug && c.slug === 'projects')
    )
    
    if (!projectCollection) {
      throw new Error('Project collection not found')
    }

    const webflowProjects = await this.getCollectionItems(projectCollection.id)
    console.log(`📄 Found ${webflowProjects.length} projects to enhance and migrate`)

    let successCount = 0
    let errorCount = 0

    for (let i = 0; i < webflowProjects.length; i++) {
      const webflowProject = webflowProjects[i]
      
      try {
        console.log(`\n🔄 [${i + 1}/${webflowProjects.length}] Processing: ${webflowProject.fieldData?.name || 'Unknown Project'}`)
        
        const enhancedProject = await this.enhanceProject(webflowProject)
        await this.createEnhancedProject(enhancedProject)
        
        successCount++
        console.log(`✅ Enhanced and migrated successfully`)
        
        // Pace the requests to avoid rate limits
        if (i % 5 === 0) {
          await new Promise(resolve => setTimeout(resolve, 2000))
        }
        
      } catch (error) {
        errorCount++
        console.error(`❌ Failed: ${error.message}`)
      }
    }

    console.log(`\n🎉 AI-Enhanced Migration Complete:`)
    console.log(`   ✅ Success: ${successCount}`)
    console.log(`   ❌ Failed: ${errorCount}`)
    
    await this.saveProgressLog()
  }

  async enhanceProject(webflowProject) {
    const projectData = webflowProject.fieldData
    const context = {
      title: projectData.name,
      type: projectData['vertical-market'] || 'commercial',
      location: projectData['city-state'] || 'N/A'
    }

    console.log('   🧠 Analyzing content with AI...')

    // 1. Enhance existing text content
    const enhancedTitle = await this.analyzeAndEnhanceText(
      projectData.name, 
      'project-title', 
      context
    )

    const enhancedSubHeader = projectData['sub-header'] 
      ? await this.analyzeAndEnhanceText(projectData['sub-header'], 'sub-header', context)
      : await this.generateMissingContent('description', context)

    const enhancedWriteUp = projectData['project-write-up']
      ? await this.analyzeAndEnhanceText(projectData['project-write-up'], 'project-description', context)
      : await this.generateMissingContent('description', { ...context, detailed: true })

    // 2. Generate missing meta content
    const metaDescription = await this.generateMissingContent('metaDescription', context)
    const tags = await this.generateMissingContent('tags', context)

    // 3. Analyze and enhance images
    const enhancedImages = []
    
    if (projectData.logo && projectData.logo.url) {
      console.log('   📸 Analyzing project images...')
      
      const imageAnalysis = await this.analyzeImage(projectData.logo.url, context)
      
      // Upload image to Sanity with enhanced metadata
      try {
        const imageAsset = await sanity.assets.upload('image', projectData.logo.url, {
          filename: `${this.createSlug(enhancedTitle)}-main.jpg`,
          metadata: {
            alt: imageAnalysis.altText,
            style: imageAnalysis.style,
            colors: imageAnalysis.colors,
            mood: imageAnalysis.mood
          }
        })
        
        enhancedImages.push({
          _type: 'image',
          asset: { _ref: imageAsset._id, _type: 'reference' },
          alt: imageAnalysis.altText,
          caption: await this.generateMissingContent('altText', context),
          // Add AI-generated metadata
          metadata: {
            style: imageAnalysis.style,
            furniture: imageAnalysis.furniture,
            colors: imageAnalysis.colors,
            spaceType: imageAnalysis.spaceType,
            mood: imageAnalysis.mood
          }
        })
      } catch (error) {
        console.warn(`   ⚠️  Image upload failed: ${error.message}`)
      }
    }

    // 4. Create enhanced project structure
    return {
      original: webflowProject,
      enhanced: {
        _type: 'project',
        title: enhancedTitle,
        slug: { _type: 'slug', current: this.createSlug(enhancedTitle) },
        subHeader: enhancedSubHeader,
        description: enhancedWriteUp,
        metaDescription: metaDescription,
        
        images: enhancedImages,
        
        // Enhanced categorization
        businessUnit: this.mapBusinessUnit(projectData['business-unit']),
        verticalMarket: this.mapVerticalMarket(projectData['vertical-market']),
        industryType: this.mapIndustryType(projectData['industry-type']),
        
        // Generated tags for better discoverability
        tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
        
        // Location data
        address: {
          _type: 'object',
          street: projectData['street-address'],
          cityState: projectData['city-state'],
          coordinates: {
            lat: projectData.lattitude ? parseFloat(projectData.lattitude) : null,
            lng: projectData.longitude ? parseFloat(projectData.longitude) : null
          }
        },
        
        // Project metrics
        yearCompleted: projectData['year-completed'] ? parseInt(projectData['year-completed']) : null,
        squareFootage: projectData['square-footage'],
        
        // Enhanced content blocks
        writeUp: enhancedWriteUp ? await this.transformToBlocks(enhancedWriteUp) : null,
        
        // AI-generated quality scores (for internal use)
        aiEnhanced: true,
        contentQuality: {
          textEnhanced: true,
          imagesAnalyzed: enhancedImages.length > 0,
          metaGenerated: !!metaDescription,
          tagsGenerated: !!tags
        },
        
        // Metadata
        featured: projectData.featured || false,
        archived: webflowProject.isArchived || false,
        
        // Sync data
        webflowId: webflowProject.id,
        webflowUpdated: webflowProject.lastUpdated,
        lastSynced: new Date().toISOString(),
        enhancedAt: new Date().toISOString()
      }
    }
  }

  async createEnhancedProject(enhancedProject) {
    const slug = enhancedProject.enhanced.slug.current
    
    // Check if already exists
    const existing = await sanity.fetch(
      `*[_type == "project" && slug.current == $slug][0]`,
      { slug }
    )
    
    if (existing) {
      console.log('   ⚠️  Project already exists, skipping...')
      return { status: 'skipped' }
    }

    const result = await sanity.create(enhancedProject.enhanced)
    return { status: 'success', sanityId: result._id }
  }

  // ==========================================
  // AI-ENHANCED TEAM MEMBER MIGRATION
  // ==========================================

  async migrateTeamMembersWithAI() {
    console.log('🤖 Starting AI-Enhanced Team Member Migration...')
    
    const collections = await this.getCollections()
    const teamCollection = collections.find(c => 
      (c.name && c.name.toLowerCase().includes('team')) ||
      (c.slug && c.slug === 'team')
    )
    
    if (!teamCollection) {
      throw new Error('Team collection not found')
    }

    const webflowTeamMembers = await this.getCollectionItems(teamCollection.id)
    console.log(`📄 Found ${webflowTeamMembers.length} team members to enhance and migrate`)

    let successCount = 0
    let errorCount = 0

    for (let i = 0; i < webflowTeamMembers.length; i++) {
      const webflowMember = webflowTeamMembers[i]
      
      try {
        console.log(`\n🔄 [${i + 1}/${webflowTeamMembers.length}] Processing: ${webflowMember.fieldData?.name || 'Unknown Member'}`)
        
        const enhancedMember = await this.enhanceTeamMember(webflowMember)
        await this.createEnhancedTeamMember(enhancedMember)
        
        successCount++
        console.log(`✅ Enhanced and migrated successfully`)
        
      } catch (error) {
        errorCount++
        console.error(`❌ Failed: ${error.message}`)
      }
    }

    console.log(`\n🎉 Team Member AI-Enhancement Complete:`)
    console.log(`   ✅ Success: ${successCount}`)
    console.log(`   ❌ Failed: ${errorCount}`)
  }

  async enhanceTeamMember(webflowMember) {
    const memberData = webflowMember.fieldData
    const context = {
      name: memberData.name,
      title: memberData.title,
      department: memberData.department
    }

    console.log('   🧠 Enhancing team member profile...')

    // Enhance existing content
    const enhancedBio = memberData['tangram-ten']
      ? await this.analyzeAndEnhanceText(memberData['tangram-ten'], 'bio', context)
      : await this.generateMissingContent('bio', context)

    // Handle headshot with AI analysis
    let enhancedHeadshot = null
    if (memberData.avatar && memberData.avatar.url) {
      console.log('   📸 Processing headshot...')
      
      try {
        const imageAsset = await sanity.assets.upload('image', memberData.avatar.url, {
          filename: `${this.createSlug(memberData.name)}-headshot.jpg`,
          metadata: {
            alt: `Professional headshot of ${memberData.name}, ${memberData.title} at Tangram Interiors`
          }
        })
        
        enhancedHeadshot = {
          _type: 'image',
          asset: { _ref: imageAsset._id, _type: 'reference' },
          alt: `${memberData.name} - ${memberData.title}`
        }
      } catch (error) {
        console.warn(`   ⚠️  Headshot upload failed: ${error.message}`)
      }
    }

    return {
      original: webflowMember,
      enhanced: {
        _type: 'teamMember',
        name: memberData.name,
        slug: { _type: 'slug', current: this.createSlug(memberData.name) },
        title: memberData.title,
        email: memberData.email,
        
        headshot: enhancedHeadshot,
        
        // Enhanced bio
        bio: enhancedBio ? await this.transformToBlocks(enhancedBio) : null,
        
        department: this.mapDepartment(memberData.department),
        
        // AI enhancement metadata
        aiEnhanced: true,
        contentQuality: {
          bioEnhanced: !!enhancedBio,
          headshotProcessed: !!enhancedHeadshot
        },
        
        // Standard fields
        featured: false,
        archived: webflowMember.isArchived || false,
        seniorLeadership: memberData['senior-leadership'] || false,
        
        // Sync metadata
        webflowId: webflowMember.id,
        webflowUpdated: webflowMember.lastUpdated,
        lastSynced: new Date().toISOString(),
        enhancedAt: new Date().toISOString()
      }
    }
  }

  async createEnhancedTeamMember(enhancedMember) {
    const slug = enhancedMember.enhanced.slug.current
    
    const existing = await sanity.fetch(
      `*[_type == "teamMember" && slug.current == $slug][0]`,
      { slug }
    )
    
    if (existing) {
      console.log('   ⚠️  Team member already exists, skipping...')
      return { status: 'skipped' }
    }

    const result = await sanity.create(enhancedMember.enhanced)
    return { status: 'success', sanityId: result._id }
  }

  // ==========================================
  // AI-ENHANCED MANUFACTURER MIGRATION
  // ==========================================

  async migrateManufacturersWithAI() {
    console.log('🏭 Starting AI-Enhanced Manufacturer Migration...')
    
    try {
      // Get Partners collection (contains manufacturers)
      const collections = await this.getCollections()
      const partnersCollection = collections.find(c => c.displayName === 'Partners')
      
      if (!partnersCollection) {
        throw new Error('Partners collection not found in Webflow')
      }

      const webflowPartners = await this.getCollectionItems(partnersCollection.id)
      console.log(`📦 Found ${webflowPartners.length} partners/manufacturers to migrate`)

      let migrated = 0
      let enhanced = 0

      for (const partner of webflowPartners) {
        try {
          console.log(`\n🏭 Processing: ${partner.fieldData.name}`)
          
          const enhancedManufacturer = await this.enhanceManufacturer(partner)
          await this.createEnhancedManufacturer(enhancedManufacturer)
          
          migrated++
          if (enhancedManufacturer.wasEnhanced) enhanced++
          
          // Rate limiting for OpenAI API
          await new Promise(resolve => setTimeout(resolve, 1000))
          
        } catch (error) {
          console.error(`❌ Failed to migrate ${partner.fieldData.name}:`, error.message)
        }
      }

      console.log('\n🎉 Manufacturer Migration Complete!')
      console.log(`   📦 Migrated: ${migrated}/${webflowPartners.length}`)
      console.log(`   🤖 AI Enhanced: ${enhanced}`)
      
      await this.saveProgressLog()
      
    } catch (error) {
      console.error('❌ Manufacturer migration failed:', error.message)
      throw error
    }
  }

  async enhanceManufacturer(webflowPartner) {
    const manufacturer = {
      _type: 'manufacturer',
      name: webflowPartner.fieldData.name || 'Unknown Manufacturer',
      slug: { 
        _type: 'slug', 
        current: this.createSlug(webflowPartner.fieldData.name || webflowPartner.fieldData.slug || 'unknown')
      },
      website: webflowPartner.fieldData.website || null,
      wasEnhanced: false,
      enhancementMetrics: {
        qualityScore: 50, // Base score
        lastEnhanced: new Date().toISOString(),
        enhancementCount: 0
      }
    }

    // Handle logo image
    if (webflowPartner.fieldData.logo && webflowPartner.fieldData.logo.url) {
      try {
        console.log(`   📸 Downloading and uploading logo for ${manufacturer.name}...`)
        
        // First download the image from Webflow
        const imageResponse = await fetch(webflowPartner.fieldData.logo.url)
        if (!imageResponse.ok) {
          throw new Error(`Failed to fetch image: ${imageResponse.status}`)
        }
        
        // Get the image as a buffer
        const imageBuffer = await imageResponse.arrayBuffer()
        const buffer = Buffer.from(imageBuffer)
        
        // Upload the buffer to Sanity
        const imageAsset = await sanity.assets.upload('image', buffer, {
          filename: `${this.createSlug(manufacturer.name)}-logo.jpg`,
          metadata: {
            alt: `${manufacturer.name} logo`,
            source: 'webflow-migration'
          }
        })
        
        // Then analyze the image with AI
        const imageAnalysis = await this.analyzeImage(
          webflowPartner.fieldData.logo.url,
          { type: 'manufacturer logo', company: manufacturer.name }
        )
        
        manufacturer.logo = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id
          },
          alt: imageAnalysis.altText || `${manufacturer.name} logo`,
          hotspot: {
            _type: 'sanity.imageHotspot',
            x: 0.5,
            y: 0.5,
            height: 1,
            width: 1
          }
        }
        
        manufacturer.enhancementMetrics.enhancementCount++
        manufacturer.wasEnhanced = true
        console.log(`   ✅ Logo downloaded and uploaded successfully`)

      } catch (error) {
        console.warn(`⚠️ Could not upload logo for ${manufacturer.name}: ${error.message}`)
        // Skip logo if upload fails - don't create broken references
      }
    }

    // Generate AI-enhanced description
    if (!webflowPartner.fieldData.description || webflowPartner.fieldData.description.length < 50) {
      try {
        const description = await this.generateMissingContent('description', {
          type: 'manufacturer',
          name: manufacturer.name,
          website: manufacturer.website
        })
        
        if (description) {
          manufacturer.description = description
          manufacturer.enhancementMetrics.enhancementCount++
          manufacturer.wasEnhanced = true
        }
      } catch (error) {
        console.warn(`⚠️ Could not generate description for ${manufacturer.name}`)
      }
    }

    // Set partnership level based on name/website analysis
    manufacturer.partnershipLevel = this.determinePartnershipLevel(manufacturer.name, manufacturer.website)

    // Generate tags and specialties
    try {
      const tags = await this.generateMissingContent('tags', {
        type: 'manufacturer',
        name: manufacturer.name
      })
      
      if (tags) {
        manufacturer.tags = tags.split(',').map(tag => tag.trim())
        manufacturer.specialties = manufacturer.tags.slice(0, 3) // First 3 as specialties
        manufacturer.enhancementMetrics.enhancementCount++
        manufacturer.wasEnhanced = true
      }
    } catch (error) {
      console.warn(`⚠️ Could not generate tags for ${manufacturer.name}`)
    }

    // Generate SEO meta description
    try {
      const metaDescription = await this.generateMissingContent('metaDescription', {
        type: 'manufacturer',
        name: manufacturer.name
      })
      
      if (metaDescription) {
        manufacturer.metaDescription = metaDescription
        manufacturer.enhancementMetrics.enhancementCount++
        manufacturer.wasEnhanced = true
      }
    } catch (error) {
      console.warn(`⚠️ Could not generate meta description for ${manufacturer.name}`)
    }

    // Set default values
    manufacturer.status = 'active'
    manufacturer.featured = false

    // Calculate final quality score
    const baseScore = 50
    const enhancementBonus = manufacturer.enhancementMetrics.enhancementCount * 10
    const completenessBonus = this.calculateCompleteness(manufacturer) * 20
    
    manufacturer.enhancementMetrics.qualityScore = Math.min(100, baseScore + enhancementBonus + completenessBonus)

    this.logProgress('manufacturer-enhanced', {
      name: manufacturer.name,
      enhancements: manufacturer.enhancementMetrics.enhancementCount,
      qualityScore: manufacturer.enhancementMetrics.qualityScore
    })

    return manufacturer
  }

  async createEnhancedManufacturer(manufacturer) {
    try {
      const result = await sanity.create(manufacturer)
      console.log(`   ✅ Created: ${manufacturer.name} (Quality: ${manufacturer.enhancementMetrics.qualityScore}%)`)
      return result
    } catch (error) {
      console.error(`   ❌ Failed to create ${manufacturer.name}:`, error.message)
      throw error
    }
  }

  determinePartnershipLevel(name, website) {
    const nameUpper = name.toUpperCase()
    
    // Premier partners (major furniture manufacturers)
    if (nameUpper.includes('HERMAN MILLER') || 
        nameUpper.includes('STEELCASE') || 
        nameUpper.includes('KNOLL') ||
        nameUpper.includes('HAWORTH') ||
        nameUpper.includes('KIMBALL')) {
      return 'premier'
    }
    
    // Preferred partners (established brands)
    if (website && website.includes('.com')) {
      return 'preferred'
    }
    
    return 'authorized'
  }

  calculateCompleteness(manufacturer) {
    let score = 0
    const fields = ['name', 'description', 'logo', 'website', 'tags', 'metaDescription']
    
    fields.forEach(field => {
      if (manufacturer[field] && manufacturer[field] !== null) {
        score += 1
      }
    })
    
    return score / fields.length
  }

  // ==========================================
  // AI-ENHANCED VERTICAL MARKETS MIGRATION
  // ==========================================

  async migrateVerticalMarketsWithAI() {
    console.log('🏢 Starting AI-Enhanced Vertical Markets Migration...')
    
    try {
      // Get Vertical Markets collection
      const collections = await this.getCollections()
      const verticalMarketsCollection = collections.find(c => 
        c.displayName === 'Vertical Markets' || c.slug === 'vertical-markets'
      )
      
      if (!verticalMarketsCollection) {
        throw new Error('Vertical Markets collection not found in Webflow')
      }

      const webflowMarkets = await this.getCollectionItems(verticalMarketsCollection.id)
      console.log(`📦 Found ${webflowMarkets.length} vertical markets to migrate`)

      let migrated = 0
      let enhanced = 0

      for (const market of webflowMarkets) {
        try {
          console.log(`\n🏢 Processing: ${market.fieldData.name}`)
          
          const enhancedMarket = await this.enhanceVerticalMarket(market)
          await this.createEnhancedVerticalMarket(enhancedMarket)
          
          migrated++
          if (enhancedMarket.wasEnhanced) enhanced++
          
          // Rate limiting for OpenAI API
          await new Promise(resolve => setTimeout(resolve, 2000))
          
        } catch (error) {
          console.error(`❌ Failed to migrate ${market.fieldData.name}:`, error.message)
        }
      }

      console.log('\n🎉 Vertical Markets Migration Complete!')
      console.log(`   📦 Migrated: ${migrated}/${webflowMarkets.length}`)
      console.log(`   🤖 AI Enhanced: ${enhanced}`)
      
      await this.saveProgressLog()
      
    } catch (error) {
      console.error('❌ Vertical Markets migration failed:', error.message)
      throw error
    }
  }

  async enhanceVerticalMarket(webflowMarket) {
    const market = {
      _type: 'verticalMarket',
      name: webflowMarket.fieldData.name || 'Unknown Market',
      slug: { 
        _type: 'slug', 
        current: this.createSlug(webflowMarket.fieldData.name || webflowMarket.fieldData.slug || 'unknown')
      },
      wasEnhanced: false,
      enhancementMetrics: {
        qualityScore: 50, // Base score
        lastEnhanced: new Date().toISOString(),
        enhancementCount: 0
      }
    }

    // Generate AI-enhanced headline
    if (!webflowMarket.fieldData.headline || webflowMarket.fieldData.headline.length < 20) {
      try {
        const headline = await this.generateMissingContent('headline', {
          type: 'vertical market',
          name: market.name
        })
        
        if (headline) {
          market.headline = headline
          market.enhancementMetrics.enhancementCount++
          market.wasEnhanced = true
        }
      } catch (error) {
        console.warn(`⚠️ Could not generate headline for ${market.name}`)
      }
    } else {
      market.headline = webflowMarket.fieldData.headline
    }

    // Generate AI-enhanced overview
    try {
      const overview = await this.generateMissingContent('description', {
        type: 'vertical market overview',
        name: market.name,
        context: 'commercial furniture and design solutions'
      })
      
      if (overview) {
        market.overviewParagraph = await this.transformToBlocks(overview)
        market.enhancementMetrics.enhancementCount++
        market.wasEnhanced = true
      }
    } catch (error) {
      console.warn(`⚠️ Could not generate overview for ${market.name}`)
    }

    // Generate content sections with AI
    market.sections = []
    try {
      const sectionTitles = this.generateVerticalMarketSections(market.name)
      
      for (const title of sectionTitles) {
        const sectionContent = await this.generateMissingContent('description', {
          type: 'vertical market section',
          name: market.name,
          section: title,
          context: 'commercial design solutions and workplace strategy'
        })
        
        if (sectionContent) {
          market.sections.push({
            _type: 'object',
            _key: this.createSlug(title),
            title: title,
            content: await this.transformToBlocks(sectionContent)
          })
          market.enhancementMetrics.enhancementCount++
        }
      }
      
      if (market.sections.length > 0) {
        market.wasEnhanced = true
      }
    } catch (error) {
      console.warn(`⚠️ Could not generate sections for ${market.name}`)
    }

    // Generate SEO meta description
    try {
      const metaDescription = await this.generateMissingContent('metaDescription', {
        type: 'vertical market',
        name: market.name
      })
      
      if (metaDescription) {
        market.metaDescription = metaDescription
        market.enhancementMetrics.enhancementCount++
        market.wasEnhanced = true
      }
    } catch (error) {
      console.warn(`⚠️ Could not generate meta description for ${market.name}`)
    }

    // Generate market tags
    try {
      const tags = await this.generateMissingContent('tags', {
        type: 'vertical market',
        name: market.name
      })
      
      if (tags) {
        market.tags = tags.split(',').map(tag => tag.trim())
        market.enhancementMetrics.enhancementCount++
        market.wasEnhanced = true
      }
    } catch (error) {
      console.warn(`⚠️ Could not generate tags for ${market.name}`)
    }

    // Set default values
    market.featured = false
    market.displayOrder = this.calculateDisplayOrder(market.name)

    // Calculate final quality score
    const baseScore = 50
    const enhancementBonus = market.enhancementMetrics.enhancementCount * 8
    const completenessBonus = this.calculateMarketCompleteness(market) * 25
    
    market.enhancementMetrics.qualityScore = Math.min(100, baseScore + enhancementBonus + completenessBonus)

    this.logProgress('vertical-market-enhanced', {
      name: market.name,
      sections: market.sections.length,
      enhancements: market.enhancementMetrics.enhancementCount,
      qualityScore: market.enhancementMetrics.qualityScore
    })

    return market
  }

  async createEnhancedVerticalMarket(market) {
    try {
      const result = await sanity.create(market)
      console.log(`   ✅ Created: ${market.name} (${market.sections.length} sections, Quality: ${Math.round(market.enhancementMetrics.qualityScore)}%)`)
      return result
    } catch (error) {
      console.error(`   ❌ Failed to create ${market.name}:`, error.message)
      throw error
    }
  }

  generateVerticalMarketSections(marketName) {
    const marketLower = marketName.toLowerCase()
    
    if (marketLower.includes('healthcare')) {
      return [
        'Design for Healing',
        'Patient Experience',
        'Clinical Efficiency',
        'Infection Control Solutions'
      ]
    } else if (marketLower.includes('education')) {
      return [
        'Learning Environment Design',
        'Flexible Classroom Solutions',
        'Campus Common Areas',
        'Technology Integration'
      ]
    } else if (marketLower.includes('workplace') || marketLower.includes('corporate')) {
      return [
        'Workplace Strategy',
        'Collaboration Spaces',
        'Employee Wellbeing',
        'Future of Work'
      ]
    } else {
      return [
        'Design Excellence',
        'Functional Solutions',
        'User Experience',
        'Innovation Focus'
      ]
    }
  }

  calculateDisplayOrder(marketName) {
    const priorities = {
      'workplace': 1,
      'corporate': 2,
      'healthcare': 3,
      'education': 4,
      'hospitality': 5
    }
    
    const marketLower = marketName.toLowerCase()
    for (const [key, order] of Object.entries(priorities)) {
      if (marketLower.includes(key)) {
        return order
      }
    }
    
    return 10 // Default order
  }

  calculateMarketCompleteness(market) {
    let score = 0
    const fields = ['name', 'headline', 'overviewParagraph', 'sections', 'metaDescription', 'tags']
    
    fields.forEach(field => {
      if (market[field] && market[field] !== null) {
        if (field === 'sections' && Array.isArray(market[field])) {
          score += market[field].length > 0 ? 1 : 0
        } else {
          score += 1
        }
      }
    })
    
    return score / fields.length
  }

  // ==========================================
  // AI-ENHANCED PRODUCT CATEGORIES MIGRATION
  // ==========================================

  async migrateProductCategoriesWithAI() {
    console.log('📂 Starting AI-Enhanced Product Categories Migration...')
    
    try {
      // Get Categories collection
      const collections = await this.getCollections()
      const categoriesCollection = collections.find(c => 
        c.displayName === 'Categories' || c.slug === 'categories'
      )
      
      if (!categoriesCollection) {
        throw new Error('Categories collection not found in Webflow')
      }

      const webflowCategories = await this.getCollectionItems(categoriesCollection.id)
      console.log(`📦 Found ${webflowCategories.length} product categories to migrate`)

      let migrated = 0
      let enhanced = 0

      for (const category of webflowCategories) {
        try {
          console.log(`\n📂 Processing: ${category.fieldData.name}`)
          
          const enhancedCategory = await this.enhanceProductCategory(category)
          await this.createEnhancedProductCategory(enhancedCategory)
          
          migrated++
          if (enhancedCategory.wasEnhanced) enhanced++
          
          // Shorter delay for simpler categories
          await new Promise(resolve => setTimeout(resolve, 500))
          
        } catch (error) {
          console.error(`❌ Failed to migrate ${category.fieldData.name}:`, error.message)
        }
      }

      console.log('\n🎉 Product Categories Migration Complete!')
      console.log(`   📦 Migrated: ${migrated}/${webflowCategories.length}`)
      console.log(`   🤖 AI Enhanced: ${enhanced}`)
      
      await this.saveProgressLog()
      
    } catch (error) {
      console.error('❌ Product Categories migration failed:', error.message)
      throw error
    }
  }

  async enhanceProductCategory(webflowCategory) {
    const category = {
      _type: 'productCategory',
      name: webflowCategory.fieldData.name || 'Unknown Category',
      slug: { 
        _type: 'slug', 
        current: this.createSlug(webflowCategory.fieldData.name || webflowCategory.fieldData.slug || 'unknown')
      },
      wasEnhanced: false,
      enhancementMetrics: {
        qualityScore: 70, // Base score for categories
        lastEnhanced: new Date().toISOString(),
        enhancementCount: 0
      }
    }

    // Generate AI-enhanced description
    try {
      const description = await this.generateMissingContent('description', {
        type: 'product category',
        name: category.name,
        context: 'commercial furniture and workplace solutions'
      })
      
      if (description) {
        category.description = description
        category.enhancementMetrics.enhancementCount++
        category.wasEnhanced = true
      }
    } catch (error) {
      console.warn(`⚠️ Could not generate description for ${category.name}`)
    }

    // Set category hierarchy and display order
    category.displayOrder = this.calculateCategoryDisplayOrder(category.name)
    category.featured = this.isFeaturedCategory(category.name)

    // Calculate final quality score
    const baseScore = 70
    const enhancementBonus = category.enhancementMetrics.enhancementCount * 15
    const completenessBonus = category.description ? 15 : 0
    
    category.enhancementMetrics.qualityScore = Math.min(100, baseScore + enhancementBonus + completenessBonus)

    this.logProgress('product-category-enhanced', {
      name: category.name,
      enhancements: category.enhancementMetrics.enhancementCount,
      qualityScore: category.enhancementMetrics.qualityScore
    })

    return category
  }

  async createEnhancedProductCategory(category) {
    try {
      const result = await sanity.create(category)
      console.log(`   ✅ Created: ${category.name} (Quality: ${Math.round(category.enhancementMetrics.qualityScore)}%)`)
      return result
    } catch (error) {
      console.error(`   ❌ Failed to create ${category.name}:`, error.message)
      throw error
    }
  }

  calculateCategoryDisplayOrder(categoryName) {
    const categoryPriorities = {
      'seating': 1,
      'furniture': 2,
      'tables': 3,
      'workstations': 4,
      'storage': 5,
      'lighting': 6,
      'technology': 7,
      'accessories': 8
    }
    
    const categoryLower = categoryName.toLowerCase()
    for (const [key, order] of Object.entries(categoryPriorities)) {
      if (categoryLower.includes(key)) {
        return order
      }
    }
    
    return 10 // Default order
  }

  isFeaturedCategory(categoryName) {
    const featuredCategories = ['seating', 'tables', 'workstations', 'furniture']
    const categoryLower = categoryName.toLowerCase()
    
    return featuredCategories.some(featured => categoryLower.includes(featured))
  }

  // ==========================================
  // AI-ENHANCED PRODUCTS MIGRATION
  // ==========================================

  async migrateProductsWithAI() {
    console.log('📦 Starting AI-Enhanced Products Migration...')
    
    try {
      // Get Featured Products collection
      const collections = await this.getCollections()
      const productsCollection = collections.find(c => 
        c.displayName === 'Featured Products' || c.slug === 'featured-products'
      )
      
      if (!productsCollection) {
        throw new Error('Featured Products collection not found in Webflow')
      }

      const webflowProducts = await this.getCollectionItems(productsCollection.id)
      console.log(`📦 Found ${webflowProducts.length} products to migrate`)

      // Get existing manufacturers for relationships
      const manufacturers = await sanity.fetch(`*[_type == "manufacturer"]{_id, name, slug}`)
      const manufacturerMap = new Map(manufacturers.map(m => [m.name.toLowerCase(), m]))

      console.log(`🔗 Found ${manufacturers.length} manufacturers for product relationships`)

      let migrated = 0
      let enhanced = 0
      let withManufacturers = 0

      for (let i = 0; i < webflowProducts.length; i++) {
        const product = webflowProducts[i]
        
        try {
          console.log(`\n📦 Processing [${i + 1}/${webflowProducts.length}]: ${product.fieldData.name}`)
          
          const enhancedProduct = await this.enhanceProduct(product, manufacturerMap)
          await this.createEnhancedProduct(enhancedProduct)
          
          migrated++
          if (enhancedProduct.wasEnhanced) enhanced++
          if (enhancedProduct.manufacturer) withManufacturers++
          
          // Rate limiting - products are numerous
          if (i % 10 === 0) {
            await new Promise(resolve => setTimeout(resolve, 2000))
          } else {
            await new Promise(resolve => setTimeout(resolve, 200))
          }
          
        } catch (error) {
          console.error(`❌ Failed to migrate ${product.fieldData.name}:`, error.message)
        }
      }

      console.log('\n🎉 Products Migration Complete!')
      console.log(`   📦 Migrated: ${migrated}/${webflowProducts.length}`)
      console.log(`   🤖 AI Enhanced: ${enhanced}`)
      console.log(`   🔗 With Manufacturers: ${withManufacturers}`)
      
      await this.saveProgressLog()
      
    } catch (error) {
      console.error('❌ Products migration failed:', error.message)
      throw error
    }
  }

  async enhanceProduct(webflowProduct, manufacturerMap) {
    const product = {
      _type: 'product',
      title: webflowProduct.fieldData.name || 'Unknown Product',
      slug: { 
        _type: 'slug', 
        current: this.createSlug(webflowProduct.fieldData.name || webflowProduct.fieldData.slug || 'unknown')
      },
      wasEnhanced: false,
      enhancementMetrics: {
        qualityScore: 60, // Base score for products
        lastEnhanced: new Date().toISOString(),
        enhancementCount: 0
      }
    }

    // Handle existing description or generate new one
    if (webflowProduct.fieldData.description && webflowProduct.fieldData.description.length > 20) {
      try {
        const enhancedDescription = await this.analyzeAndEnhanceText(
          webflowProduct.fieldData.description,
          'product-description',
          { product: product.title }
        )
        product.description = enhancedDescription
        product.enhancementMetrics.enhancementCount++
        product.wasEnhanced = true
      } catch (error) {
        console.warn(`⚠️ Could not enhance description for ${product.title}`)
        product.description = webflowProduct.fieldData.description
      }
    } else {
      try {
        const description = await this.generateMissingContent('description', {
          type: 'commercial furniture product',
          name: product.title,
          context: 'workplace and commercial design solutions'
        })
        
        if (description) {
          product.description = description
          product.enhancementMetrics.enhancementCount++
          product.wasEnhanced = true
        }
      } catch (error) {
        console.warn(`⚠️ Could not generate description for ${product.title}`)
      }
    }

    // Find and link manufacturer
    if (webflowProduct.fieldData.manufacturer) {
      const manufacturerName = webflowProduct.fieldData.manufacturer.toLowerCase()
      const manufacturer = manufacturerMap.get(manufacturerName)
      
      if (manufacturer) {
        product.manufacturer = {
          _type: 'reference',
          _ref: manufacturer._id
        }
        console.log(`   🔗 Linked to manufacturer: ${manufacturer.name}`)
      } else {
        console.log(`   ⚠️ Manufacturer not found: ${webflowProduct.fieldData.manufacturer}`)
      }
    }

    // Handle product image
    if (webflowProduct.fieldData['featured-image'] && webflowProduct.fieldData['featured-image'].url) {
      try {
        console.log(`   📸 Processing product image...`)
        
        // Download and upload the image
        const imageResponse = await fetch(webflowProduct.fieldData['featured-image'].url)
        if (imageResponse.ok) {
          const imageBuffer = await imageResponse.arrayBuffer()
          const buffer = Buffer.from(imageBuffer)
          
          const imageAsset = await sanity.assets.upload('image', buffer, {
            filename: `${this.createSlug(product.title)}-featured.jpg`,
            metadata: {
              alt: `${product.title} commercial furniture`,
              source: 'webflow-migration'
            }
          })
          
          product.featuredImage = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id
            },
            alt: `${product.title} - Commercial furniture solution`,
            hotspot: {
              _type: 'sanity.imageHotspot',
              x: 0.5,
              y: 0.5,
              height: 1,
              width: 1
            }
          }
          
          product.enhancementMetrics.enhancementCount++
          product.wasEnhanced = true
          console.log(`   ✅ Product image uploaded successfully`)
        }
      } catch (error) {
        console.warn(`⚠️ Could not upload image for ${product.title}: ${error.message}`)
      }
    }

    // Map product category
    if (webflowProduct.fieldData['product-category']) {
      product.category = this.mapProductCategory(webflowProduct.fieldData['product-category'])
    }

    // Handle vertical market relationships
    if (webflowProduct.fieldData['vertical-market']) {
      // We'll map this once vertical markets are migrated
      product.verticalMarketRaw = webflowProduct.fieldData['vertical-market']
    }

    // Set featured status
    product.featured = webflowProduct.fieldData.featured || false

    // Website link
    if (webflowProduct.fieldData['product-website']) {
      product.website = webflowProduct.fieldData['product-website']
    }

    // Calculate final quality score
    const baseScore = 60
    const enhancementBonus = product.enhancementMetrics.enhancementCount * 10
    const completenessBonus = this.calculateProductCompleteness(product) * 25
    
    product.enhancementMetrics.qualityScore = Math.min(100, baseScore + enhancementBonus + completenessBonus)

    this.logProgress('product-enhanced', {
      name: product.title,
      hasManufacturer: !!product.manufacturer,
      hasImage: !!product.featuredImage,
      enhancements: product.enhancementMetrics.enhancementCount,
      qualityScore: product.enhancementMetrics.qualityScore
    })

    return product
  }

  async createEnhancedProduct(product) {
    try {
      const result = await sanity.create(product)
      const manufacturerInfo = product.manufacturer ? ' 🔗' : ''
      const imageInfo = product.featuredImage ? ' 📸' : ''
      console.log(`   ✅ Created: ${product.title} (Quality: ${Math.round(product.enhancementMetrics.qualityScore)}%)${manufacturerInfo}${imageInfo}`)
      return result
    } catch (error) {
      console.error(`   ❌ Failed to create ${product.title}:`, error.message)
      throw error
    }
  }

  mapProductCategory(webflowCategory) {
    const categoryMap = {
      'seating': 'seating',
      'tables': 'tables', 
      'storage': 'storage',
      'lighting': 'lighting',
      'accessories': 'accessories',
      'workstations': 'workstations',
      'lounge': 'lounge',
      'systems': 'systems'
    }
    
    return categoryMap[webflowCategory] || webflowCategory
  }

  calculateProductCompleteness(product) {
    let score = 0
    const fields = ['title', 'description', 'manufacturer', 'featuredImage', 'category']
    
    fields.forEach(field => {
      if (product[field] && product[field] !== null) {
        score += 1
      }
    })
    
    return score / fields.length
  }

  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================

  async transformToBlocks(text) {
    if (!text) return null
    
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
            text: text,
            marks: []
          }
        ]
      }
    ]
  }

  createSlug(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  mapDepartment(webflowDept) {
    const deptMap = {
      'leadership': 'leadership',
      'design': 'design', 
      'project-management': 'project-management',
      'sales': 'sales',
      'operations': 'operations'
    }
    return deptMap[webflowDept] || webflowDept
  }

  mapBusinessUnit(webflowUnit) {
    const unitMap = {
      'contract-furniture': 'contract-furniture',
      'architectural-walls': 'architectural-walls',
      'technology': 'technology'
    }
    return unitMap[webflowUnit] || webflowUnit
  }

  mapVerticalMarket(webflowMarket) {
    const marketMap = {
      'corporate': 'corporate',
      'healthcare': 'healthcare', 
      'education': 'higher-education'
    }
    return marketMap[webflowMarket] || webflowMarket
  }

  mapIndustryType(webflowIndustry) {
    const industryMap = {
      'creative': 'creative',
      'professional-services': 'professional-services',
      'healthcare': 'healthcare'
    }
    return industryMap[webflowIndustry] || webflowIndustry
  }

  logProgress(type, data) {
    this.progressLog.push({
      timestamp: new Date().toISOString(),
      type: type,
      data: data
    })
  }

  async saveProgressLog() {
    const logPath = path.join(__dirname, 'ai-migration-log.json')
    await fs.writeFile(logPath, JSON.stringify(this.progressLog, null, 2))
    console.log(`📝 Migration log saved to: ${logPath}`)
  }

  // ==========================================
  // MIGRATION ANALYSIS & REPORTING
  // ==========================================

  async analyzeMigrationOpportunities() {
    console.log('🔍 Analyzing Webflow content for migration opportunities...')
    
    const collections = await this.getCollections()
    const report = {
      timestamp: new Date().toISOString(),
      collections: {},
      recommendations: []
    }

    for (const collection of collections) {
      const items = await this.getCollectionItems(collection.id)
      const sampleItem = items[0]
      
      if (sampleItem && sampleItem.fieldData) {
        const analysis = await this.analyzeContentQuality(sampleItem.fieldData, collection.displayName)
        
        report.collections[collection.displayName] = {
          id: collection.id,
          itemCount: items.length,
          fields: Object.keys(sampleItem.fieldData),
          contentQuality: analysis,
          enhancementPotential: this.calculateEnhancementPotential(analysis)
        }
      }
    }

    // Generate recommendations
    report.recommendations = this.generateMigrationRecommendations(report.collections)
    
    const reportPath = path.join(__dirname, 'migration-analysis-report.json')
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2))
    
    console.log('📊 Migration Analysis Complete:')
    console.log(`   📝 Report saved to: ${reportPath}`)
    console.log(`   🔍 Collections analyzed: ${Object.keys(report.collections).length}`)
    console.log(`   💡 Recommendations generated: ${report.recommendations.length}`)
    
    return report
  }

  async analyzeContentQuality(fieldData, collectionName) {
    const analysis = {
      textFields: 0,
      imageFields: 0,
      missingContent: [],
      lowQualityContent: [],
      enhancementOpportunities: []
    }

    for (const [key, value] of Object.entries(fieldData)) {
      if (typeof value === 'string') {
        analysis.textFields++
        
        if (!value || value.length < 10) {
          analysis.missingContent.push(key)
        } else if (value.length < 50 || !value.includes(' ')) {
          analysis.lowQualityContent.push(key)
        }
        
        // Check for enhancement opportunities
        if (key.includes('description') || key.includes('bio') || key.includes('write')) {
          analysis.enhancementOpportunities.push({
            field: key,
            type: 'text-enhancement',
            reason: 'Professional writing improvement'
          })
        }
      }
      
      if (value && typeof value === 'object' && value.url) {
        analysis.imageFields++
        
        if (!value.alt) {
          analysis.enhancementOpportunities.push({
            field: key,
            type: 'image-analysis',
            reason: 'Missing alt text and metadata'
          })
        }
      }
    }

    return analysis
  }

  calculateEnhancementPotential(analysis) {
    const totalFields = analysis.textFields + analysis.imageFields
    const improvableFields = analysis.missingContent.length + 
                           analysis.lowQualityContent.length + 
                           analysis.enhancementOpportunities.length
    
    return totalFields > 0 ? Math.round((improvableFields / totalFields) * 100) : 0
  }

  generateMigrationRecommendations(collections) {
    const recommendations = []
    
    for (const [name, data] of Object.entries(collections)) {
      if (data.enhancementPotential > 50) {
        recommendations.push({
          priority: 'high',
          collection: name,
          action: 'AI-enhanced migration recommended',
          reason: `${data.enhancementPotential}% of content can be improved`,
          benefits: ['Better SEO', 'Professional presentation', 'Consistent brand voice']
        })
      }
      
      if (data.contentQuality.imageFields > 0) {
        recommendations.push({
          priority: 'medium',
          collection: name,
          action: 'Image analysis and metadata generation',
          reason: `${data.contentQuality.imageFields} images need alt text and categorization`,
          benefits: ['Accessibility compliance', 'Better image search', 'Content organization']
        })
      }
    }
    
    return recommendations
  }
}

// ==========================================
// MAIN EXECUTION
// ==========================================

async function main() {
  const migration = new AIEnhancedMigration()
  
  const args = process.argv.slice(2)
  const command = args[0]
  
  try {
    switch (command) {
      case 'analyze':
        await migration.analyzeMigrationOpportunities()
        break
        
      case 'projects':
        await migration.migrateProjectsWithAI()
        break
        
      case 'team':
        await migration.migrateTeamMembersWithAI()
        break
        
      case 'manufacturers':
        await migration.migrateManufacturersWithAI()
        break
        
      case 'vertical-markets':
        await migration.migrateVerticalMarketsWithAI()
        break
        
      case 'product-categories':
        await migration.migrateProductCategoriesWithAI()
        break
        
      case 'products':
        await migration.migrateProductsWithAI()
        break
        
      case 'all':
        console.log('🚀 Starting Complete AI-Enhanced Migration...')
        await migration.migrateManufacturersWithAI()
        await migration.migrateProductCategoriesWithAI()
        await migration.migrateVerticalMarketsWithAI()
        await migration.migrateProductsWithAI()
        await migration.migrateProjectsWithAI()
        await migration.migrateTeamMembersWithAI()
        console.log('🎉 Complete migration finished!')
        break
        
      default:
        console.log(`
🤖 AI-Enhanced Webflow → Sanity Migration

Usage:
  node ai-enhanced-migration.js <command>

Commands:
  analyze    - Analyze content and generate recommendations
  projects   - Migrate projects with AI enhancement
  team       - Migrate team members with AI enhancement  
  manufacturers - Migrate manufacturers with AI enhancement
  vertical-markets - Migrate vertical markets with AI enhancement
  product-categories - Migrate product categories with AI enhancement
  products   - Migrate products with AI enhancement
  all        - Run complete AI-enhanced migration

Environment variables required:
  - WEBFLOW_API_TOKEN
  - WEBFLOW_SITE_ID
  - SANITY_API_TOKEN
  - OPENAI_API_KEY
        `)
    }
  } catch (error) {
    console.error('❌ Migration failed:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = AIEnhancedMigration 