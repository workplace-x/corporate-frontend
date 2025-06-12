'use client'

import React from 'react'
import { Layers, Move, Shield, Settings, CheckCircle, Ruler, Hammer, Zap } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function ArchitecturalWallsPage() {
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
                      <span>Architectural Walls</span>
        </div>
      </div>

                  {/* Typography - Refined sizing */}
              <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Flexible Space</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Division</span>
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
                          Demountable Systems
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Interior architectural products that enable flexible space division, adapting as fast as your business grows and changes.
                  </p>
                </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "75%", label: "Space Efficiency" },
                      { value: "48", label: "Hour Install" },
                      { value: "100%", label: "Reconfigurable" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('%') ? (
                            <>
                              {stat.value.replace('%', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>%</span>
                            </>
                          ) : (
                            <>
                              {stat.value}<span className="text-xl" style={{ color: '#f9a31c' }}>hr</span>
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
                      <span>Design Your Walls</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg">
                      <span>View Installations</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-700 to-orange-900">
                    
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
                          Architectural Wall Systems
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Flexible Spaces<br />Endless Possibilities
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
            Flexible Excellence
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column - Benefits */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Key Benefits</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Walls that</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        move with
                        <span className="italic text-gray-600 ml-3">your</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        business needs
                      </span>
          </div>

                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Demountable architectural walls provide the flexibility to reconfigure your space as your business evolves, without the cost and disruption of traditional construction.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        From private offices to open collaboration areas, our wall systems adapt to changing needs while maintaining acoustic performance and aesthetic appeal.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Key Benefits */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { value: "Flexible", label: "Reconfiguration", description: "Easily modify layouts as needs change" },
                    { value: "Cost", label: "Effective", description: "Lower cost than traditional construction" },
                    { value: "Quick", label: "Installation", description: "Minimal disruption to operations" }
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

      {/* Featured Wall Installations Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Installations</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Walls that</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      adapt as
                      <span className="italic text-gray-600 ml-3">fast</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      as business changes
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    See how demountable wall systems have transformed workplaces, providing the flexibility to reconfigure spaces quickly and cost-effectively as organizations evolve.
            </p>
          </div>
              </div>
            </div>

            {/* Installations Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Installation 1 - Growing Tech Company */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-900 via-orange-700 to-orange-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Rapid Growth Adaptation</div>
                    <div className="text-xs text-white/70 mb-3">Technology Startup</div>
                    <div className="text-lg font-light">500% growth supported by flexible walls</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Scaling with Success</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Demountable glass partitions allowed this startup to grow from 20 to 120 employees in the same space through strategic reconfigurations every 6 months.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">500%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Growth Supported</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">6</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Reconfigurations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">80%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation 2 - Law Firm Privacy */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Privacy & Acoustics</div>
                    <div className="text-xs text-white/70 mb-3">International Law Firm</div>
                    <div className="text-lg font-light">85 private offices with superior sound control</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Confidential Conversations</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Full-height solid demountable walls providing exceptional acoustic privacy for 85 attorney offices while maintaining future flexibility.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">85</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Private Offices</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">STC 48</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Sound Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">3</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Day Install</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation 3 - Hospital Flex Space */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Healthcare Adaptation</div>
                    <div className="text-xs text-white/70 mb-3">Regional Medical Center</div>
                    <div className="text-lg font-light">Infection-control walls for changing needs</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Healthcare Flexibility</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Medical-grade demountable walls with antimicrobial surfaces enabling rapid reconfiguration of clinical spaces during pandemic response.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Medical</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Grade Materials</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">24hr</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Reconfiguration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">100%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Code Compliant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Projects CTA */}
            <div className="text-center pt-16">
              <CTAButton href="/projects" variant="outline" size="lg">
                <span>View All Wall Projects</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Wall Solutions</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Demountable wall</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        systems
                        <span className="italic text-gray-600 ml-3">for</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        every space need
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        From glass partitions to solid walls, we provide architectural wall solutions that balance privacy, acoustics, and aesthetic appeal.
            </p>
          </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Solutions List */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "Glass Partitions", 
                      description: "Transparent walls that maintain openness while providing acoustic separation and privacy options." 
                    },
                    { 
                      number: "02", 
                      title: "Solid Wall Systems", 
                      description: "Full-height walls with superior acoustic performance for confidential spaces and focused work areas." 
                    },
                    { 
                      number: "03", 
                      title: "Combination Systems", 
                      description: "Mixed materials combining solid panels with glass elements for balanced privacy and openness." 
                    },
                    { 
                      number: "04", 
                      title: "Sliding Doors", 
                      description: "Space-saving entrance solutions that integrate seamlessly with wall systems." 
                    },
                    { 
                      number: "05", 
                      title: "Reconfiguration", 
                      description: "Expert services to modify existing layouts and optimize space utilization." 
                    }
                  ].map((solution, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">{solution.number}</div>
                        <div className="text-xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {solution.title}
                        </div>
                        <div className="text-sm text-gray-600 font-light leading-relaxed">
                          {solution.description}
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

      {/* Wall Systems Team Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Wall Systems Experts</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Building flexible</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      spaces
                      <span className="italic text-gray-600 ml-3">requires</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      flexible thinking
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Our architectural wall specialists combine engineering expertise with design insight to create flexible solutions that adapt to your changing business needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Team Member 1 - Wall Systems Specialist */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 via-orange-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-orange-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Wall Systems Specialist
                        </div>
                        <div className="text-orange-900 text-lg font-light">
                          Kevin Harper, PE
                        </div>
                        <div className="w-8 h-px bg-orange-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Kevin Harper, PE</h3>
                      <p className="text-sm text-gray-600 mb-3">Wall Systems Specialist</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Professional engineer with 19+ years specializing in demountable wall systems. Expert in structural integrity, acoustics, and code compliance.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Structural Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Acoustic Engineering</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Code Compliance</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Credentials</div>
                      <div className="text-sm text-gray-600">
                        • Professional Engineer License<br/>
                        • LEED AP BD+C Certified<br/>
                        • IBC Code Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Installation Manager */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-gray-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Installation Manager
                        </div>
                        <div className="text-gray-900 text-lg font-light">
                          Rachel Foster
                        </div>
                        <div className="w-8 h-px bg-gray-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Rachel Foster</h3>
                      <p className="text-sm text-gray-600 mb-3">Installation Manager</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expert installation coordinator specializing in occupied space installations. 14+ years ensuring minimal disruption during wall system projects.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Project Coordination</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Occupied Installs</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Quality Control</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Track Record</div>
                      <div className="text-sm text-gray-600">
                        • 98% On-Time Completion<br/>
                        • Zero Disruption Goal<br/>
                        • 200+ Wall Installations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 - Acoustics Consultant */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-blue-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Acoustics Consultant
                        </div>
                        <div className="text-blue-900 text-lg font-light">
                          Dr. Thomas Chen, PhD
                        </div>
                        <div className="w-8 h-px bg-blue-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Dr. Thomas Chen, PhD</h3>
                      <p className="text-sm text-gray-600 mb-3">Acoustics Consultant</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Acoustical engineer with PhD in sound science. Expert in privacy requirements and acoustic performance testing for demountable walls.
            </p>
          </div>

                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Sound Analysis</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Privacy Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Performance Testing</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Education</div>
                      <div className="text-sm text-gray-600">
                        • PhD Acoustical Engineering<br/>
                        • ASA Fellow Member<br/>
                        • 50+ Research Publications
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wall Systems Credentials */}
            <div className="pt-16 border-t border-gray-200 mt-16">
              <div className="grid lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">75%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Space Efficiency Gain</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">48hr</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Average Install Time</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">100%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Reconfigurable</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">80%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Cost Savings vs Traditional</div>
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
                Ready to create flexible spaces?
            </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Let's design architectural wall systems that give you the flexibility to adapt your space as your business grows and evolves.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Design Your Walls</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>View Installations</span>
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