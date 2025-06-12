'use client'

import React from 'react'
import { Palette, Hammer, Star, Lightbulb, Zap, Users, Award, CheckCircle } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function CustomFurniturePage() {
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
                      <span>Custom Furniture</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Studio Other</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Custom Design</span>
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
                          Bespoke Fabrication
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Our custom design studio crafts unique furniture and fixtures tailored to your brand and specific needs. Where imagination meets expert craftsmanship.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "500+", label: "Custom Pieces" },
                      { value: "100%", label: "Brand Aligned" },
                      { value: "6", label: "Week Turnaround" }
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
                              {stat.value}<span className="text-xl" style={{ color: '#f9a31c' }}>wk</span>
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
                      <span>Design Custom Piece</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg">
                      <span>View Custom Work</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900">
                    
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
                          Custom Design Studio
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Where Imagination<br />Meets Craftsmanship
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
            Creative Excellence
          </div>
        </div>
      </section>

      {/* Studio Other Philosophy Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column - Studio Philosophy */}
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
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Every space</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        tells a
                        <span className="italic text-gray-600 ml-3">story</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        make it yours
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Studio Other is our custom design and fabrication studio where your vision becomes reality. We create bespoke furniture that reflects your brand identity and enhances your space.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        From concept sketches to final installation, our team of designers and craftspeople work collaboratively to bring your unique vision to life with meticulous attention to detail.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Process Metrics */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { value: "Concept", label: "Design Phase", description: "Collaborative ideation and sketching" },
                    { value: "Craft", label: "Fabrication", description: "Expert craftsmanship and quality materials" },
                    { value: "Install", label: "Delivery", description: "Professional installation and setup" }
                  ].map((phase, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-2xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {phase.value}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">{phase.label}</div>
                        {phase.description && (
                          <div className="text-sm text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {phase.description}
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

      {/* Featured Custom Projects Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Studio Other Projects</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Custom pieces</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      that tell
                      <span className="italic text-gray-600 ml-3">your</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      unique story
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Explore bespoke furniture and fixtures created by Studio Other, where every piece is crafted to reflect your brand identity and functional requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Project 1 - Reception Desk */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Sculptural Reception</div>
                    <div className="text-xs text-white/70 mb-3">Tech Startup Headquarters</div>
                    <div className="text-lg font-light">30-foot curved reception desk with integrated LED</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Curved Reception Masterpiece</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Seamless 30-foot curved reception desk featuring integrated technology, hidden storage, and custom LED lighting to reflect the company's innovation focus.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">30ft</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Seamless Curve</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">8</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Week Fabrication</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">LED</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Integrated Tech</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Conference Table */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Boardroom Centerpiece</div>
                    <div className="text-xs text-white/70 mb-3">Fortune 500 Financial Services</div>
                    <div className="text-lg font-light">Live-edge walnut table with integrated AV</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Executive Boardroom Table</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    18-foot live-edge American walnut conference table with hidden technology integration and power/data access for 16 executives.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">18ft</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Live Edge Walnut</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">16</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Executive Seats</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Hidden</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Technology</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Brand Wall */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Interactive Brand Wall</div>
                    <div className="text-xs text-white/70 mb-3">Global Architecture Firm</div>
                    <div className="text-lg font-light">Dynamic display showcasing project portfolio</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Dynamic Brand Experience</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    12-foot interactive brand wall featuring rotating displays, custom millwork, and integrated lighting to showcase the firm's global portfolio.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">12ft</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Interactive Wall</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Dynamic</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Content Display</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Custom</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Millwork</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Projects CTA */}
            <div className="text-center pt-16">
              <CTAButton href="/projects" variant="outline" size="lg">
                <span>View All Custom Projects</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Capabilities</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Custom furniture</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        that reflects
                        <span className="italic text-gray-600 ml-3">your</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        brand identity
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        From reception desks to conference tables, we create custom pieces that perfectly align with your brand and functional requirements.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Capabilities List */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "Reception Desks", 
                      description: "Custom reception areas that make powerful first impressions and reflect your brand values." 
                    },
                    { 
                      number: "02", 
                      title: "Conference Tables", 
                      description: "Boardroom tables designed for collaboration with integrated technology and refined aesthetics." 
                    },
                    { 
                      number: "03", 
                      title: "Storage Solutions", 
                      description: "Built-in storage systems and custom cabinetry that maximize space and organization." 
                    },
                    { 
                      number: "04", 
                      title: "Brand Elements", 
                      description: "Signage, displays, and architectural features that reinforce your corporate identity." 
                    },
                    { 
                      number: "05", 
                      title: "Specialty Pieces", 
                      description: "Unique furniture solutions for specific functional requirements and aesthetic goals." 
                    }
                  ].map((capability, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">{capability.number}</div>
                        <div className="text-xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {capability.title}
                        </div>
                        <div className="text-sm text-gray-600 font-light leading-relaxed">
                          {capability.description}
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

      {/* Studio Other Design Team Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Studio Other Team</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Creative minds</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      skilled
                      <span className="italic text-gray-600 ml-3">hands</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      endless possibilities
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Meet the artists, designers, and craftspeople behind Studio Other who transform concepts into exceptional custom furniture and fixtures.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Team Member 1 - Creative Director */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 via-purple-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-purple-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Creative Director
                        </div>
                        <div className="text-purple-900 text-lg font-light">
                          Alexandra Stone
                        </div>
                        <div className="w-8 h-px bg-purple-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Alexandra Stone</h3>
                      <p className="text-sm text-gray-600 mb-3">Creative Director</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Visionary designer with 20+ years creating bespoke furniture. Expert in translating brand identity into functional art pieces.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Concept Development</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Brand Translation</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Material Selection</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Recognition</div>
                      <div className="text-sm text-gray-600">
                        • ASID Designer of the Year 2022<br/>
                        • International Design Excellence Award<br/>
                        • Featured in Architectural Digest
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Master Craftsperson */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 via-amber-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-amber-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Master Craftsperson
                        </div>
                        <div className="text-amber-900 text-lg font-light">
                          Roberto Martinez
                        </div>
                        <div className="w-8 h-px bg-amber-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Roberto Martinez</h3>
                      <p className="text-sm text-gray-600 mb-3">Master Craftsperson</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Third-generation furniture maker with expertise in fine woodworking, metal fabrication, and precision assembly of complex custom pieces.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Fine Woodworking</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Metal Fabrication</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Precision Assembly</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Expertise</div>
                      <div className="text-sm text-gray-600">
                        • 25+ Years Craftsmanship<br/>
                        • Traditional & Modern Techniques<br/>
                        • 500+ Custom Pieces Created
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 - Project Manager */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-teal-100 via-teal-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-teal-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Project Manager
                        </div>
                        <div className="text-teal-900 text-lg font-light">
                          Emma Richardson
                        </div>
                        <div className="w-8 h-px bg-teal-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Emma Richardson</h3>
                      <p className="text-sm text-gray-600 mb-3">Project Manager</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expert project coordinator ensuring seamless execution from concept through installation. 12+ years managing complex custom fabrication projects.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Timeline Management</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Quality Control</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Client Relations</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Track Record</div>
                      <div className="text-sm text-gray-600">
                        • 95% On-Time Delivery<br/>
                        • Zero Defect Quality Standard<br/>
                        • 300+ Projects Managed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Credentials */}
            <div className="pt-16 border-t border-gray-200 mt-16">
              <div className="grid lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">500+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Custom Pieces Created</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">8</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Master Craftspeople</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">6</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Week Avg Timeline</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">100%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Brand Aligned</div>
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
                Ready to create something unique?
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Let's collaborate to design and fabricate custom furniture that perfectly reflects your brand and enhances your space.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Design Custom Piece</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>View Custom Work</span>
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