'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Quote, TrendingUp, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'

interface ClientTestimonial {
  id: string
  client: string
  clientLogo?: string
  industry: string
  project: string
  quote: string
  author: string
  title: string
  metrics: {
    improvement: string
    timeline: string
    satisfaction: string
  }
  featured?: boolean
}

const testimonials: ClientTestimonial[] = [
  {
    id: 'biotech-ceo',
    client: 'Fortune 500 Biotech',
    industry: 'Life Sciences',
    project: 'Corporate Campus Transformation',
    quote: 'Tangram didn\'t just redesign our workspace—they revolutionized how our teams collaborate. The 40% increase in cross-functional innovation directly contributed to our fastest product development cycle in company history.',
    author: 'Dr. Sarah Chen',
    title: 'Chief Executive Officer',
    metrics: {
      improvement: '+40% collaboration',
      timeline: '18 months',
      satisfaction: '97% employee satisfaction'
    },
    featured: true
  },
  {
    id: 'medical-director',
    client: 'Regional Medical Center',
    industry: 'Healthcare',
    project: 'Healing Environment Design',
    quote: 'The evidence-based design approach transformed our patient outcomes. We\'ve seen measurable improvements in healing times and staff efficiency—this investment paid for itself within 12 months.',
    author: 'Dr. Michael Rodriguez',
    title: 'Chief Medical Director',
    metrics: {
      improvement: '-25% patient stress',
      timeline: '12 months',
      satisfaction: '94% patient satisfaction'
    },
    featured: true
  },
  {
    id: 'university-chancellor',
    client: 'University of California',
    industry: 'Education',
    project: 'Learning Commons Revolution',
    quote: 'Student engagement and space utilization increased dramatically. The adaptive learning environments have become the most requested study spaces on campus.',
    author: 'Chancellor Patricia Williams',
    title: 'Chancellor',
    metrics: {
      improvement: '+60% utilization',
      timeline: '8 months',
      satisfaction: '91% student approval'
    }
  },
  {
    id: 'fintech-founder',
    client: 'Emerging Fintech',
    industry: 'Financial Services',
    project: 'Agile Workspace Design',
    quote: 'As we scaled from 50 to 650 employees, our Tangram-designed space scaled with us. The flexibility built into the design saved us from three potential relocations.',
    author: 'James Park',
    title: 'Founder & CEO',
    metrics: {
      improvement: '+35% productivity',
      timeline: '6 months',
      satisfaction: '89% team satisfaction'
    }
  }
]

const clientLogos = [
  { name: 'Steelcase', category: 'Partner' },
  { name: 'Herman Miller', category: 'Partner' },
  { name: 'UC System', category: 'Client' },
  { name: 'Kaiser Permanente', category: 'Client' },
  { name: 'Genentech', category: 'Client' },
  { name: 'Adobe', category: 'Client' },
  { name: 'Salesforce', category: 'Client' },
  { name: 'UCSF', category: 'Client' }
]

export default function ClientShowcase() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)

  // Auto-advance testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const featuredTestimonials = testimonials.filter(t => t.featured)
  const currentTestimonial = testimonials[activeTestimonial]

  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-slate-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-[1800px] mx-auto relative">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="text-xs font-mono text-gray-400 mb-4">004_CREDIBILITY</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              Proven
              <br />
              <span className="text-slate-blue">results</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Over 70% of our business comes from repeat clients and referrals. 
              When Fortune 500 companies and leading institutions trust us with their 
              most critical spaces, the results speak for themselves.
            </p>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-32">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-12">
              {/* Quote Section */}
              <div className="col-span-12 lg:col-span-8 p-12 lg:p-16">
                <div className="mb-8">
                  <Quote className="w-12 h-12 text-slate-blue/20 mb-6" />
                  <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-900 mb-8">
                    "{currentTestimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-medium text-gray-900 mb-1">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {currentTestimonial.title}
                    </div>
                    <div className="text-sm font-medium text-slate-blue">
                      {currentTestimonial.client}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={previousTestimonial}
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Metrics Section */}
              <div className="col-span-12 lg:col-span-4 bg-gray-900 text-white p-12 lg:p-16">
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Project Impact
                  </div>
                  <div className="text-lg font-light text-gray-300">
                    {currentTestimonial.project}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-light text-white mb-1">
                      {currentTestimonial.metrics.improvement}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">
                      Performance Improvement
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-light text-white mb-1">
                      {currentTestimonial.metrics.timeline}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">
                      Project Timeline
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-light text-white mb-1">
                      {currentTestimonial.metrics.satisfaction}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'w-12 bg-slate-blue'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Trusted by industry leaders
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From Fortune 500 corporations to leading academic institutions, 
              our clients represent excellence across every sector we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredLogo(logo.name)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-24 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for logo */}
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                      {logo.name}
                    </div>
                    <div className="text-xs text-gray-300 mt-1">
                      {logo.category}
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-blue/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { value: '847', label: 'Clients Served', sublabel: 'Since 1970' },
            { value: '2.3M', label: 'Sq Ft Designed', sublabel: 'Active projects' },
            { value: '70%', label: 'Repeat Business', sublabel: 'Client retention' },
            { value: '94%', label: 'Satisfaction', sublabel: 'Post-occupancy' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2 group-hover:text-slate-blue transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Join our community of successful clients
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're planning a complete transformation or exploring design possibilities, 
              we're here to help you achieve measurable results through thoughtful design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/case-studies"
              className="inline-flex items-center space-x-3 text-lg font-light text-gray-900 hover:text-slate-blue transition-colors duration-300 group"
            >
              <span>Read Case Studies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-3 bg-slate-blue text-white px-8 py-4 rounded-lg hover:bg-slate-blue/90 transition-colors duration-300 group shadow-lg hover:shadow-xl"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 