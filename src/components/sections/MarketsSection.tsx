'use client'

import React from 'react'
import Link from 'next/link'
import CTAButton from '../ui/CTAButton'

interface MarketsSectionProps {
  sectionNumber?: string
  totalSections?: string
}

const markets = [
  {
    id: 'workplace',
    title: 'Workplaces (Corporate Offices)',
    subtitle: 'Business Environments',
    description: 'Future-ready environments for business offices, tech firms, media companies, and corporate environments. As a Steelcase Premier Partner, we deliver world-class solutions that enhance productivity and collaboration.',
    stats: { projects: '1,200+', size: '5.2M sq ft', satisfaction: '96%' },
    highlights: [
      'Steelcase Premier Partner - Top 5 in North America',
      'Activity-based working & hybrid-ready design',
      'Brand & culture integration with custom solutions', 
      'Smart technology deployment & collaboration tools',
      'Workplace strategy & change management',
      'Ergonomic solutions & wellness-focused design'
    ],
    href: '/markets/workplace',
    featured: true
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Healing Spaces',
    description: 'Solutions for hospitals, clinics, and wellness facilities focused on furniture, floor planning, and patient-centered design.',
    stats: { projects: '180+', size: '1.8M sq ft', satisfaction: '98%' },
    highlights: [
      'Evidence-based design principles',
      'Infection control materials',
      'Patient-centered planning'
    ],
    href: '/markets/healthcare',
    featured: false
  },
  {
    id: 'higher-education',
    title: 'Higher Education',
    subtitle: 'University Spaces',
    description: 'University and college spaces including innovative classrooms, libraries, student centers, and collaborative learning environments.',
    stats: { projects: '240+', size: '2.1M sq ft', satisfaction: '95%' },
    highlights: [
      'Active learning classrooms',
      'Collaborative commons',
      'Flexible library spaces'
    ],
    href: '/markets/higher-education',
    featured: false
  },
  {
    id: 'k12-education',
    title: 'K-12 Education',
    subtitle: 'Learning Environments',
    description: 'Learning environments for K-12 schools including flexible classrooms, STEAM spaces, and collaborative zones that enhance learning outcomes.',
    stats: { projects: '95+', size: '1.2M sq ft', satisfaction: '97%' },
    highlights: [
      'Flexible classroom systems',
      'STEAM learning spaces',
      'Age-appropriate solutions'
    ],
    href: '/markets/k12-education',
    featured: false
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    subtitle: 'Civic Spaces',
    description: 'Solutions for government offices, civic centers, and public institutions emphasizing durability, flexibility, and public-serving design.',
    stats: { projects: '120+', size: '850K sq ft', satisfaction: '97%' },
    highlights: [
      'ADA compliance & accessibility',
      'Security & safety integration',
      'Community-focused design'
    ],
    href: '/markets/government',
    featured: false
  }
]

export default function MarketsSection({
  sectionNumber = "04",
  totalSections = "06"
}: MarketsSectionProps) {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Architectural background grid */}
      <div className="absolute inset-0 opacity-[0.008]">
        <div className="absolute top-1/4 left-1/6 w-px h-64 bg-gray-900"></div>
        <div className="absolute bottom-1/4 right-1/6 w-px h-64 bg-gray-900"></div>
        <div className="absolute top-1/2 left-2/3 w-64 h-px bg-gray-900"></div>
      </div>

      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24">
        <div className="max-w-8xl mx-auto">
          
          {/* Section header */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 relative">
                {/* Architectural measurement lines */}
                <div className="absolute -left-4 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                <div className="absolute -left-6 top-24 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                  04
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Markets We Serve</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">{sectionNumber} / {totalSections}</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] tracking-[-0.02em] text-gray-900">
                    <span className="block">Industries We</span>
                    <span className="block text-gray-600 italic">Transform</span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    For over 50 years, we've partnered with organizations across industries to create environments that enhance human potential and drive success.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4 text-right">
                <Link 
                  href="/markets"
                  className="group inline-flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm font-medium tracking-wide">View All Markets</span>
                  <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured market - sophisticated layout with photography */}
          <div className="space-y-20">
            {/* Featured Workplace - Clean Layout with Photography */}
            <div className="relative">
              {markets.filter(market => market.featured).map((market, index) => (
                <div key={market.id} className="group relative">
                  <Link href={market.href} className="block">
                    <div className="relative">
                      {/* Architectural measurement lines */}
                      <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                      <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                      <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                        Featured
                      </div>
                      
                      <div className="grid lg:grid-cols-12 gap-16 items-start transform group-hover:translate-x-1 transition-transform duration-300">
                        
                        {/* Left side - Content */}
                        <div className="lg:col-span-7 space-y-8">
                          {/* Market header */}
                          <div className="space-y-4">
                            <div className="flex items-center space-x-6">
                              <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Market</div>
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                              <div className="text-xs text-gray-400 tracking-wide">{market.subtitle}</div>
                            </div>
                          </div>
                          
                          {/* Market title and description */}
                          <div className="space-y-6">
                            <h3 className="text-4xl lg:text-5xl font-extralight text-gray-900 tracking-wide leading-tight">
                              {market.title}
                            </h3>
                            
                            <p className="text-xl text-gray-600 font-light leading-relaxed">
                              {market.description}
                            </p>
                          </div>
                          
                          {/* Steelcase Partnership highlight */}
                          <div className="bg-gray-50/50 p-6 border-l-2 border-orange-400">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className="text-sm font-medium text-gray-900">Steelcase Premier Partner</div>
                                <div className="text-xs tracking-wide text-orange-600">Top 5 in North America</div>
                              </div>
                              <p className="text-sm text-gray-600 font-light leading-relaxed">
                                Access to world-class workplace research, cutting-edge products, and innovative solutions that enhance productivity and collaboration.
                              </p>
                            </div>
                          </div>
                          
                          {/* Enhanced highlights */}
                          <div className="space-y-4">
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-[0.1em]">Key Differentiators</div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {market.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
                                  <div className="w-4 h-px bg-gray-300 mt-2 flex-shrink-0"></div>
                                  <span className="tracking-wide leading-relaxed">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Stats row */}
                          <div className="grid grid-cols-3 gap-8 pt-4">
                            <div className="text-center">
                              <div className="text-2xl font-extralight text-gray-900 mb-1">{market.stats.projects}</div>
                              <div className="text-xs text-gray-500 tracking-[0.1em] uppercase">Projects</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-extralight mb-1" style={{ color: '#f9a31c' }}>{market.stats.size}</div>
                              <div className="text-xs text-gray-500 tracking-[0.1em] uppercase">Designed</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-extralight text-gray-900 mb-1">{market.stats.satisfaction}</div>
                              <div className="text-xs text-gray-500 tracking-[0.1em] uppercase">Satisfaction</div>
                            </div>
                          </div>
                          
                          {/* CTA */}
                          <div className="pt-6">
                            <div className="inline-flex items-center space-x-3 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                              <span className="text-sm font-medium tracking-wide">Explore Workplace Solutions</span>
                              <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side - Photography */}
                        <div className="lg:col-span-5 space-y-6">
                          {/* Main workspace image */}
                          <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                            <img
                              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              alt="Modern workplace designed by Tangram Interiors"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Photo overlay with subtle branding */}
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2">
                              <div className="text-xs text-gray-700 font-medium">Modern Collaboration Space</div>
                              <div className="text-xs text-gray-500">Los Angeles, CA</div>
                            </div>
                            {/* Architectural accent */}
                            <div className="absolute top-4 right-4 w-8 h-8 border border-white/30">
                              <div className="absolute inset-1 border border-orange-400"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional markets - clean grid */}
            <div className="grid lg:grid-cols-2 gap-16 pt-8">
              {markets.filter(market => !market.featured).map((market, index) => (
                <div key={market.id} className="group relative">
                  <Link href={market.href} className="block">
                    <div className="relative">
                      {/* Architectural measurement lines */}
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -left-6 top-0 w-2 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                      
                      <div className="space-y-6 transform group-hover:translate-x-1 transition-transform duration-300">
                        {/* Market header */}
                        <div className="space-y-2">
                          <div className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
                            {market.subtitle}
                          </div>
                        </div>
                        
                        {/* Market content */}
                        <div className="space-y-4">
                          <h3 className="text-2xl font-light text-gray-900 tracking-wide leading-tight">
                            {market.title}
                          </h3>
                          
                          <p className="text-gray-600 font-light leading-relaxed">
                            {market.description}
                          </p>
                          
                          {/* Compact stats */}
                          <div className="flex items-center space-x-6 text-xs text-gray-500 pt-2">
                            <span>{market.stats.projects} Projects</span>
                            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                            <span>{market.stats.satisfaction} Satisfaction</span>
                          </div>
                          
                          {/* Hover indicator */}
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-4">
                            <div className="w-0 h-px bg-gray-900 group-hover:w-8 transition-all duration-300"></div>
                            <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="mt-24 pt-16 border-t border-gray-100 relative">
            <div className="absolute -left-4 top-16 w-px h-16 bg-gradient-to-b from-gray-900 to-gray-400 opacity-30"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-900 tracking-wide">
                  Cross-Industry Innovation
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  What sets us apart is our ability to translate insights across industries. A wellness innovation from healthcare enhances workplace design. A collaborative solution from education transforms corporate meetings.
                </p>
                <div className="flex items-center space-x-6 text-xs text-gray-500">
                  <span className="uppercase tracking-[0.2em]">Multi-Industry Excellence</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <CTAButton href="/markets" variant="outline" size="lg">
                  <span>Explore All Markets</span>
                  <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 