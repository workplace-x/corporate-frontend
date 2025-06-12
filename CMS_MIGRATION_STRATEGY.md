# CMS Migration Strategy for Tangram Design

## Current State
- Static Next.js application with hardcoded content
- Harvard-inspired design system with sophisticated layouts
- Multiple content types: projects, team members, blog posts, publications

## Recommended CMS: Sanity
**Why Sanity?**
- Excellent TypeScript support and type generation
- Real-time collaborative editing
- Powerful GROQ query language
- Great image handling and optimization
- Structured content with rich text support
- Perfect for our Harvard-style academic publishing needs

## Content Types to Migrate

### 1. Projects
```typescript
{
  title: string
  slug: string
  category: 'workplace' | 'healthcare' | 'technology'
  location: string
  year: number
  size: string
  description: string
  featured: boolean
  images: SanityImage[]
  caseStudy?: RichText
  client?: string
  awards?: string[]
}
```

### 2. Team Members
```typescript
{
  name: string
  slug: string
  title: string
  department: string
  bio: RichText
  specialties: string[]
  education: string
  experience: string
  email: string
  linkedin?: string
  featured: boolean
  headshot: SanityImage
}
```

### 3. Blog Posts
```typescript
{
  title: string
  slug: string
  excerpt: string
  content: RichText
  category: string
  author: Reference<TeamMember>
  publishedAt: datetime
  featured: boolean
  coverImage: SanityImage
  readTime: number
}
```

### 4. Publications
```typescript
{
  title: string
  slug: string
  type: 'research' | 'whitepaper' | 'technical' | 'industry'
  category: string
  abstract: RichText
  authors: Reference<TeamMember>[]
  publishedAt: datetime
  pages: number
  keywords: string[]
  pdfFile: SanityFile
  featured: boolean
}
```

### 5. Services
```typescript
{
  title: string
  slug: string
  category: 'workplace' | 'healthcare' | 'technology'
  description: RichText
  keyFeatures: string[]
  process: ProcessStep[]
  caseStudies: Reference<Project>[]
  featured: boolean
}
```

## Migration Steps

### Phase 1: Setup (Week 1)
1. Setup Sanity Studio
2. Configure schemas for all content types
3. Setup TypeScript types generation
4. Configure image and file handling

### Phase 2: Content Migration (Week 2)
1. Export existing static content
2. Import into Sanity with proper structure
3. Setup rich text content with proper formatting
4. Upload and optimize all images/files

### Phase 3: Frontend Integration (Week 3)
1. Install Sanity client in Next.js
2. Replace static data with Sanity queries
3. Setup ISR (Incremental Static Regeneration) for performance
4. Add preview mode for content editors

### Phase 4: Advanced Features (Week 4)
1. Setup real-time preview
2. Add content validation
3. Setup webhooks for build triggers
4. Add SEO optimization with dynamic meta tags

## Technical Implementation

### Sanity Client Setup
```typescript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
```

### Example Query Pattern
```typescript
export async function getProjects(featured?: boolean) {
  const query = `*[_type == "project" ${featured ? '&& featured == true' : ''}] | order(year desc) {
    _id,
    title,
    slug,
    category,
    location,
    year,
    size,
    description,
    featured,
    "images": images[].asset->url,
    client,
    awards
  }`
  
  return await client.fetch(query)
}
```

### Benefits of This Approach
- **Performance**: ISR ensures fast loading while keeping content fresh
- **SEO**: Dynamic meta tags and structured data
- **Editing Experience**: Real-time collaborative editing
- **Type Safety**: Full TypeScript support with generated types
- **Scalability**: Easy to add new content types and fields
- **Academic Publishing**: Perfect for our publications section with PDF support

### Estimated Timeline: 4 weeks
### Estimated Cost: $99/month for Sanity (includes CDN and image optimization)

## Next Steps
1. Setup Sanity project and initial schemas
2. Create sample content for testing
3. Build initial API integration
4. Migrate one content type at a time starting with projects 