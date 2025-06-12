'use client'

import React from 'react'
import { Move, Truck, Shield, Clock, CheckCircle, Calendar, Package, Map } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function MoveManagementPage() {
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
                      <span>Move Management</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Seamless</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Transitions</span>
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
                          End-to-End Service
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Complete move management and ongoing facility support services that minimize disruption while maximizing efficiency during your transition.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "500+", label: "Successful Moves" },
                      { value: "99%", label: "On-Time Delivery" },
                      { value: "Zero", label: "Lost Items" }
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
                    <CTAButton href="/contact" variant="primary" size="lg">
                      <span>Plan Your Move</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg">
                      <span>View Case Studies</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
                    
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
                          Professional Move Management
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Seamless Transitions<br />Zero Disruption
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
            Move Excellence
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Approach</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Moving is more</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        than
                        <span className="italic text-gray-600 ml-3">logistics</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        it's transformation
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        A successful move is about more than just transporting items—it's about enabling your team to thrive in their new environment from day one.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Our comprehensive move management services handle every detail, from pre-move planning to post-move support, ensuring your transition is seamless and stress-free.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Key Values */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { value: "Planned", label: "Execution", description: "Detailed planning eliminates surprises" },
                    { value: "Protected", label: "Assets", description: "Comprehensive inventory and insurance" },
                    { value: "Productive", label: "Teams", description: "Minimal downtime and quick setup" }
                  ].map((benefit, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-2xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {benefit.value}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">{benefit.label}</div>
                        {benefit.description && (
                          <div className="text-sm text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {benefit.description}
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

      {/* Featured Move Projects Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Moves</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Seamless moves</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      that enable
                      <span className="italic text-gray-600 ml-3">growth</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      without disruption
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Discover how our comprehensive move management services have helped organizations relocate efficiently while maintaining business continuity and employee satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Project 1 - Corporate Relocation */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Corporate Relocation</div>
                    <div className="text-xs text-white/70 mb-3">Fortune 500 Financial Services</div>
                    <div className="text-lg font-light">2,400 employees relocated in 48 hours</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Downtown Campus Consolidation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive relocation of 2,400 employees from 4 buildings into a single downtown campus, executed over a weekend with zero business disruption.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">2,400</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Employees Moved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">48hr</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Total Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Zero</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Downtime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Healthcare System Move */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Healthcare System Move</div>
                    <div className="text-xs text-white/70 mb-3">Regional Medical Network</div>
                    <div className="text-lg font-light">Critical care equipment and administrative offices</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Mission-Critical Healthcare Move</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Specialized relocation of medical equipment, patient records, and 800+ healthcare workers with strict regulatory compliance and 24/7 operational requirements.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">800+</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Healthcare Staff</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">24/7</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Operations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">100%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Compliance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Global Law Firm */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Global Law Firm</div>
                    <div className="text-xs text-white/70 mb-3">AmLaw 50 International Practice</div>
                    <div className="text-lg font-light">Phased move across 18 months</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Strategic Phased Relocation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complex 18-month phased relocation strategy accommodating practice group schedules, client confidentiality, and extensive law library migration.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">18</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Month Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">12</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Practice Groups</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Secure</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Document Handling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Projects CTA */}
            <div className="text-center pt-16">
              <CTAButton href="/projects" variant="outline" size="lg">
                <span>View All Move Projects</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Move Services</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Complete move</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        management
                        <span className="italic text-gray-600 ml-3">and</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        facility support
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        From initial planning through ongoing facility support, we provide comprehensive services that ensure your move is smooth and your new space functions perfectly.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Services List */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "Pre-Move Planning", 
                      description: "Detailed space planning, timelines, and logistics coordination to ensure a smooth transition." 
                    },
                    { 
                      number: "02", 
                      title: "Asset Management", 
                      description: "Complete inventory, labeling, and tracking of all furniture and equipment during the move." 
                    },
                    { 
                      number: "03", 
                      title: "Professional Moving", 
                      description: "Experienced crews using proper equipment and techniques to protect your valuable assets." 
                    },
                    { 
                      number: "04", 
                      title: "Space Setup", 
                      description: "Precise placement and configuration of furniture and equipment in your new location." 
                    },
                    { 
                      number: "05", 
                      title: "Ongoing Support", 
                      description: "Post-move adjustments, reconfigurations, and ongoing facility maintenance services." 
                    }
                  ].map((service, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">{service.number}</div>
                        <div className="text-xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {service.title}
                        </div>
                        <div className="text-sm text-gray-600 font-light leading-relaxed">
                          {service.description}
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

      {/* Move Management Team Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Move Management Team</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Every successful</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      move requires
                      <span className="italic text-gray-600 ml-3">expert</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      orchestration
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Meet our experienced move management professionals who coordinate every detail to ensure your relocation is seamless, efficient, and stress-free.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Team Member 1 - Move Director */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-cyan-100 via-cyan-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-cyan-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Move Director
                        </div>
                        <div className="text-cyan-900 text-lg font-light">
                          Amanda Rodriguez, CPM
                        </div>
                        <div className="w-8 h-px bg-cyan-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Amanda Rodriguez, CPM</h3>
                      <p className="text-sm text-gray-600 mb-3">Move Director</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Certified professional mover with 17+ years orchestrating complex corporate relocations. Expert in timeline management and stakeholder coordination.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Corporate Moves</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Project Management</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Risk Management</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Certifications</div>
                      <div className="text-sm text-gray-600">
                        • CPM Certified Professional Mover<br/>
                        • PMP Project Management<br/>
                        • IIDA Industry Associate
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Logistics Coordinator */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-blue-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Logistics Coordinator
                        </div>
                        <div className="text-blue-900 text-lg font-light">
                          Steven Park
                        </div>
                        <div className="w-8 h-px bg-blue-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Steven Park</h3>
                      <p className="text-sm text-gray-600 mb-3">Logistics Coordinator</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Operations specialist managing complex move logistics and transportation. 14+ years ensuring efficient resource allocation and scheduling.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Fleet Management</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Resource Planning</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Schedule Optimization</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Expertise</div>
                      <div className="text-sm text-gray-600">
                        • Multi-Site Coordination<br/>
                        • Equipment Tracking Systems<br/>
                        • 98% On-Time Performance
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 - Client Relations */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-gray-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Client Relations Manager
                        </div>
                        <div className="text-gray-900 text-lg font-light">
                          Jennifer Nash
                        </div>
                        <div className="w-8 h-px bg-gray-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Jennifer Nash</h3>
                      <p className="text-sm text-gray-600 mb-3">Client Relations Manager</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Communication specialist ensuring seamless stakeholder engagement throughout the move process. 12+ years managing client expectations and satisfaction.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Stakeholder Management</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Communication Plans</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Change Management</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Track Record</div>
                      <div className="text-sm text-gray-600">
                        • 96% Client Satisfaction<br/>
                        • 150+ Moves Coordinated<br/>
                        • Employee Advocacy Focus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Move Management Credentials */}
            <div className="pt-16 border-t border-gray-200 mt-16">
              <div className="grid lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">3M+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Square Feet Relocated</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">10K+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Employees Moved</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">98%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">On-Time Completion</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">Zero</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Lost Items Policy</div>
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
                Ready to plan your move?
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Let's create a seamless transition that gets your team productive in their new space from day one.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Plan Your Move</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>View Case Studies</span>
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