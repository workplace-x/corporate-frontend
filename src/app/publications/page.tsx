'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronRight, Calendar, User, Download, Search } from 'lucide-react'
import CTAButton from '../../components/ui/CTAButton'

// Mock data for publications
const publications = [
  {
    id: 'workplace-wellness-study-2024',
    title: 'The Impact of Biophilic Design on Employee Wellbeing',
    author: 'Dr. Sarah Chen, FAIA',
    date: '2024-02-15',
    category: 'Research Paper',
    type: 'Research Paper',
    tags: ['Workplace', 'Wellness', 'Biophilic Design', 'Employee Productivity'],
    excerpt: 'This comprehensive study examines how biophilic design elements in workplace environments contribute to improved employee satisfaction, reduced stress levels, and increased productivity.',
    downloadUrl: '/downloads/workplace-wellness-study-2024.pdf',
    featured: true
  },
  {
    id: 'sustainable-furniture-report-2023',
    title: 'Sustainable Materials in Contract Furniture',
    author: 'Michael Rodriguez, LEED AP',
    date: '2023-11-20',
    category: 'White Paper',
    type: 'White Paper',
    tags: ['Sustainability', 'Materials', 'Environmental Impact', 'Contract Furniture'],
    excerpt: 'An in-depth analysis of sustainable material options in contract furniture manufacturing and their long-term environmental and performance benefits.',
    downloadUrl: '/downloads/sustainable-furniture-report-2023.pdf',
    featured: false
  },
  {
    id: 'healthcare-design-trends-2024',
    title: 'Evidence-Based Healthcare Design Trends',
    author: 'Dr. Jennifer Park, PhD',
    date: '2024-01-10',
    category: 'Design Report',
    type: 'Design Report',
    tags: ['Healthcare', 'Evidence-Based Design', 'Patient Experience', 'Design Trends'],
    excerpt: 'Latest trends in healthcare design focusing on patient outcomes, staff efficiency, and family experience in healing environments.',
    downloadUrl: '/downloads/healthcare-design-trends-2024.pdf',
    featured: true
  }
]

const types = ['All', 'Research Paper', 'White Paper', 'Design Report', 'Case Study']
const categories = ['All', 'Workplace', 'Healthcare', 'Sustainability', 'Technology']

export default function PublicationsPage() {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPublications = publications.filter(pub => {
    const matchesType = selectedType === 'All' || pub.type === selectedType
    const matchesCategory = selectedCategory === 'All' || pub.tags.some(tag => tag === selectedCategory)
    const matchesSearch = searchTerm === '' || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesType && matchesCategory && matchesSearch
  })

  const featuredPublications = publications.filter(pub => pub.featured)

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
                      <span>Research</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Publications</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Research &</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Design</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Publications
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
                          Evidence-Based Insights
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Advancing human-centered design through rigorous research, data analysis, and industry collaboration.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: `${publications.length}+`, label: "Publications" },
                      { value: "15+", label: "Research Partners" },
                      { value: "5K+", label: "Downloads" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
                            </>
                          ) : stat.value.includes('K') ? (
                            <>
                              {stat.value.replace('K', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>K</span>
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
                      <span>Request Research</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/about" variant="outline" size="lg">
                      <span>Our Research Lab</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-900">
                    
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
                          Research & Publications
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Evidence-Based<br />Design Insights
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
            Evidence-Based Research
          </div>
        </div>
      </section>

      {/* Featured Publications Section - Exact Homepage Architecture */}
      {featuredPublications.length > 0 && (
        <section className="relative py-32 lg:py-40 bg-gray-50 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #1f2937 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative z-10 px-8 sm:px-16 lg:px-24">
            <div className="max-w-8xl mx-auto">
              
              {/* Section header - exact homepage style */}
              <div className="text-center mb-20">
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="w-16 h-px bg-gray-900"></div>
                  <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">Featured Research</span>
                  <div className="w-16 h-px bg-gray-900"></div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  Latest research
                  <span className="block text-gray-600">advancing design science</span>
                </h2>
                
                <div className="w-32 h-px bg-gray-900 mx-auto mb-8"></div>
                
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                  Evidence-based studies and insights that shape the future of human-centered design 
                  and environmental psychology.
                </p>
              </div>

              {/* Featured publications grid */}
              <div className="space-y-20">
                {featuredPublications.map((pub, index) => (
                  <div key={pub.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'order-2' : ''}>
                      <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-12 border border-gray-100 hover:shadow-xl transition-all duration-700 cursor-pointer">
                        <div className="text-center">
                          <div className="text-6xl mb-6">📄</div>
                          <div className="text-2xl font-light text-gray-900 mb-4">{pub.title}</div>
                          <div className="text-gray-600">{pub.category}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'order-1' : ''}>
                      <div className="space-y-8">
                        <div className="space-y-6">
                          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
                            <span>{pub.category}</span>
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            {pub.title}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{pub.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(pub.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {pub.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {pub.tags.map((tag, i) => (
                            <span key={i} className="text-sm px-4 py-2 bg-green-100 text-green-600 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <CTAButton href={`/publications/${pub.id}`} variant="primary" size="md">
                            <span>Read Publication</span>
                            <ArrowRight className="w-4 h-4" />
                          </CTAButton>
                          
                          {pub.downloadUrl && (
                            <CTAButton href={pub.downloadUrl} variant="outline" size="md">
                              <span>Download PDF</span>
                              <Download className="w-4 h-4" />
                            </CTAButton>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Publications Section - Homepage Style */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-px bg-gray-900"></div>
                <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">All Publications</span>
                <div className="w-16 h-px bg-gray-900"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Complete research library
                <span className="block text-gray-600">for design professionals</span>
              </h2>
              
              <div className="w-32 h-px bg-gray-900 mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                Browse our complete research library covering healthcare design, workplace innovation, 
                and environmental sustainability.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                
                {/* Filter buttons */}
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-wrap gap-3 items-center">
                    <span className="text-sm font-medium text-gray-900 mr-2">Type:</span>
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          selectedType === type
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 items-center">
                    <span className="text-sm font-medium text-gray-900 mr-2">Category:</span>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-green-600 text-white'
                            : 'bg-green-100 text-green-600 hover:bg-green-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search publications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 w-80"
                  />
                </div>
              </div>
            </div>

            {/* Publications grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPublications.map((pub) => (
                <div key={pub.id} className="group bg-white border border-gray-100 p-8 hover:shadow-xl transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 mb-8 group-hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-gray-600">
                        <div className="text-4xl mb-3">📄</div>
                        <div className="text-lg font-medium">{pub.category}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-mono text-indigo-600 uppercase tracking-wider">
                          {pub.category}
                        </div>
                        <div className="text-xs text-gray-600">
                          5 min read
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                        {pub.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {pub.excerpt.length > 120 
                          ? `${pub.excerpt.substring(0, 120)}...` 
                          : pub.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center space-x-2">
                          <User className="w-3 h-3" />
                          <span>{pub.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(pub.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-indigo-600 font-medium group-hover:text-green-600 transition-colors">
                        <span className="text-sm">Read Publication</span>
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPublications.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">No publications found</h3>
                <p className="text-xl text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {/* Research request CTA */}
            <div className="text-center mt-20">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                Need custom research for your project?
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Request Custom Research</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/about" variant="outline" size="lg">
                  <span>Meet Our Researchers</span>
                  <ArrowRight className="w-5 h-5" />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 