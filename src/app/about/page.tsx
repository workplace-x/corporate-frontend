'use client'

import React from 'react'
import { ArrowRight, Heart, Shield, Zap, Users, Award, Target } from 'lucide-react'
import CTAButton from '../../components/ui/CTAButton'

export default function AboutPage() {
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
                      <span>About</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Our Story</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Designing Spaces</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Where People</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Thrive
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
                          For over 50 years, we've been creating environments that inspire human potential through thoughtful, evidence-based design.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "50+", label: "Years Excellence" },
                      { value: "1800+", label: "Projects" },
                      { value: "96%", label: "Satisfaction" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
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
                    <CTAButton href="/team" variant="primary" size="lg">
                      <span>Meet Our Team</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg">
                      <span>View Our Work</span>
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
                          Human-Centered Design
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Creating Spaces<br />Where People Thrive
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
            Design Excellence
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Philosophy</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Design is not</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        what you
                        <span className="italic text-gray-600 ml-3">see</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        but how you feel
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        For over five decades, Tangram has believed that the built environment profoundly shapes human experience.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Through evidence-based design and deep understanding of human behavior, we transform spaces into catalysts for collaboration, innovation, and wellbeing.
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
                    { value: "12M", label: "Square Feet", description: "Transformational spaces created" },
                    { value: "75%", label: "Repeat Clients", description: "Long-term partnerships" },
                    { value: "25+", label: "Industry Awards", description: "Design excellence recognition" }
                  ].map((metric, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-2xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {metric.value}
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

      {/* Leadership Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Leadership</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Visionary leaders</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      driving
                      <span className="italic text-gray-600 ml-3">human</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      centered innovation
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Meet the visionaries behind our human-centered approach—leaders who combine decades of design expertise with genuine passion for creating spaces where people thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Sonya Lozowski */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Chairman</div>
                    <div className="text-xs text-white/70 mb-3">Visionary Leadership</div>
                    <div className="text-lg font-light">Medicine meets design innovation</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Sonya Lozowski</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A visionary leader blending a background in medicine with a passion for design, Sonya champions Tangram's human-centered approach to transforming spaces.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Medical</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Background</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Vision</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Leadership</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Human</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Centered</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Joe Lozowski */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">President & CEO</div>
                    <div className="text-xs text-white/70 mb-3">Strategic Leadership</div>
                    <div className="text-lg font-light">$250M revenue transformation</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Joe Lozowski</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Since 2002, Joe has led Tangram's transformation from a regional dealer to an interiors industry leader with over $250M in revenue and national reach.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">22+</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Years Leading</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">$250M</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">National</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Reach</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nick Meter */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">VP of Sales</div>
                    <div className="text-xs text-white/70 mb-3">Client Development</div>
                    <div className="text-lg font-light">Driving growth across all units</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Nick Meter</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nick is the driving force behind Tangram's sales and client development, with expertise across all business units and deep client relationships.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Sales</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Client</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Development</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Growth</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Driver</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team CTA */}
            <div className="text-center pt-16">
              <CTAButton href="/team" variant="outline" size="lg">
                <span>Meet Our Complete Team</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Core Values</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Principles that</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        guide
                        <span className="italic text-gray-600 ml-3">everything</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        we create
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Our values aren't just words on a wall—they're the foundation of every decision, every design, and every relationship we build.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Values List */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "People-Centric", 
                      description: "We put humans at the heart of every design decision, creating spaces that enhance wellbeing and performance." 
                    },
                    { 
                      number: "02", 
                      title: "Integrity & Trust", 
                      description: "Delivering on promises is part of our DNA. We build lasting partnerships through transparent communication." 
                    },
                    { 
                      number: "03", 
                      title: "Innovation with Purpose", 
                      description: "Curiosity drives us, but innovation is never for its own sake—it's always in service of better outcomes." 
                    },
                    { 
                      number: "04", 
                      title: "Sustainable Thinking", 
                      description: "Environmental responsibility guides our material choices and long-term design strategies." 
                    },
                    { 
                      number: "05", 
                      title: "Collaborative Spirit", 
                      description: "Partnership with clients and communities drives our most successful and meaningful projects." 
                    }
                  ].map((value, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">{value.number}</div>
                        <div className="text-xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {value.title}
                        </div>
                        <div className="text-sm text-gray-600 font-light leading-relaxed">
                          {value.description}
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
                Ready to work with us?
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Let's create spaces that inspire human potential and transform the way your organization works, collaborates, and thrives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Start a Project</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/services" variant="outline" size="lg">
                  <span>Explore Services</span>
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