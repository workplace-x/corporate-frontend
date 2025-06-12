'use client'

import React from 'react'
import { Building, Users, Award, TrendingUp, CheckCircle, Lightbulb, Globe, Star } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function ContractFurniturePage() {
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
                      <span>Contract Furniture</span>
        </div>
      </div>

                  {/* Typography - Refined sizing */}
              <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Complete Office</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Solutions</span>
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
                          World-Class Partnerships
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          We partner with leading manufacturers to bring you the best contract furniture solutions, from global brands to specialized providers.
                        </p>
                      </div>
                    </div>
                </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "15+", label: "Manufacturing Partners" },
                      { value: "1000+", label: "Offices Furnished" },
                      { value: "25+", label: "Years Experience" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
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
                      <span>Get Furniture Quote</span>
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
                          Premium Office Furniture
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Global Innovation<br />Local Expertise
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
            Furniture Excellence
          </div>
        </div>
      </section>

      {/* Steelcase Partnership Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column - Partnership Story */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
              <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Partnership Excellence</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Premier Steelcase</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        partnership
                        <span className="italic text-gray-600 ml-3">bringing</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        global innovation
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        As one of Steelcase's top 10 partners in North America, we deliver world-class furniture solutions backed by decades of workplace research.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        From ergonomic seating systems to flexible workstations, we provide comprehensive furniture solutions that enhance performance, comfort, and wellbeing.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Partnership Benefits */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { value: "Research", label: "Global Insights", description: "360° workplace research and insights" },
                    { value: "Innovation", label: "Product Leadership", description: "Cutting-edge design and technology" },
                    { value: "Support", label: "Expert Service", description: "Dedicated support and training" }
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

      {/* Featured Installations Section */}
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
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Furniture installations</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      that transform
                      <span className="italic text-gray-600 ml-3">how</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      people work
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    See how our partnerships with leading manufacturers deliver world-class furniture solutions that enhance productivity, comfort, and collaboration across diverse organizations.
            </p>
          </div>
              </div>
            </div>

            {/* Installations Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Installation 1 - Corporate HQ */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Corporate Headquarters</div>
                    <div className="text-xs text-white/70 mb-3">Fortune 500 Technology Company</div>
                    <div className="text-lg font-light">1,200 workstations with height-adjustable desks and ergonomic seating</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Open Office Transformation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complete workstation solution with height-adjustable desks, ergonomic seating, and integrated storage supporting 800+ employees across multiple manufacturers.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">1,200</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Workstations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">14</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Day Installation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Zero</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Disruption</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation 2 - Law Firm */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Legal Offices</div>
                    <div className="text-xs text-white/70 mb-3">International Law Firm</div>
                    <div className="text-lg font-light">Executive seating and custom conference solutions</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Executive Suite Furnishing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Premium executive chairs, height-adjustable desks, and custom conference room solutions for 150+ attorneys from Herman Miller, Haworth, and other leading brands.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">150+</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Attorney Offices</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Premium</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Materials</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">12</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Year Warranty</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation 3 - Healthcare */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Medical Center</div>
                    <div className="text-xs text-white/70 mb-3">Regional Healthcare System</div>
                    <div className="text-lg font-light">Specialized healthcare furniture solutions</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Healthcare Environment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Infection-control compliant furniture with antimicrobial surfaces for clinical areas, waiting rooms, and administrative offices from Krug, SitOnIt, and healthcare specialists.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">300+</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Clinical Stations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">100%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Code Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">24/7</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Projects CTA */}
            <div className="text-center pt-16">
              <CTAButton href="/projects" variant="outline" size="lg">
                <span>View All Furniture Projects</span>
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Product Portfolio</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Complete office</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        furniture
                        <span className="italic text-gray-600 ml-3">solutions</span>
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        From individual workstations to complete office environments, we provide furniture solutions for every workspace need.
            </p>
          </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Product Categories */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "Workstations & Desks", 
                      description: "Height-adjustable desks, benching systems, and private offices designed for productivity." 
                    },
                    { 
                      number: "02", 
                      title: "Ergonomic Seating", 
                      description: "Task chairs, executive seating, and lounge furniture that supports health and comfort." 
                    },
                    { 
                      number: "03", 
                      title: "Storage Solutions", 
                      description: "Personal storage, filing systems, and organizational tools that reduce clutter." 
                    },
                    { 
                      number: "04", 
                      title: "Collaborative Furniture", 
                      description: "Meeting tables, lounge seating, and flexible furniture for teamwork spaces." 
                    },
                    { 
                      number: "05", 
                      title: "Technology Integration", 
                      description: "Power and data solutions, monitor arms, and technology-enabled furniture." 
              }
            ].map((category, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">{category.number}</div>
                        <div className="text-xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {category.title}
                        </div>
                        <div className="text-sm text-gray-600 font-light leading-relaxed">
                          {category.description}
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

      {/* Team Expertise Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Furniture Experts</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Contract furniture</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      specialists
                      <span className="italic text-gray-600 ml-3">with</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      industry expertise
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Our furniture specialists combine certifications from multiple manufacturers with deep industry knowledge to specify the perfect solutions for your workspace needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Team Member 1 - Furniture Specialist */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-blue-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Senior Furniture Specialist
                        </div>
                        <div className="text-blue-900 text-lg font-light">
                          Jennifer Walsh, CID
                        </div>
                        <div className="w-8 h-px bg-blue-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Jennifer Walsh, CID</h3>
                      <p className="text-sm text-gray-600 mb-3">Senior Furniture Specialist</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        18+ years specifying contract furniture solutions. Expert in ergonomics, space planning, and large-scale furniture installations.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Ergonomic Seating</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Workstations</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Space Planning</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Certifications</div>
                      <div className="text-sm text-gray-600">
                        • Steelcase 360 Certified Specialist<br/>
                        • Herman Miller Design Certification<br/>
                        • CID Certified Interior Designer<br/>
                        • BIFMA Ergonomics Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Product Manager */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-green-100 via-green-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-green-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Product Manager
                        </div>
                        <div className="text-green-900 text-lg font-light">
                          David Kim
                        </div>
                        <div className="w-8 h-px bg-green-900/40"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">David Kim</h3>
                      <p className="text-sm text-gray-600 mb-3">Product Manager</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Deep expertise in contract furniture product lines from leading manufacturers including Steelcase, Herman Miller, Haworth, and Krug. 10+ years managing complex furniture specifications across diverse product categories.
            </p>
          </div>

                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Multi-Manufacturer Specs</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Product Innovation</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Value Engineering</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Expertise</div>
                      <div className="text-sm text-gray-600">
                        • Cross-Manufacturer Product Knowledge<br/>
                        • Technical Specifications & Standards<br/>
                        • Cost-Effective Solution Design
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 - Project Manager */}
              <div className="group">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 via-orange-50 to-white relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-end p-8">
                      <div className="space-y-3">
                        <div className="text-orange-900 text-sm uppercase tracking-[0.2em] font-medium">
                          Installation Manager
                        </div>
                        <div className="text-orange-900 text-lg font-light">
                          Michael Torres
                        </div>
                        <div className="w-8 h-px bg-orange-900/40"></div>
          </div>
        </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Michael Torres</h3>
                      <p className="text-sm text-gray-600 mb-3">Installation Manager</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Expert installation manager overseeing complex furniture projects. 14+ years ensuring seamless delivery and setup.
            </p>
          </div>

                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Project Management</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Installation</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Logistics</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Track Record</div>
                      <div className="text-sm text-gray-600">
                        • 500+ Successful Installations<br/>
                        • 99.2% On-Time Delivery<br/>
                        • Zero-Defect Quality Standard
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
                  <div className="text-2xl font-extralight text-gray-900">15+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Manufacturing Partners</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">25+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Certified Specialists</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">25+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Years Experience</div>
                </div>
                <div className="space-y-3">
                  <div className="text-2xl font-extralight text-gray-900">1000+</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-gray-600">Projects Completed</div>
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
                Ready to upgrade your office furniture?
            </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Let's create a workspace that enhances productivity, supports wellbeing, and reflects your organization's values.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Get Furniture Quote</span>
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