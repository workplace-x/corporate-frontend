'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Star, 
  Sparkles,
  Globe,
  Command,
  Phone,
  Mail,
  Grid3X3,
  Building,
  Palette,
  Compass,
  Layers,
  Triangle,
  Circle,
  Square
} from 'lucide-react'

interface NavigationChild {
  label: string
  href: string
  description?: string
  featured?: boolean
  icon?: React.ReactNode
  color?: string
}

interface NavigationItem {
  label: string
  href: string
  featured?: boolean
  children?: NavigationChild[]
  color?: string
}

// Revolutionary visual effects and interactions
const useSpringPhysics = (target: number, stiffness = 0.1, damping = 0.8) => {
  const [value, setValue] = useState(target)
  const velocity = useRef(0)
  
  useEffect(() => {
    const animate = () => {
      const force = (target - value) * stiffness
      velocity.current += force
      velocity.current *= damping
      const newValue = value + velocity.current
      setValue(newValue)
      
      if (Math.abs(velocity.current) > 0.01) {
        requestAnimationFrame(animate)
      }
    }
    
    if (Math.abs(target - value) > 0.01) {
      requestAnimationFrame(animate)
    }
  }, [target, value, stiffness, damping])
  
  return value
}

const Particle = ({ x, y, id, onComplete }: { x: number, y: number, id: number, onComplete: () => void }) => {
  const [pos, setPos] = useState({ x, y })
  const [opacity, setOpacity] = useState(1)
  
  useEffect(() => {
    const animate = () => {
      setPos(prev => ({
        x: prev.x + (Math.random() - 0.5) * 2,
        y: prev.y + (Math.random() - 0.5) * 2
      }))
      setOpacity(prev => prev * 0.95)
    }
    
    const interval = setInterval(animate, 50)
    setTimeout(() => {
      clearInterval(interval)
      onComplete()
    }, 2000)
    
    return () => clearInterval(interval)
  }, [onComplete])
  
  return (
    <div
      className="fixed w-1 h-1 rounded-full pointer-events-none z-20"
      style={{
        left: pos.x,
        top: pos.y,
        opacity,
        background: `radial-gradient(circle, rgba(74, 111, 165, ${opacity}) 0%, rgba(138, 154, 91, ${opacity * 0.7}) 50%, transparent 100%)`,
        filter: 'blur(0.5px)',
        transform: `scale(${opacity})`,
        transition: 'all 0.1s ease-out'
      }}
    />
  )
}

const navigationItems: NavigationItem[] = [
  {
    label: 'About',
    href: '/about',
    color: 'slate-blue',
    children: [
      { 
        label: 'About Us', 
        href: '/about', 
        description: 'Our story, values, and mission that drive innovation',
        icon: <Globe className="w-4 h-4" />,
        color: 'slate-blue'
      },
      { 
        label: 'Our Ecosystem', 
        href: '/about/ecosystem', 
        description: 'Innovation partners and collaborative networks',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true,
        color: 'olive-green'
      },
      { 
        label: 'History', 
        href: '/about/history', 
        description: '50+ years of design excellence and evolution',
        icon: <Compass className="w-4 h-4" />
      },
      { 
        label: 'Meet Our Team', 
        href: '/team', 
        description: 'Expert designers, strategists, and visionaries',
        icon: <Circle className="w-4 h-4" />
      },
      { 
        label: 'Visit Us', 
        href: '/visit', 
        description: 'Immersive showroom experiences nationwide',
        icon: <Triangle className="w-4 h-4" />
      },
      { 
        label: 'Careers', 
        href: '/careers', 
        description: 'Join our mission to reshape environments',
        featured: true,
        icon: <Square className="w-4 h-4" />,
        color: 'tangram-orange'
      }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    featured: true,
    color: 'olive-green',
    children: [
      { 
        label: 'Contract Furniture', 
        href: '/services/contract-furniture', 
        description: 'Steelcase-powered workspace ecosystems',
        featured: true,
        icon: <Grid3X3 className="w-4 h-4" />,
        color: 'slate-blue'
      },
      { 
        label: 'Architectural Walls', 
        href: '/services/architectural-walls', 
        description: 'Adaptive demountable spatial systems',
        icon: <Building className="w-4 h-4" />,
        color: 'olive-green'
      },
      { 
        label: 'Technology Integration', 
        href: '/services/technology', 
        description: 'Invisible smart collaboration environments',
        featured: true,
        icon: <Layers className="w-4 h-4" />,
        color: 'tangram-orange'
      },
      { 
        label: 'Studio Other', 
        href: '/services/custom-furniture', 
        description: 'Bespoke design meets expert fabrication',
        icon: <Palette className="w-4 h-4" />,
        color: 'slate-blue'
      },
      { 
        label: 'Flooring Solutions', 
        href: '/services/flooring', 
        description: 'Complete surface and specialty interiors',
        icon: <Circle className="w-4 h-4" />
      },
      { 
        label: 'Move Management', 
        href: '/services/move-management', 
        description: 'Seamless organizational transitions',
        icon: <Triangle className="w-4 h-4" />
      },
      { 
        label: 'Healthcare Design', 
        href: '/services/healthcare', 
        description: 'Evidence-based healing environments',
        icon: <Square className="w-4 h-4" />,
        color: 'olive-green'
      },
      { 
        label: 'Workplace Strategy', 
        href: '/services/workplace', 
        description: 'Strategic space optimization and planning',
        icon: <Compass className="w-4 h-4" />
      }
    ]
  },
  {
    label: 'Markets',
    href: '/markets',
    color: 'tangram-orange',
    children: [
      { 
        label: 'Workplace', 
        href: '/markets/workplace', 
        description: 'Corporate and commercial environments',
        featured: true,
        icon: <Building className="w-4 h-4" />,
        color: 'slate-blue'
      },
      { 
        label: 'Healthcare', 
        href: '/markets/healthcare', 
        description: 'Medical facilities and wellness centers',
        icon: <Circle className="w-4 h-4" />,
        color: 'olive-green'
      },
      { 
        label: 'Education', 
        href: '/markets/education', 
        description: 'Learning spaces and academic institutions',
        icon: <Triangle className="w-4 h-4" />
      }
    ]
  },
  {
    label: 'Projects',
    href: '/projects',
    color: 'slate-blue',
    children: [
      { 
        label: 'Portfolio', 
        href: '/projects', 
        description: 'Complete project showcase and case studies',
        icon: <Layers className="w-4 h-4" />
      },
      { 
        label: 'Case Studies', 
        href: '/projects/case-studies', 
        description: 'In-depth project analysis and insights',
        icon: <Square className="w-4 h-4" />,
        color: 'olive-green'
      },
      { 
        label: 'Awards', 
        href: '/projects/awards', 
        description: 'Recognition and industry achievements',
        featured: true,
        icon: <Star className="w-4 h-4" />,
        color: 'tangram-orange'
      }
    ]
  },
  {
    label: 'Insights',
    href: '/blog',
    color: 'olive-green',
    children: [
      { 
        label: 'Design Stories', 
        href: '/blog', 
        description: 'Latest design trends and creative insights',
        icon: <Palette className="w-4 h-4" />
      },
      { 
        label: 'Publications', 
        href: '/publications', 
        description: 'Research papers and thought leadership',
        icon: <Compass className="w-4 h-4" />,
        color: 'slate-blue'
      },
      { 
        label: 'Events', 
        href: '/events', 
        description: 'Industry events and design workshops',
        featured: true,
        icon: <Sparkles className="w-4 h-4" />,
        color: 'tangram-orange'
      }
    ]
  }
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([])
  const [time, setTime] = useState(0)
  const [headerTransform, setHeaderTransform] = useState({ rotateX: 0, rotateY: 0 })
  const headerRef = useRef<HTMLElement>(null)
  
  // Revolutionary spring-based animations
  const springScale = useSpringPhysics(activeDropdown ? 1.02 : 1, 0.15, 0.7)
  const springRotation = useSpringPhysics(mousePos.x * 0.01, 0.1, 0.9)
  
  // Advanced time-based animations
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now() * 0.001), 16)
    return () => clearInterval(interval)
  }, [])
  
  // Revolutionary 3D mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        setHeaderTransform({
          rotateX: y * 2,
          rotateY: x * 2
        })
        
        // Advanced particle generation
        if (Math.random() > 0.92 && Math.sqrt(e.movementX ** 2 + e.movementY ** 2) > 4) {
          const newParticle = { id: Math.random(), x: e.clientX, y: e.clientY }
          setParticles(prev => [...prev.slice(-15), newParticle])
        }
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Advanced scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Revolutionary dropdown control
  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label)
  }
  
  const handleDropdownLeave = () => {
    setTimeout(() => setActiveDropdown(null), 100)
  }
  
  const removeParticle = useCallback((id: number) => {
    setParticles(prev => prev.filter(p => p.id !== id))
  }, [])

  return (
    <>
      {/* Revolutionary atmospheric system */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Ultra-dynamic background */}
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, 
                hsla(${210 + Math.sin(time) * 20}, 70%, 60%, ${0.08 + Math.sin(time * 0.5) * 0.04}) 0%, 
                hsla(${80 + Math.cos(time * 0.7) * 15}, 60%, 50%, ${0.06 + Math.cos(time * 0.3) * 0.03}) 35%, 
                hsla(${15 + Math.sin(time * 1.2) * 10}, 80%, 60%, ${0.04 + Math.sin(time * 0.8) * 0.02}) 70%, 
                transparent 100%
              ),
              conic-gradient(from ${time * 20}deg at ${mousePos.x}px ${mousePos.y}px, 
                transparent 0deg, 
                hsla(210, 60%, 60%, 0.05) 90deg, 
                transparent 180deg, 
                hsla(80, 50%, 50%, 0.03) 270deg, 
                transparent 360deg
              )
            `,
            filter: `blur(${Math.sin(time * 0.5) * 0.5 + 1}px)`,
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Revolutionary mesh gradient */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              linear-gradient(${45 + Math.sin(time * 0.2) * 10}deg, 
                hsla(210, 70%, 60%, 0.1) 0%, 
                transparent 50%, 
                hsla(80, 60%, 50%, 0.1) 100%
              ),
              linear-gradient(${-45 + Math.cos(time * 0.3) * 15}deg, 
                transparent 0%, 
                hsla(15, 80%, 60%, 0.08) 50%, 
                transparent 100%
              )
            `,
            transform: `rotate(${Math.sin(time * 0.1) * 2}deg) scale(${1 + Math.cos(time * 0.15) * 0.05})`
          }}
        />
      </div>

      {/* Revolutionary particle system */}
      {particles.map(particle => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          id={particle.id}
          onComplete={() => removeParticle(particle.id)}
        />
      ))}

      {/* Ultra-sophisticated header */}
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-3xl border-b border-slate-400/20 shadow-2xl' 
            : 'bg-white/90 backdrop-blur-2xl'
        }`}
        style={{
          height: `${scrolled ? 64 : 80}px`,
          transform: `
            perspective(1000px) 
            rotateX(${headerTransform.rotateX * 0.5}deg) 
            rotateY(${headerTransform.rotateY * 0.5}deg)
            scale(${springScale})
          `,
          transformOrigin: 'center center',
          willChange: 'transform'
        }}
      >
        {/* Revolutionary grid system */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(90deg, hsla(210, 60%, 60%, 0.6) 1px, transparent 1px),
                linear-gradient(hsla(210, 60%, 60%, 0.6) 1px, transparent 1px)
              `,
              backgroundSize: `${120 + Math.sin(time * 0.2) * 10}px ${120 + Math.cos(time * 0.3) * 10}px`,
              transform: `
                translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px) 
                rotate(${springRotation}deg)
              `
            }}
          />
          
          {/* Advanced accent lines */}
          <div 
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
            style={{ left: `${25 + Math.sin(time * 0.1) * 2}%` }}
          />
          <div 
            className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent"
            style={{ left: `${75 + Math.cos(time * 0.12) * 2}%` }}
          />
        </div>

        {/* Revolutionary container */}
        <div className="relative h-full px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-full">
            
            {/* Ultra-sophisticated logo */}
            <Link href="/" className="flex items-center space-x-5 group relative">
              <div className="relative">
                <div 
                  className="relative w-14 h-14 rounded-3xl overflow-hidden transition-all duration-700"
                  style={{
                    borderRadius: `${20 + Math.sin(time * 0.5) * 8}px`,
                    transform: `rotate(${Math.sin(time * 0.3) * 5}deg) scale(${1 + Math.cos(time * 0.4) * 0.05})`
                  }}
                >
                  <div 
                    className="absolute inset-0 flex items-center justify-center shadow-2xl transition-all duration-700"
                    style={{
                      background: `
                        linear-gradient(${45 + Math.sin(time * 0.2) * 30}deg, 
                          hsl(210, 70%, 60%) 0%, 
                          hsl(210, 60%, 55%) 50%, 
                          hsl(80, 60%, 50%) 100%
                        )
                      `,
                      boxShadow: `
                        0 ${10 + Math.sin(time * 0.6) * 5}px ${25 + Math.cos(time * 0.4) * 10}px hsla(210, 70%, 60%, 0.3),
                        inset 0 1px 2px hsla(0, 0%, 100%, 0.4)
                      `
                    }}
                  >
                    <span 
                      className="text-white font-extralight text-2xl transition-all duration-500"
                      style={{
                        transform: `scale(${1 + Math.sin(time * 0.8) * 0.1}) rotate(${Math.cos(time * 0.6) * 3}deg)`,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      T
                    </span>
                  </div>
                  
                  {/* Revolutionary overlay */}
                  <div 
                    className="absolute inset-0 transition-all duration-700 group-hover:opacity-100 opacity-0"
                    style={{
                      background: `
                        radial-gradient(circle at 50% 50%, 
                          hsla(80, 60%, 50%, 0.3) 0%, 
                          transparent 70%
                        )
                      `
                    }}
                  />
                  
                  {/* Dynamic accents */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full transition-all duration-700 group-hover:opacity-100 opacity-0"
                      style={{
                        width: `${4 + i * 2}px`,
                        height: `${4 + i * 2}px`,
                        background: ['#FF6F3C', '#8A9A5B', '#4A6FA5'][i],
                        top: `${-2 - i * 2}px`,
                        right: `${-2 - i * 2}px`,
                        animationDelay: `${i * 100}ms`,
                        transform: `scale(${1 + Math.sin(time * (1 + i * 0.3)) * 0.2}) rotate(${time * (20 + i * 10)}deg)`
                      }}
                    />
                  ))}
                </div>
                
                {/* Revolutionary orbital system */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none"
                    style={{
                      inset: `${-12 - i * 12}px`,
                      borderRadius: `${32 + i * 8}px`,
                      borderColor: ['hsla(210, 60%, 60%, 0.2)', 'hsla(80, 50%, 50%, 0.15)', 'hsla(15, 80%, 60%, 0.1)'][i],
                      transform: `
                        scale(${1 + i * 0.05}) 
                        rotate(${(time * (10 + i * 5)) + i * 120}deg)
                      `,
                      transitionDelay: `${i * 200}ms`
                    }}
                  />
                ))}
              </div>
              
              <div className="hidden sm:block relative">
                <div 
                  className="text-3xl font-extralight text-gray-800 transition-all duration-500 leading-none"
                  style={{
                    transform: `translateY(${Math.sin(time * 0.4) * 0.5}px)`,
                    color: `hsl(${210 + Math.sin(time * 0.2) * 5}, 20%, 20%)`
                  }}
                >
                  Tangram Design
                </div>
                <div 
                  className="text-sm text-gray-500 font-light tracking-widest uppercase leading-none mt-1 transition-all duration-500"
                  style={{
                    transform: `translateY(${Math.cos(time * 0.5) * 0.3}px)`,
                    letterSpacing: `${0.3 + Math.sin(time * 0.3) * 0.1}em`
                  }}
                >
                  Innovative Solutions
                </div>
                
                {/* Revolutionary accent line */}
                <div 
                  className="absolute -bottom-1 left-0 h-px transition-all duration-700"
                  style={{
                    width: '200%',
                    background: `
                      linear-gradient(90deg, 
                        hsl(210, 70%, 60%) 0%, 
                        hsl(80, 60%, 50%) 50%, 
                        hsl(15, 80%, 60%) 100%
                      )
                    `,
                    transform: `scaleX(${activeDropdown ? 1 : 0}) translateX(${Math.sin(time * 0.2) * 5}px)`,
                    transformOrigin: 'left',
                    filter: `blur(${Math.sin(time * 0.8) * 0.2}px)`
                  }}
                />
              </div>
            </Link>

            {/* Revolutionary navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-8 py-4 text-sm font-light rounded-3xl transition-all duration-500 relative overflow-hidden group ${
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-blue-600 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    style={{
                      background: pathname === item.href || pathname.startsWith(item.href + '/')
                        ? `linear-gradient(135deg, ${item.color}15 0%, ${item.color}10 100%)`
                        : 'transparent',
                      transform: `
                        translateY(${Math.sin(time * 0.3 + index) * 0.5}px)
                        scale(${activeDropdown === item.label ? 1.05 : 1})
                      `
                    }}
                  >
                    {/* Revolutionary index */}
                    <div 
                      className="relative transition-all duration-500"
                      style={{
                        transform: `rotate(${Math.sin(time * 0.4 + index) * 2}deg)`
                      }}
                    >
                      <span className="text-xs font-mono text-gray-400 group-hover:text-blue-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div 
                        className="absolute -inset-1 border rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ borderColor: item.color }}
                      />
                    </div>
                    
                    <span className="tracking-wide relative z-10">{item.label}</span>
                    
                    {item.children && (
                      <div 
                        className="w-4 h-4 transition-all duration-500"
                        style={{
                          transform: `rotate(${activeDropdown === item.label ? 180 : 0}deg) scale(${activeDropdown === item.label ? 1.2 : 1})`,
                          color: activeDropdown === item.label ? item.color : 'currentColor'
                        }}
                      >
                        ▼
                      </div>
                    )}
                    
                    {item.featured && (
                      <div 
                        className="relative"
                        style={{
                          transform: `scale(${1 + Math.sin(time * 2) * 0.2})`
                        }}
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <div 
                          className="absolute inset-0 w-2 h-2 bg-orange-500 rounded-full animate-ping"
                          style={{ animationDuration: '2s' }}
                        />
                      </div>
                    )}
                    
                    {/* Revolutionary underline */}
                    <div 
                      className="absolute bottom-2 left-8 right-8 h-1 rounded-full transition-all duration-700"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                        transform: `scaleX(${activeDropdown === item.label ? 1 : 0})`,
                        transformOrigin: 'left'
                      }}
                    />
                    
                    {/* Revolutionary shimmer */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none"
                      style={{
                        transform: `translateX(${activeDropdown === item.label ? '100%' : '-100%'})`
                      }}
                    />
                  </Link>
                  
                  {/* Ultra-sophisticated mega menu */}
                  {item.children && activeDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 mt-6 bg-white/90 backdrop-blur-3xl border border-gray-200 shadow-2xl rounded-3xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-500"
                      style={{
                        width: item.children.length > 4 ? '800px' : '600px',
                        transform: `
                          perspective(1000px) 
                          rotateX(${Math.sin(time * 0.2) * 2}deg)
                          scale(${1 + Math.sin(time * 0.5) * 0.02})
                        `,
                        boxShadow: `
                          0 25px 50px -12px ${item.color}40,
                          0 0 0 1px ${item.color}20
                        `
                      }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Revolutionary header */}
                      <div 
                        className="relative px-10 py-8 border-b border-gray-200"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              ${item.color}08 0%, 
                              white 50%, 
                              ${item.color}06 100%
                            )
                          `
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 
                              className="text-2xl font-extralight text-gray-800 leading-tight"
                              style={{
                                transform: `translateY(${Math.sin(time * 0.3) * 0.5}px)`
                              }}
                            >
                              {item.label}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2 font-light tracking-widest uppercase">
                              Explore our {item.label.toLowerCase()} ecosystem
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div 
                              className="text-xs font-mono text-gray-500 px-3 py-1 rounded-full"
                              style={{ background: `${item.color}15` }}
                            >
                              {String(item.children.length).padStart(2, '0')} solutions
                            </div>
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ 
                                background: item.color,
                                transform: `scale(${1 + Math.sin(time * 1.5) * 0.2})`
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Revolutionary accent lines */}
                        <div 
                          className="absolute bottom-0 left-10 right-10 h-px"
                          style={{
                            background: `linear-gradient(90deg, transparent 0%, ${item.color}60 50%, transparent 100%)`,
                            transform: `scaleX(${Math.sin(time * 0.8) * 0.2 + 0.8})`
                          }}
                        />
                      </div>
                      
                      {/* Revolutionary menu items */}
                      <div className={`p-8 ${item.children.length > 4 ? 'grid grid-cols-2 gap-6' : 'space-y-3'}`}>
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-start space-x-5 p-5 rounded-2xl transition-all duration-500 relative overflow-hidden hover:shadow-lg"
                            style={{
                              background: pathname === child.href
                                ? `linear-gradient(135deg, ${item.color}15 0%, ${item.color}08 100%)`
                                : 'transparent',
                              transform: `
                                translateY(${Math.sin(time * 0.4 + childIndex * 0.2) * 1}px)
                                scale(${pathname === child.href ? 1.02 : 1})
                              `
                            }}
                          >
                            {/* Revolutionary numbering */}
                            <div 
                              className="relative mt-1"
                              style={{
                                transform: `rotate(${Math.sin(time * 0.6 + childIndex) * 3}deg)`
                              }}
                            >
                              <span className="text-xs font-mono text-gray-400 group-hover:text-blue-500">
                                {String(childIndex + 1).padStart(2, '0')}
                              </span>
                              <div 
                                className="absolute -inset-2 border rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                                style={{ 
                                  borderColor: item.color,
                                  transform: `scale(${1 + Math.sin(time * 1.2 + childIndex) * 0.1})`
                                }}
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-4">
                                <span 
                                  className="text-base font-light leading-tight"
                                  style={{
                                    color: pathname === child.href ? item.color : 'inherit'
                                  }}
                                >
                                  {child.label}
                                </span>
                                {child.featured && (
                                  <span 
                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-light tracking-wider shadow-sm"
                                    style={{
                                      background: `${item.color}15`,
                                      color: item.color,
                                      transform: `scale(${1 + Math.sin(time * 1.8 + childIndex) * 0.1})`
                                    }}
                                  >
                                    Featured
                                  </span>
                                )}
                              </div>
                              {child.description && (
                                <p className="text-sm text-gray-500 mt-2 font-light leading-relaxed">
                                  {child.description}
                                </p>
                              )}
                            </div>
                            
                            <div 
                              className="w-5 h-5 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                              style={{
                                color: item.color,
                                transform: `translateX(${pathname === child.href ? '8px' : '0px'})`
                              }}
                            >
                              →
                            </div>
                            
                            {/* Revolutionary hover effects */}
                            <div 
                              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                              style={{
                                background: `
                                  radial-gradient(circle at 50% 50%, 
                                    ${item.color}10 0%, 
                                    transparent 70%
                                  )
                                `,
                                transform: `scale(${1 + Math.sin(time * 0.8 + childIndex) * 0.05})`
                              }}
                            />
                          </Link>
                        ))}
                      </div>
                      
                      {/* Revolutionary footer */}
                      <div 
                        className="relative px-10 py-6 border-t border-gray-200"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              ${item.color}06 0%, 
                              white 50%, 
                              ${item.color}08 100%
                            )
                          `
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="text-base font-light flex items-center space-x-4 group tracking-wide transition-all duration-500"
                            style={{ color: item.color }}
                          >
                            <span>Explore all {item.label.toLowerCase()}</span>
                            <div 
                              className="transition-all duration-500"
                              style={{
                                transform: `translateX(${Math.sin(time * 0.5) * 2}px)`
                              }}
                            >
                              →
                            </div>
                          </Link>
                          <div className="flex items-center space-x-2">
                            {['#4A6FA5', '#8A9A5B', '#FF6F3C'].map((color, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: color,
                                  opacity: 0.6,
                                  transform: `scale(${1 + Math.sin(time * 2 + i * 0.8) * 0.3})`,
                                  animationDelay: `${i * 150}ms`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Revolutionary right actions */}
            <div className="flex items-center space-x-8">
              {/* Revolutionary search */}
              <div className="hidden md:block relative">
                <div 
                  className="relative transition-all duration-700"
                  style={{
                    transform: `scale(${isSearchFocused ? 1.1 : 1}) rotate(${Math.sin(time * 0.2) * 0.5}deg)`
                  }}
                >
                  <div 
                    className="w-5 h-5 absolute left-6 top-1/2 transform -translate-y-1/2 transition-all duration-500"
                    style={{
                      color: isSearchFocused ? '#4A6FA5' : '#6B7280',
                      transform: `translateY(-50%) scale(${isSearchFocused ? 1.25 : 1}) rotate(${isSearchFocused ? 12 : 0}deg)`
                    }}
                  >
                    🔍
                  </div>
                  <input
                    type="text"
                    placeholder="Search innovations..."
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="pl-16 pr-20 py-4 text-sm rounded-3xl border font-light tracking-wide focus:outline-none transition-all duration-700"
                    style={{
                      width: isSearchFocused ? '28rem' : '20rem',
                      borderColor: isSearchFocused ? '#4A6FA5' : '#E5E7EB',
                      background: isSearchFocused 
                        ? 'white' 
                        : 'linear-gradient(135deg, #4A6FA508 0%, white 50%, #8A9A5B08 100%)',
                      boxShadow: isSearchFocused 
                        ? '0 25px 50px -12px rgba(74, 111, 165, 0.25)' 
                        : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      transform: `translateY(${Math.sin(time * 0.3) * 0.5}px)`
                    }}
                  />
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-xs text-gray-400 font-mono">
                    <span>⌘</span>
                    <span>K</span>
                  </div>
                  
                  {/* Revolutionary accent */}
                  <div 
                    className="absolute bottom-0 left-6 right-6 h-1 rounded-full transition-all duration-700"
                    style={{
                      background: 'linear-gradient(90deg, #4A6FA5, #8A9A5B, #FF6F3C)',
                      transform: `scaleX(${isSearchFocused ? 1 : 0})`,
                      transformOrigin: 'left',
                      filter: `blur(${Math.sin(time * 0.8) * 0.2}px)`
                    }}
                  />
                </div>
              </div>

              {/* Revolutionary contact button */}
              <Link
                href="/contact"
                className="hidden lg:flex items-center space-x-4 text-white px-10 py-4 text-sm font-light rounded-3xl transition-all duration-700 hover:scale-110 relative overflow-hidden group tracking-wide"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      hsl(210, 70%, 60%) 0%, 
                      hsl(210, 60%, 55%) 50%, 
                      hsl(80, 60%, 50%) 100%
                    )
                  `,
                  boxShadow: `
                    0 ${10 + Math.sin(time * 0.8) * 2}px ${25 + Math.cos(time * 0.6) * 5}px hsla(210, 70%, 60%, 0.3),
                    inset 0 1px 2px hsla(0, 0%, 100%, 0.3)
                  `,
                  transform: `
                    translateY(${Math.sin(time * 0.4) * 1}px) 
                    scale(${1 + Math.sin(time * 0.6) * 0.02})
                  `
                }}
              >
                <div 
                  className="w-5 h-5 transition-all duration-500"
                  style={{
                    transform: `rotate(${Math.sin(time * 0.8) * 10}deg) scale(${1 + Math.cos(time * 1.2) * 0.1})`
                  }}
                >
                  📞
                </div>
                <span className="relative z-10">Contact</span>
                
                {/* Revolutionary effects */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-1000 pointer-events-none"
                  style={{
                    transform: `translateX(${Math.sin(time * 0.5) * 200 - 100}%)`
                  }}
                />
                
                {/* Floating accent */}
                <div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full transition-all duration-500"
                  style={{
                    transform: `scale(${1 + Math.sin(time * 2) * 0.3}) rotate(${time * 30}deg)`,
                    opacity: 0.8 + Math.sin(time * 1.5) * 0.2
                  }}
                />
              </Link>

              {/* Revolutionary mobile button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-4 text-gray-700 hover:text-blue-600 transition-all duration-500 rounded-3xl relative group overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #4A6FA508 0%, white 50%, #8A9A5B08 100%)`,
                  transform: `scale(${1 + Math.sin(time * 0.6) * 0.05}) rotate(${Math.cos(time * 0.4) * 1}deg)`
                }}
              >
                <div 
                  className="w-7 h-7 transition-all duration-500"
                  style={{
                    transform: `scale(${isMenuOpen ? 1.2 : 1}) rotate(${isMenuOpen ? 180 : 0}deg)`
                  }}
                >
                  {isMenuOpen ? '✕' : '☰'}
                </div>
                
                {/* Revolutionary accents */}
                <div 
                  className="absolute inset-0 border rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ 
                    borderColor: '#4A6FA5',
                    transform: `scale(${1 + Math.sin(time * 1.2) * 0.1})`
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 