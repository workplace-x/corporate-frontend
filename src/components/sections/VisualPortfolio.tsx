'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Grid3X3, Rows3, Filter, Eye, ExternalLink, Calendar, Users, Maximize2 } from 'lucide-react'
import ImageGallery, { ProjectGallery } from '../ui/ImageGallery'
import { ProjectImage, OfficeImage } from '../ui/OptimizedImage'

interface PortfolioProject {
  id: string
  title: string
  client: string
  category: string
  year: string
  location: string
  description: string
  impact: string
  image?: string
  aspect?: 'square' | 'video' | 'portrait' | 'wide' | 'hero'
  featured?: boolean
  beforeImage?: string
  afterImage?: string
  stats: {
    sqft: string
    users: string
    outcome: string
  }
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 'biotech-campus',
    title: 'Biotech Innovation Campus',
    client: 'Fortune 500 Biotech',
    category: 'workplace',
    year: '2024',
    location: 'Silicon Valley',
    description: 'Complete campus transformation featuring lab-to-office integration, biophilic design principles, and flexible collaboration zones.',
    impact: '40% increase in cross-team collaboration',
    aspect: 'hero',
    featured: true,
    stats: {
      sqft: '450K',
      users: '2,800',
      outcome: '+40% collaboration'
    }
  },
  {
    id: 'medical-center',
    title: 'Healing Environment Design',
    client: 'Regional Medical Center',
    category: 'healthcare',
    year: '2024',
    location: 'Orange County',
    description: 'Evidence-based design creating calming, efficient healing environments that support both patient outcomes and staff wellbeing.',
    impact: '25% reduction in patient stress indicators',
    aspect: 'video',
    featured: true,
    stats: {
      sqft: '180K',
      users: '1,200',
      outcome: '-25% stress'
    }
  },
  {
    id: 'learning-commons',
    title: 'Adaptive Learning Spaces',
    client: 'UC Irvine',
    category: 'education',
    year: '2023',
    location: 'Irvine',
    description: 'Revolutionary learning commons supporting diverse pedagogical approaches with integrated technology and flexible configurations.',
    impact: '60% increase in space utilization',
    aspect: 'wide',
    stats: {
      sqft: '75K',
      users: '3,500',
      outcome: '+60% utilization'
    }
  },
  {
    id: 'fintech-hq',
    title: 'Agile Fintech Workspace',
    client: 'Emerging Fintech',
    category: 'workplace',
    year: '2024',
    location: 'Los Angeles',
    description: 'High-security, highly collaborative workspace designed for rapid scaling and cross-functional team integration.',
    impact: '35% productivity increase',
    aspect: 'square',
    stats: {
      sqft: '95K',
      users: '650',
      outcome: '+35% productivity'
    }
  },
  {
    id: 'pharma-research',
    title: 'Research Facility Modernization',
    client: 'Global Pharma Leader',
    category: 'workplace',
    year: '2023',
    location: 'San Diego',
    description: 'State-of-the-art research facility balancing stringent safety requirements with collaborative innovation spaces.',
    impact: '50% faster project completion',
    aspect: 'video',
    stats: {
      sqft: '220K',
      users: '1,500',
      outcome: '+50% faster'
    }
  },
  {
    id: 'community-college',
    title: 'Student Success Center',
    client: 'Community College District',
    category: 'education',
    year: '2023',
    location: 'Riverside',
    description: 'Comprehensive student support facility designed to improve retention and academic success through thoughtful space planning.',
    impact: '30% improvement in student retention',
    aspect: 'portrait',
    stats: {
      sqft: '45K',
      users: '2,000',
      outcome: '+30% retention'
    }
  }
]

const categories = [
  { id: 'all', label: 'All Projects', count: portfolioProjects.length },
  { id: 'workplace', label: 'Workplace', count: portfolioProjects.filter(p => p.category === 'workplace').length },
  { id: 'healthcare', label: 'Healthcare', count: portfolioProjects.filter(p => p.category === 'healthcare').length },
  { id: 'education', label: 'Education', count: portfolioProjects.filter(p => p.category === 'education').length }
]

export default function VisualPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [layoutMode, setLayoutMode] = useState<'grid' | 'masonry'>('masonry')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects)

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(portfolioProjects)
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === activeCategory))
    }
  }, [activeCategory])

  const featuredProjects = portfolioProjects.filter(p => p.featured)

  const galleryImages = filteredProjects.map(project => ({
    id: project.id,
    src: project.image,
    alt: `${project.title} - ${project.client}`,
    title: project.title,
    description: project.description,
    category: project.category,
    aspect: project.aspect,
    placeholder: project.category === 'healthcare' ? 'office' as const : 'project' as const
  }))

  return (
    <section className="py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1800px] mx-auto mb-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <div className="text-xs font-mono text-gray-400 mb-4">003_PORTFOLIO</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              Visual
              <br />
              <span className="text-red-600">storytelling</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Every space has a story. Through careful documentation and visual narrative, 
              we showcase the transformative power of thoughtful design and its measurable 
              impact on human experience and organizational success.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects Hero Grid */}
      <div className="max-w-[1800px] mx-auto mb-32">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Featured Transformations</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Signature projects that demonstrate our approach to creating environments 
              that inspire, enable, and evolve with the people who use them.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} - ${project.client}`}
                  aspect={index === 0 ? 'hero' : 'video'}
                  showOverlay={true}
                  overlayContent={
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-white/80">
                          {project.year}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-xl lg:text-2xl font-medium mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-light">{project.stats.sqft}</div>
                          <div className="text-xs opacity-80">Sq Ft</div>
                        </div>
                        <div>
                          <div className="text-lg font-light">{project.stats.users}</div>
                          <div className="text-xs opacity-80">Users</div>
                        </div>
                        <div>
                          <div className="text-lg font-light">{project.stats.outcome}</div>
                          <div className="text-xs opacity-80">Impact</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <span className="text-sm">{project.client}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">View Case Study</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  }
                  className="w-full"
                  onClick={() => setSelectedProject(project.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div className="max-w-[1800px] mx-auto">
        {/* Gallery Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>Filter by sector:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.label}</span>
                  <span className={`text-xs ${
                    activeCategory === category.id ? 'text-red-200' : 'text-gray-400'
                  }`}>
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Layout:</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-2 rounded transition-colors ${
                  layoutMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-400'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('masonry')}
                className={`p-2 rounded transition-colors ${
                  layoutMode === 'masonry' ? 'bg-white shadow-sm' : 'text-gray-400'
                }`}
              >
                <Rows3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <ImageGallery
          images={galleryImages}
          layout={layoutMode}
          columns={3}
          showFilter={false}
          showLightbox={true}
          className="mb-16"
        />

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to see your space transformed?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every project begins with understanding your unique challenges and aspirations. 
              Let's start a conversation about your vision.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/projects"
              className="inline-flex items-center space-x-3 text-lg font-light text-gray-900 hover:text-red-600 transition-colors duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-3 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 