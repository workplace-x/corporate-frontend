'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Award, Users, TrendingUp, Building, Clock, Star, Shield, Lightbulb } from 'lucide-react'
import { AnimatedCounter, FadeInUp, StaggeredReveal } from '../ui/ScrollReveal'

interface Milestone {
  year: string
  title: string
  description: string
  category: 'founding' | 'growth' | 'innovation' | 'expansion'
}

interface Leadership {
  name: string
  title: string
  image?: string
  bio: string
  achievement: string
}

const milestones: Milestone[] = [
  {
    year: '1970',
    title: 'Tangram Founded',
    description: 'Started as a Southern California furniture dealer with a simple belief: the workspace should be an engine for human potential.',
    category: 'founding'
  },
  {
    year: '2002',
    title: 'Joe Lozowski Era Begins',
    description: 'Strategic leadership and entrepreneurial spirit begin rebuilding Tangram from the ground up, expanding capabilities far beyond furniture.',
    category: 'growth'
  },
  {
    year: '2010s',
    title: 'Steelcase Premier Partnership',
    description: 'Became one of the largest Steelcase partners in North America, gaining access to world-class research and products.',
    category: 'innovation'
  },
  {
    year: '2020s',
    title: 'Full-Service Powerhouse',
    description: 'Reached $250M+ in revenue with comprehensive solutions across six business units, serving clients nationwide.',
    category: 'expansion'
  }
]

const leadership: Leadership[] = [
  {
    name: 'Sonya Lozowski',
    title: 'Chairman',
    bio: 'A visionary leader blending a background in medicine with a passion for design, Sonya champions Tangram\'s human-centered approach.',
    achievement: 'Champions wellness, innovation, and community in every project'
  },
  {
    name: 'Joe Lozowski',
    title: 'President & CEO',
    bio: 'Since 2002, Joe has led Tangram\'s transformation from regional dealer to industry leader with strategic discipline and entrepreneurial spirit.',
    achievement: 'Grew company to $250M+ revenue, expanded to 6 business units'
  },
  {
    name: 'Nick Meter',
    title: 'Vice President of Sales',
    bio: 'The driving force behind Tangram\'s sales and client development, with deep knowledge of every business unit from Technology to Studio Other.',
    achievement: 'Ensures solutions win business and truly deliver on promises'
  }
]

const coreValues = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'People-Centric Design',
    description: 'We put humans at the heart of every decision, understanding the people who will use a space—their aspirations, tasks, and challenges.',
    metric: '97% client satisfaction'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Integrity & Trust',
    description: 'Built long-term relationships through transparency, reliability, and accountability. Delivering on promises is part of our DNA.',
    metric: '70% repeat business'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation with Purpose',
    description: 'Curiosity drives us. From new materials to VR previews, we embrace ideas that add value—innovation always serves better outcomes.',
    metric: '50+ years of evolution'
  }
]

const categoryColors: Record<string, string> = {
  founding: 'bg-blue-600',
  growth: 'bg-green-600',
  innovation: 'bg-purple-600',
  expansion: 'bg-slate-blue'
}

export default function HeritageBrand() {
  const [activeTab, setActiveTab] = useState<'story' | 'leadership' | 'values'>('story')
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null)

  const getCategoryColor = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || 'bg-gray-600'
  }

  return (
    <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-slate-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-[1800px] mx-auto relative">
        {/* Section Header */}
        <FadeInUp>
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 lg:col-span-2">
              <div className="text-xs font-mono text-gray-400 mb-4">001_HERITAGE</div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                <AnimatedCounter target={50} suffix="+" className="text-red-600" /> years of
                <br />
                transforming
                <br />
                <span className="text-gray-900">workspaces</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                From our founding in 1970 as a Southern California furniture dealer to becoming 
                a <span className="text-red-600 font-medium">$250M+ full-service powerhouse</span>, 
                Tangram's journey is one of continuous innovation and unwavering commitment 
                to human-centered design.
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {[
              { id: 'story', label: 'Our Story', icon: <Building className="w-4 h-4" /> },
              { id: 'leadership', label: 'Leadership', icon: <Users className="w-4 h-4" /> },
              { id: 'values', label: 'Values', icon: <Star className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-slate-blue text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Story Tab */}
        {activeTab === 'story' && (
          <div className="space-y-20">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-red-600 via-purple-600 to-blue-600"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <FadeInUp key={milestone.year} delay={index * 200}>
                    <div 
                      className={`relative grid grid-cols-12 gap-8 items-center ${
                        index % 2 === 0 ? '' : 'direction-rtl'
                      }`}
                      onMouseEnter={() => setHoveredMilestone(milestone.year)}
                      onMouseLeave={() => setHoveredMilestone(null)}
                    >
                      {/* Content */}
                      <div className={`col-span-12 lg:col-span-5 ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-8'
                      }`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-3 h-3 rounded-full ${getCategoryColor(milestone.category)}`} />
                            <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                              {milestone.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-medium text-gray-900 mb-4">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                        <div className={`w-20 h-20 rounded-full bg-white border-4 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          hoveredMilestone === milestone.year 
                            ? 'border-slate-blue scale-110' 
                            : 'border-gray-200'
                        }`}>
                          <span className="text-lg font-bold text-gray-900">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Partnership Highlight */}
            <FadeInUp delay={800}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <Award className="w-8 h-8 text-red-500" />
                      <span className="text-sm font-mono uppercase tracking-wider text-gray-400">
                        Premier Partnership
                      </span>
                    </div>
                    <h3 className="text-3xl font-light mb-6">
                      Steelcase Premier Partner
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      As one of the largest Steelcase partners in North America, we combine 
                      global resources and cutting-edge insights with personalized local attention. 
                      Access to the world's premier office furniture manufacturer, paired with 
                      the soul of a boutique studio.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-2xl font-light text-white mb-1">
                          Top 10
                        </div>
                        <div className="text-xs uppercase tracking-wider text-gray-400">
                          Steelcase Partner
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-light text-white mb-1">
                          <AnimatedCounter target={53} className="text-white" /> Years
                        </div>
                        <div className="text-xs uppercase tracking-wider text-gray-400">
                          Of Partnership
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-medium mb-3">Global Resources</h4>
                      <p className="text-gray-300 text-sm">
                        Access to Steelcase's world-class research, product innovation, 
                        and manufacturing excellence.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-lg font-medium mb-3">Local Expertise</h4>
                      <p className="text-gray-300 text-sm">
                        Boutique studio approach with deep understanding of regional 
                        markets and client needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === 'leadership' && (
          <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={leader.name} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <div className="text-sm text-red-600 font-medium mb-4">
                  {leader.title}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {leader.bio}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Key Achievement
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {leader.achievement}
                  </div>
                </div>
              </div>
            ))}
          </StaggeredReveal>
        )}

        {/* Values Tab */}
        {activeTab === 'values' && (
          <div className="space-y-16">
            <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={value.title} className="text-center group">
                  <div className="w-20 h-20 bg-slate-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-blue/20 transition-colors duration-300">
                    <div className="text-slate-blue">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {value.description}
                  </p>
                  <div className="text-sm font-medium text-slate-blue">
                    {value.metric}
                  </div>
                </div>
              ))}
            </StaggeredReveal>

            {/* Tangram Name Story */}
            <FadeInUp delay={600}>
              <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-white text-center">
                <h3 className="text-3xl font-light mb-6">
                  Why "Tangram"?
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Our name comes from a puzzle made of simple pieces that can be arranged into 
                  endless combinations. For us, it's a perfect metaphor: we take the pieces of your 
                  vision—ideas, people, technology, brand, budget—and assemble them into a workspace 
                  that's uniquely yours. <span className="text-red-400">No two solutions are alike, 
                  because no two clients are alike.</span>
                </p>
              </div>
            </FadeInUp>
          </div>
        )}

        {/* Call to Action */}
        <FadeInUp delay={1000}>
          <div className="text-center mt-20">
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Ready to become part of our story?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join the many forward-thinking companies who have trusted Tangram to shape 
              their environments. Your transformation could be our next success story.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/about"
                className="inline-flex items-center space-x-3 text-lg font-light text-gray-900 hover:text-slate-blue transition-colors duration-300 group"
              >
                <span>Learn More About Us</span>
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
        </FadeInUp>
      </div>
    </section>
  )
} 