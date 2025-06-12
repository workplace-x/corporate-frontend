'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2, TrendingUp } from 'lucide-react'
import { HeroImage } from '../ui/OptimizedImage'

interface HeroProject {
  id: string
  title: string
  client: string
  location: string
  year: string
  category: string
  impact: string
  description: string
  image?: string
  stats: {
    sqft: string
    users: string
    timeline: string
  }
}

const heroProjects: HeroProject[] = [
  {
    id: 'biotech-hq',
    title: 'Biotech Innovation Center',
    client: 'Confidential Fortune 500',
    location: 'Silicon Valley, CA',
    year: '2024',
    category: 'Corporate Headquarters',
    impact: '40% increase in collaboration',
    description: 'Transformative 450,000 sq ft campus featuring biophilic design, activity-based working zones, and cutting-edge technology integration.',
    stats: {
      sqft: '450,000',
      users: '2,800',
      timeline: '18 months'
    }
  },
  {
    id: 'healthcare-transformation',
    title: 'Healing Environment Redesign',
    client: 'Regional Medical Center',
    location: 'Orange County, CA',
    year: '2024',
    category: 'Healthcare',
    impact: '25% reduction in patient stress',
    description: 'Evidence-based design transformation creating calming, efficient spaces that support both patient healing and staff productivity.',
    stats: {
      sqft: '180,000',
      users: '1,200',
      timeline: '12 months'
    }
  },
  {
    id: 'education-commons',
    title: 'Learning Commons Revolution',
    client: 'University of California',
    location: 'Irvine, CA',
    year: '2023',
    category: 'Education',
    impact: '60% increase in space utilization',
    description: 'Adaptive learning environments supporting diverse pedagogical approaches with integrated technology and flexible configurations.',
    stats: {
      sqft: '75,000',
      users: '3,500',
      timeline: '8 months'
    }
  },
  {
    id: 'fintech-workspace',
    title: 'Agile Financial Operations',
    client: 'Emerging Fintech Leader',
    location: 'Los Angeles, CA',
    year: '2024',
    category: 'Financial Services',
    impact: '35% productivity increase',
    description: 'High-security, highly collaborative workspace designed for rapid scaling and cross-functional team integration.',
    stats: {
      sqft: '95,000',
      users: '650',
      timeline: '6 months'
    }
  }
]

export default function ImageHero() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isAudioEnabled, setIsAudioEnabled] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentProject(prev => (prev + 1) % heroProjects.length)
      }, 8000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying])

  // Reset image loaded state when project changes
  useEffect(() => {
    setImageLoaded(false)
  }, [currentProject])

  const currentProjectData = heroProjects[currentProject]

  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % heroProjects.length)
  }

  const previousProject = () => {
    setCurrentProject(prev => (prev - 1 + heroProjects.length) % heroProjects.length)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Main Image */}
      <div className="absolute inset-0">
        <HeroImage
          src={currentProjectData.image}
          alt={`${currentProjectData.title} - ${currentProjectData.client}`}
          className="w-full h-full"
          priority
          sizes="100vw"
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Top Controls */}
        <div className="flex justify-between items-start p-6 lg:p-8">
          {/* Project Navigation */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {heroProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-1 transition-all duration-500 ${
                    index === currentProject 
                      ? 'w-12 bg-white' 
                      : 'w-4 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <div className="text-white/80 text-sm font-mono">
              {String(currentProject + 1).padStart(2, '0')} / {String(heroProjects.length).padStart(2, '0')}
            </div>
          </div>

          {/* Media Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white" />
              )}
            </button>
            <button
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              {isAudioEnabled ? (
                <Volume2 className="w-4 h-4 text-white" />
              ) : (
                <VolumeX className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Content */}
              <div className="col-span-12 lg:col-span-8 space-y-8">
                {/* Category & Year */}
                <div className="flex items-center space-x-4 text-white/60">
                  <div className="text-sm font-mono uppercase tracking-wider">
                    {currentProjectData.category}
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="text-sm font-mono">
                    {currentProjectData.year}
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="text-sm font-mono">
                    {currentProjectData.location}
                  </div>
                </div>

                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-8xl font-light leading-[0.9] text-white tracking-tight">
                    {currentProjectData.title.split(' ').map((word, index) => (
                      <span
                        key={index}
                        className="inline-block mr-4 opacity-0 animate-fade-in-up"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </h1>
                  
                  <div className="text-lg lg:text-xl text-white/80 font-light max-w-2xl">
                    {currentProjectData.description}
                  </div>
                </div>

                {/* Impact Metric */}
                <div className="inline-flex items-center space-x-3 bg-slate-blue backdrop-blur-sm text-white px-6 py-3 rounded-full">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium">{currentProjectData.impact}</span>
                </div>

                {/* CTA */}
                <div className="flex items-center space-x-6">
                  <Link 
                    href={`/projects/${currentProjectData.id}`}
                    className="inline-flex items-center space-x-3 text-white hover:text-white/80 transition-colors group"
                  >
                    <span className="text-lg font-light">View Full Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors text-sm"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Project Details</span>
                  </button>
                </div>
              </div>

              {/* Right Sidebar - Project Stats */}
              <div className="col-span-12 lg:col-span-4">
                <div className="space-y-6">
                  {/* Client */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-white/60 text-xs uppercase tracking-wider mb-2">Client</div>
                    <div className="text-white text-lg font-light">{currentProjectData.client}</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                      <div className="text-white text-xl font-light mb-1">
                        {currentProjectData.stats.sqft}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider">
                        Sq Ft
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                      <div className="text-white text-xl font-light mb-1">
                        {currentProjectData.stats.users}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider">
                        Users
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                      <div className="text-white text-xl font-light mb-1">
                        {currentProjectData.stats.timeline}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider">
                        Timeline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="p-6 lg:p-8">
          <div className="flex justify-between items-center">
            <button
              onClick={previousProject}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-sm">Previous</span>
            </button>
            
            <div className="text-center">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
                Transforming Workspaces Since 1970
              </div>
              <div className="text-white text-sm font-light">
                Tangram Design
              </div>
            </div>
            
            <button
              onClick={nextProject}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-sm">Next</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}