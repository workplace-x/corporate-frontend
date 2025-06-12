// Base Sanity types
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanityFile {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
    url?: string
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityBlock {
  _type: 'block'
  children: Array<{
    _type: 'span'
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    href?: string
  }>
  style?: string
}

export type RichText = SanityBlock[]

// Content Types
export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: SanitySlug
  category: 'workplace' | 'healthcare' | 'technology'
  location: string
  year: number
  size?: string
  description: string
  featured: boolean
  images?: SanityImage[]
  caseStudy?: RichText
  client?: string
  awards?: string[]
}

export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  slug: SanitySlug
  title: string
  department: 'leadership' | 'design' | 'project-management' | 'business-development' | 'operations' | 'technology'
  bio: RichText
  specialties?: string[]
  education?: string
  experience?: string
  email: string
  linkedin?: string
  featured: boolean
  headshot: SanityImage
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: SanitySlug
  excerpt: string
  content: RichText
  category: 'design' | 'technology' | 'industry-insights' | 'project-spotlights' | 'company-news'
  author: {
    _ref: string
    _type: 'reference'
  } | TeamMember
  publishedAt: string
  featured: boolean
  coverImage: SanityImage
  readTime?: number
  tags?: string[]
}

export interface Publication {
  _id: string
  _type: 'publication'
  title: string
  slug: SanitySlug
  type: 'research' | 'whitepaper' | 'technical' | 'industry'
  category: 'workplace-design' | 'healthcare' | 'technology' | 'sustainability' | 'market-research'
  abstract: RichText
  authors: Array<{
    _ref: string
    _type: 'reference'
  } | TeamMember>
  publishedAt: string
  pages?: number
  keywords?: string[]
  pdfFile: SanityFile
  coverImage?: SanityImage
  featured: boolean
  doi?: string
  journal?: string
}

export interface ProcessStep {
  _type: 'processStep'
  title: string
  description: string
  icon?: string
}

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: SanitySlug
  category: 'workplace' | 'healthcare' | 'technology'
  description: RichText
  keyFeatures?: string[]
  process?: ProcessStep[]
  caseStudies?: Array<{
    _ref: string
    _type: 'reference'
  } | Project>
  featured: boolean
  heroImage?: SanityImage
  gallery?: SanityImage[]
}

// API Response types (with populated references)
export interface ProjectWithImages extends Omit<Project, 'images'> {
  images?: string[]
}

export interface BlogPostWithAuthor extends Omit<BlogPost, 'author'> {
  author: {
    name: string
    slug: SanitySlug
    headshot: SanityImage
  }
}

export interface PublicationWithAuthors extends Omit<Publication, 'authors'> {
  authors: Array<{
    name: string
    slug: SanitySlug
  }>
}

export interface ServiceWithCaseStudies extends Omit<Service, 'caseStudies'> {
  caseStudies?: Array<{
    title: string
    slug: SanitySlug
    images?: SanityImage[]
  }>
} 