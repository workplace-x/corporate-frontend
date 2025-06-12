# CMS Data Integration Plan
## Corporate Frontend → Webflow Migrated Content

### **Executive Summary**
We have successfully migrated **40 Webflow collections** with **7,003+ items** that need to be integrated across the corporate frontend. The site already has partial Sanity integration for projects and team members, but most content is still hardcoded.

---

## **Current Integration Status**

### ✅ **Already Integrated (via Sanity)**
- **Projects** → Homepage, `/projects`, `/projects/[slug]`
- **Team Members** → Homepage, `/team`, `/team/[slug]`
- **Blog Posts** (partial) → `/blog`
- **Publications** (partial) → `/publications`

### 🔥 **High Priority Integrations Needed**

#### **1. Products & Manufacturers**
**Migrated Data:** 896 Products + 251 Manufacturers  
**Integration Points:**
- `/services` pages → Featured products per service
- Homepage → Featured product showcases
- New `/products` section → Full product catalog
- Service detail pages → Related products

**Implementation:**
```tsx
// Add to existing sanity.ts
export async function getProducts(featured?: boolean, category?: string) {
  const query = featured 
    ? `*[_type == "product" && featured == true]`
    : `*[_type == "product"]`
  return await client.fetch(query)
}

export async function getManufacturers() {
  return await client.fetch(`*[_type == "manufacturer"] | order(name asc)`)
}
```

#### **2. Vertical Markets**
**Migrated Data:** 5 Vertical Markets with rich content  
**Integration Points:**
- `/markets` page → Currently hardcoded market descriptions
- `/markets/[category]` → Individual market pages
- Homepage → Market stats and highlights

**Current Issue:** `/markets/page.tsx` is 363 lines of hardcoded content
**Solution:** Replace with dynamic CMS content

#### **3. Client Lists & Case Studies**
**Migrated Data:** 1,176 Client records  
**Integration Points:**
- Homepage → Client logos/testimonials
- `/projects` → Client attribution
- Service pages → Client success stories
- New client portal → Full client directory

#### **4. Blog Enhancement**
**Migrated Data:** 825 Blog Posts + 31 Categories  
**Integration Points:**
- `/blog` → Currently has framework but needs content
- Homepage → Featured blog posts
- Service pages → Related blog content

---

## **Medium Priority Integrations**

#### **5. Publications & Resources**
**Migrated Data:** Files, PDFs, Issuu Publications  
**Integration Points:**
- `/publications` → Research papers, whitepapers
- Service pages → Related resources
- New resource center → Downloadable content

#### **6. Featured Guests & Events**
**Migrated Data:** 14 Featured Guests  
**Integration Points:**
- `/events` page enhancement
- `/about` → Leadership content
- Blog → Guest contributor profiles

#### **7. Microsites**
**Migrated Data:** 29 Microsites for personalized client experiences  
**Integration Points:**
- New client portal functionality
- Project-specific landing pages
- Personalized content delivery

---

## **Implementation Strategy**

### **Phase 1: Core Content (Week 1-2)**
1. **Products Integration**
   - Update `/services` pages with dynamic product showcases
   - Create new `/products` catalog section
   - Add product-related content to homepage

2. **Vertical Markets Integration**
   - Replace hardcoded `/markets` content with CMS data
   - Create dynamic market detail pages
   - Add market insights to homepage

### **Phase 2: Enhanced Content (Week 3-4)**
3. **Client & Case Study Integration**
   - Add client logos/testimonials to homepage
   - Create client success story components
   - Enhance project pages with client data

4. **Blog Content Migration**
   - Migrate 825 blog posts to new blog system
   - Implement category navigation
   - Add blog content to relevant service pages

### **Phase 3: Advanced Features (Week 5-6)**
5. **Resource Center**
   - Create downloadable resource sections
   - Implement PDF/publication management
   - Add resource recommendations

6. **Personalization**
   - Implement microsite functionality
   - Add personalized content delivery
   - Create client portal features

---

## **Technical Implementation**

### **Updated Sanity Schema Additions Needed**
```typescript
// New schemas to add:
- product.ts
- manufacturer.ts
- verticalMarket.ts
- clientTestimonial.ts
- resourceFile.ts
- microsite.ts
```

### **New API Functions for sanity.ts**
```typescript
// Product Management
export async function getProducts(filters?: ProductFilters)
export async function getProductsByCategory(category: string)
export async function getFeaturedProducts()

// Market Intelligence  
export async function getVerticalMarkets()
export async function getMarketBySlug(slug: string)
export async function getMarketInsights()

// Client Management
export async function getClientTestimonials()
export async function getClientLogos()
export async function getClientCaseStudies()

// Resource Management
export async function getResources(type?: string)
export async function getResourcesByCategory(category: string)
```

### **Component Updates Needed**
```typescript
// Services pages → Add product showcases
// Homepage → Add client testimonials, market stats
// Markets pages → Replace hardcoded with dynamic
// Blog → Enhance with migrated content
// New: Product catalog components
// New: Resource center components
```

---

## **Content Quality Enhancement**

### **AI-Enhanced Content Available**
- **508 items** already processed with AI enhancements
- **90 enhancement opportunities** identified
- Content includes: SEO optimization, professional writing, image metadata

### **Content Types Enhanced**
- Product descriptions → Professional copywriting
- Market insights → Industry-specific expertise
- Client testimonials → Compelling narratives
- Blog content → SEO-optimized posts

---

## **Success Metrics**

### **Content Volume**
- **Before:** ~50 items (projects + team) 
- **After:** 7,003+ items across all content types
- **Enhancement:** 140x content increase

### **SEO Impact**
- 90 AI enhancement opportunities implemented
- Professional copywriting for all content
- Enhanced meta descriptions and titles

### **User Experience**
- Dynamic content instead of hardcoded
- Personalized experiences via microsites
- Rich product catalog and resource center

---

## **Next Steps**

1. **Review Integration Points** → Confirm priority order
2. **Update Sanity Schemas** → Add new content types
3. **Implement Phase 1** → Products + Markets integration
4. **Content Migration** → Move enhanced content to production
5. **Quality Assurance** → Test all integrations
6. **Performance Optimization** → Ensure fast loading

**Estimated Timeline:** 4-6 weeks for complete integration  
**Resource Impact:** Massive content enhancement with minimal development effort 