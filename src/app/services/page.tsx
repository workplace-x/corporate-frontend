import React from 'react'
import Link from 'next/link'
import { ArrowRight, Building, Layers, Zap, Palette, Home, Move, Heart, Briefcase } from 'lucide-react'
import CTAButton from '../../components/ui/CTAButton'
import { getServices, getFeaturedProducts, getVerticalMarkets, getClientTestimonials } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

// Types for our CMS data
interface Product {
  _id: string
  name: string
  slug: { current: string }
  description: string
  manufacturer: {
    name: string
    logo: any
  }
  images: any[]
}

interface Service {
  _id: string
  title: string
  slug: { current: string }
  description: string
  keyFeatures: string[]
  heroImage: any
  category: string
  featured: boolean
}

interface VerticalMarket {
  _id: string
  name: string
  slug: { current: string }
  headline: string
  overviewParagraph: string
  featuredImage: any
  menuIcon: any
}

interface ClientTestimonial {
  _id: string
  clientName: string
  company: string
  testimonial: string
  logo: any
  project: {
    title: string
    slug: { current: string }
  }
}

export default async function ServicesPage() {
  // Fetch dynamic content from CMS
  try {
    const [services, featuredProducts, verticalMarkets, testimonials] = await Promise.all([
      getServices(),
      getFeaturedProducts(),
      getVerticalMarkets(),
      getClientTestimonials(true)
    ])

    // Group services by category - fallback to all services if no categories
    const coreServices = services.filter((s: Service) => s.category === 'core' || s.featured) || services.slice(0, 3)
    const specialtyServices = services.filter((s: Service) => s.category === 'specialty') || services.slice(3)

    return (
      <div className="min-h-screen bg-white">
        
        {/* Hero Section - Enhanced with Dynamic Data */}
        <section className="relative min-h-[70vh] bg-white overflow-hidden pt-32">
          <div className="relative z-10">
            <div className="w-full px-8 sm:px-16 lg:px-24 py-16">
              <div className="max-w-8xl mx-auto">
                
                <div className="grid lg:grid-cols-2 gap-0 min-h-[50vh] items-center">
                  
                  {/* Left Column - Content (Enhanced with dynamic stats) */}
                  <div className="flex flex-col justify-center space-y-8 lg:pr-16">
                    
                    {/* Breadcrumb navigation */}
                    <div className="flex items-center space-x-4 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-px bg-gray-900"></div>
                        <span>Solutions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                        <span>Services</span>
                      </div>
                    </div>
                    
                    {/* Typography */}
                    <div className="space-y-8">
                      <div className="relative">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                          <span className="block transform hover:translate-x-1 transition-transform duration-500">Complete</span>
                          <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                            <span className="relative z-20">Solutions</span>
                          </span>
                        </h1>
                        
                        {/* Measurement lines */}
                        <div className="absolute -left-6 top-0 w-px h-16 bg-gradient-to-b from-gray-900 to-gray-400 opacity-50"></div>
                        <div className="absolute -left-8 top-0 w-4 h-px bg-gray-900 opacity-50"></div>
                        <div className="absolute -left-8 top-16 w-4 h-px bg-orange-500 opacity-70" style={{ backgroundColor: '#f9a31c' }}></div>
                      </div>
                      
                      {/* Dynamic Subtext */}
                      <div className="max-w-lg relative pl-2">
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-900 via-orange-500 to-transparent opacity-40"></div>
                        <div className="space-y-4">
                          <p className="text-xl md:text-2xl leading-[1.4] font-light text-gray-700 tracking-[-0.01em]">
                            Portfolio Excellence
                          </p>
                          <p className="text-lg text-gray-600 font-light leading-relaxed">
                            {services.length || 6} integrated service offerings working together to transform your organization through thoughtful design.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dynamic Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-4">
                      {[
                        { value: (services.length || 6).toString(), label: "Service Offerings" },
                        { value: (featuredProducts.length || 50).toString(), label: "Featured Products" },
                        { value: (verticalMarkets.length || 5).toString(), label: "Market Specializations" }
                      ].map((stat, index) => (
                        <div key={index} className="text-center space-y-2">
                          <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                            {stat.value}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
                          </div>
                          <div className="text-xs uppercase tracking-[0.15em] text-gray-600 font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                      <CTAButton href="/contact" variant="primary" size="lg">
                        <span>Start Your Project</span>
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                      </CTAButton>
                      
                      <CTAButton href="/projects" variant="outline" size="lg">
                        <span>View Our Work</span>
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                      </CTAButton>
                    </div>
                  </div>
                  
                  {/* Right Column - Dynamic Hero Image */}
                  <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                    {coreServices[0]?.heroImage ? (
                      <img 
                        src={urlFor(coreServices[0].heroImage).width(800).height(600).url()} 
                        alt={coreServices[0].title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
                        {/* Architectural overlay pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-1/4 left-1/4 w-px h-40 bg-white"></div>
                          <div className="absolute bottom-1/3 right-1/3 w-px h-32 bg-white"></div>
                          <div className="absolute top-1/2 right-1/4 w-20 h-px bg-white"></div>
                          <div className="absolute bottom-1/4 left-1/3 w-16 h-px bg-white"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Image overlay content */}
                    <div className="absolute inset-0 flex items-end p-12 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="space-y-4">
                        <div className="text-white/90 text-sm uppercase tracking-[0.2em] font-medium">
                          Integrated Solutions
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          {services.length || 6} Service Areas<br />Working as One
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

          {/* Architectural elements */}
          <div className="absolute top-8 right-8 space-y-2 opacity-40">
            <div className="w-8 h-px bg-gray-900"></div>
            <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
            <div className="w-6 h-px bg-gray-900"></div>
          </div>
          
          {/* Vertical text */}
          <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
            <div className="text-xs uppercase tracking-[0.25em] text-gray-500 transform -rotate-90 origin-center whitespace-nowrap">
              Solution Excellence
            </div>
          </div>
        </section>

        {/* Dynamic Core Services Section */}
        <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
            <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
          </div>
          
          <div className="relative z-10 px-8 sm:px-16 lg:px-24">
            <div className="max-w-8xl mx-auto">
              
              {/* Section header */}
              <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
                <div className="lg:col-span-8 lg:col-start-1">
                  <div className="relative">
                    <div className="flex items-center space-x-6 mb-12">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Service Portfolio</div>
                      <div className="w-16 h-px bg-gray-900"></div>
                      <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                      <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">{coreServices.length || 6} integrated</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        service
                        <span className="italic text-gray-600 ml-3">areas</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        one vision
                      </span>
                    </h2>
                    
                    {/* Measurement lines */}
                    <div className="absolute -left-4 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                    <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                    <div className="absolute -left-6 top-24 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
              </div>

              {/* Dynamic Services Grid */}
              {coreServices.length > 0 ? (
                <div className="space-y-20">
                  {coreServices.slice(0, 3).map((service: Service, index: number) => (
                    <div key={service._id} className={`grid lg:grid-cols-12 gap-12 items-center group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-8 order-1 lg:order-2' : 'lg:col-start-1'}`}>
                        <div className="aspect-[4/3] relative overflow-hidden">
                          {service.heroImage ? (
                            <img 
                              src={urlFor(service.heroImage).width(600).height(450).url()} 
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900"></div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute bottom-6 left-6 text-white">
                            <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">{service.title}</div>
                            <div className="text-xs text-white/70">{service.category}</div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                        </div>
                      </div>
                      
                      <div className={`lg:col-span-6 space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 order-2 lg:order-1' : 'lg:col-start-7'}`}>
                        <div className="relative">
                          <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                              <Building className="w-6 h-6 text-gray-600" />
                              <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">{service.title}</div>
                            </div>
                            <h3 className="text-3xl font-light text-gray-900 leading-tight">
                              {service.title}
                            </h3>
                            <div className="text-gray-600 leading-relaxed">
                              {/* Handle description array or string */}
                              {Array.isArray(service.description) 
                                ? service.description.map((block: any, idx: number) => 
                                    block._type === 'block' ? (
                                      <p key={idx}>
                                        {block.children?.map((child: any) => child.text).join('') || ''}
                                      </p>
                                    ) : null
                                  )
                                : service.description
                              }
                            </div>
                          </div>
                          
                          {/* Dynamic Key Features */}
                          {service.keyFeatures && service.keyFeatures.length > 0 && (
                            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
                              {service.keyFeatures.slice(0, 3).map((feature: string, idx: number) => (
                                <div key={idx} className="text-center">
                                  <div className="text-lg font-light text-gray-900">{feature.split(' ')[0]}</div>
                                  <div className="text-xs uppercase tracking-[0.2em] text-gray-600">{feature.split(' ').slice(1).join(' ')}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <div className="pt-6">
                            <CTAButton href={`/services/${service.slug.current}`} variant="outline" size="md">
                              <span>Explore {service.title}</span>
                              <ArrowRight className="w-4 h-4" />
                            </CTAButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-600">Loading services...</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Market Specializations */}
        <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
            <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
          </div>
          
          <div className="relative z-10 px-8 sm:px-16 lg:px-24">
            <div className="max-w-8xl mx-auto">
              
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                
                <div className="lg:col-span-7 lg:col-start-1 space-y-16">
                  <div className="relative">
                    <div className="flex items-center space-x-6 mb-12">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Market Expertise</div>
                      <div className="w-16 h-px bg-gray-900"></div>
                      <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                      <div className="text-xs text-gray-400 tracking-wide">03 / 04</div>
                    </div>
                    
                    <div className="space-y-10">
                      <div className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-300">Specialized</span>
                        <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                          expertise
                          <span className="italic text-gray-600 ml-3">across</span>
                        </span>
                        <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                          every industry
                        </span>
                      </div>
                      
                      <div className="max-w-4xl pt-8 space-y-6">
                        <p className="text-xl md:text-2xl text-gray-700 font-light leading-[1.5] tracking-wide">
                          Deep expertise across {verticalMarkets.length || 5} diverse industries, with specialized knowledge for unique requirements and challenges.
                        </p>
                        
                        {/* Dynamic Market Links */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                          {verticalMarkets.length > 0 ? (
                            verticalMarkets.slice(0, 3).map((market: VerticalMarket) => (
                              <Link key={market._id} href={`/markets/${market.slug.current}`} className="group">
                                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg group-hover:border-gray-400 transition-colors duration-300">
                                  {market.menuIcon ? (
                                    <img 
                                      src={urlFor(market.menuIcon).width(32).height(32).url()} 
                                      alt={market.name}
                                      className="w-8 h-8"
                                    />
                                  ) : (
                                    <Briefcase className="w-8 h-8 text-gray-600" />
                                  )}
                                  <div>
                                    <div className="font-medium text-gray-900">{market.name}</div>
                                    <div className="text-sm text-gray-600">{market.headline}</div>
                                  </div>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <>
                              <Link href="/markets/workplace" className="group">
                                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg group-hover:border-gray-400 transition-colors duration-300">
                                  <Briefcase className="w-8 h-8 text-gray-600" />
                                  <div>
                                    <div className="font-medium text-gray-900">Corporate Workplace</div>
                                    <div className="text-sm text-gray-600">1200+ Projects</div>
                                  </div>
                                </div>
                              </Link>
                              
                              <Link href="/markets/healthcare" className="group">
                                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg group-hover:border-gray-400 transition-colors duration-300">
                                  <Heart className="w-8 h-8 text-gray-600" />
                                  <div>
                                    <div className="font-medium text-gray-900">Healthcare</div>
                                    <div className="text-sm text-gray-600">180+ Facilities</div>
                                  </div>
                                </div>
                              </Link>
                              
                              <Link href="/markets/education" className="group">
                                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg group-hover:border-gray-400 transition-colors duration-300">
                                  <Building className="w-8 h-8 text-gray-600" />
                                  <div>
                                    <div className="font-medium text-gray-900">Education</div>
                                    <div className="text-sm text-gray-600">250+ Institutions</div>
                                  </div>
                                </div>
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Client Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="relative py-32 lg:py-40 bg-gray-50 overflow-hidden">
            <div className="relative z-10 px-8 sm:px-16 lg:px-24">
              <div className="max-w-8xl mx-auto">
                
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Client Success Stories</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Real results from real partnerships across diverse industries and project scales.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.slice(0, 3).map((testimonial: ClientTestimonial) => (
                    <div key={testimonial._id} className="bg-white p-8 rounded-lg shadow-sm">
                      <div className="space-y-6">
                        {testimonial.logo && (
                          <img 
                            src={urlFor(testimonial.logo).width(120).height(40).url()} 
                            alt={testimonial.company}
                            className="h-8 object-contain"
                          />
                        )}
                        <blockquote className="text-gray-700 leading-relaxed">
                          "{testimonial.testimonial}"
                        </blockquote>
                        <div className="space-y-2">
                          <div className="font-medium text-gray-900">{testimonial.clientName}</div>
                          <div className="text-sm text-gray-600">{testimonial.company}</div>
                          {testimonial.project && (
                            <Link 
                              href={`/projects/${testimonial.project.slug.current}`}
                              className="text-sm text-orange-600 hover:text-orange-700 inline-flex items-center space-x-1"
                            >
                              <span>View Project</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    )
  } catch (error) {
    console.error('Error loading services data:', error)
    
    // Fallback to a simple error state
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Services</h1>
          <p className="text-gray-600">Loading content...</p>
          <Link href="/" className="inline-block mt-4 text-orange-600 hover:text-orange-700">
            Return Home
          </Link>
        </div>
      </div>
    )
  }
} 