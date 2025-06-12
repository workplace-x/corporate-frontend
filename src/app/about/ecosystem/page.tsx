'use client'

import React from 'react'
import { ArrowRight, Users, Lightbulb, Globe2, Heart, CheckCircle, Award, Building, Target } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function EcosystemPage() {
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
                      <span>Our Ecosystem</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Collaborative</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Design</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Ecosystem
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
                          Partnership Network
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          A collaborative network of industry leaders, research institutions, and innovative partners who share our commitment to human-centered design.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "25+", label: "Strategic Partners" },
                      { value: "8", label: "Research Institutions" },
                      { value: "50+", label: "Vendor Partners" }
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
                      <span>Partner With Us</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/about" variant="outline" size="lg">
                      <span>Learn More About Us</span>
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
                      <div className="absolute top-2/3 left-1/2 w-16 h-16 border border-white transform rotate-45"></div>
                    </div>
                    
                    {/* Image overlay content */}
                    <div className="absolute inset-0 flex items-end p-12">
                      <div className="space-y-4">
                        <div className="text-white/90 text-sm uppercase tracking-[0.2em] font-medium">
                          Partnership Network
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Building the Future<br />Together
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
            Collaborative Excellence
          </div>
        </div>
      </section>

      {/* Partner Categories Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Partnership Network</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Building the future</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      of design
                      <span className="italic text-gray-600 ml-3">through</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      collaboration
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Our ecosystem encompasses strategic partnerships, research collaborations, and community connections that amplify our impact and drive innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Categories Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Strategic Partners */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Strategic Partners</div>
                    <div className="text-xs text-white/70 mb-3">Industry Leaders</div>
                    <div className="text-lg font-light">Cutting-edge design solutions</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Strategic Partners</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Industry leaders and innovators collaborating to deliver cutting-edge solutions that define the future of workspace design.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Technology integration partners",
                      "Furniture manufacturers",
                      "Sustainable material suppliers",
                      "Healthcare technology specialists"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-blue-600 font-medium">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>25+ Active Partners</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Network */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Research Network</div>
                    <div className="text-xs text-white/70 mb-3">Academic Collaborations</div>
                    <div className="text-lg font-light">Evidence-based design innovation</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Research Network</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Academic collaborations driving innovation and ensuring our designs are grounded in the latest scientific understanding.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Harvard School of Public Health",
                      "Stanford d.school partnership",
                      "Evidence-based design research",
                      "Workplace psychology studies"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-green-600 font-medium">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>8 Research Institutions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Network */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-900 via-orange-700 to-orange-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Community Network</div>
                    <div className="text-xs text-white/70 mb-3">Industry Organizations</div>
                    <div className="text-lg font-light">Professional excellence standards</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Community Network</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Professional organizations and industry groups helping us stay at the forefront of design trends and technologies.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "International Interior Design (IIDA)",
                      "Center for Health Design",
                      "USGBC and LEED programs",
                      "Smart Building Collective"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#f9a31c' }} />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center font-medium" style={{ color: '#f9a31c' }}>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>12 Industry Alliances</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Partners</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Working together</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        to push
                        <span className="italic text-gray-600 ml-3">design</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        boundaries
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Our partnerships span global manufacturers, innovative startups, research institutions, and thought leaders who share our vision.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Partner Highlights */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "Steelcase Partnership", 
                      description: "Premier dealer relationship with the global leader in workplace research and furniture innovation." 
                    },
                    { 
                      number: "02", 
                      title: "Technology Leaders", 
                      description: "Collaborations with Microsoft, Crestron, and other tech innovators driving workplace transformation." 
                    },
                    { 
                      number: "03", 
                      title: "Research Institutions", 
                      description: "Academic partnerships with leading universities advancing evidence-based design practices." 
                    },
                    { 
                      number: "04", 
                      title: "Sustainability Partners", 
                      description: "Working with organizations dedicated to environmental responsibility and circular design." 
                    },
                    { 
                      number: "05", 
                      title: "Local Craftspeople", 
                      description: "Relationships with skilled artisans and specialty manufacturers creating unique design elements." 
                    }
                  ].map((partner, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      <div className="absolute -left-6 bottom-0 w-3 h-px bg-gray-900 group-hover:w-4 transition-all duration-200"></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium">{partner.number}</div>
                        <div className="text-xl font-light text-gray-900 tracking-[-0.01em] group-hover:text-gray-700 transition-colors duration-300">
                          {partner.title}
                        </div>
                        <div className="text-sm text-gray-600 font-light leading-relaxed">
                          {partner.description}
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

      {/* Research Outcomes & Innovation Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Research Impact</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Partnership-driven</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      research
                      <span className="italic text-gray-600 ml-3">delivering</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      measurable impact
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Our collaborative research initiatives have produced groundbreaking insights, published studies, and design innovations that advance the entire industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Outcomes Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              
              {/* Harvard Medical Partnership */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 lg:p-10 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Harvard Medical School Partnership</h3>
                      <div className="text-sm text-blue-600 font-medium">Neuroscience-Based Design Research</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    3-year study on cognitive load and spatial design, resulting in our proprietary "Cognitive Clarity Framework" that reduces mental fatigue by 28% in workplace environments.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">28%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Fatigue Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">3</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Published Studies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">500+</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Participants</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stanford d.school Innovation */}
              <div className="bg-gradient-to-r from-orange-50 to-white p-8 lg:p-10 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Stanford d.school Collaboration</h3>
                      <div className="text-sm font-medium" style={{ color: '#f9a31c' }}>Human-Centered Design Innovation</div>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6" style={{ color: '#f9a31c' }} />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Co-developed the "Empathy Mapping 3.0" methodology, now used by 200+ design firms globally. Our joint research increased design empathy accuracy by 45%.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">45%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Empathy Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">200+</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Firms Using Method</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Global</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Adoption</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Lab Highlights */}
            <div className="bg-gradient-to-r from-gray-50 to-white p-8 lg:p-12 rounded-2xl">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-2">Tangram Innovation Lab</h3>
                      <div className="text-sm text-purple-600 font-medium">Proprietary Research & Development</div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our 5,000 sq ft innovation lab in San Francisco serves as a living laboratory where we prototype, test, and validate design concepts before implementation. Real-time biometric testing and behavioral analysis inform every design decision.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Virtual Reality design validation with 99.2% accuracy",
                        "Biometric stress testing protocols for space optimization",
                        "AI-powered space utilization prediction models",
                        "Circadian lighting systems reducing fatigue by 32%"
                      ].map((innovation, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{innovation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">12</div>
                    <div className="text-sm text-gray-600">Patent Applications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Research Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">5K</div>
                    <div className="text-sm text-gray-600">Sq Ft Lab Space</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-gray-900 mb-2">99.2%</div>
                    <div className="text-sm text-gray-600">VR Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto text-center">
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-6 justify-center mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Join Our Ecosystem</div>
                <div className="w-16 h-px bg-gray-900"></div>
                <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="text-xs text-gray-400 tracking-wide">04 / 04</div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                Interested in joining our ecosystem?
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                We're always looking for innovative partners who share our commitment to human-centered design and transformative spaces that make a meaningful difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Partner With Us</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/about" variant="outline" size="lg">
                  <span>Learn More About Us</span>
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