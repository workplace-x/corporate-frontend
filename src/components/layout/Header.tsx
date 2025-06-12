'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import CTAButton from '../ui/CTAButton'

interface NavigationItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navigation: NavigationItem[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'History', href: '/about/history' },
      { label: 'Visit Us', href: '/visit' },
      { label: 'Careers', href: '/careers' }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Contract Furniture', href: '/services/contract-furniture' },
      { label: 'Architectural Walls', href: '/services/architectural-walls' },
      { label: 'Technology Integration', href: '/services/technology' },
      { label: 'Studio Other', href: '/services/custom-furniture' },
      { label: 'Flooring & Specialty Interiors', href: '/services/flooring' },
      { label: 'Move Management', href: '/services/move-management' },
      { label: 'Healthcare Design', href: '/services/healthcare' },
      { label: 'Workplace Strategy', href: '/services/workplace' }
    ]
  },
  {
    label: 'Markets',
    href: '/markets',
    children: [
      { label: 'Workplace', href: '/markets/workplace' },
      { label: 'Healthcare', href: '/markets/healthcare' },
      { label: 'Education', href: '/markets/education' }
    ]
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Insights',
    href: '/blog',
    children: [
      { label: 'Design Stories', href: '/blog' },
      { label: 'Publications', href: '/publications' },
      { label: 'Events', href: '/events' }
    ]
  }
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }))
    }
    
    window.addEventListener('scroll', handleScroll)
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timeInterval)
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-sm shadow-sm border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Subtle architectural line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-900/20 to-transparent transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24">
        <div className="max-w-8xl mx-auto">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-20' : 'h-24 lg:h-28'
          }`}>
            
            {/* Refined Logo */}
            <Link href="/" className="group relative flex items-center space-x-4">
              <div className="relative">
                <div className={`bg-gray-900 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 ${
                  scrolled ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                  <div className={`bg-white transform transition-all duration-300 group-hover:rotate-45 ${
                    scrolled ? 'w-4 h-4' : 'w-5 h-5'
                  }`} />
                  {/* Subtle corner details */}
                  <div className="absolute top-1 right-1 w-1 h-1 border-r border-t border-white/30"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 border-l border-b border-white/30"></div>
                </div>
              </div>
              
              <div className="space-y-0.5">
                <div className={`font-light text-gray-900 tracking-wide transition-all duration-300 ${
                  scrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  Tangram Interiors
                </div>
                {!scrolled && (
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium opacity-60">
                    Est. 1964
                  </div>
                )}
              </div>
            </Link>
            
            {/* Sophisticated Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-4 py-3 text-sm font-medium tracking-wide transition-all duration-200 relative ${
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      {/* Clean active indicator */}
                      {(pathname === item.href || pathname.startsWith(item.href + '/')) && (
                        <div className="absolute -bottom-1 left-0 w-full h-px bg-gray-900"></div>
                      )}
                    </span>
                    {item.children && (
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Link>
                  
                  {/* Premium Architectural Dropdown with Hover Bridge */}
                  {item.children && activeDropdown === item.label && (
                    <>
                      {/* Invisible hover bridge */}
                      <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                      
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200/60 shadow-2xl z-50 overflow-hidden">
                        {/* Architectural top line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-900/15 to-transparent"></div>
                        
                        {/* Elegant connecting line */}
                        <div className="absolute -top-px left-8 w-16 h-px bg-white"></div>
                        
                        {/* Subtle grid background */}
                        <div className="absolute inset-0 opacity-[0.02]" style={{
                          backgroundImage: `linear-gradient(90deg, transparent 19px, #1f2937 20px, #1f2937 21px, transparent 22px),
                                           linear-gradient(#1f2937 19px, transparent 20px, transparent 21px, #1f2937 22px)`,
                          backgroundSize: '40px 40px'
                        }}></div>
                        
                        <div className="relative z-10 py-6">
                          {/* Section header */}
                          <div className="px-6 pb-4 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-px bg-gray-900"></div>
                              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-600 font-medium">
                                {item.label}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Menu items */}
                          <div className="pt-2">
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group flex items-center px-6 py-4 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 transition-all duration-200 relative"
                                onClick={closeMenu}
                              >
                                {/* Architectural measurement line */}
                                <div className="absolute left-3 top-1/2 w-0 h-px bg-gray-900 group-hover:w-3 transition-all duration-300 transform -translate-y-1/2"></div>
                                
                                <div className="flex items-center justify-between w-full ml-6">
                                  <span className="font-medium tracking-wide">{child.label}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-40 transform translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                                </div>
                                
                                {/* Subtle hover line */}
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                              </Link>
                            ))}
                          </div>
                          
                          {/* Bottom architectural detail */}
                          <div className="px-6 pt-4 border-t border-gray-100 mt-2">
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <span className="uppercase tracking-[0.2em]">Explore {item.label}</span>
                              <div className="flex items-center space-x-1">
                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom architectural line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-900/15 to-transparent"></div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Clean right section */}
            <div className="flex items-center space-x-6">
              {/* Subtle time display */}
              {!scrolled && (
                <div className="hidden lg:block text-right">
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Pacific</div>
                  <div className="text-sm font-mono text-gray-600">{currentTime}</div>
                </div>
              )}
              
              {/* Clean CTA */}
              <CTAButton href="/contact" variant="outline" size={scrolled ? "sm" : "md"}>
                <span>Start Project</span>
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </CTAButton>
              
              {/* Clean mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Clean Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <nav className="py-4">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-6 py-4 text-base font-medium transition-colors duration-200 ${
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'text-gray-900 bg-gray-50' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.children && (
                      <div className="pl-8 bg-gray-50/50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-3 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="px-6 pt-6 border-t border-gray-100 mt-4">
                  <CTAButton 
                    href="/contact" 
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    <span>Start Your Project</span>
                    <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                  </CTAButton>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 