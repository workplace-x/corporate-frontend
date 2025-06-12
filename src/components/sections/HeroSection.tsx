'use client'

import React from 'react'
import Link from 'next/link'
import CTAButton from '../ui/CTAButton'

interface HeroSectionProps {
  title?: {
    line1: string
    line2: string
    line3: string
  }
  subtitle?: string
  description?: string
  stats?: Array<{
    value: string
    label: string
    description?: string
  }>
}

export default function HeroSection({
  title = {
    line1: "Where",
    line2: "People",
    line3: "Meet Place"
  },
  subtitle = "We design transformative environments where human potential flourishes.",
  description = "Every detail serves purpose. Every space tells a story. Every experience matters.",
  stats = [
    { value: "1,800+", label: "Projects Delivered", description: "Across 30+ industries worldwide" },
    { value: "96%", label: "Client Satisfaction", description: "Exceeding expectations consistently" },
    { value: "60+", label: "Years Excellence", description: "Since 1964, defining the future" }
  ]
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Simplified architectural background - much more subtle */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 left-1/3 w-px h-80 bg-gray-900"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-80 bg-gray-900"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-8 sm:px-16 lg:px-24 py-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Enhanced asymmetrical layout */}
            <div className="grid lg:grid-cols-12 gap-12 items-end min-h-[80vh]">
              
              {/* Left Column - Typography Excellence */}
              <div className="lg:col-span-8 lg:col-start-1 space-y-16">
                
                {/* Refined brand elements */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-px bg-gray-900"></div>
                      <span>Est. 1964</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Steelcase Premier Partner</span>
                    </div>
                  </div>
                  
                  {/* Fixed positioning for vertical text - better positioning to prevent cutoff */}
                  <div className="hidden lg:flex items-center justify-center fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="text-xs uppercase tracking-[0.25em] text-gray-500 transform -rotate-90 origin-center whitespace-nowrap">
                      Design Excellence
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Typography */}
                <div className="space-y-12">
                  <div className="relative">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[12rem] font-extralight leading-[0.8] tracking-[-0.04em] text-gray-900">
                      <span className="block transform hover:translate-x-1 transition-transform duration-500">{title.line1}</span>
                      <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                        <span className="relative z-20">{title.line2}</span>
                        {/* Removed the confusing line through "People" */}
                      </span>
                      <span className="block text-gray-600 italic transform translate-x-12 hover:translate-x-16 transition-transform duration-500 delay-150">
                        {title.line3}
                      </span>
                    </h1>
                    
                    {/* Refined architectural measurement lines with orange accent */}
                    <div className="absolute -left-6 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-50"></div>
                    <div className="absolute -left-8 top-0 w-4 h-px bg-gray-900 opacity-50"></div>
                    <div className="absolute -left-8 top-24 w-4 h-px bg-orange-500 opacity-70" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="absolute -left-12 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                      01
                    </div>
                  </div>
                  
                  {/* Enhanced subtext with orange accent */}
                  <div className="max-w-3xl relative pl-2">
                    <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-900 via-orange-500 to-transparent opacity-40" style={{ background: `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, transparent)` }}></div>
                    <div className="space-y-6">
                      <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.4] font-light text-gray-700 tracking-[-0.01em]">
                        {subtitle}
                      </p>
                      <p className="text-xl text-gray-600 font-light leading-relaxed tracking-wide">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Standardized CTA buttons using CTAButton component */}
                <div className="flex flex-col sm:flex-row gap-8 pt-8">
                  <CTAButton href="/projects" variant="primary" size="lg">
                    <span>Explore Our Work</span>
                    <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                  </CTAButton>
                  
                  <CTAButton href="/contact" variant="outline" size="lg">
                    <span>Start a Conversation</span>
                    <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                  </CTAButton>
                </div>
              </div>
              
              {/* Right Column - Enhanced Stats Tower with orange accents */}
              <div className="lg:col-span-4 lg:col-start-9 space-y-12">
                
                {/* Stats with orange accent colors */}
                <div className="space-y-16">
                  {stats.map((stat, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 group-hover:via-orange-500 transition-colors duration-300" style={{ background: `linear-gradient(to bottom, rgb(17, 24, 39), rgb(156, 163, 175), rgb(229, 231, 235))` }}></div>
                      <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 group-hover:w-4 group-hover:bg-orange-500 transition-all duration-200" style={{ backgroundColor: index === 0 ? '#f9a31c' : undefined }}></div>
                      
                      <div className="text-right space-y-3 transform group-hover:translate-x-1 transition-transform duration-200">
                        <div className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-[-0.02em] group-hover:text-gray-700 transition-colors duration-300">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-4xl" style={{ color: '#f9a31c' }}>+</span>
                            </>
                          ) : (
                            <>
                              {stat.value.replace('%', '')}<span className="text-4xl" style={{ color: '#f9a31c' }}>%</span>
                            </>
                          )}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium">{stat.label}</div>
                        {stat.description && (
                          <div className="text-sm text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {stat.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced scroll indicator with orange accent */}
                <div className="text-right space-y-4 pt-12 opacity-60">
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll to Explore</div>
                  <div className="flex justify-end">
                    <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent" style={{ background: `linear-gradient(to bottom, #f9a31c, transparent)` }}></div>
                  </div>
                  <div className="text-xs text-gray-400 tracking-wide">01 / 06</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating navigation dots with orange accent - now showing 6 sections */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-3 z-20">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
        <div className="w-1.5 h-6 bg-gray-400 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
      </div>
    </section>
  )
} 