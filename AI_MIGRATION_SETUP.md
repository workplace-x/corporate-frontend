# AI-Enhanced Webflow → Sanity Migration

This advanced migration system uses AI to analyze, improve, and optimize your Webflow content before importing it into Sanity. Instead of bulk importing raw data, we create high-quality, professionally enhanced content.

## 🎯 What This System Does

### Content Enhancement
- **Text Improvement**: Refines writing for professional tone and brand consistency
- **SEO Optimization**: Generates meta descriptions and tags for better search visibility
- **Missing Content**: Creates compelling descriptions, bios, and alt text where missing
- **Brand Alignment**: Ensures all content matches Tangram's sophisticated, design-focused voice

### Image Intelligence
- **Visual Analysis**: Uses GPT-4 Vision to identify furniture, design styles, and color palettes
- **Metadata Generation**: Creates descriptive alt text and categorization tags
- **Asset Optimization**: Proper image handling and Sanity asset management
- **Accessibility**: Ensures all images have meaningful descriptions

### Quality Control
- **Content Scoring**: Tracks enhancement quality and completion
- **Progress Logging**: Detailed logs of all AI improvements made
- **Fallback Safety**: Original content preserved if AI enhancement fails
- **Duplicate Prevention**: Smart checking to avoid reimporting existing content

## 🚀 Quick Start

### Prerequisites
```bash
# Install OpenAI SDK if not already installed
cd apps/corporate-frontend
npm install openai

# Ensure environment variables are set
echo "OPENAI_API_KEY=your_openai_key" >> .env.local
echo "WEBFLOW_API_TOKEN=your_webflow_token" >> .env.local
echo "WEBFLOW_SITE_ID=your_site_id" >> .env.local
echo "SANITY_API_TOKEN=your_sanity_token" >> .env.local
```

### 1. Analysis Phase (Recommended First Step)
```bash
# Analyze your Webflow content to see enhancement opportunities
node ai-enhanced-migration.js analyze
```

This will generate a detailed report showing:
- Content quality scores for each collection
- Enhancement potential percentages
- Specific recommendations for AI improvements
- Before/after improvement projections

### 2. Test Migration (Single Collection)
```bash
# Migrate just projects first to test the system
node ai-enhanced-migration.js projects

# Or migrate just team members
node ai-enhanced-migration.js team
```

### 3. Full Migration
```bash
# Migrate everything with AI enhancement
node ai-enhanced-migration.js all
```

## 📊 Content Improvements You'll See

### Project Content Enhancement

**Before (Raw Webflow):**
```
Title: "Office Space Project"
Description: "New office design"
Image: untitled-image.jpg (no alt text)
```

**After (AI Enhanced):**
```
Title: "Modern Corporate Innovation Center"
Description: "A transformative 25,000 sq ft workspace featuring flexible collaboration zones, biophilic design elements, and cutting-edge technology integration that enhances productivity and employee wellbeing."
Meta Description: "Innovative corporate office design in Austin, TX featuring modern collaboration spaces and sustainable materials"
Tags: ["modern office design", "collaboration spaces", "corporate interiors", "Austin", "technology integration"]
Image: modern-corporate-innovation-center-main.jpg
Alt Text: "Open office space featuring modern workstations, natural lighting, and collaborative meeting areas with contemporary furniture"
Image Metadata: {
  style: "contemporary",
  furniture: ["workstations", "conference tables", "lounge seating"],
  colors: ["neutral grays", "accent blues", "natural wood tones"],
  spaceType: "corporate office",
  mood: "professional and energetic"
}
```

### Team Member Enhancement

**Before:**
```
Name: "John Smith"
Title: "Designer"
Bio: "John works on projects"
Image: headshot.jpg (no alt text)
```

**After:**
```
Name: "John Smith"
Title: "Senior Interior Designer"
Bio: "John brings over 8 years of expertise in commercial interior design, specializing in healthcare and educational environments. His innovative approach to space planning and material selection has earned recognition for creating environments that enhance both functionality and user experience."
Image: john-smith-headshot.jpg
Alt Text: "Professional headshot of John Smith, Senior Interior Designer at Tangram Interiors"
```

## 🎛️ AI Enhancement Features

### Brand Voice Consistency
The system ensures all content matches Tangram's brand guidelines:
- **Voice**: Professional yet approachable
- **Style**: Sophisticated, design-focused
- **Audience**: Corporate decision-makers, architects, designers
- **Keywords**: Workplace design, furniture solutions, space optimization

### Smart Content Generation
When content is missing or insufficient:
- **Descriptions**: Compelling 2-3 sentence project summaries
- **Meta Descriptions**: SEO-optimized 150-character descriptions
- **Alt Text**: Descriptive, accessibility-compliant image descriptions
- **Tags**: Relevant categorization for better discoverability
- **Bios**: Professional team member biographies

### Image Analysis Capabilities
Using GPT-4 Vision, the system identifies:
- **Design Styles**: Modern, traditional, industrial, contemporary
- **Furniture Types**: Workstations, conference tables, lounge seating
- **Color Palettes**: Dominant and accent colors in the space
- **Space Types**: Office, healthcare, education, hospitality
- **Design Mood**: Professional, creative, welcoming, innovative

## 📈 Performance & Quality Metrics

### Content Quality Scoring
Each migrated item includes quality metrics:
```javascript
contentQuality: {
  textEnhanced: true,        // Text was improved by AI
  imagesAnalyzed: true,      // Images were analyzed and tagged
  metaGenerated: true,       // Meta descriptions created
  tagsGenerated: true        // Categorization tags added
}
```

### Progress Tracking
Detailed logs capture:
- Original vs enhanced content comparisons
- AI analysis results for images
- Enhancement success/failure rates
- Processing time per item

### Rate Limiting & Safety
- Intelligent pacing to respect API limits
- Fallback to original content if AI fails
- Duplicate detection to prevent data conflicts
- Comprehensive error handling and recovery

## 🔧 Configuration Options

### Brand Tone Customization
Modify the brand voice settings in `ai-enhanced-migration.js`:
```javascript
this.brandTone = {
  voice: "professional yet approachable",
  style: "sophisticated, design-focused", 
  audience: "corporate decision-makers, architects, designers",
  keywords: ["workplace design", "furniture solutions", "space optimization"]
}
```

### AI Model Settings
Adjust AI behavior:
```javascript
// Text enhancement settings
model: "gpt-4",
temperature: 0.3,  // Lower = more consistent, Higher = more creative
max_tokens: 1000

// Image analysis settings  
model: "gpt-4-vision-preview",
max_tokens: 500
```

## 📋 Migration Checklist

### Pre-Migration
- [ ] Environment variables configured
- [ ] OpenAI API key with sufficient credits
- [ ] Webflow API access confirmed
- [ ] Sanity token with write permissions
- [ ] Analysis report reviewed

### During Migration
- [ ] Monitor console output for errors
- [ ] Check API rate limits
- [ ] Verify image uploads are working
- [ ] Sample a few migrated items for quality

### Post-Migration
- [ ] Review migration log files
- [ ] Spot-check enhanced content quality
- [ ] Verify all images have proper alt text
- [ ] Confirm no duplicate entries created
- [ ] Test frontend rendering of new content

## 🚨 Troubleshooting

### Common Issues

**OpenAI API Errors:**
```bash
# Check API key and credits
curl -H "Authorization: Bearer $OPENAI_API_KEY" https://api.openai.com/v1/models
```

**Image Upload Failures:**
- Check image URLs are accessible
- Verify Sanity token has asset upload permissions
- Ensure images are under 20MB

**Content Enhancement Skipped:**
- AI enhancement gracefully fails back to original content
- Check logs for specific error messages
- Verify content format matches expected structure

**Rate Limiting:**
- Built-in delays between requests
- Reduce batch sizes if needed
- Monitor API usage quotas

### Debug Mode
Enable detailed logging:
```bash
DEBUG=1 node ai-enhanced-migration.js analyze
```

## 🎉 Expected Results

After running the AI-enhanced migration, you'll have:

✅ **Professional Content**: Every piece of text refined for clarity and brand consistency  
✅ **SEO Optimized**: Meta descriptions and tags for better search visibility  
✅ **Accessibility Compliant**: Descriptive alt text for all images  
✅ **Intelligent Categorization**: AI-generated tags and metadata for better organization  
✅ **Visual Intelligence**: Rich image metadata including style, color, and mood analysis  
✅ **Quality Tracking**: Detailed metrics on content improvements made  
✅ **Brand Consistency**: All content aligned with Tangram's professional voice  

The result is a Sanity CMS filled with high-quality, professionally enhanced content that rivals the best design firm portfolios while maintaining all the original data integrity and relationships.

## 📞 Support

For issues or questions about the AI-enhanced migration:
1. Check the generated log files for specific errors
2. Review the analysis report for content recommendations  
3. Test with a small subset before full migration
4. Verify all API keys and permissions are correct

The system is designed to be safe and reversible - original Webflow data remains unchanged, and Sanity documents can be deleted and re-migrated if needed. 