'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Instagram, 
  Twitter,
  ChevronUp,
  ExternalLink
} from 'lucide-react'
import CTAButton from '../ui/CTAButton'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'America/Los_Angeles',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Architectural background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-700/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-700/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/20 to-transparent"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24 py-20">
        <div className="max-w-8xl mx-auto">
        
          {/* Footer Header with CTA */}
          <div className="grid lg:grid-cols-12 gap-20 mb-20 pb-20 border-b border-gray-700/50">
            
            {/* Left Column - Brand & CTA */}
            <div className="lg:col-span-7 space-y-12">
              <div className="relative">
                {/* Architectural annotation */}
                <div className="absolute -left-8 top-0 w-px h-full bg-gradient-to-b from-gray-400 via-gray-600 to-transparent opacity-40"></div>
                <div className="absolute -left-12 top-0 w-6 h-px bg-gray-400 opacity-40"></div>
                <div className="absolute -left-16 top-4 text-xs text-gray-500 transform -rotate-90 origin-center">
                  Contact
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-[-0.02em] leading-[1.1]">
                    <span className="block">Ready to Transform</span>
                    <span className="block text-gray-400 italic">Your Space?</span>
                  </h2>
                  
                  <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                    Let's discuss how thoughtful design can enhance your organization's success. Our team is ready to listen, understand, and create.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <CTAButton href="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                      <span>Start a Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </CTAButton>
                    
                    <CTAButton href="/visit" variant="outline" size="lg" className="text-gray-300 border-gray-300 hover:bg-gray-300 hover:text-gray-900">
                      <span>Visit Our Showroom</span>
                      <ExternalLink className="w-4 h-4" />
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Info */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-12">
              
              {/* Company Logo & Info */}
              <div className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-white flex items-center justify-center relative group">
                    <div className="w-6 h-6 bg-gray-900 transform transition-transform duration-300 group-hover:rotate-45" />
                    {/* Corner details */}
                    <div className="absolute top-1 right-1 w-1 h-1 border-r border-t border-gray-900/30"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 border-l border-b border-gray-900/30"></div>
                  </div>
                  <div>
                    <span className="text-xl font-light text-white tracking-wide">Tangram Interiors</span>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Est. 1964</div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  Since 1964, we've been transforming spaces that inspire performance. 
                  As a premier Steelcase partner, we create environments where people thrive.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-200">
                    <Phone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <a href="tel:+1-555-TANGRAM" className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide">
                    (555) TANGRAM
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-200">
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <a href="mailto:hello@tangraminteriors.com" className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide">
                    hello@tangraminteriors.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-200">
                    <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-gray-300 font-medium tracking-wide">12 Locations Nationwide</span>
                </div>
                
                {/* Current Time Display */}
                <div className="pt-4 border-t border-gray-700/50">
                  <div className="flex items-center space-x-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Pacific Time
                    </div>
                    <div className="text-lg font-light text-gray-300 font-mono">
                      {currentTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
            
            {/* Services */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-2 h-6 bg-gray-600"></div>
                <h3 className="text-lg font-medium text-white tracking-wide">Services</h3>
              </div>
              <nav className="space-y-4">
                {[
                  { label: 'Contract Furniture', href: '/services/contract-furniture' },
                  { label: 'Architectural Walls', href: '/services/architectural-walls' },
                  { label: 'Workplace Strategy', href: '/services/workplace' },
                  { label: 'Technology Integration', href: '/services/technology' },
                  { label: 'Healthcare Design', href: '/services/healthcare' },
                  { label: 'Move Management', href: '/services/move-management' }
                ].map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-3 h-px bg-gray-600 mr-4 group-hover:bg-white group-hover:w-6 transition-all duration-200"></div>
                    <span className="font-medium tracking-wide">{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Company */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-2 h-6 bg-gray-600"></div>
                <h3 className="text-lg font-medium text-white tracking-wide">Company</h3>
              </div>
              <nav className="space-y-4">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Our Team', href: '/team' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Insights', href: '/blog' },
                  { label: 'Contact', href: '/contact' }
                ].map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-3 h-px bg-gray-600 mr-4 group-hover:bg-white group-hover:w-6 transition-all duration-200"></div>
                    <span className="font-medium tracking-wide">{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Social & Back to Top */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-2 h-6 bg-gray-600"></div>
                <h3 className="text-lg font-medium text-white tracking-wide">Connect</h3>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                  { icon: Twitter, label: 'Twitter', href: '#' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center mr-4 group-hover:border-white transition-colors duration-200">
                      <social.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium tracking-wide">{social.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Back to Top */}
              <button 
                onClick={scrollToTop}
                className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200 pt-8"
              >
                <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center mr-4 group-hover:border-white transition-colors duration-200">
                  <ChevronUp className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">Back to Top</span>
              </button>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-gray-700/50 pt-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Copyright & Legal */}
              <div className="space-y-2">
                <div className="text-sm text-gray-400 font-medium">
                  &copy; 2024 Tangram Interiors
                </div>
                <div className="flex items-center space-x-6 text-xs text-gray-500">
                  <Link href="/privacy" className="hover:text-gray-300 transition-colors tracking-wide">
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-gray-300 transition-colors tracking-wide">
                    Terms of Service
                  </Link>
                </div>
              </div>
              
              {/* Company Stats */}
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="text-center">
                  <div className="text-2xl font-light text-white">60+</div>
                  <div className="text-xs uppercase tracking-[0.1em]">Years</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white">1,800+</div>
                  <div className="text-xs uppercase tracking-[0.1em]">Projects</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl font-light text-white">96%</div>
                  <div className="text-xs uppercase tracking-[0.1em]">Satisfaction</div>
                </div>
              </div>
              
              {/* Architectural Elements */}
              <div className="flex justify-end items-center space-x-4">
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Since 1964
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Architectural bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
    </footer>
  )
} 