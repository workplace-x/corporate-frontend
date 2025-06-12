import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_READ_TOKEN, // Only needed for authenticated requests
})

// Helper function for generating Image URLs from Sanity assets
const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

// Useful GROQ queries
export const queries = {
  // Projects
  allProjects: `*[_type == "project"] | order(year desc) {
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
  }`,
  
  featuredProjects: `*[_type == "project" && featured == true] | order(year desc) {
    _id,
    title,
    slug,
    category,
    location,
    year,
    size,
    description,
    "images": images[].asset->url,
    client,
    awards
  }`,
  
  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    location,
    year,
    size,
    description,
    featured,
    images,
    caseStudy,
    client,
    awards
  }`,

  // Team Members
  allTeamMembers: `*[_type == "teamMember" && !archived] | order(name asc) {
    _id,
    name,
    slug,
    title,
    department,
    location,
    yearHired,
    bio,
    specialties,
    education,
    experience,
    email,
    phone,
    linkedin,
    featured,
    seniorLeadership,
    executiveTeam,
    boardOfDirectors,
    headshot
  }`,
  
  featuredTeamMembers: `*[_type == "teamMember" && featured == true && !archived] | order(name asc) {
    _id,
    name,
    slug,
    title,
    department,
    location,
    yearHired,
    bio,
    specialties,
    education,
    experience,
    email,
    phone,
    linkedin,
    headshot
  }`,

  teamMemberBySlug: `*[_type == "teamMember" && slug.current == $slug && !archived][0] {
    _id,
    name,
    slug,
    title,
    department,
    location,
    yearHired,
    almaMater,
    bio,
    specialties,
    education,
    experience,
    email,
    phone,
    linkedin,
    featured,
    seniorLeadership,
    executiveTeam,
    boardOfDirectors,
    headshot
  }`,

  // Blog Posts
  allBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    "author": author->{name, slug, headshot},
    publishedAt,
    featured,
    coverImage,
    readTime,
    tags
  }`,
  
  featuredBlogPosts: `*[_type == "blogPost" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    "author": author->{name, slug, headshot},
    publishedAt,
    coverImage,
    readTime
  }`,

  // Publications
  allPublications: `*[_type == "publication"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    type,
    category,
    abstract,
    "authors": authors[]->{name, slug},
    publishedAt,
    pages,
    keywords,
    pdfFile,
    coverImage,
    featured
  }`,
  
  featuredPublications: `*[_type == "publication" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    type,
    category,
    abstract,
    "authors": authors[]->{name, slug},
    publishedAt,
    coverImage
  }`,

  // Services
  allServices: `*[_type == "service"] | order(title asc) {
    _id,
    title,
    slug,
    category,
    description,
    keyFeatures,
    process,
    "caseStudies": caseStudies[]->{title, slug, images},
    featured,
    heroImage,
    gallery
  }`,

  // **NEW: Products & Manufacturers (from Webflow migration)**
  allProducts: `*[_type == "product"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    "manufacturer": manufacturer->{name, slug, logo},
    "category": category->{name, slug},
    defaultSku,
    featured,
    images,
    specifications,
    metaDescription
  }`,

  featuredProducts: `*[_type == "product" && featured == true] | order(name asc) {
    _id,
    name,
    slug,
    description,
    "manufacturer": manufacturer->{name, slug, logo},
    "category": category->{name, slug},
    defaultSku,
    images,
    specifications
  }`,

  productsByCategory: `*[_type == "product" && category._ref == $categoryId] | order(name asc) {
    _id,
    name,
    slug,
    description,
    "manufacturer": manufacturer->{name, slug, logo},
    defaultSku,
    images
  }`,

  allManufacturers: `*[_type == "manufacturer"] | order(name asc) {
    _id,
    name,
    slug,
    category,
    logo,
    website,
    "verticalMarket": verticalMarket->{name, slug},
    "productCount": count(*[_type == "product" && manufacturer._ref == ^._id])
  }`,

  // **NEW: Vertical Markets (from Webflow migration)**
  allVerticalMarkets: `*[_type == "verticalMarket"] | order(name asc) {
    _id,
    name,
    slug,
    headline,
    overviewParagraph,
    featuredImage,
    menuIcon,
    "featuredProducts": featuredProducts[]->{name, slug, images, manufacturer->{name}},
    "featuredProjects": featuredProjects[]->{title, slug, images},
    "team": team[]->{name, title, headshot}
  }`,

  verticalMarketBySlug: `*[_type == "verticalMarket" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    headline,
    overviewParagraph,
    featuredImage,
    featuredVideo,
    paragraphs,
    titles,
    featuredImages,
    "featuredProducts": featuredProducts[]->{name, slug, description, images, manufacturer->{name, logo}},
    "featuredManufacturers": featuredManufacturers[]->{name, slug, logo, website},
    "featuredProjects": featuredProjects[]->{title, slug, description, images, client},
    "team": team[]->{name, title, headshot, specialties}
  }`,

  // **NEW: Client Management (from Webflow migration)**
  clientTestimonials: `*[_type == "clientTestimonial"] | order(featured desc, _createdAt desc) {
    _id,
    clientName,
    company,
    testimonial,
    logo,
    featured,
    project->{title, slug}
  }`,

  clientLogos: `*[_type == "client"] | order(name asc) {
    _id,
    name,
    logo,
    website,
    city,
    state
  }`
}

// **UPDATED: Helper functions for common operations**
export async function getProjects(featured?: boolean) {
  const query = featured ? queries.featuredProjects : queries.allProjects
  return await client.fetch(query)
}

export async function getProjectBySlug(slug: string) {
  return await client.fetch(queries.projectBySlug, { slug })
}

export async function getTeamMembers(featured?: boolean) {
  const query = featured ? queries.featuredTeamMembers : queries.allTeamMembers
  return await client.fetch(query)
}

export async function getTeamMemberBySlug(slug: string) {
  return await client.fetch(queries.teamMemberBySlug, { slug })
}

export async function getBlogPosts(featured?: boolean) {
  const query = featured ? queries.featuredBlogPosts : queries.allBlogPosts
  return await client.fetch(query)
}

export async function getPublications(featured?: boolean) {
  const query = featured ? queries.featuredPublications : queries.allPublications
  return await client.fetch(query)
}

export async function getServices() {
  return await client.fetch(queries.allServices)
}

// **NEW: Product Management Functions**
export async function getProducts(featured?: boolean, categoryId?: string) {
  if (categoryId) {
    return await client.fetch(queries.productsByCategory, { categoryId })
  }
  const query = featured ? queries.featuredProducts : queries.allProducts
  return await client.fetch(query)
}

export async function getFeaturedProducts() {
  return await client.fetch(queries.featuredProducts)
}

export async function getManufacturers() {
  return await client.fetch(queries.allManufacturers)
}

// **NEW: Vertical Market Functions**
export async function getVerticalMarkets() {
  return await client.fetch(queries.allVerticalMarkets)
}

export async function getVerticalMarketBySlug(slug: string) {
  return await client.fetch(queries.verticalMarketBySlug, { slug })
}

// **NEW: Client Management Functions**
export async function getClientTestimonials(featured?: boolean) {
  const query = featured 
    ? `*[_type == "clientTestimonial" && featured == true] | order(_createdAt desc)`
    : queries.clientTestimonials
  return await client.fetch(query)
}

export async function getClientLogos() {
  return await client.fetch(queries.clientLogos)
}

// **NEW: Enhanced Services with Product Integration**
export async function getServiceWithProducts(serviceSlug: string) {
  return await client.fetch(`
    *[_type == "service" && slug.current == $serviceSlug][0] {
      _id,
      title,
      slug,
      description,
      keyFeatures,
      "featuredProducts": *[_type == "product" && references(^._id)] | order(featured desc, name asc) [0...6] {
        _id,
        name,
        slug,
        description,
        "manufacturer": manufacturer->{name, logo},
        images
      },
      "relatedCaseStudies": *[_type == "project" && references(^._id)] | order(year desc) [0...3] {
        title,
        slug,
        images,
        client,
        year
      }
    }
  `, { serviceSlug })
}

// **NEW: Homepage Data Aggregation**
export async function getHomepageData() {
  return {
    featuredProjects: await getProjects(true),
    featuredProducts: await getFeaturedProducts(),
    clientTestimonials: await getClientTestimonials(true),
    verticalMarkets: await getVerticalMarkets(),
    teamMembers: await getTeamMembers(true),
    recentBlogPosts: await getBlogPosts(true)
  }
} 