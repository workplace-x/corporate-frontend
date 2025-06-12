# 🎯 Sanity CMS Setup Guide for Tangram Corporate Frontend

## ✅ What's Already Done

I've successfully set up the complete Sanity CMS foundation for your corporate frontend:

### 📦 **Installed Dependencies**
- `@sanity/client` - Core Sanity client for data fetching
- `@sanity/image-url` - Image URL builder for optimized images
- `@sanity/vision` - GROQ query testing tool
- `sanity` - Sanity Studio
- `@sanity/code-input` - Code block support
- `@sanity/color-input` - Color picker support

### 🏗️ **Created Schema Structure**
- **Projects** - Portfolio projects with images, case studies, awards
- **Team Members** - Staff profiles with bios, specialties, headshots
- **Blog Posts** - Rich content with authors, categories, tags
- **Publications** - Academic papers with PDFs, abstracts, keywords
- **Services** - Service offerings with process steps, case studies

### 🔧 **Configuration Files**
- `sanity.config.ts` - Studio configuration with custom structure
- `src/lib/sanity.ts` - Client setup with pre-built GROQ queries
- `src/types/sanity.ts` - Complete TypeScript types for all content
- `sanity/schemas/` - All content type schemas

### 📝 **Scripts Added**
- `pnpm run studio` - Starts Sanity Studio on port 3333

## 🚀 Next Steps to Complete Setup

### 1. **Create Sanity Project**
```bash
# Login to Sanity (if not already logged in)
npx sanity login

# Initialize project (run from corporate-frontend directory)
npx sanity init --project-id YOUR_PROJECT_ID --dataset production
```

### 2. **Environment Variables**
Create `.env.local` with your Sanity project details:
```env
# Get these from https://sanity.io/manage
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: For preview mode and webhooks
SANITY_API_READ_TOKEN=your_read_token_here
SANITY_WEBHOOK_SECRET=your_webhook_secret_here
```

### 3. **Start Sanity Studio**
```bash
pnpm run studio
```
This will open the Sanity Studio at `http://localhost:3333`

### 4. **Configure CORS (Important!)**
Allow your Next.js app to access Sanity:
```bash
npx sanity cors add http://localhost:3002 --credentials
npx sanity cors add https://your-production-domain.com --credentials
```

## 🎨 **Using Sanity in Your Components**

### **Fetching Data**
```typescript
import { getProjects, getTeamMembers } from '@/lib/sanity'
import type { ProjectWithImages, TeamMember } from '@/types/sanity'

// In your page/component
const projects = await getProjects(true) // featured only
const team = await getTeamMembers()
```

### **Displaying Images**
```typescript
import { urlFor } from '@/lib/sanity'
import type { SanityImage } from '@/types/sanity'

function ProjectImage({ image }: { image: SanityImage }) {
  return (
    <img
      src={urlFor(image).width(800).height(600).url()}
      alt={image.alt || 'Project image'}
      className="w-full h-auto"
    />
  )
}
```

### **Rendering Rich Text**
```typescript
import { PortableText } from '@portabletext/react'
import type { RichText } from '@/types/sanity'

function RichTextRenderer({ content }: { content: RichText }) {
  return (
    <PortableText
      value={content}
      components={{
        block: {
          h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-semibold">{children}</h2>,
          normal: ({ children }) => <p className="mb-4">{children}</p>,
        },
      }}
    />
  )
}
```

## 📊 **Content Migration Strategy**

### **Phase 1: Manual Content Entry (Week 1)**
1. Start Sanity Studio: `pnpm run studio`
2. Create sample content for each type:
   - 2-3 featured projects
   - 5-6 team members
   - 2-3 blog posts
   - 1-2 publications
   - 3-4 services

### **Phase 2: Webflow/Airtable Migration (Week 2)**
Since your data is currently in Webflow → Airtable, you'll need to:
1. Export data from Airtable as CSV/JSON
2. Create migration scripts to import into Sanity
3. Use Sanity's import API for bulk operations

### **Phase 3: Frontend Integration (Week 3)**
1. Replace static data with Sanity queries
2. Update components to use Sanity types
3. Add loading states and error handling
4. Implement ISR for performance

## 🔄 **Development Workflow**

### **Content Editing**
1. Content editors use Sanity Studio (`localhost:3333`)
2. Real-time collaboration and preview
3. Rich text editing with custom components
4. Image uploads with automatic optimization

### **Frontend Development**
1. Use pre-built queries from `src/lib/sanity.ts`
2. TypeScript ensures type safety
3. Images automatically optimized via Sanity CDN
4. ISR keeps content fresh while maintaining performance

## 🎯 **Key Benefits You'll Get**

### **For Content Editors**
- ✅ Real-time collaborative editing
- ✅ Rich text editor with custom components
- ✅ Image management with automatic optimization
- ✅ Preview mode to see changes before publishing
- ✅ Version history and rollback capabilities

### **For Developers**
- ✅ Full TypeScript support with generated types
- ✅ Powerful GROQ query language
- ✅ Automatic image optimization and CDN
- ✅ Webhook support for build triggers
- ✅ Excellent performance with ISR

### **For Business**
- ✅ Academic publishing workflow (perfect for your publications)
- ✅ SEO-optimized content structure
- ✅ Scalable content management
- ✅ Cost-effective ($99/month includes CDN)
- ✅ No vendor lock-in (content is portable)

## 🚨 **Important Notes**

1. **Project ID**: You'll need to create a Sanity project at https://sanity.io/manage
2. **CORS**: Must configure CORS for your domains
3. **Environment Variables**: Required for the app to connect to Sanity
4. **Migration**: Plan your Webflow/Airtable data migration carefully

## 📞 **Next Actions**

1. **Create Sanity account** and project at https://sanity.io
2. **Set up environment variables** with your project details
3. **Start the studio** and create sample content
4. **Test the integration** with your Next.js app
5. **Plan content migration** from your current Webflow/Airtable setup

Your Sanity CMS is now **fully configured and ready to use**! 🎉 