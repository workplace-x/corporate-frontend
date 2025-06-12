'use client'

import React, { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin, Clock, Users, Heart, CheckCircle, Send } from 'lucide-react'
import CTAButton from '../../components/ui/CTAButton'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Exact Homepage Architecture */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Architectural background - exactly like homepage */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-1/4 left-1/3 w-px h-80 bg-gray-900"></div>
          <div className="absolute top-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
          <div className="absolute top-1/2 left-1/6 w-32 h-px bg-gray-900"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-px bg-gray-900"></div>
          <div className="absolute top-2/3 left-1/2 w-16 h-16 border border-gray-900 transform rotate-45"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.008]" style={{
          backgroundImage: `linear-gradient(90deg, transparent 39px, #1f2937 40px, #1f2937 41px, transparent 42px),
                           linear-gradient(#1f2937 39px, transparent 40px, transparent 41px, #1f2937 42px)`,
          backgroundSize: '80px 80px'
        }}></div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-gray-900 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-gray-900 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-32 w-1 h-16 bg-gray-900 opacity-10"></div>

        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="pt-32 lg:pt-40 pb-24">
              
              {/* Page Code - exactly like homepage */}
              <div className="mb-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-px bg-gray-900"></div>
                  <span className="text-xs font-mono tracking-wider text-gray-500">007_CONTACT</span>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-20 items-center">
                
                {/* Left content - exact homepage structure */}
                <div className="xl:col-span-7 space-y-12">
                  <div className="space-y-8">
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight">
                      How can we make
                      <span className="block">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                          it happen?
                        </span>
                      </span>
                    </h1>
                    
                    <div className="w-24 h-px bg-gray-900"></div>
                    
                    <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
                      Ready to transform your space? We're here to help bring your vision to life 
                      through thoughtful design and expert execution.
                    </p>
                  </div>

                  {/* Benefits highlight - homepage style */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Expert Team</div>
                        <div className="text-sm text-gray-600">50+ years experience</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Personalized Service</div>
                        <div className="text-sm text-gray-600">Tailored solutions</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons - exact homepage style */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <CTAButton href="#contact-form" variant="primary" size="lg">
                      <span>Start Your Project</span>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/projects" variant="outline" size="lg">
                      <span>View Our Work</span>
                      <ArrowRight className="w-5 h-5" />
                    </CTAButton>
                  </div>
                </div>

                {/* Right contact info - exact homepage structure */}
                <div className="xl:col-span-5">
                  <div className="relative">
                    
                    {/* Contact cards grid */}
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="flex items-center space-x-4 mb-4">
                            <Phone className="w-6 h-6 text-blue-600" />
                            <div className="font-medium text-gray-900">Call Us</div>
                          </div>
                          <div className="text-2xl font-light text-gray-900 mb-2">(323) 555-0123</div>
                          <div className="text-sm text-gray-600">Mon-Fri: 8AM-6PM PST</div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="flex items-center space-x-4 mb-4">
                            <Mail className="w-6 h-6 text-green-600" />
                            <div className="font-medium text-gray-900">Email</div>
                          </div>
                          <div className="text-2xl font-light text-gray-900 mb-2">hello@tangramdesign.com</div>
                          <div className="text-sm text-gray-600">Response within 4 hours</div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <div className="flex items-center space-x-4 mb-4">
                            <MapPin className="w-6 h-6 text-purple-600" />
                            <div className="font-medium text-gray-900">Visit Us</div>
                          </div>
                          <div className="text-lg font-light text-gray-900 mb-2">Los Angeles Studio</div>
                          <div className="text-sm text-gray-600">1234 Arts District Blvd</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 rounded-full opacity-30 blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-50 rounded-full opacity-40 blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Exact Homepage Architecture */}
      <section className="relative py-32 lg:py-40 bg-gray-50 overflow-hidden" id="contact-form">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #1f2937 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section header - exact homepage style */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-px bg-gray-900"></div>
                <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">Start Your Project</span>
                <div className="w-16 h-px bg-gray-900"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Tell us about your vision
                <span className="block text-gray-600">and we'll make it reality</span>
              </h2>
              
              <div className="w-32 h-px bg-gray-900 mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                Every great space starts with a conversation. Share your goals, challenges, and dreams 
                with us, and we'll create a tailored approach to bring your vision to life.
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-12 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-3">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-900 mb-3">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="workplace">Workplace Design</option>
                      <option value="healthcare">Healthcare Design</option>
                      <option value="education">Education Design</option>
                      <option value="technology">Technology Integration</option>
                      <option value="furniture">Contract Furniture</option>
                      <option value="walls">Architectural Walls</option>
                      <option value="flooring">Flooring & Surfaces</option>
                      <option value="move">Move Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-900 mb-3">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="near">Near term (3-6 months)</option>
                      <option value="planned">Planned (6-12 months)</option>
                      <option value="future">Future planning (12+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-3">
                    Project Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="50k">$50k - $100k</option>
                    <option value="100k">$100k - $250k</option>
                    <option value="250k">$250k - $500k</option>
                    <option value="500k">$500k - $1M</option>
                    <option value="1m">$1M+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div className="mb-10">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-3">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your project goals, space requirements, and any specific needs..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 