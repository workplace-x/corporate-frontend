'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ProjectSummary } from '@/types/corporate'
import Link from 'next/link'

interface ProjectsShowcaseProps {
  projects?: ProjectSummary[]
  isLoading: boolean
  isInView: boolean
}

// Placeholder projects for demo
const placeholderProjects = [
  {
    id: '1',
    title: 'Modern Corporate Headquarters',
    client: 'Tech Innovators Inc.',
    location: 'Los Angeles, CA',
    category: 'workplace' as const,
    industry: 'Technology',
    completion_date: new Date('2024-01-15'),
    project_size: 25000,
    featured_image: '/images/project-1.jpg',
    gallery: [],
    description: 'A cutting-edge workspace design featuring flexible collaboration areas.',
    services_provided: ['Contract Furniture', 'Technology Integration'],
    featured: true
  },
  {
    id: '2',
    title: 'Healing Environment Design',
    client: 'Regional Medical Center',
    location: 'San Francisco, CA',
    category: 'healthcare' as const,
    industry: 'Healthcare',
    completion_date: new Date('2024-02-20'),
    project_size: 15000,
    featured_image: '/images/project-2.jpg',
    gallery: [],
    description: 'Patient-centered design promoting wellness and recovery.',
    services_provided: ['Architectural Walls', 'Custom Design'],
    featured: true
  },
  {
    id: '3',
    title: 'Sustainable Office Complex',
    client: 'Green Energy Corp',
    location: 'Austin, TX',
    category: 'workplace' as const,
    industry: 'Sustainability',
    completion_date: new Date('2024-03-10'),
    project_size: 40000,
    featured_image: '/images/project-3.jpg',
    gallery: [],
    description: 'LEED Platinum certified workspace with biophilic design elements.',
    services_provided: ['Contract Furniture', 'Sustainability Consulting'],
    featured: true
  }
]

export default function ProjectsShowcase({ projects, isLoading, isInView }: ProjectsShowcaseProps) {
  const displayProjects = projects || placeholderProjects

  if (isLoading) {
    return (
      <div className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">Loading projects...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformative spaces that showcase our design excellence and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}` as any}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">{project.client}</p>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{project.location}</span>
                      <span>{project.project_size.toLocaleString()} sq ft</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="btn btn-primary inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 