import { urlFor } from '@/lib/sanity'
import type { ProjectWithImages } from '@/types/sanity'
import Link from 'next/link'

interface ProjectCardProps {
  project: ProjectWithImages
  className?: string
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const imageUrl = project.images?.[0] 
    ? urlFor(project.images[0]).width(600).height(400).url()
    : '/placeholder-project.jpg'

  return (
    <Link 
      href={`/projects/${project.slug.current}`}
      className={`group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Project Image */}
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {project.category}
          </span>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{project.location}</span>
          {project.size && <span>{project.size}</span>}
        </div>

        {project.awards && project.awards.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center text-sm text-amber-600">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {project.awards.length} Award{project.awards.length !== 1 ? 's' : ''}
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

// Example usage in a page component:
/*
import { getProjects } from '@/lib/sanity'
import { ProjectCard } from '@/components/sanity/ProjectCard'

export default async function ProjectsPage() {
  const projects = await getProjects(true) // Get featured projects

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
}
*/ 