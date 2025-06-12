'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Cpu, Wifi, Eye, Brain, Layers, TrendingUp, Target, BarChart3, Activity, Sparkles } from 'lucide-react'

interface Innovation {
  id: string
  title: string
  category: string
  description: string
  impact: string
  technology: string[]
  metrics: {
    efficiency: number
    satisfaction: number
    cost_saving: number
  }
  icon: React.ReactNode
  color: string
}

interface DataPoint {
  label: string
  value: number
  trend: 'up' | 'down' | 'stable'
}

const innovations: Innovation[] = [
  {
    id: 'smart-spaces',
    title: 'AI-Powered Space Intelligence',
    category: 'Technology Integration',
    description: 'Predictive analytics and sensor networks that optimize space utilization in real-time, learning from user behavior patterns.',
    impact: 'Increase space efficiency by up to 40%',
    technology: ['IoT Sensors', 'Machine Learning', 'Predictive Analytics', 'Real-time Dashboards'],
    metrics: { efficiency: 40, satisfaction: 92, cost_saving: 35 },
    icon: <Brain className="w-6 h-6" />,
    color: 'blue'
  },
  {
    id: 'biophilic-tech',
    title: 'Biophilic Technology Integration',
    category: 'Wellness Innovation',
    description: 'Smart living walls, circadian lighting systems, and air quality monitoring that respond to occupancy and environmental conditions.',
    impact: 'Reduce stress levels by 25%, boost creativity by 30%',
    technology: ['Circadian Lighting', 'Air Quality Sensors', 'Automated Plant Care', 'Wellness Analytics'],
    metrics: { efficiency: 30, satisfaction: 88, cost_saving: 20 },
    icon: <Sparkles className="w-6 h-6" />,
    color: 'green'
  },
  {
    id: 'adaptive-environments',
    title: 'Adaptive Environmental Systems',
    category: 'Responsive Design',
    description: 'Spaces that automatically reconfigure based on scheduled activities, team sizes, and collaboration requirements.',
    impact: 'Improve meeting effectiveness by 45%',
    technology: ['Automated Furniture', 'Digital Displays', 'Room Booking AI', 'Activity Recognition'],
    metrics: { efficiency: 45, satisfaction: 90, cost_saving: 30 },
    icon: <Layers className="w-6 h-6" />,
    color: 'purple'
  },
  {
    id: 'sustainability-ai',
    title: 'Sustainability Intelligence',
    category: 'Environmental Innovation',
    description: 'Real-time carbon footprint tracking, energy optimization algorithms, and waste reduction systems powered by AI.',
    impact: 'Reduce environmental impact by 50%',
    technology: ['Energy Analytics', 'Carbon Tracking', 'Waste Optimization', 'Sustainability Reporting'],
    metrics: { efficiency: 50, satisfaction: 85, cost_saving: 40 },
    icon: <Activity className="w-6 h-6" />,
    color: 'green'
  }
]

const realTimeData: DataPoint[] = [
  { label: 'Space Utilization', value: 78, trend: 'up' },
  { label: 'Energy Efficiency', value: 85, trend: 'up' },
  { label: 'Employee Satisfaction', value: 92, trend: 'stable' },
  { label: 'Collaboration Index', value: 67, trend: 'up' },
  { label: 'Air Quality Score', value: 94, trend: 'stable' },
  { label: 'Wellness Metrics', value: 88, trend: 'up' }
]

export default function InnovationShowcase() {
  const [activeInnovation, setActiveInnovation] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animate metrics when visible
  useEffect(() => {
    if (isVisible) {
      const currentInnovation = innovations[activeInnovation]
      const targets = [
        currentInnovation.metrics.efficiency,
        currentInnovation.metrics.satisfaction,
        currentInnovation.metrics.cost_saving
      ]
      
      const duration = 2000
      const steps = 60
      const increment = duration / steps
      
      let step = 0
      const timer = setInterval(() => {
        const progress = Math.min(step / steps, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        setAnimatedValues(targets.map(target => Math.floor(target * easeOut)))
        
        step++
        if (progress >= 1) clearInterval(timer)
      }, increment)
      
      return () => clearInterval(timer)
    }
  }, [isVisible, activeInnovation])

  // Auto-advance innovations
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInnovation(prev => (prev + 1) % innovations.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-600 border-blue-200',
      green: 'text-green-600 bg-green-600 border-green-200',
      purple: 'text-purple-600 bg-purple-600 border-purple-200',
      red: 'text-red-600 bg-red-600 border-red-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20 animate-pulse" />
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-[1800px] mx-auto relative">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 lg:col-span-2">
            <div className="text-xs font-mono text-gray-400 mb-4">003_INNOVATION</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              The future of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
                intelligent spaces
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              We don't just design spaces—we engineer experiences. Our innovation lab 
              develops cutting-edge solutions that make workspaces more intelligent, 
              responsive, and human-centered than ever before.
            </p>
          </div>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Innovation List */}
          <div className="space-y-6">
            {innovations.map((innovation, index) => {
              const isActive = index === activeInnovation
              const colorClasses = getColorClasses(innovation.color)
              
              return (
                <div
                  key={innovation.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveInnovation(index)}
                >
                  <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    isActive 
                      ? `border-white/30 bg-white/10` 
                      : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                  }`}>
                    {/* Innovation Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-white text-gray-900' : 'bg-white/10 text-white'
                      } transition-all duration-300`}>
                        {innovation.icon}
                      </div>
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        {innovation.category}
                      </div>
                    </div>

                    {/* Innovation Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium mb-3">
                        {innovation.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {innovation.description}
                      </p>
                      <div className="text-sm font-medium text-blue-400">
                        {innovation.impact}
                      </div>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {innovation.technology.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Metrics Visualization */}
          <div className="space-y-8">
            {/* Real-time Metrics */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-medium">Live Performance Metrics</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Real-time</span>
                </div>
              </div>

              <div className="space-y-6">
                {realTimeData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">{data.label}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-light">{data.value}%</span>
                        <TrendingUp className={`w-4 h-4 ${
                          data.trend === 'up' ? 'text-green-400' : 
                          data.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${isVisible ? data.value : 0}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovation Impact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-medium mb-8">
                {innovations[activeInnovation].title} Impact
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Efficiency', value: animatedValues[0] || 0, suffix: '%' },
                  { label: 'Satisfaction', value: animatedValues[1] || 0, suffix: '%' },
                  { label: 'Cost Savings', value: animatedValues[2] || 0, suffix: '%' }
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-light text-white mb-2">
                      {metric.value}{metric.suffix}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovation Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-medium mb-6">Innovation Roadmap</h3>
              
              <div className="space-y-4">
                {[
                  { quarter: 'Q1 2024', milestone: 'AI Space Analytics Beta', status: 'completed' },
                  { quarter: 'Q2 2024', milestone: 'Biophilic Tech Integration', status: 'current' },
                  { quarter: 'Q3 2024', milestone: 'Adaptive Environments', status: 'upcoming' },
                  { quarter: 'Q4 2024', milestone: 'Full Ecosystem Launch', status: 'upcoming' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'completed' ? 'bg-green-500' :
                      item.status === 'current' ? 'bg-blue-500 animate-pulse' :
                      'bg-gray-500'
                    }`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.milestone}</div>
                      <div className="text-xs text-gray-400">{item.quarter}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-12">
            <h3 className="text-4xl font-light mb-6">
              Ready to pioneer the future of work?
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join leading organizations who are already transforming their spaces 
              with our cutting-edge innovations. The future of work starts today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link 
              href="/innovation"
              className="inline-flex items-center space-x-3 text-xl font-light text-white hover:text-blue-400 transition-colors duration-300 group"
            >
              <span>Explore Our Lab</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group shadow-2xl hover:shadow-blue-500/25"
            >
              <Zap className="w-5 h-5" />
              <span>Schedule Innovation Demo</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-10px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
          75% { transform: translateY(-10px) rotate(270deg); opacity: 1; }
        }
      `}</style>
    </section>
  )
} 