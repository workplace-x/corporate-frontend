'use client'

import React from 'react'
import { ArrowRight, MapPin, Clock, Car, Users, Calendar, Target, Video, CheckCircle } from 'lucide-react'
import CTAButton from '../../components/ui/CTAButton'

export default function VisitPage() {
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
                      <span>Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Visit Studios</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Experience</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Design</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Studios
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
                          Design Innovation
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Visit our thoughtfully designed showrooms and experience design innovation firsthand. Every studio, every vignette, every experience matters.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: "5+", label: "Studio Locations" },
                      { value: "12K", label: "Sq Ft Showrooms" },
                      { value: "200+", label: "Product Vignettes" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
                            </>
                          ) : stat.value.includes('K') ? (
                            <>
                              {stat.value.replace('K', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>K</span>
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
                      <span>Schedule Visit</span>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-700 to-teal-900">
                    
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
                          Design Innovation
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Immersive Showroom<br />Experiences Nationwide
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

      {/* Studio Locations Section */}
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
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Studios</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Visit our design studios</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      across
                      <span className="italic text-gray-600 ml-3">California</span>
                    </span>
                    <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                      and Texas
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Each studio showcases unique design approaches and regional expertise, from workplace innovation to healthcare environments and sustainable solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Studios grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Los Angeles Studio */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Los Angeles Studio</div>
                    <div className="text-xs text-white/70 mb-3">Flagship Showroom</div>
                    <div className="text-lg font-light">Innovation & sustainability focus</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Los Angeles Studio</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">1234 Design District, LA, CA 90028</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600 text-sm">Mon-Fri 9AM-6PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600 text-sm">Parking available</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our flagship studio showcasing the latest in workplace innovation and sustainable design solutions.
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Flagship showroom</span>
                  </div>
                </div>
              </div>

              {/* San Francisco Studio */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-700 to-green-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">San Francisco Studio</div>
                    <div className="text-xs text-white/70 mb-3">Tech Integration</div>
                    <div className="text-lg font-light">Smart building innovation</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">San Francisco Studio</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">5678 Innovation Ave, SF, CA 94105</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600 text-sm">Mon-Fri 9AM-6PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600 text-sm">Public transit accessible</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tech-focused studio highlighting smart building integration and future-forward workplace concepts.
                  </p>
                  
                  <div className="flex items-center text-green-600 font-medium">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Tech integration focus</span>
                  </div>
                </div>
              </div>

              {/* Austin Studio */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-900 via-orange-700 to-orange-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Austin Studio</div>
                    <div className="text-xs text-white/70 mb-3">Healthcare Expertise</div>
                    <div className="text-lg font-light">Evidence-based design</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Austin Studio</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">9012 Creative Commons, Austin, TX 78701</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600 text-sm">Mon-Fri 9AM-6PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600 text-sm">Street parking</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Regional studio featuring healthcare design expertise and evidence-based environmental solutions.
                  </p>
                  
                  <div className="flex items-center text-orange-600 font-medium">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Healthcare expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tours Section */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section header */}
            <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="relative">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Virtual Experience</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">Can't visit in person?</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                      Experience
                      <span className="italic text-gray-600 ml-3">virtually</span>
                    </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    Take a virtual tour of our studios or schedule a video consultation with our design team to explore possibilities for your project.
                  </p>
                </div>
              </div>
            </div>

            {/* Virtual options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Virtual Tour */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Virtual Studio Tour</div>
                    <div className="text-xs text-white/70 mb-3">360° Interactive</div>
                    <div className="text-lg font-light">Experience from anywhere</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Virtual Studio Tour</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experience our showrooms from anywhere with interactive 360° tours and detailed product showcases.
                  </p>
                  <CTAButton href="/contact" variant="primary" size="md">
                    <span>Start Virtual Tour</span>
                    <Video className="w-4 h-4" />
                  </CTAButton>
                </div>
              </div>

              {/* Video Consultation */}
              <div className="group relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-900 via-teal-700 to-teal-900 relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">Video Consultation</div>
                    <div className="text-xs text-white/70 mb-3">One-on-One Session</div>
                    <div className="text-lg font-light">Personal design discussion</div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-gray-900">Video Consultation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Schedule a one-on-one video session with our design experts to discuss your project needs and vision.
                  </p>
                  <CTAButton href="/contact" variant="outline" size="md">
                    <span>Book Consultation</span>
                    <Calendar className="w-4 h-4" />
                  </CTAButton>
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
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Ready to Experience</div>
                <div className="w-16 h-px bg-gray-900"></div>
                <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="text-xs text-gray-400 tracking-wide">04 / 04</div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                Ready to experience design innovation?
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Whether in-person or virtual, discover how thoughtful design can transform your organization's environment and inspire human potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Schedule In-Person Visit</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/projects" variant="outline" size="lg">
                  <span>Explore Our Work</span>
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