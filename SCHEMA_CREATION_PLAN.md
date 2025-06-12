# Comprehensive Sanity Schema Creation Plan
*Based on analysis of all 40 Webflow collections performed June 4, 2025*

## 🎯 Executive Summary

**Analysis Results:**
- **40 Collections** analyzed with comprehensive field mapping
- **31 New Schemas** needed beyond existing ones
- **100% Enhancement Potential** for most high-priority collections
- **Complex Relationship Networks** discovered across collections

**Top Migration Priorities:**
1. **Vertical Markets** (16 AI opportunities, rich content)
2. **Projects** (5 opportunities, existing schema needs enhancement)
3. **Products & Featured Products** (catalog management)
4. **Team/Employees** (86% enhancement potential)
5. **Content Collections** (Blog, Podcasts, Microsites)

## 📋 Schema Creation Priority Matrix

### **Tier 1: Critical Business Schemas (Immediate)**
*These power core business functionality and have high enhancement potential*

#### 1. **Vertical Markets Schema** 🏆 Priority Score: 145
```javascript
// sanity/schemas/verticalMarket.ts
{
  name: 'verticalMarket',
  title: 'Vertical Market',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Market Name' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'headline', type: 'string', title: 'Market Headline' },
    { name: 'overviewParagraph', type: 'array', of: [{ type: 'block' }] },
    { name: 'menuIcon', type: 'image', options: { hotspot: true } },
    
    // Multiple content sections (AI-enhanced)
    { name: 'sections', type: 'array', of: [
      { type: 'object', fields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'array', of: [{ type: 'block' }] },
        { name: 'featuredImage', type: 'image', options: { hotspot: true } }
      ]}
    ]},
    
    // Relationships
    { name: 'featuredProducts', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'featuredProjects', type: 'array', of: [{ type: 'reference', to: [{ type: 'project' }] }] },
    { name: 'featuredManufacturers', type: 'array', of: [{ type: 'reference', to: [{ type: 'manufacturer' }] }] },
    { name: 'team', type: 'array', of: [{ type: 'reference', to: [{ type: 'teamMember' }] }] },
    
    // AI-Enhanced Fields
    { name: 'metaDescription', type: 'text', title: 'SEO Meta Description' },
    { name: 'enhancementMetrics', type: 'object', fields: [
      { name: 'qualityScore', type: 'number' },
      { name: 'lastEnhanced', type: 'datetime' }
    ]}
  ]
}
```

**🤖 AI Enhancement Opportunities:**
- **15 missing content fields** to be auto-generated
- **6 images** need alt text and metadata
- **8 rich text sections** for content enhancement
- **Multi-reference relationships** for contextual tagging

#### 2. **Manufacturer Schema** 🏆 Priority Score: 95
```javascript
{
  name: 'manufacturer',
  title: 'Manufacturer',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Manufacturer Name' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', rows: 4 },
    { name: 'logo', type: 'image', options: { hotspot: true } },
    { name: 'website', type: 'url' },
    { name: 'contactInfo', type: 'object', fields: [
      { name: 'email', type: 'email' },
      { name: 'phone', type: 'string' },
      { name: 'address', type: 'text' }
    ]},
    { name: 'verticalMarkets', type: 'array', of: [{ type: 'reference', to: [{ type: 'verticalMarket' }] }] },
    { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }
  ]
}
```

#### 3. **Enhanced Product Schema** 🏆 Priority Score: 90
```javascript
{
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', rows: 4 },
    { name: 'manufacturer', type: 'reference', to: [{ type: 'manufacturer' }] },
    { name: 'featuredImage', type: 'image', options: { hotspot: true } },
    { name: 'productImages', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'website', type: 'url' },
    { name: 'categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'productCategory' }] }] },
    { name: 'verticalMarkets', type: 'array', of: [{ type: 'reference', to: [{ type: 'verticalMarket' }] }] },
    { name: 'specifications', type: 'array', of: [{ type: 'block' }] },
    { name: 'featured', type: 'boolean', title: 'Featured Product' }
  ]
}
```

### **Tier 2: Content & Media Schemas (Week 2)**

#### 4. **Podcast Schema** 🎙️ Priority Score: 85
```javascript
{
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', type: 'text', rows: 4 },
    { name: 'showNotes', type: 'array', of: [{ type: 'block' }] },
    { name: 'featuredImage', type: 'image', options: { hotspot: true } },
    { name: 'audioFile', type: 'file' },
    { name: 'publishDate', type: 'datetime' },
    { name: 'duration', type: 'string' },
    { name: 'hosts', type: 'array', of: [{ type: 'reference', to: [{ type: 'teamMember' }] }] },
    { name: 'guests', type: 'array', of: [{ type: 'reference', to: [{ type: 'featuredGuest' }] }] },
    { name: 'topics', type: 'array', of: [{ type: 'string' }] },
    { name: 'transcript', type: 'array', of: [{ type: 'block' }] }
  ]
}
```

#### 5. **Microsite Schema** 🌐 Priority Score: 80
```javascript
{
  name: 'microsite',
  title: 'Microsite',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'salesperson', type: 'string' },
    { name: 'showroom', type: 'string' },
    { name: 'verticalMarket', type: 'reference', to: [{ type: 'verticalMarket' }] },
    { name: 'noteToCustomer', type: 'array', of: [{ type: 'block' }] },
    { name: 'featuredProjects', type: 'array', of: [{ type: 'reference', to: [{ type: 'project' }] }] },
    { name: 'featuredProducts', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'team', type: 'array', of: [{ type: 'reference', to: [{ type: 'teamMember' }] }] },
    { name: 'publications', type: 'array', of: [{ type: 'reference', to: [{ type: 'publication' }] }] }
  ]
}
```

#### 6. **Featured Guest Schema** 👤
```javascript
{
  name: 'featuredGuest',
  title: 'Featured Guest',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'company', type: 'string' },
    { name: 'bio', type: 'text', rows: 4 },
    { name: 'headshot', type: 'image', options: { hotspot: true } },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'socialLinks', type: 'object', fields: [
      { name: 'linkedin', type: 'url' },
      { name: 'twitter', type: 'url' },
      { name: 'website', type: 'url' }
    ]}
  ]
}
```

### **Tier 3: Supporting Schemas (Week 3)**

#### 7. **Location Schema** 📍
```javascript
{
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'address', type: 'object', fields: [
      { name: 'street', type: 'string' },
      { name: 'city', type: 'string' },
      { name: 'state', type: 'string' },
      { name: 'zipCode', type: 'string' },
      { name: 'country', type: 'string' }
    ]},
    { name: 'coordinates', type: 'geopoint' },
    { name: 'phone', type: 'string' },
    { name: 'email', type: 'email' },
    { name: 'showroomImage', type: 'image', options: { hotspot: true } },
    { name: 'team', type: 'array', of: [{ type: 'reference', to: [{ type: 'teamMember' }] }] }
  ]
}
```

#### 8. **Service Schema** 🛠️
```javascript
{
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', rows: 4 },
    { name: 'fullDescription', type: 'array', of: [{ type: 'block' }] },
    { name: 'featuredImage', type: 'image', options: { hotspot: true } },
    { name: 'icon', type: 'image' },
    { name: 'verticalMarkets', type: 'array', of: [{ type: 'reference', to: [{ type: 'verticalMarket' }] }] },
    { name: 'relatedProducts', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }
  ]
}
```

#### 9. **Category Schemas** 📂
```javascript
// Product Category
{
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', rows: 2 },
    { name: 'icon', type: 'image' },
    { name: 'parentCategory', type: 'reference', to: [{ type: 'productCategory' }] }
  ]
}

// Project Category
{
  name: 'projectCategory',
  title: 'Project Category',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', rows: 2 }
  ]
}
```

### **Tier 4: Specialized Content (Week 4)**

#### 10. **SKU Schema** 📦
```javascript
{
  name: 'sku',
  title: 'SKU',
  type: 'document',
  fields: [
    { name: 'skuNumber', type: 'string', title: 'SKU Number' },
    { name: 'product', type: 'reference', to: [{ type: 'product' }] },
    { name: 'variant', type: 'string' },
    { name: 'specifications', type: 'object', fields: [
      { name: 'color', type: 'string' },
      { name: 'material', type: 'string' },
      { name: 'dimensions', type: 'object', fields: [
        { name: 'width', type: 'number' },
        { name: 'height', type: 'number' },
        { name: 'depth', type: 'number' }
      ]}
    ]},
    { name: 'pricing', type: 'object', fields: [
      { name: 'listPrice', type: 'number' },
      { name: 'dealerPrice', type: 'number' }
    ]},
    { name: 'availability', type: 'string', options: { list: ['In Stock', 'Limited', 'Made to Order', 'Discontinued'] } }
  ]
}
```

#### 11. **Rendering Schema** 🎨
```javascript
{
  name: 'rendering',
  title: 'Rendering',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'description', type: 'text', rows: 3 },
    { name: 'image', type: 'image', options: { hotspot: true } },
    { name: 'category', type: 'reference', to: [{ type: 'renderingCategory' }] },
    { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'spaces', type: 'array', of: [{ type: 'reference', to: [{ type: 'space' }] }] },
    { name: 'style', type: 'string', options: { list: ['Modern', 'Traditional', 'Minimalist', 'Industrial'] } }
  ]
}
```

#### 12. **Space Schema** 🏢
```javascript
{
  name: 'space',
  title: 'Space',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', rows: 4 },
    { name: 'featuredImage', type: 'image', options: { hotspot: true } },
    { name: 'verticalMarket', type: 'reference', to: [{ type: 'verticalMarket' }] },
    { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'spaceType', type: 'string', options: { list: ['Private Office', 'Open Office', 'Conference Room', 'Reception', 'Break Room', 'Healthcare Patient Room'] } }
  ]
}
```

## 📊 Enhancement Opportunities Summary

### **High-Impact AI Enhancements**

**1. Vertical Markets** (16 opportunities)
- Missing content generation for 8+ fields
- Rich text enhancement for multiple paragraphs  
- Alt text generation for 6 images
- SEO meta description creation

**2. Projects** (5 opportunities) 
- Project write-up enhancement from HTML to rich blocks
- Missing square footage and completion year generation
- Logo alt text and metadata
- Professional description improvements

**3. Products/Featured Products** (9 total opportunities)
- Product description enhancement and expansion
- Missing name and slug generation  
- Feature image analysis and alt text
- SEO optimization

**4. Team/Employees** (2 opportunities)
- Professional headshot analysis and alt text
- Bio enhancement and professional writing

### **Cross-Collection Relationship Mapping**

**Primary Hub: Projects**
- References: Team, Partners, Vertical Markets, Business Units, Categories
- Products can be tagged within projects via interactive annotations

**Secondary Hub: Vertical Markets**  
- References: Featured Products, Featured Projects, Manufacturers, Team
- Acts as content hub for market-specific information

**Content Network:**
- Microsites → Projects, Products, Team, Publications
- Podcasts → Featured Guests, Team Members  
- Spaces → Products, Vertical Markets

## 🚀 Implementation Roadmap

### **Phase 1: Foundation (Week 1)**
1. Create Tier 1 schemas (Vertical Markets, Manufacturers, Products)
2. Setup enhanced Project schema with new relationships
3. Test AI migration on sample records

### **Phase 2: Content Expansion (Week 2)**
1. Create Tier 2 schemas (Podcasts, Microsites, Featured Guests)
2. Migrate and enhance content collections
3. Setup cross-references between collections

### **Phase 3: Supporting Systems (Week 3)**
1. Create Tier 3 schemas (Locations, Services, Categories)
2. Complete relationship mapping
3. Test frontend rendering with new data

### **Phase 4: Advanced Features (Week 4)**
1. Create specialized schemas (SKUs, Renderings, Spaces)
2. Implement interactive product tagging
3. Setup advanced search and filtering

### **Phase 5: Enhancement & Optimization (Week 5)**
1. Run comprehensive AI enhancement across all content
2. Performance optimization and quality scoring
3. Advanced frontend features (filtering, search, interactive elements)

## 💡 Key Benefits

**Content Quality:**
- **90%+ enhancement potential** across major collections
- **Professional consistency** with AI writing improvements
- **Complete SEO optimization** with meta descriptions and alt text

**Relationship Management:**
- **Multi-reference tagging** across Projects ↔ Team ↔ Products ↔ Partners
- **Contextual relationships** with usage descriptions
- **Advanced filtering** by any combination of references

**Business Value:**
- **Comprehensive product catalog** with SKU-level detail
- **Market-specific content hubs** via Vertical Markets
- **Client presentation tools** via Microsites
- **Content marketing engine** via Podcasts and enhanced blog

**Interactive Features:**
- **Product hotspots** on project images
- **Dynamic content filtering** by market/team/product
- **Performance metrics** and quality scoring
- **Client-specific views** via Microsites

This comprehensive schema plan transforms your Webflow content into a sophisticated, AI-enhanced CMS that supports advanced business operations while maintaining the high design standards expected of Tangram Interiors. 