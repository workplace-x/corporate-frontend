'use client'

import React from 'react'
import { GraduationCap, BookOpen, Users, Brain, Lightbulb, Globe, Award, TrendingUp, Heart, Zap, CheckCircle } from 'lucide-react'
import CTAButton from '../../../components/ui/CTAButton'

export default function EducationMarketPage() {
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
                      <span>Education</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Inspiring Spaces</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">For Learning</span>
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
                          For Higher Learning
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Universities and colleges are hubs of innovation and discovery – they need spaces that enhance learning outcomes and campus life.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "340+", label: "Education Projects" },
                      { value: "96%", label: "Educator Satisfaction" },
                      { value: "35%", label: "Learning Improvement" }
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
                      <span>Transform Your Campus</span>
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
                          Modern Learning Environment
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Inspiring Discovery Through<br />Thoughtful Design
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
            Learning Excellence
          </div>
        </div>
      </section>

      {/* Key Features Section - Higher Education Focus */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
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
                    <div className="text-xs text-gray-400 tracking-wide">02 / 05</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Higher education</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        design
                        <span className="italic text-gray-600 ml-3">that</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        enhances learning
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        We design higher education environments that enhance learning outcomes and campus life.
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
                      title: "Active Learning Classrooms", 
                      description: "Flexible spaces that switch between lecture, discussion, and group work with integrated technology." 
                    },
                    { 
                      number: "02", 
                      title: "Collaborative Commons", 
                      description: "Study lounges and collaboration zones that attract students to stay on campus and work together." 
                    },
                    { 
                      number: "03", 
                      title: "Cutting-Edge Labs", 
                      description: "Specialized spaces for engineering, science, design, and technology with modular, adaptable furniture." 
                    },
                    { 
                      number: "04", 
                      title: "Modern Libraries", 
                      description: "Learning resource centers that balance quiet study with group collaboration and creation spaces." 
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

      {/* Featured Projects Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
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
                    <div className="text-xs text-gray-400 tracking-wide">03 / 05</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Campus</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      transformations
                      <span className="italic text-gray-600 ml-3">that</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      inspire learning
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="space-y-16">
              
              {/* Project 1 - University Innovation Hub */}
              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-5 lg:col-start-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Innovation Hub</div>
                      <div className="text-xs text-white/70">Leading University</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
                
                <div className="lg:col-span-6 lg:col-start-7 space-y-8">
                  <div className="relative">
                    <div className="space-y-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Major Research University</div>
                      <h3 className="text-3xl font-light text-gray-900 leading-tight">
                        State-of-the-Art Innovation Hub
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Created flexible learning environments with active classrooms, collaborative makerspace, and digital research commons. Features movable furniture and integrated technology systems.
                      </p>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">45<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Student Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">2,500<span className="text-lg" style={{ color: '#f9a31c' }}>+</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Students Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">98<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Faculty Approval</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 - Community College */}
              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-6 lg:col-start-1 space-y-8 order-2 lg:order-1">
                  <div className="relative">
                    <div className="space-y-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Community College System</div>
                      <h3 className="text-3xl font-light text-gray-900 leading-tight">
                        Modern Library & Learning Commons
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Transformed traditional library into vibrant learning commons with flexible study areas, collaborative zones, and technology-rich spaces for 21st-century learning.
                      </p>
                    </div>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">300<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Usage Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">92<span className="text-lg" style={{ color: '#f9a31c' }}>%</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Student Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extralight text-gray-900">8<span className="text-lg" style={{ color: '#f9a31c' }}>mo</span></div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600">Project Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-teal-900 via-teal-700 to-teal-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Learning Commons</div>
                      <div className="text-xs text-white/70">Community College</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
              </div>

              {/* View All Projects CTA */}
              <div className="text-center pt-12">
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>View All Education Projects</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Process Section */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column - Team & Expertise */}
              <div className="lg:col-span-6 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Expert Team</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">04 / 05</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-12">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Education design</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      specialists
                    </span>
                  </h2>
                  
                  <div className="space-y-8">
                    <p className="text-xl text-gray-700 font-light leading-[1.5]">
                      Our education design team understands the evolving needs of higher education, from traditional classrooms to cutting-edge research facilities.
                    </p>
                    
                    {/* Expertise Areas */}
                    <div className="space-y-6">
                      <div className="border-l-2 border-gray-200 pl-6">
                        <div className="font-medium text-gray-900 mb-2">Pedagogical Research</div>
                        <div className="text-sm text-gray-600">Evidence-based design informed by latest educational research and learning theories.</div>
                      </div>
                      <div className="border-l-2 pl-6" style={{ borderColor: '#f9a31c' }}>
                        <div className="font-medium text-gray-900 mb-2">Technology Integration</div>
                        <div className="text-sm text-gray-600">Seamless integration of learning technologies and smart classroom systems.</div>
                      </div>
                      <div className="border-l-2 border-gray-200 pl-6">
                        <div className="font-medium text-gray-900 mb-2">Accessibility Focus</div>
                        <div className="text-sm text-gray-600">Universal design principles ensuring all students can succeed in our spaces.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Process & Results */}
              <div className="lg:col-span-5 lg:col-start-8 space-y-12">
                <div className="space-y-8">
                  <h3 className="text-3xl font-light text-gray-900 leading-tight">
                    Campus Design Process
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We collaborate closely with faculty, administrators, and students to create spaces that truly enhance the educational experience.
                  </p>
                  
                  {/* Process Steps */}
                  <div className="space-y-6">
                    {[
                      "Campus Assessment & Stakeholder Engagement",
                      "Pedagogical Needs Analysis",
                      "Flexible Design Development",
                      "Technology Integration Planning"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center space-x-4 group">
                        <div className="text-xs text-gray-500 tracking-[0.2em] uppercase font-medium w-8">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-1 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                          {step}
                        </div>
                        <div className="w-3 h-px bg-gray-900 group-hover:w-6 group-hover:bg-orange-500 transition-all duration-300" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="pt-8">
                    <CTAButton href="/contact" variant="primary" size="lg" className="w-full justify-center">
                      <span>Start Your Campus Project</span>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column - Innovation Content */}
              <div className="lg:col-span-8 lg:col-start-1 space-y-16">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Future of Education</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">05 / 05</div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Designing for</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        tomorrow's
                        <span className="italic text-gray-600 ml-3">learners</span>
                      </span>
                    </div>
                    
                    <div className="max-w-4xl pt-8 space-y-6">
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                        Higher education is evolving rapidly. We design spaces that adapt to new pedagogies, emerging technologies, and changing student expectations.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        <div>
                          <div className="font-medium text-gray-900 mb-3">Hybrid Learning Spaces</div>
                          <div className="text-gray-600">Environments that seamlessly blend in-person and virtual learning experiences.</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-3">Wellness-Centered Design</div>
                          <div className="text-gray-600">Spaces that support student mental health and wellbeing.</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-3">Sustainable Campuses</div>
                          <div className="text-gray-600">Environmentally responsible design that teaches by example.</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 mb-3">Inclusive Environments</div>
                          <div className="text-gray-600">Universal design ensuring accessibility for all learners.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Measurement lines */}
                  <div className="absolute -left-4 top-0 w-px h-32 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                  <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                  <div className="absolute -left-6 top-32 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              {/* Right Column - CTA */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-light text-gray-900">Ready to Transform Your Campus?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Let's create learning environments that inspire discovery, foster collaboration, and prepare students for the future.
                  </p>
                  
                  <div className="space-y-4">
                    <CTAButton href="/contact" variant="primary" size="lg" className="w-full justify-center">
                      <span>Start Your Project</span>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/insights" variant="outline" size="lg" className="w-full justify-center">
                      <span>Education Insights</span>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 