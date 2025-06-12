'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronRight, Calendar, User, Clock, Search, Filter, CheckCircle } from 'lucide-react'
import CTAButton from '../../components/ui/CTAButton'

const blogPosts = [
  {
    id: '1',
    title: 'The Psychology of Color in Healthcare Design',
    category: 'Healthcare',
    date: '2024-12-10',
    author: 'Dr. Sarah Chen',
    excerpt: 'How strategic color choices in healthcare environments can reduce patient anxiety and promote healing through evidence-based design principles.',
    readTime: '8 min read',
    featured: true,
    tags: ['Healthcare', 'Psychology', 'Evidence-Based Design']
  },
  {
    id: '2',
    title: 'Biophilic Design: Bringing Nature into the Workplace',
    category: 'Workplace',
    date: '2024-12-05',
    author: 'Emily Watson',
    excerpt: 'Exploring the measurable benefits of incorporating natural elements into office environments for enhanced employee wellbeing and productivity.',
    readTime: '6 min read',
    featured: true,
    tags: ['Workplace', 'Biophilic', 'Wellbeing']
  },
  {
    id: '3',
    title: 'Smart Building Technologies: A Designer\'s Perspective',
    category: 'Technology',
    date: '2024-11-28',
    author: 'David Kim',
    excerpt: 'Balancing technological innovation with human-centered design in modern building systems and IoT integration.',
    readTime: '10 min read',
    featured: false,
    tags: ['Technology', 'Smart Buildings', 'IoT']
  },
  {
    id: '4',
    title: 'Post-Pandemic Office Design: Lessons from 2024',
    category: 'Workplace',
    date: '2024-11-20',
    author: 'Michael Rodriguez',
    excerpt: 'How workplace design has evolved to address new health, safety, and flexibility requirements in the modern office.',
    readTime: '7 min read',
    featured: false,
    tags: ['Workplace', 'Health & Safety', 'Flexibility']
  },
  {
    id: '5',
    title: 'The Future of Educational Spaces',
    category: 'Education',
    date: '2024-11-15',
    author: 'Jennifer Park',
    excerpt: 'Designing learning environments that foster creativity, collaboration, and adaptability for 21st-century education.',
    readTime: '9 min read',
    featured: false,
    tags: ['Education', 'Future of Learning', 'Flexibility']
  },
  {
    id: '6',
    title: 'Sustainability in Contract Furniture',
    category: 'Sustainability',
    date: '2024-11-08',
    author: 'Alex Thompson',
    excerpt: 'Examining the environmental impact of furniture choices and strategies for creating more sustainable commercial interiors.',
    readTime: '5 min read',
    featured: false,
    tags: ['Sustainability', 'Contract Furniture', 'Environmental Impact']
  }
]

const categories = ['All', 'Healthcare', 'Workplace', 'Technology', 'Education', 'Sustainability']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

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
                      <span>Insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Design Stories</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Design</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Stories</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          & Insights
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
                          Exploring Human-Centered Design
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Evidence-based insights, research-driven analysis, and design innovation stories from our expert team.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "180+", label: "Articles Published" },
                      { value: "45K", label: "Monthly Readers" },
                      { value: "15", label: "Expert Contributors" }
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
                      <span>Subscribe to Updates</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/publications" variant="outline" size="lg">
                      <span>Research Papers</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-900">
                    
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
                          Design Stories & Insights
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Evidence-Based<br />Innovation
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
            Evidence-Based Design
          </div>
        </div>
      </section>

      {/* Featured Posts Section - Exact Homepage Architecture */}
      {featuredPosts.length > 0 && (
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
                  <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">Featured Stories</span>
                  <div className="w-16 h-px bg-gray-900"></div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  Latest insights from
                  <span className="block text-gray-600">our design team</span>
                </h2>
                
                <div className="w-32 h-px bg-gray-900 mx-auto mb-8"></div>
                
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                  Exploring innovative approaches to human-centered design through evidence-based research 
                  and real-world case studies.
                </p>
              </div>

              {/* Featured posts grid */}
              <div className="space-y-20">
                {featuredPosts.map((post, index) => (
                  <div key={post.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'order-2' : ''}>
                      <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-12 border border-gray-100 hover:shadow-xl transition-all duration-700 cursor-pointer">
                        <div className="text-center">
                          <div className="text-6xl mb-6">📖</div>
                          <div className="text-2xl font-light text-gray-900 mb-4">{post.title}</div>
                          <div className="text-gray-600">{post.category}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'order-1' : ''}>
                      <div className="space-y-8">
                        <div className="space-y-6">
                          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                            <span>{post.category}</span>
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            {post.title}
                          </h3>
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {post.tags.map((tag, i) => (
                            <span key={i} className="text-sm px-4 py-2 bg-green-100 text-green-600 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <CTAButton href={`/blog/${post.id}`} variant="outline" size="md">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section - Homepage Style */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-px bg-gray-900"></div>
                <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">All Stories</span>
                <div className="w-16 h-px bg-gray-900"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Complete collection of
                <span className="block text-gray-600">design insights</span>
              </h2>
            </div>

            {/* Filters */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 w-80"
                  />
                </div>
              </div>
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group bg-white border border-gray-100 p-8 hover:shadow-xl transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 mb-8 group-hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-gray-600">
                        <div className="text-4xl mb-3">📖</div>
                        <div className="text-lg font-medium">{post.category}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-mono text-blue-600 uppercase tracking-wider">
                          {post.category}
                        </div>
                        <div className="text-xs text-gray-600">
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt.length > 120 
                          ? `${post.excerpt.substring(0, 120)}...` 
                          : post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center space-x-2">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
                            +{post.tags.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-green-600 transition-colors">
                        <span className="text-sm">Read Article</span>
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              </div>
            )}

            {/* Newsletter CTA */}
            <div className="text-center mt-20">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                Stay informed on design innovation
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Subscribe to Newsletter</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/publications" variant="outline" size="lg">
                  <span>Research Publications</span>
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