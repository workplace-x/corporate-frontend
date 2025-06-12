'use client'

import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { FadeInUp, StaggeredReveal } from './ScrollReveal'

// Feature Grid Component - Architectural Style
interface FeatureGridProps {
  features: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center space-y-6">
          <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mx-auto">
            {feature.icon}
          </div>
          <h3 className="text-xl font-extralight text-black">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </StaggeredReveal>
  )
}

// Process Steps Component - Clean List Style
interface ProcessStep {
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  title?: string
}

export function ProcessSteps({ steps, title = "Our Process" }: ProcessStepsProps) {
  return (
    <div className="space-y-12">
      {title && (
        <h3 className="text-3xl font-extralight text-black">{title}</h3>
      )}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 text-lg font-light flex-shrink-0">
              {index + 1}
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-extralight text-black">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Stats Component - Architectural Style
interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsShowcaseProps {
  stats: Stat[]
}

export function StatsShowcase({ stats }: StatsShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center space-y-3">
          <div className="text-4xl font-extralight text-orange-500">{stat.value}</div>
          <div className="text-lg font-extralight text-black">{stat.label}</div>
          {stat.description && (
            <div className="text-sm text-gray-600">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  )
}

// Benefits List Component - Clean Architectural Style
interface Benefit {
  title: string
  description: string
}

interface BenefitsListProps {
  benefits: Benefit[]
  title?: string
}

export function BenefitsList({ benefits, title = "Key Benefits" }: BenefitsListProps) {
  return (
    <div className="space-y-12">
      {title && (
        <h3 className="text-3xl font-extralight text-black">{title}</h3>
      )}
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-xl font-extralight text-black">{benefit.title}</h4>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Service/Market Hero Component - Matching Homepage Style
interface ServiceHeroProps {
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
}

export function ServiceHero({ 
  title, 
  description, 
  backgroundImage,
  primaryAction,
  secondaryAction 
}: ServiceHeroProps) {
  return (
    <section className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <FadeInUp delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-extralight leading-tight">
                {title}
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed">
                {description}
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href={primaryAction.href}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-center"
                >
                  {primaryAction.label}
                </a>
                
                {secondaryAction && (
                  <a
                    href={secondaryAction.href}
                    className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-center inline-flex items-center justify-center gap-2"
                  >
                    {secondaryAction.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </FadeInUp>
          </div>
          
          {backgroundImage && (
            <div className="relative">
              <img 
                src={backgroundImage}
                alt=""
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
              <div className="absolute top-8 left-8 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Testimonial Component - Clean Architectural Style
interface TestimonialProps {
  quote: string
  author: string
  company?: string
  image?: string
}

export function Testimonial({ quote, author, company, image }: TestimonialProps) {
  return (
    <div className="space-y-8">
      <blockquote className="text-xl font-extralight text-gray-600 leading-relaxed italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        {image && (
          <img 
            src={image} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <cite className="text-lg font-extralight text-black not-italic">{author}</cite>
          {company && (
            <div className="text-gray-600">{company}</div>
          )}
        </div>
      </div>
    </div>
  )
}

// Two Column Layout Component - Architectural Style
interface TwoColumnLayoutProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  reversed?: boolean
}

export function TwoColumnLayout({ leftContent, rightContent, reversed = false }: TwoColumnLayoutProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={reversed ? 'lg:col-start-2' : ''}>{leftContent}</div>
      <div className={reversed ? 'lg:col-start-1' : ''}>{rightContent}</div>
    </div>
  )
}

// Service Feature Section - Sophisticated Layout
interface ServiceFeatureProps {
  title: string
  description: string
  features: string[]
  image?: string
  reversed?: boolean
}

export function ServiceFeature({ title, description, features, image, reversed = false }: ServiceFeatureProps) {
  return (
    <TwoColumnLayout
      leftContent={
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-extralight text-black">{title}</h3>
            <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
          </div>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      }
      rightContent={
        image ? (
          <div className="relative">
            <img 
              src={image}
              alt={title}
              className="w-full aspect-[4/5] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-lg" />
            <div className="absolute top-8 right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
          </div>
        ) : (
          <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-orange-500">
              <div className="text-6xl mb-4 font-extralight">•</div>
              <div className="text-lg font-extralight">Excellence in Design</div>
            </div>
          </div>
        )
      }
      reversed={reversed}
    />
  )
} 