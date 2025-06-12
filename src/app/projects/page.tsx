import { getProjects } from '@/lib/sanity'
import ProjectsClient from './ProjectsClient'

// Type for project data from Sanity
export interface SanityProject {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  subHeader?: string
  location?: {
    cityState: string
  }
  year?: number
  size?: string
  images?: any[]
  client?: string
  verticalMarket?: string
  businessUnit?: string
  featured?: boolean
  draft?: boolean
  archived?: boolean
}

export default async function ProjectsPage() {
  const allProjects = await getProjects() as SanityProject[]
  
  // Filter out archived/draft projects if needed
  const publishedProjects = allProjects.filter(project => !project.draft && !project.archived)
  
  // Group projects by category for better organization
  const featuredProjects = publishedProjects.filter(project => project.featured)
  const otherProjects = publishedProjects.filter(project => !project.featured)

  return (
    <ProjectsClient 
      publishedProjects={publishedProjects}
      featuredProjects={featuredProjects}
      otherProjects={otherProjects}
    />
  )
} 