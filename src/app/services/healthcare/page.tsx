'use client'

import React from 'react'
import { Heart, Shield, Users, Star, CheckCircle, Stethoscope, Activity, Award } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function HealthcareServicesPage() {
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
                      <span>Healthcare Design</span>
        </div>
      </div>

                  {/* Typography - Refined sizing */}
              <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Healing</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Environments</span>
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
                          Compassionate Design
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          We create healthcare environments that prioritize patient well-being, support clinical excellence, and enhance the healing process through thoughtful design.
                  </p>
                </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "50+", label: "Healthcare Facilities" },
                      { value: "95%", label: "Patient Satisfaction" },
                      { value: "100%", label: "Code Compliance" }
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
                      <span>Design Healthcare Space</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg">
                      <span>View Healthcare Projects</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-900">
                    
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
                          Healthcare Design Excellence
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Healing Through<br />Thoughtful Design
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
            Healthcare Excellence
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Design Philosophy</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Healthcare design</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        puts people
                        <span className="italic text-gray-600 ml-3">first</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        always
                      </span>
          </div>

                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Great healthcare design reduces stress, supports healing, and creates environments where patients feel cared for and staff can provide their best care.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        We understand the unique challenges of healthcare environments and design spaces that balance clinical functionality with human comfort and dignity.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Core Values */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { value: "Patient", label: "Centered", description: "Design that prioritizes comfort and dignity" },
                    { value: "Clinical", label: "Excellence", description: "Supporting efficient care delivery" },
                    { value: "Evidence", label: "Based", description: "Proven design strategies for healing" }
                  ].map((principle, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-2xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {principle.value}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">{principle.label}</div>
                        {principle.description && (
                          <div className="text-sm text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {principle.description}
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

      {/* Services Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Healthcare Services</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Complete healthcare</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        design
                        <span className="italic text-gray-600 ml-3">and</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        implementation
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        From medical offices to specialty care facilities, we provide comprehensive design services that create healing environments while meeting strict healthcare requirements.
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
                      title: "Patient-Centered Design", 
                      description: "Creating comfortable, calming environments that reduce anxiety and support the healing process." 
                    },
                    { 
                      number: "02", 
                      title: "Clinical Efficiency", 
                      description: "Optimizing workflows and space planning to improve staff efficiency and patient care delivery." 
                    },
                    { 
                      number: "03", 
                      title: "Safety & Compliance", 
                      description: "Ensuring all designs meet healthcare codes, ADA requirements, and infection control standards." 
                    },
                    { 
                      number: "04", 
                      title: "Technology Integration", 
                      description: "Seamlessly integrating medical equipment, data systems, and communication technology." 
                    },
                    { 
                      number: "05", 
                      title: "Specialty Care", 
                      description: "Expertise in specialized environments including surgery centers, imaging, and emergency care." 
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

      {/* Featured Healthcare Projects Section */}
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
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Healing environments</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      that inspire
                      <span className="italic text-gray-600 ml-3">hope</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      and promote wellness
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Discover how our healthcare design expertise has created compassionate, functional environments that support both patient care and staff wellbeing.
            </p>
          </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Project 1 - Regional Medical Center */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-900 via-teal-700 to-teal-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Regional Medical Center</div>
                    <div className="text-xs text-white/70 mb-3">500-Bed Hospital System</div>
                    <div className="text-lg font-light">Complete interior renovation and expansion</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Comprehensive Healing Campus</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Evidence-based design transformation supporting 500 beds, outpatient clinics, and specialty care units with focus on infection control and patient experience.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">500</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Patient Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">18</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Month Project</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Zero</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Service Disruption</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Specialty Clinic */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Cancer Treatment Center</div>
                    <div className="text-xs text-white/70 mb-3">Comprehensive Cancer Care</div>
                    <div className="text-lg font-light">Compassionate design for critical care</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Cancer Care Sanctuary</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Biophilic design integration creating calming treatment environments with natural light, therapeutic gardens, and family support spaces.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">24</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Treatment Rooms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">95%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Natural Light</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Zen</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Garden Spaces</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Senior Living */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Senior Living Community</div>
                    <div className="text-xs text-white/70 mb-3">Memory Care & Assisted Living</div>
                    <div className="text-lg font-light">Residential comfort meets clinical excellence</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Memory Care Excellence</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Specialized memory care environments with wayfinding design, secure outdoor spaces, and residential-style interiors promoting dignity and independence.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">120</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Resident Units</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Secure</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Memory Garden</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Home</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Like Environment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Projects CTA */}
            <div className="text-center pt-16">
              <CTAButton href="/projects" variant="outline" size="lg">
                <span>View All Healthcare Projects</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Design Team Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Healthcare Design Team</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Compassionate design</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      requires
                      <span className="italic text-gray-600 ml-3">deep</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      healthcare understanding
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Our healthcare design specialists combine clinical knowledge with design expertise to create environments that support healing, improve outcomes, and enhance the healthcare experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Team Member 1 - Healthcare Design Director */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-teal-100 via-teal-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-teal-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Healthcare Design Director
                        </div>
                        <div className="text-teal-900 text-lg font-light">
                          Dr. Rebecca Martinez, AIA
                        </div>
                        <div className="w-8 h-px bg-teal-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Dr. Rebecca Martinez, AIA</h3>
                      <p className="text-sm text-gray-600 mb-3">Healthcare Design Director</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Licensed architect with PhD in Health Facility Design. 20+ years creating healing environments that improve patient outcomes and staff efficiency.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Evidence-Based Design</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Infection Control</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Patient Experience</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Credentials</div>
                      <div className="text-sm text-gray-600">
                        • PhD Health Facility Design<br/>
                        • AIA Licensed Architect<br/>
                        • LEED AP Healthcare Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Clinical Operations Specialist */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-blue-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Clinical Operations Specialist
                        </div>
                        <div className="text-blue-900 text-lg font-light">
                          Michael Chen, RN, MSN
                        </div>
                        <div className="w-8 h-px bg-blue-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Michael Chen, RN, MSN</h3>
                      <p className="text-sm text-gray-600 mb-3">Clinical Operations Specialist</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Registered nurse with Master's in Healthcare Administration. 15+ years bridging clinical practice with design to optimize workflow and safety.
            </p>
          </div>

                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Clinical Workflow</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Patient Safety</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Staff Efficiency</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Background</div>
                      <div className="text-sm text-gray-600">
                        • RN Registered Nurse<br/>
                        • MSN Healthcare Administration<br/>
                        • 15+ Years Clinical Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 - Compliance Specialist */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-green-100 via-green-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-green-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Compliance Specialist
                        </div>
                        <div className="text-green-900 text-lg font-light">
                          Sarah Davis, CIC
                        </div>
                        <div className="w-8 h-px bg-green-900/40"></div>
          </div>
        </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Sarah Davis, CIC</h3>
                      <p className="text-sm text-gray-600 mb-3">Compliance Specialist</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Certified infection control specialist ensuring all healthcare designs meet regulatory standards. 13+ years in healthcare compliance and safety.
            </p>
          </div>

                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Infection Control</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Regulatory Compliance</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Code Analysis</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Certifications</div>
                      <div className="text-sm text-gray-600">
                        • CIC Infection Control Certified<br/>
                        • Joint Commission Expert<br/>
                        • OSHA Healthcare Compliance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Design Credentials */}
            <div className="pt-16 border-t border-gray-200 mt-16">
              <div className="grid lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">50+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Healthcare Projects</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">100%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Code Compliance</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">Zero</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Compliance Issues</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">95%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Patient Satisfaction</div>
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
                Ready to create healing environments?
            </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Let's design healthcare spaces that prioritize patient well-being while supporting clinical excellence and operational efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Design Healthcare Space</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>View Healthcare Projects</span>
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