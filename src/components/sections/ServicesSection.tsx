'use client'

import React from 'react'
import Link from 'next/link'
import CTAButton from '../ui/CTAButton'

interface ServicesSectionProps {
  sectionNumber?: string
  totalSections?: string
}

const services = [
  {
    id: 'contract-furniture',
    title: "Contract Furniture",
    description: "Full range of office furniture solutions including workstations, seating, and systems emphasizing design expertise and vendor partnerships",
    features: ['Steelcase Partnership', 'Space Planning', 'Ergonomic Solutions'],
    href: '/services/contract-furniture'
  },
  {
    id: 'architectural-walls',
    title: "Architectural Walls", 
    description: "Demountable wall systems and interior architectural products that enable flexible space division and reconfiguration",
    features: ['Demountable Systems', 'Glass Integration', 'Flexible Layouts'],
    href: '/services/architectural-walls'
  },
  {
    id: 'technology-integration',
    title: "Technology Integration",
    description: "AV and collaboration technology integration, creating smart meeting rooms and conferencing solutions for modern workplaces",
    features: ['AV Systems', 'Smart Rooms', 'Conferencing Solutions'],
    href: '/services/technology'
  },
  {
    id: 'studio-other',
    title: "Custom Furniture (Studio Other)",
    description: "Our custom design and fabrication studio, crafting unique furniture and fixtures tailored to client brand and specific needs",
    features: ['Custom Design', 'Brand Integration', 'Unique Fabrication'],
    href: '/services/studio-other'
  },
  {
    id: 'flooring-specialty',
    title: "Flooring & Specialty Interiors",
    description: "Comprehensive flooring solutions including carpet, resilient flooring, raised floors, window treatments, and specialty surface solutions",
    features: ['Flooring Systems', 'Window Treatments', 'Specialty Surfaces'],
    href: '/services/flooring'
  },
  {
    id: 'move-management',
    title: "Move Management & Facility Services",
    description: "End-to-end move services, reconfigurations, asset storage, maintenance and ongoing facilities support",
    features: ['Move Coordination', 'Asset Management', 'Facility Support'],
    href: '/services/move-management'
  }
]

export default function ServicesSection({
  sectionNumber = "03",
  totalSections = "06"
}: ServicesSectionProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30 relative overflow-hidden">
      {/* Architectural background grid */}
      <div className="absolute inset-0 opacity-[0.008]">
        <div className="absolute top-1/3 left-1/5 w-px h-80 bg-gray-900"></div>
        <div className="absolute bottom-1/3 right-1/5 w-px h-80 bg-gray-900"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-px bg-gray-900"></div>
      </div>

      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24">
        <div className="max-w-8xl mx-auto">
          
          {/* Section header */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 relative">
                {/* Architectural measurement lines */}
                <div className="absolute -left-4 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                <div className="absolute -left-6 top-24 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                  03
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Services</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">{sectionNumber} / {totalSections}</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] tracking-[-0.02em] text-gray-900">
                    <span className="block">Comprehensive Solutions</span>
                    <span className="block text-gray-600 italic">for Every Need</span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                    From initial strategy to final implementation, we deliver integrated solutions that transform spaces and elevate experiences.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4 text-right">
                <Link 
                  href="/services"
                  className="group inline-flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm font-medium tracking-wide">View All Services</span>
                  <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Redesigned services grid - more architectural */}
          <div className="space-y-20">
            {/* First row - 3 services */}
            <div className="grid lg:grid-cols-3 gap-16">
              {services.slice(0, 3).map((service, index) => (
                <div key={service.id} className="group relative">
                  <Link href={service.href} className="block">
                    <div className="relative">
                      {/* Architectural measurement line */}
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -left-6 top-0 w-2 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                      
                      <div className="space-y-6 transform group-hover:translate-x-1 transition-transform duration-300">
                        {/* Service number only */}
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-medium text-gray-500 tracking-[0.2em]">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        
                        {/* Service content */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-light text-gray-900 tracking-wide leading-tight">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-600 font-light leading-relaxed text-sm">
                            {service.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-2 pt-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-3 text-xs text-gray-500">
                                <div className="w-4 h-px bg-gray-300"></div>
                                <span className="tracking-wide">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Hover indicator */}
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-2">
                            <div className="w-0 h-px bg-gray-900 group-hover:w-6 transition-all duration-300"></div>
                            <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Second row - 3 services */}
            <div className="grid lg:grid-cols-3 gap-16">
              {services.slice(3, 6).map((service, index) => (
                <div key={service.id} className="group relative">
                  <Link href={service.href} className="block">
                    <div className="relative">
                      {/* Architectural measurement line */}
                      <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-gray-900 via-gray-400 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -left-6 top-0 w-2 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                      
                      <div className="space-y-6 transform group-hover:translate-x-1 transition-transform duration-300">
                        {/* Service number only */}
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-medium text-gray-500 tracking-[0.2em]">
                            {String(index + 4).padStart(2, '0')}
                          </div>
                        </div>
                        
                        {/* Service content */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-light text-gray-900 tracking-wide leading-tight">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-600 font-light leading-relaxed text-sm">
                            {service.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-2 pt-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-3 text-xs text-gray-500">
                                <div className="w-4 h-px bg-gray-300"></div>
                                <span className="tracking-wide">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Hover indicator */}
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-2">
                            <div className="w-0 h-px bg-gray-900 group-hover:w-6 transition-all duration-300"></div>
                            <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="mt-24 pt-16 border-t border-gray-100 relative">
            <div className="absolute -left-4 top-16 w-px h-16 bg-gradient-to-b from-gray-900 to-gray-400 opacity-30"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-900 tracking-wide">
                  Need a Custom Solution?
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Every organization is unique. We combine these core services in tailored ways to address your specific challenges and objectives.
                </p>
                <div className="flex items-center space-x-6 text-xs text-gray-500">
                  <span className="uppercase tracking-[0.2em]">Integrated Solutions</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Discuss Your Project</span>
                  <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 