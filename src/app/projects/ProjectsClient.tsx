'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Search } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import { SanityProject } from './page'
import CTAButton from '../../components/ui/CTAButton'

interface ProjectsClientProps {
  publishedProjects: SanityProject[]
  featuredProjects: SanityProject[]
  otherProjects: SanityProject[]
}

export default function ProjectsClient({ 
  publishedProjects, 
  featuredProjects, 
  otherProjects 
}: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMarket, setSelectedMarket] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = publishedProjects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.verticalMarket === selectedCategory
    const marketMatch = selectedMarket === 'all' || project.verticalMarket === selectedMarket
    const searchMatch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location?.cityState?.toLowerCase().includes(searchTerm.toLowerCase())
    
    return categoryMatch && marketMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Compact & Visual-Forward */}
      <section className="relative min-h-[70vh] bg-white overflow-hidden pt-32">
        
        <div className="relative z-10">
          <div className="w-full px-8 sm:px-16 lg:px-24 py-16">
            <div className="max-w-8xl mx-auto">
              
              {/* Split layout - Image & Content */}
              <div className="grid lg:grid-cols-2 gap-0 min-h-[50vh] items-center">
                
                {/* Left Column - Content */}
                <div className="flex flex-col justify-center space-y-8 lg:pr-16">
                  
                  {/* Breadcrumb navigation */}
                  <div className="flex items-center space-x-4 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-px bg-gray-900"></div>
                      <span>Portfolio</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Our Projects</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Transformational</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Design</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Portfolio
                        </span>
                      </h1>
                      
                      {/* Measurement lines */}
                      <div className="absolute -left-6 top-0 w-px h-16 bg-gradient-to-b from-gray-900 to-gray-400 opacity-50"></div>
                      <div className="absolute -left-8 top-0 w-4 h-px bg-gray-900 opacity-50"></div>
                      <div className="absolute -left-8 top-16 w-4 h-px bg-orange-500 opacity-70" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                    
                    {/* Subtext */}
                    <div className="max-w-lg relative pl-2">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-900 via-orange-500 to-transparent opacity-40" style={{ background: `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, transparent)` }}></div>
                      <div className="space-y-4">
                        <p className="text-xl md:text-2xl leading-[1.4] font-light text-gray-700 tracking-[-0.01em]">
                          Award-Winning Projects
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Showcasing our expertise across healthcare, workplace, and educational environments. Every project tells a story of human-centered innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: `${publishedProjects.length}+`, label: "Projects Completed" },
                      { value: "12M", label: "Square Feet" },
                      { value: "96%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
                            </>
                          ) : stat.value.includes('M') ? (
                            <>
                              {stat.value.replace('M', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>M</span>
                            </>
                          ) : stat.value.includes('%') ? (
                            <>
                              {stat.value.replace('%', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>%</span>
                            </>
                          ) : (
                            <>
                              {stat.value}<span className="text-xl" style={{ color: '#f9a31c' }}></span>
                            </>
                          )}
                        </div>
                        <div className="text-xs uppercase tracking-[0.15em] text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <CTAButton href="/contact" variant="primary" size="lg">
                      <span>Start Your Project</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/visit" variant="outline" size="lg">
                      <span>Schedule a Visit</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900">
                    
                    {/* Architectural overlay pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-px h-40 bg-white"></div>
                      <div className="absolute bottom-1/3 right-1/3 w-px h-32 bg-white"></div>
                      <div className="absolute top-1/2 right-1/4 w-20 h-px bg-white"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-16 h-px bg-white"></div>
                    </div>
                    
                    {/* Image overlay content */}
                    <div className="absolute inset-0 flex items-end p-12">
                      <div className="space-y-4">
                        <div className="text-white/90 text-sm uppercase tracking-[0.2em] font-medium">
                          Design Portfolio
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Transforming Spaces<br />Across Industries
                        </div>
                        <div className="w-12 h-px bg-white/60"></div>
                      </div>
                    </div>
                    
                    {/* Orange accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural elements */}
        <div className="absolute top-8 right-8 space-y-2 opacity-40">
          <div className="w-8 h-px bg-gray-900"></div>
          <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
          <div className="w-6 h-px bg-gray-900"></div>
        </div>
        
        {/* Vertical text */}
        <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 transform -rotate-90 origin-center whitespace-nowrap">
            Transformational Design
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      {publishedProjects.length > 6 && (
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-8xl mx-auto px-8 sm:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects, clients, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                >
                  <option value="all">All Markets</option>
                  <option value="workplace">Workplace</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="relative py-32 lg:py-40 bg-gray-50 overflow-hidden">
          <div className="relative z-10 px-8 sm:px-16 lg:px-24">
            <div className="max-w-8xl mx-auto">
              
              {/* Section header */}
              <div className="text-center mb-20">
                <div className="flex items-center space-x-6 justify-center mb-12">
                  <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Work</div>
                  <div className="w-16 h-px bg-gray-900"></div>
                  <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                  <span className="block transform hover:translate-x-1 transition-transform duration-300">Award-winning</span>
                  <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                    design
                    <span className="italic text-gray-600 ml-3">solutions</span>
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                  Highlighting our most impactful projects that transform how people experience their environments.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <Link 
                    key={project._id}
                    href={`/projects/${project.slug.current}`}
                    className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-700 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10">
                      <div className="aspect-[16/10] bg-gray-200 overflow-hidden">
                        {project.images && project.images[0] ? (
                          <Image
                            src={urlFor(project.images[0]).width(800).height(500).url()}
                            alt={project.images[0].alt || project.title}
                            width={800}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                            <div className="text-6xl text-gray-400">🏢</div>
                          </div>
                        )}
                      </div>
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                            {project.verticalMarket || project.businessUnit || 'Project'}
                          </span>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#fef3e2', color: '#c2410c' }}>
                            Featured
                          </span>
                        </div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        {project.client && (
                          <p className="text-blue-600 mb-4 font-medium">{project.client}</p>
                        )}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {project.description || project.subHeader || 'Transformative interior design solution'}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <div>{project.location?.cityState || 'Location TBD'}</div>
                            {project.year && <div>{project.year}</div>}
                          </div>
                          <span className="text-sm font-medium text-blue-600">
                            View Project →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className={`relative py-32 lg:py-40 ${featuredProjects.length > 0 ? 'bg-white' : 'bg-gray-50'} overflow-hidden`}>
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                {featuredProjects.length > 0 ? 'All Projects' : 'Our Work'}
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive portfolio showcasing our expertise across diverse industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedMarket !== 'all' ? filteredProjects : (featuredProjects.length > 0 ? otherProjects : publishedProjects)).map((project) => (
                <Link 
                  key={project._id}
                  href={`/projects/${project.slug.current}`}
                  className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-700 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                      {project.images && project.images[0] ? (
                        <Image
                          src={urlFor(project.images[0]).width(600).height(450).url()}
                          alt={project.images[0].alt || project.title}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                          <div className="text-4xl text-gray-400">🏢</div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                          {project.verticalMarket || project.businessUnit || 'Project'}
                        </span>
                        {project.year && (
                          <span className="text-sm text-gray-500">{project.year}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.client && (
                        <p className="text-blue-600 text-sm mb-3">{project.client}</p>
                      )}
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                        {project.description || project.subHeader || 'Transformative interior design solution'}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {project.location?.cityState || 'Location TBD'}
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {publishedProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 text-gray-400">🏢</div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Projects Coming Soon</h3>
                <p className="text-gray-600 mb-8">
                  We're currently uploading our portfolio. Check back soon to see our amazing work.
                </p>
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Discuss Your Project</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
              </div>
            )}

            {/* No Results State */}
            {(searchTerm || selectedMarket !== 'all') && filteredProjects.length === 0 && publishedProjects.length > 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No Projects Found</h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your search terms or filters to find more projects.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedMarket('all')
                    setSelectedCategory('all')
                  }}
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 lg:py-40 bg-gray-900 overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-white mb-8">
              Ready to start your project?
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Let's discuss how we can transform your space with our proven design expertise and human-centered approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                <span>Get Started</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
              
              <CTAButton href="/visit" variant="outline" size="lg">
                <span>Schedule a Visit</span>
                <ArrowRight className="w-5 h-5" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}