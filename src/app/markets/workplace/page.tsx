'use client'

import React from 'react'
import CTAButton from '../../../components/ui/CTAButton'

export default function CorporateWorkplacePage() {
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
                      <span>Markets</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Corporate Workplace</span>
        </div>
      </div>

                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Innovative</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Workplaces</span>
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
                          For Modern Businesses
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Whether you're a bustling tech startup, Fortune 500 headquarters, or professional services firm, we design office environments that reflect your brand and empower your people.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "200+", label: "Corporate Workplaces" },
                      { value: "85%", label: "Employee Satisfaction" },
                      { value: "30%", label: "Productivity Gain" }
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
                  {/* Placeholder for hero image - replace with actual corporate workplace image */}
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
                          Modern Corporate Environment
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Fostering Innovation Through<br />Thoughtful Design
                        </div>
                        <div className="w-12 h-px bg-white/60"></div>
                  </div>
                    </div>
                    
                    {/* Orange accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                  
                  {/* TODO: Replace with actual image */}
                  {/* <img 
                    src="/images/markets/corporate-workplace-hero.jpg" 
                    alt="Modern corporate workplace environment"
                    className="w-full h-full object-cover"
                  /> */}
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

      {/* Philosophy Section - Exact Homepage Architecture */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden">
        {/* Architectural background - exact homepage */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Exact homepage grid layout */}
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Main quote section - exact homepage structure */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  {/* Quotation mark - exact homepage styling */}
                  <div className="absolute -top-12 -left-8 text-[8rem] font-extralight leading-none select-none" style={{ color: '#f9a31c', opacity: 0.1 }}>"</div>
                  
                  {/* Section label - exact homepage style */}
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Design Philosophy</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <blockquote className="relative z-10 space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Workplace is</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        culture
                        <span className="italic text-gray-600 ml-3">made</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        visible
                      </span>
                    </div>
                    
                    {/* Subtext - exact homepage styling */}
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Every space we create serves a deeper purpose. We don't just design offices – we choreograph corporate cultures in physical form.
                      </p>
                      
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Through evidence-based design principles and meticulous attention to human behavior, we transform corporate environments into catalysts for innovation, collaboration, and growth.
              </p>
            </div>
                  </blockquote>
                  
                  {/* Attribution - exact homepage style */}
                  <div className="mt-16 flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-lg relative">
                      <span className="text-white font-light text-lg tracking-wide">TI</span>
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-gray-900 text-lg tracking-wide">Corporate Workplace Philosophy</div>
                      <div className="text-gray-600 text-sm tracking-[0.1em] uppercase font-medium">Tangram Interiors</div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>Est. 1964</span>
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                        <span>Human-Centered Design</span>
                      </div>
                </div>
              </div>
                  
                  {/* Measurement lines - exact homepage style */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                    02
                  </div>
                </div>
              </div>
              
              {/* Metrics column - exact homepage structure */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { value: "500M+", label: "Square Feet Designed", description: "Corporate environments nationwide" },
                    { value: "95%", label: "Retention Rate", description: "Clients who expand partnerships" },
                    { value: "70%", label: "Repeat Business", description: "Long-term client relationships" }
                  ].map((metric, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300" style={{ background: index === 1 ? `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, rgb(229, 231, 235))` : undefined }}></div>
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
                
                {/* Architectural elements - exact homepage style */}
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

      {/* Key Features Section - Sophisticated Tangram Design */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        {/* Architectural background - exact homepage style */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Exact homepage grid layout */}
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  {/* Section label - exact homepage style */}
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Approach</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Five key</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        features of
                        <span className="italic text-gray-600 ml-3">Tangram</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        workplaces
                      </span>
                    </div>
                    
                    {/* Subtext - exact homepage styling */}
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Your office should be a tool for driving culture, innovation, and growth. Here's how we make that happen.
              </p>
            </div>
                  </div>
                  
                  {/* Measurement lines - exact homepage style */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                    02
                  </div>
                </div>
        </div>
              
              {/* Right Column - Features List */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="space-y-12">
                  
                  {[
                    { 
                      number: "01", 
                      title: "Brand & Culture Integration", 
                      description: "We infuse your company's identity into the design – through color schemes, graphics, signage, and custom furniture from Studio Other." 
                    },
                    { 
                      number: "02", 
                      title: "Activity-Based Spaces", 
                      description: "We plan workplaces in zones: open collaboration areas, private enclaves, comfortable lounges, and adjustable workstations." 
                    },
                    { 
                      number: "03", 
                      title: "Technology-Ready", 
                      description: "Plentiful power and data access, seamless AV in conference rooms, and future-proof infrastructure for IoT and beyond." 
                    },
                    { 
                      number: "04", 
                      title: "Wellness & Comfort", 
                      description: "We incorporate ergonomic seating, proper lighting, biophilic elements, and ample access to daylight and views." 
                    },
                    { 
                      number: "05", 
                      title: "Scalability & Flexibility", 
                      description: "Modular furniture systems, demountable walls, reconfigurable layouts that adapt as your business evolves." 
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300" style={{ background: index === 2 ? `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, rgb(229, 231, 235))` : undefined }}></div>
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
                
                {/* Architectural elements - exact homepage style */}
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

      {/* Industry Experience Section - Sophisticated Layout */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Exact homepage grid layout */}
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Main content section */}
              <div className="lg:col-span-8 lg:col-start-1 space-y-16">
                <div className="relative">
                  {/* Section label */}
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Industry Expertise</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Proven success</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        across
                        <span className="italic text-gray-600 ml-3">every</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        industry
                      </span>
                    </div>
                    
                    {/* Industries list - sophisticated layout */}
                    <div className="pt-12 space-y-8">
                      {[
                        { name: "Technology", detail: "Open collaboration, bold creativity, specialized studios" },
                        { name: "Entertainment", detail: "Creative campuses, editing suites, screening rooms" },
                        { name: "Finance", detail: "Professional elegance, secure meeting rooms, client confidence" },
                        { name: "Legal", detail: "Confidentiality, classic elegance, professional gravitas" },
                        { name: "Retail Headquarters", detail: "Brand expression, customer focus, merchandising spaces" },
                        { name: "Media", detail: "Production studios, newsrooms, creative hubs" }
                      ].map((industry, index) => (
                        <div key={index} className="flex items-center space-x-12 group py-2">
                          <div className="w-16 text-xs text-gray-500 tracking-[0.2em] uppercase font-medium text-right">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex-1 border-b border-gray-200 group-hover:border-gray-400 transition-colors duration-300 pb-4">
                            <div className="flex items-baseline justify-between">
                              <div className="text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                                {industry.name}
                              </div>
                              <div className="text-sm text-gray-600 font-light max-w-xs text-right">
                                {industry.detail}
                              </div>
                            </div>
                          </div>
                          <div className="w-3 h-px bg-gray-900 group-hover:w-6 group-hover:bg-orange-500 transition-all duration-300" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                    03
                  </div>
                </div>
              </div>
              
              {/* Right Column - Competitive Advantage */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-12">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="text-xl font-light text-gray-900 mb-6">Your Workplace as a Competitive Advantage</div>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Picture employees actually excited to come into the office because it's a space that energizes and supports them. Picture clients walking through your space and immediately getting a sense of your professionalism and culture.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      That's the power of a Tangram-designed workplace.
                    </p>
                  </div>
                  
                  {/* CTAs */}
                  <div className="space-y-4 pt-8">
                    <CTAButton href="/contact" variant="primary" size="lg" className="w-full justify-center">
                      <span>Elevate Your Workplace</span>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg" className="w-full justify-center">
                      <span>See Our Results</span>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Architectural elements */}
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
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        {/* Architectural background */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-1/4 left-1/3 w-px h-80 bg-gray-900"></div>
          <div className="absolute bottom-1/4 right-1/3 w-px h-80 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Work</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">04 / 06</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Workplace</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      transformations
                      <span className="italic text-gray-600 ml-3">that</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      deliver results
                    </span>
              </h2>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-24 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="space-y-16">
              
              {/* Project 1 - Tech Company */}
              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-5 lg:col-start-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Global Media HQ</div>
                      <div className="text-xs text-white/70">Los Angeles, CA</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
                
                <div className="lg:col-span-6 lg:col-start-7 space-y-8">
                  <div className="relative">
                    <div className="space-y-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Confidential Entertainment Client</div>
                      <h3 className="text-3xl font-light text-gray-900 leading-tight">
                        300-Person Creative Campus Transformation
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Transformed old soundstages into open-plan tech offices, blending industrial chic with collaborative comfort. Custom studio editing suites, ergonomic benching systems, and themed lounge areas.
                      </p>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">40<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Collaboration Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">92<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Employee Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">6<span className="text-lg" style={{ color: '#f9a31c' }}>mo</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Project Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Law Firm */}
              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-6 lg:col-start-1 space-y-8 order-2 lg:order-1">
                  <div className="relative">
                    <div className="space-y-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">ArentFox Schiff</div>
                      <h3 className="text-3xl font-light text-gray-900 leading-tight">
                        Modern Law Firm Headquarters
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Balanced professionalism with warmth through private glass-front offices, inviting collaboration hubs, and a high-end conference center with state-of-the-art teleconferencing.
                      </p>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">25<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Space Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">88<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Partner Approval</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">15<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Productivity Gain</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-amber-900 via-amber-700 to-amber-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Legal Excellence</div>
                      <div className="text-xs text-white/70">Los Angeles, CA</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
              </div>

              {/* View All Projects CTA */}
              <div className="text-center pt-12">
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>View All Workplace Projects</span>
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
            
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column - Team Overview */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Expert Team</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">05 / 06</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Workplace design</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        specialists
                        <span className="italic text-gray-600 ml-3">who</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        deliver excellence
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Our workplace design team combines deep industry expertise with human-centered design principles.
                      </p>
                      <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Led by certified professionals with decades of experience, we bring research-backed solutions and measurable results to every project.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Key Team Members & Credentials */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-12">
                <div className="space-y-12">
                  
                  {/* Team Member 1 */}
                  <div className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-orange-500 to-gray-200 transition-colors duration-300"></div>
                    <div className="absolute -left-6 top-0 w-3 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    
                    <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                      <div className="text-xl font-light text-gray-900">Nick Meter</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">VP of Sales</div>
                      <div className="text-sm text-gray-600 font-light leading-relaxed">
                        15+ years driving workplace solutions. Expert in activity-based working and technology integration.
                      </div>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 transition-colors duration-300"></div>
                    <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900"></div>
                    
                    <div className="text-right space-y-3">
                      <div className="text-lg font-light text-gray-900">Professional Certifications</div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>LEED Accredited Professionals</div>
                        <div>WELL Building Standard</div>
                        <div>Steelcase Certified Dealers</div>
                        <div>IIDA Member Designers</div>
                      </div>
                    </div>
                  </div>

                  {/* Awards */}
                  <div className="group relative">
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 transition-colors duration-300"></div>
                    <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900"></div>
                    
                    <div className="text-right space-y-3">
                      <div className="text-lg font-light text-gray-900">Recognition</div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Top Steelcase Dealer - North America</div>
                        <div>IIDA Design Excellence Award</div>
                        <div>Workplace Strategy Leader</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Architectural elements */}
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

      {/* Process & Innovation Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        {/* Architectural background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Process */}
              <div className="lg:col-span-6 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Process</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">06 / 06</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-12">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Research-backed</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      methodology
                    </span>
              </h2>
                  
                  {/* Process Steps */}
                  <div className="space-y-8">
                    {[
                      { 
                        phase: "01", 
                        title: "Discovery & Strategy", 
                        description: "Workplace assessment, culture analysis, and future visioning sessions with stakeholders." 
                      },
                      { 
                        phase: "02", 
                        title: "Evidence-Based Design", 
                        description: "Leveraging Steelcase research and industry data to inform space planning and furniture selection." 
                      },
                      { 
                        phase: "03", 
                        title: "Seamless Implementation", 
                        description: "Project management, coordination, and installation with minimal business disruption." 
                      },
                      { 
                        phase: "04", 
                        title: "Post-Occupancy Support", 
                        description: "Training, adjustments, and ongoing facility services to ensure long-term success." 
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-6 group py-4">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium w-8 pt-2">
                          {step.phase}
                        </div>
                        <div className="flex-1 border-b border-gray-200 group-hover:border-gray-400 transition-colors duration-300 pb-4">
                          <div className="space-y-2">
                            <div className="text-xl font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                              {step.title}
                            </div>
                            <div className="text-sm text-gray-600 font-light leading-relaxed">
                              {step.description}
                            </div>
                          </div>
                        </div>
                        <div className="w-3 h-px bg-gray-900 group-hover:w-6 group-hover:bg-orange-500 transition-all duration-300 mt-3" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-24 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Innovation */}
              <div className="lg:col-span-5 lg:col-start-8 space-y-12">
                <div className="space-y-8">
                  <h3 className="text-3xl font-light text-gray-900 leading-tight">
                    Future of Work Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're pioneering the next generation of workplace solutions, from hybrid work optimization to AI-enhanced space analytics.
                  </p>
                  
                  {/* Innovation Areas */}
                  <div className="space-y-6">
                    <div className="border-l-2 border-gray-200 pl-6">
                      <div className="font-medium text-gray-900 mb-2">Hybrid Work Solutions</div>
                      <div className="text-sm text-gray-600">Flexible spaces that seamlessly support remote and in-office collaboration.</div>
                    </div>
                    <div className="border-l-2 pl-6" style={{ borderColor: '#f9a31c' }}>
                      <div className="font-medium text-gray-900 mb-2">Smart Office Technology</div>
                      <div className="text-sm text-gray-600">IoT sensors, occupancy analytics, and AI-powered space optimization.</div>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-6">
                      <div className="font-medium text-gray-900 mb-2">Wellness-Centered Design</div>
                      <div className="text-sm text-gray-600">WELL Building principles and biophilic design elements.</div>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-6">
                      <div className="font-medium text-gray-900 mb-2">Sustainability Leadership</div>
                      <div className="text-sm text-gray-600">Carbon-neutral operations and circular economy furniture solutions.</div>
                    </div>
                  </div>
                  
                  {/* Innovation CTA */}
                  <div className="pt-8">
                    <CTAButton href="/insights" variant="outline" size="lg" className="w-full justify-center">
                      <span>Read Our Research</span>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Architectural elements */}
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

    </div>
  )
} 