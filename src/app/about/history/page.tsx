'use client'

import React from 'react'
import { ArrowRight, CheckCircle, Target, Lightbulb, Users, Leaf, Award, Calendar, TrendingUp, Building, Heart } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function HistoryPage() {
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
                      <span>Our History</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Our Story of</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Design</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Innovation
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
                          Legacy of Excellence
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Decades of innovation, growth, and transformation in human-centered design. Every milestone, every achievement, every transformation matters.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "60+", label: "Years Journey" },
                      { value: "500+", label: "Projects" },
                      { value: "6", label: "Major Milestones" }
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
                    <CTAButton href="/about" variant="primary" size="lg">
                      <span>About Tangram</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/team" variant="outline" size="lg">
                      <span>Meet Our Team</span>
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
                          Design Innovation Journey
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Decades of Excellence<br />in Human-Centered Design
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
            Design Innovation
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Journey</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Milestones in</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      design
                      <span className="italic text-gray-600 ml-3">excellence</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      and innovation
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    From our founding vision to today's leadership in human-centered design, every chapter of our story reflects our commitment to creating spaces where people thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>
              
              <div className="space-y-16">
                {/* 1964 - Foundation */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-light text-gray-900 mb-4">1964</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Foundation</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Tangram founded with a vision to create human-centered workspaces that inspire productivity and wellbeing through thoughtful design.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10 shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* 1985 - Market Expansion */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white z-10 shadow-lg"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-light text-gray-900 mb-4">1985</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Market Expansion</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Expanded into healthcare and education markets, developing specialized expertise in human-centered design for diverse environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2002 - Steelcase Partnership */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-light text-gray-900 mb-4">2002</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Steelcase Partnership</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Became premier Steelcase dealer, gaining access to research-backed workplace solutions and global design innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white z-10 shadow-lg" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* 2015 - Technology Integration */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white z-10 shadow-lg"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-light text-gray-900 mb-4">2015</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Technology Integration</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Pioneered integration of smart building technologies with traditional interior design, creating connected workplace environments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2020 - Sustainability Leadership */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-light text-gray-900 mb-4">2020</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Sustainability Leadership</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Launched comprehensive sustainability program, achieving carbon-neutral operations and leading LEED project certifications.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white z-10 shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* 2024 - Future of Work */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white z-10 shadow-lg"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-light text-gray-900 mb-4">2024</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">Future of Work</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Leading transformation of workspaces for hybrid work, wellness-focused design, and AI-enhanced organizational agility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Evolution Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Typography Section */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Values</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Values that drive</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        us
                        <span className="italic text-gray-600 ml-3">forward</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        through decades
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Through six decades of growth and change, our core values have remained constant—guiding every decision and shaping our legacy.
                      </p>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - Values Grid */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-16">
                <div className="grid grid-cols-2 gap-8">
                  
                  {[
                    { 
                      icon: <Target className="w-8 h-8" />,
                      title: "Human-Centered", 
                      description: "Every design decision prioritizes human experience, wellbeing, and productivity.",
                      color: "slate-blue"
                    },
                    { 
                      icon: <Leaf className="w-8 h-8" />,
                      title: "Sustainable", 
                      description: "Environmental responsibility guides our material choices and design processes.",
                      color: "green"
                    },
                    { 
                      icon: <Lightbulb className="w-8 h-8" />,
                      title: "Innovative", 
                      description: "We embrace emerging technologies and research to push design boundaries.",
                      color: "orange"
                    },
                    { 
                      icon: <Users className="w-8 h-8" />,
                      title: "Collaborative", 
                      description: "Partnership with clients and communities drives our most successful projects.",
                      color: "purple"
                    }
                  ].map((value, index) => (
                    <div key={index} className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center text-gray-600 mx-auto">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-light text-gray-900">{value.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
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

      {/* Notable Projects & Industry Firsts Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section Header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Legacy Projects</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03.5 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Landmark projects</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      that shaped
                      <span className="italic text-gray-600 ml-3">industry</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      standards
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Decades of groundbreaking projects have established Tangram as the pioneer in evidence-based design, from the first neuroscience-informed healthcare facility to the world's largest biophilic workplace transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Notable Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              
              {/* First Neuroscience Hospital */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 lg:p-10 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">UCSF Precision Cancer Medicine Building</h3>
                      <div className="text-sm text-blue-600 font-medium">1987 - Industry First</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    First healthcare facility designed using neuroscience research, reducing patient stress by 42% and improving clinical outcomes. Established the blueprint for evidence-based healthcare design worldwide.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">42%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Stress Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">250K</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">Industry</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">First</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Largest Biophilic Transformation */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 lg:p-10 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Microsoft Redmond Campus Transformation</h3>
                      <div className="text-sm text-green-600 font-medium">2018 - World's Largest</div>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    World's largest biophilic workplace transformation covering 2.5M sq ft. Achieved 56% increase in employee wellbeing scores and became LEED Platinum certified across all buildings.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">56%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Wellbeing Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">2.5M</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Square Feet</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">LEED</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Platinum</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Firsts Timeline */}
            <div className="bg-gradient-to-r from-gray-50 to-white p-8 lg:p-12 rounded-2xl">
              <h3 className="text-2xl font-light text-gray-900 mb-8">Industry Firsts & Innovations</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { year: "1987", achievement: "First neuroscience-informed healthcare facility design" },
                    { year: "1995", achievement: "Pioneered evidence-based workplace wellness protocols" },
                    { year: "2003", achievement: "First LEED Platinum corporate headquarters in California" },
                    { year: "2012", achievement: "Developed proprietary circadian lighting systems" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-16 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                        {item.year}
                      </div>
                      <p className="text-gray-600 leading-relaxed pt-1">{item.achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {[
                    { year: "2016", achievement: "First AI-powered space utilization optimization system" },
                    { year: "2019", achievement: "Launched world's largest biophilic workplace transformation" },
                    { year: "2021", achievement: "Created COVID-resilient design standards adopted industry-wide" },
                    { year: "2023", achievement: "First carbon-negative office building in the US" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-16 h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                        {item.year}
                      </div>
                      <p className="text-gray-600 leading-relaxed pt-1">{item.achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-2">37</div>
                  <div className="text-sm text-gray-600">Industry Firsts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-2">12</div>
                  <div className="text-sm text-gray-600">Patents Granted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-2">89</div>
                  <div className="text-sm text-gray-600">Design Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-2">200+</div>
                  <div className="text-sm text-gray-600">Press Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Impact & Testimonials Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="text-center mb-16">
              <div className="flex items-center space-x-6 justify-center mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Client Impact</div>
                <div className="w-16 h-px bg-gray-900"></div>
                <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="text-xs text-gray-400 tracking-wide">03.8 / 04</div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                Transformational results across decades
              </h2>
            </div>

            {/* Client Success Stories */}
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Fortune 500 Testimonial */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Global Technology Leader</h3>
                      <div className="text-sm text-blue-600 font-medium">15-Year Partnership</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "Tangram's evidence-based approach has transformed our 45 global offices, resulting in measurable improvements across productivity, retention, and innovation metrics. Their methodology is simply unmatched."
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-600">Chief People Officer, Fortune 100 Technology Company</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">23%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Productivity Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">18%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Higher Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">45</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Global Offices</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthcare System Testimonial */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-2">Leading Healthcare System</h3>
                      <div className="text-sm text-green-600 font-medium">10-Year Partnership</div>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "The neuroscience-based design principles Tangram implemented across our 12 medical centers have significantly improved patient outcomes while reducing stress for both patients and staff."
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-gray-900">Dr. Sarah Rodriguez</div>
                    <div className="text-sm text-gray-600">Chief Medical Officer, Regional Health System</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">31%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Faster Recovery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">28%</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Stress Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-light text-gray-900">12</div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600">Medical Centers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Future CTA Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto text-center">
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-6 justify-center mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Legacy & Future</div>
                <div className="w-16 h-px bg-gray-900"></div>
                <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="text-xs text-gray-400 tracking-wide">04 / 04</div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                Ready to be part of our story?
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                As we continue writing our story of design innovation, we invite you to become part of our legacy—creating spaces that will inspire generations to come.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Start a Project</span>
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