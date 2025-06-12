'use client'

import React from 'react'
import { Users, TrendingUp, Shield, Zap, CheckCircle, Eye, Heart, Cpu } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function WorkplaceDesignPage() {
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
                      <span>Services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Workplace Design</span>
        </div>
      </div>

                  {/* Typography - Refined sizing */}
              <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Where People</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Shape Space</span>
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
                          Human-Centered Design
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          We design transformative workplace environments where innovation flourishes and human potential is unleashed.
                  </p>
                </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "300+", label: "Workplaces Designed" },
                      { value: "85%", label: "Employee Satisfaction" },
                      { value: "30%", label: "Productivity Increase" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
                            </>
                          ) : (
                            <>
                              {stat.value.replace('%', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>%</span>
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
                      <span>Transform Your Workplace</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg">
                      <span>View Projects</span>
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
                          Modern Workplace Environment
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Innovation Through<br />Thoughtful Design
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
            Workplace Excellence
          </div>
        </div>
      </section>

      {/* Philosophy Section - World-Class Content */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column - Philosophy */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
              <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Design Philosophy</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Workplace is not</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        where you
                        <span className="italic text-gray-600 ml-3">work</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        it's how you thrive
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Every workplace we design serves a deeper purpose. We don't just arrange furniture – we orchestrate human potential.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Through evidence-based design principles and deep understanding of human behavior, we transform workspaces into catalysts for collaboration, innovation, and wellbeing.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Key Metrics */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { value: "12+", label: "Award-Winning Projects", description: "Industry recognition for design excellence" },
                    { value: "98%", label: "Client Retention", description: "Long-term partnerships built on results" },
                    { value: "16", label: "Week Avg Timeline", description: "Complete workplace transformation" }
                  ].map((metric, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-[-0.02em] group-hover:text-gray-700 transition-colors duration-300">
                          {metric.value.includes('+') ? (
                            <>
                              {metric.value.replace('+', '')}<span className="text-3xl" style={{ color: '#f9a31c' }}>+</span>
                            </>
                          ) : (
                            metric.value
                          )}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">{metric.label}</div>
                        {metric.description && (
                          <div className="text-sm text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {metric.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 opacity-40 pt-8">
                  <div className="w-12 h-px bg-gray-900 ml-auto"></div>
                  <div className="w-6 h-px ml-auto" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="w-8 h-px bg-gray-900 ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Projects</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Workplace</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      transformations
                      <span className="italic text-gray-600 ml-3">that</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      inspire results
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    See how we've transformed workplaces for leading organizations, creating environments that boost productivity, enhance collaboration, and reflect company culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Project 1 - Tech Company HQ */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Innovation Campus</div>
                    <div className="text-xs text-white/70 mb-3">San Francisco Tech Company</div>
                    <div className="text-lg font-light">45,000 SF workplace transformation supporting 400+ employees</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Collaborative Innovation Hub</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Activity-based work environment with flexible neighborhoods, focus pods, and innovation labs that increased collaboration by 40%.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">40%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">More Collaboration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">92%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Employee Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">16</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Week Timeline</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Financial Services */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Executive Floor</div>
                    <div className="text-xs text-white/70 mb-3">Fortune 500 Financial Services</div>
                    <div className="text-lg font-light">12,000 SF C-suite renovation with premium finishes</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Executive Leadership Center</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sophisticated executive environment balancing privacy with transparency, featuring custom millwork and premium materials.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">100%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Custom Elements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">8</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Week Install</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Zero</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Downtime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Legal Firm */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Legal Headquarters</div>
                    <div className="text-xs text-white/70 mb-3">AmLaw 100 Law Firm</div>
                    <div className="text-lg font-light">85,000 SF workplace supporting 200+ attorneys</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Professional Services Hub</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Traditional meets modern with flexible attorney offices, collaboration spaces, and client-facing areas reflecting firm heritage.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">200+</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Attorney Offices</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">96%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">20</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Week Project</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Projects CTA */}
            <div className="text-center pt-16">
              <CTAButton href="/projects" variant="outline" size="lg">
                <span>View All Workplace Projects</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Approach</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Five key</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        workplace
                        <span className="italic text-gray-600 ml-3">design</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        principles
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Your workplace should be a tool for driving culture, innovation, and growth. Here's how we make that happen.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Features List */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "Human-Centered Planning", 
                      description: "Understanding how people work and designing spaces that enhance their natural behaviors and interactions." 
                    },
                    { 
                      number: "02", 
                      title: "Activity-Based Environments", 
                      description: "Creating diverse zones for focus work, collaboration, learning, and social connection." 
                    },
                    { 
                      number: "03", 
                      title: "Technology Integration", 
                      description: "Seamless AV systems, wireless connectivity, and smart building features that support modern work." 
                    },
                    { 
                      number: "04", 
                      title: "Wellness & Comfort", 
                      description: "Ergonomic furniture, natural lighting, air quality, and biophilic elements that support health." 
                    },
                    { 
                      number: "05", 
                      title: "Brand Expression", 
                      description: "Reflecting your culture and values through design elements that reinforce identity and belonging." 
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">{feature.number}</div>
                        <div className="text-xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {feature.title}
                        </div>
                        <div className="text-sm text-gray-600 font-light leading-relaxed">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                
                <div className="space-y-4 opacity-40 pt-8">
                  <div className="w-12 h-px bg-gray-900 ml-auto"></div>
                  <div className="w-6 h-px ml-auto" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="w-8 h-px bg-gray-900 ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Solutions</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Steelcase solutions</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      for modern
                      <span className="italic text-gray-600 ml-3">work</span>
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    As a premier Steelcase partner, we bring you research-backed furniture solutions designed to enhance performance, comfort, and collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Product 1 - Gesture Chair */}
              <div className="group">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-blue-800">
                          <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Steelcase Gesture</div>
                          <div className="text-xs">Ergonomic Task Chair</div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">Gesture Task Chair</h3>
                      <p className="text-gray-600 leading-relaxed">
                        The first chair designed to support our interactions with today's technologies. Gesture supports a greater range of technologies, postures and movements than any other chair.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-lg font-light text-gray-900">360°</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Arm Movement</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">9</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Adjustment Points</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">12</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Year Warranty</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2 - Migration SE */}
              <div className="group">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-green-800">
                          <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Migration SE</div>
                          <div className="text-xs">Height-Adjustable Desk</div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">Migration SE Desk</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Electric height-adjustable desk supporting the shift between sitting and standing. Promotes movement and wellness while maintaining focus and productivity.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-lg font-light text-gray-900">27"</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Height Range</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">250</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Lb Capacity</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">Quiet</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Operation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 3 - Brody WorkLounge */}
              <div className="group">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-purple-800">
                          <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Brody WorkLounge</div>
                          <div className="text-xs">Focus Pod</div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">Brody WorkLounge</h3>
                      <p className="text-gray-600 leading-relaxed">
                        A new class of workspace that provides a comfortable, productive sanctuary for focused work away from the energy and activity of the open office.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-lg font-light text-gray-900">78%</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Noise Reduction</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">Built-in</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Power & Data</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">Modular</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Configurations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 4 - Verb Collection */}
              <div className="group">
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-orange-800">
                          <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Verb Collection</div>
                          <div className="text-xs">Active Learning</div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">Verb Collection</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Mobile tables and seating that support active, collaborative learning and can be easily reconfigured to support different learning modes.
            </p>
          </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-lg font-light text-gray-900">Mobile</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Quick Reconfig</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">Flip-top</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Nesting Tables</div>
                      </div>
                      <div>
                        <div className="text-lg font-light text-gray-900">Multiple</div>
                        <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Configurations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steelcase Partnership CTA */}
            <div className="text-center pt-16">
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  As a premier Steelcase partner, we bring you the latest workplace research and furniture innovations backed by over 100 years of design excellence.
                </p>
                <CTAButton href="/services/contract-furniture" variant="outline" size="lg">
                  <span>Explore Contract Furniture</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Team Expertise</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.8 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Workplace design</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      specialists
                      <span className="italic text-gray-600 ml-3">who</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      understand business
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Our certified workplace strategists and design professionals bring deep expertise in human behavior, business process, and spatial design to every project.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Team Member 1 - Senior Workplace Strategist */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-blue-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Senior Workplace Strategist
                        </div>
                        <div className="text-blue-900 text-lg font-light">
                          Sarah Chen, AIA
                        </div>
                        <div className="w-8 h-px bg-blue-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Sarah Chen, AIA</h3>
                      <p className="text-sm text-gray-600 mb-3">Senior Workplace Strategist</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        15+ years designing transformative workplaces for Fortune 500 companies. Expert in activity-based working and change management strategies.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Workplace Strategy</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Change Management</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Space Planning</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Certifications</div>
                      <div className="text-sm text-gray-600">
                        • Steelcase 360 Dealer Certification<br/>
                        • WELL AP Credential<br/>
                        • AIA Licensed Architect
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Design Director */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-green-100 via-green-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-green-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Design Director
                        </div>
                        <div className="text-green-900 text-lg font-light">
                          Marcus Rodriguez
                        </div>
                        <div className="w-8 h-px bg-green-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Marcus Rodriguez</h3>
                      <p className="text-sm text-gray-600 mb-3">Design Director</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Award-winning designer specializing in technology integration and user experience design. 12+ years creating innovative workplace solutions.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">UX Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Technology Integration</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Innovation Labs</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Recognition</div>
                      <div className="text-sm text-gray-600">
                        • IIDA Best of Year Award 2023<br/>
                        • CoreNet Global Innovator<br/>
                        • Contract Design Hall of Fame
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 - Research & Analytics */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 via-purple-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-purple-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Research & Analytics Lead
                        </div>
                        <div className="text-purple-900 text-lg font-light">
                          Dr. Lisa Park, PhD
                        </div>
                        <div className="w-8 h-px bg-purple-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Dr. Lisa Park, PhD</h3>
                      <p className="text-sm text-gray-600 mb-3">Research & Analytics Lead</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Organizational psychologist and workplace researcher. PhD in Environmental Psychology with focus on human behavior in built environments.
            </p>
          </div>

                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Behavioral Research</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Data Analytics</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Post-Occupancy</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Education</div>
                      <div className="text-sm text-gray-600">
                        • PhD Environmental Psychology<br/>
                        • MS Industrial Engineering<br/>
                        • 25+ Published Research Papers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Credentials */}
            <div className="pt-16 border-t border-gray-200 mt-16">
              <div className="grid lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">25+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Design Professionals</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">150+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Combined Years Experience</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">8</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Industry Certifications</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">100%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Steelcase Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto text-center">
            
          <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-6 justify-center mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Ready to Begin</div>
                <div className="w-16 h-px bg-gray-900"></div>
                <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="text-xs text-gray-400 tracking-wide">04 / 04</div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                Ready to transform your workplace?
            </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Let's create environments where your people thrive and your business grows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Start Your Project</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>View Workplace Projects</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 