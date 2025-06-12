'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, Users, Lightbulb, Palette, Wrench, CheckCircle, ArrowDown, ArrowRight, Clock, Target, Zap } from 'lucide-react'

interface ProcessPhase {
  id: string
  phase: string
  title: string
  duration: string
  description: string
  icon: React.ReactNode
  activities: string[]
  deliverables: string[]
  color: string
  metrics?: string
}

const processPhases: ProcessPhase[] = [
  {
    id: 'discovery',
    phase: '01',
    title: 'Discovery & Strategy',
    duration: '2-4 weeks',
    description: 'Deep dive into your organization\'s culture, workflows, and aspirations to establish design criteria.',
    icon: <Search className="w-6 h-6" />,
    activities: [
      'Stakeholder interviews',
      'Workflow analysis',
      'Space audit',
      'Culture assessment'
    ],
    deliverables: [
      'Design brief',
      'Performance metrics',
      'Project roadmap'
    ],
    color: 'blue',
    metrics: '92% accuracy in space predictions'
  },
  {
    id: 'collaboration',
    phase: '02',
    title: 'Collaborative Design',
    duration: '4-6 weeks',
    description: 'Co-create solutions through iterative design sessions, ensuring every voice is heard.',
    icon: <Users className="w-6 h-6" />,
    activities: [
      'Design workshops',
      'User journey mapping',
      'Concept iterations',
      'Stakeholder feedback'
    ],
    deliverables: [
      'Concept designs',
      'Space plans',
      'User experience flows'
    ],
    color: 'green',
    metrics: '84% first-concept approval rate'
  },
  {
    id: 'innovation',
    phase: '03',
    title: 'Innovation & Refinement',
    duration: '3-5 weeks',
    description: 'Refine concepts with cutting-edge solutions, material selections, and technology integration.',
    icon: <Lightbulb className="w-6 h-6" />,
    activities: [
      'Material specification',
      'Technology integration',
      'Sustainability planning',
      'Innovation research'
    ],
    deliverables: [
      'Material palettes',
      'Tech specifications',
      'Sustainability report'
    ],
    color: 'yellow',
    metrics: '96% sustainability goals achieved'
  },
  {
    id: 'visualization',
    phase: '04',
    title: 'Visualization & Planning',
    duration: '2-3 weeks',
    description: 'Transform concepts into photorealistic visualizations and detailed construction documentation.',
    icon: <Palette className="w-6 h-6" />,
    activities: [
      '3D modeling',
      'Photorealistic rendering',
      'Construction documents',
      'Specification writing'
    ],
    deliverables: [
      '3D visualizations',
      'Construction documents',
      'Specifications'
    ],
    color: 'purple',
    metrics: '98% visualization accuracy'
  },
  {
    id: 'implementation',
    phase: '05',
    title: 'Seamless Implementation',
    duration: '6-18 weeks',
    description: 'Execute the vision with precision project management and quality craftsmanship.',
    icon: <Wrench className="w-6 h-6" />,
    activities: [
      'Project management',
      'Installation oversight',
      'Quality assurance',
      'Timeline coordination'
    ],
    deliverables: [
      'Completed installation',
      'Quality reports',
      'Training materials'
    ],
    color: 'slate',
    metrics: '94% on-time delivery'
  },
  {
    id: 'optimization',
    phase: '06',
    title: 'Performance Optimization',
    duration: 'Ongoing',
    description: 'Monitor, measure, and optimize your space performance to ensure lasting success.',
    icon: <CheckCircle className="w-6 h-6" />,
    activities: [
      'Performance monitoring',
      'User feedback collection',
      'Space optimization',
      'Ongoing support'
    ],
    deliverables: [
      'Performance reports',
      'Optimization recommendations',
      'Ongoing support'
    ],
    color: 'gray',
    metrics: '89% improvement in utilization'
  }
]

export default function ProcessVisualization() {
  const [activePhase, setActivePhase] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Auto-advance phases
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActivePhase(prev => (prev + 1) % processPhases.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionHeight = rect.height
        
        const start = Math.max(0, -rect.top)
        const progress = Math.min(1, start / (sectionHeight - windowHeight))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getColorClasses = (color: string) => {
    const colorMapping: Record<string, string> = {
      blue: 'text-blue-600 bg-blue-600',
      green: 'text-green-600 bg-green-600',
      yellow: 'text-yellow-600 bg-yellow-600',
      purple: 'text-purple-600 bg-purple-600',
      slate: 'text-slate-blue bg-slate-blue',
      gray: 'text-gray-600 bg-gray-600'
    }
    return colorMapping[color as keyof typeof colorMapping] || colorMapping.gray
  }

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.1) 0%, transparent 25%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 25%)`
        }} />
      </div>

      <div className="max-w-[1800px] mx-auto relative">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="text-xs font-mono text-gray-400 mb-4">005_PROCESS</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              Our proven
              <br />
              <span className="text-slate-blue">methodology</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Fifty years of experience distilled into a systematic approach that 
              delivers measurable results. Every project follows our refined methodology, 
              ensuring consistent excellence from concept to completion.
            </p>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-32">
          {/* Progress Bar */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-mono text-gray-400">TIMELINE PROGRESS</div>
              <div className="text-sm font-mono text-gray-400">
                {Math.round(((activePhase + 1) / processPhases.length) * 100)}% COMPLETE
              </div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-slate-blue transition-all duration-1000 ease-out"
                style={{ 
                  width: `${((activePhase + 1) / processPhases.length) * 100}%`,
                  transitionDelay: '500ms'
                }}
              />
            </div>
          </div>

          {/* Phase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {processPhases.map((phase, index) => {
              const colorClasses = getColorClasses(phase.color)
              const isActive = index === activePhase
              const isCompleted = index < activePhase
              
              return (
                <div 
                  key={phase.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? 'transform scale-105' : ''
                  }`}
                  onClick={() => {
                    setActivePhase(index)
                    setIsAutoPlaying(false)
                  }}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-slate-blue shadow-2xl' 
                      : isCompleted 
                        ? 'border-green-200 bg-green-50/50' 
                        : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    {/* Phase Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive 
                          ? 'bg-slate-blue text-white' 
                          : isCompleted 
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          phase.icon
                        )}
                      </div>
                      <div className="text-xs font-mono text-gray-400">
                        PHASE {phase.phase}
                      </div>
                    </div>

                    {/* Phase Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                          {phase.title}
                        </h3>
                        <div className="text-sm text-slate-blue font-medium mb-3">
                          {phase.duration}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>

                      {phase.metrics && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                            Success Metric
                          </div>
                          <div className="text-sm font-medium text-gray-700">
                            {phase.metrics}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Expand Indicator */}
                    <div className={`mt-6 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                    }`}>
                      <ArrowDown className="w-4 h-4 text-slate-blue" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Phase Details */}
          <div className="bg-gray-50 rounded-3xl p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Activities */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                  <Target className="w-5 h-5 mr-3 text-slate-blue" />
                  Key Activities
                </h4>
                <div className="space-y-3">
                  {processPhases[activePhase].activities.map((activity, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 text-gray-600"
                      style={{ 
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                      }}
                    >
                      <div className="w-2 h-2 bg-slate-blue rounded-full flex-shrink-0" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                  <Zap className="w-5 h-5 mr-3 text-slate-blue" />
                  Deliverables
                </h4>
                <div className="space-y-3">
                  {processPhases[activePhase].deliverables.map((deliverable, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 text-gray-600"
                      style={{ 
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.3}s forwards`
                      }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: 'Proven Timeline',
              description: 'Refined over 50 years of project delivery',
              metric: '94% on-time completion'
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Collaborative Approach',
              description: 'Every stakeholder voice is heard and valued',
              metric: '97% stakeholder satisfaction'
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: 'Measurable Results',
              description: 'Data-driven decisions and performance tracking',
              metric: '89% improvement achieved'
            }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-slate-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-blue/20 transition-colors duration-300">
                <div className="text-slate-blue">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="text-sm font-medium text-slate-blue">
                {item.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 rounded-3xl p-12 lg:p-16 text-white">
          <h3 className="text-3xl font-light mb-6">
            Ready to start your transformation?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our systematic approach ensures your project's success from day one. 
            Let's discuss how our proven methodology can deliver exceptional results for your organization.
          </p>
          <button className="inline-flex items-center space-x-3 bg-slate-blue text-white px-8 py-4 rounded-lg hover:bg-slate-blue/90 transition-colors duration-300 group shadow-lg hover:shadow-xl">
            <span>Schedule Discovery Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
} 