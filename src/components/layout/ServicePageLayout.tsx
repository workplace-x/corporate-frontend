'use client'

import React from 'react'
import { ServiceHero } from '../ui/ServicePageComponents'

interface ServicePageLayoutProps {
  title: string
  description: string
  backgroundImage?: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  children: React.ReactNode
}

export default function ServicePageLayout({
  title,
  description,
  backgroundImage,
  primaryAction,
  secondaryAction,
  children
}: ServicePageLayoutProps) {
  return (
    <main className="min-h-screen">
      <ServiceHero
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
      
      <div className="space-y-0">
        {children}
      </div>
    </main>
  )
}

// Standard Section Component - Architectural Style
interface ServiceSectionProps {
  title?: string
  subtitle?: string
  description?: string
  background?: 'white' | 'gray' | 'black'
  children: React.ReactNode
  className?: string
}

export function ServiceSection({ 
  title, 
  subtitle,
  description, 
  background = 'white', 
  children,
  className = ''
}: ServiceSectionProps) {
  const bgStyles = {
    white: 'bg-white text-black',
    gray: 'bg-gray-50 text-black',
    black: 'bg-black text-white'
  }

  return (
    <section className={`py-32 ${bgStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {subtitle && (
              <div className="text-orange-500 font-medium mb-6 tracking-wide uppercase text-sm">{subtitle}</div>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight mb-8">
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-xl leading-relaxed ${
                background === 'black' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {description}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  )
}

// Call-to-Action Section - Architectural Style
interface ServiceCTAProps {
  title: string
  description: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

export function ServiceCTA({ 
  title, 
  description, 
  primaryAction,
  secondaryAction 
}: ServiceCTAProps) {
  return (
    <ServiceSection background="black">
      <div className="text-center max-w-4xl mx-auto space-y-12">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={primaryAction.href}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
          >
            {primaryAction.label}
          </a>
          
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              {secondaryAction.label}
            </a>
          )}
        </div>
      </div>
    </ServiceSection>
  )
} 