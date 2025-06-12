'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronRight, Calendar, MapPin, Users, Filter, Search, ExternalLink, Clock, CheckCircle } from 'lucide-react'
import CTAButton from '../../components/ui/CTAButton'

const events = [
  {
    id: '1',
    title: 'NeoCon 2024: The Future of Workplace Design',
    type: 'Trade Show',
    category: 'Industry Event',
    date: '2024-06-10',
    time: '9:00 AM - 6:00 PM',
    location: 'Chicago, IL',
    venue: 'TheMART',
    description: 'Join us at the premier commercial design expo showcasing the latest in workplace innovation, sustainable materials, and technology integration.',
    featured: true,
    registrationRequired: true,
    capacity: 500,
    registered: 342,
    price: 'Free with registration',
    status: 'upcoming',
    tags: ['Trade Show', 'Workplace', 'Innovation']
  },
  {
    id: '2',
    title: 'Tangram Design Happy Hour',
    type: 'Social Event',
    category: 'Networking',
    date: '2024-07-15',
    time: '5:30 PM - 8:00 PM',
    location: 'Los Angeles, CA',
    venue: 'Rooftop Bar at InterContinental',
    description: 'Join our team and local design professionals for drinks, networking, and conversations about the future of human-centered design.',
    featured: false,
    registrationRequired: true,
    capacity: 75,
    registered: 45,
    price: 'Complimentary',
    status: 'upcoming',
    tags: ['Networking', 'Social', 'Los Angeles']
  },
  {
    id: '3',
    title: 'Healthcare Design Conference & Expo',
    type: 'Conference',
    category: 'Industry Event',
    date: '2024-08-22',
    time: '8:00 AM - 5:00 PM',
    location: 'Phoenix, AZ',
    venue: 'Phoenix Convention Center',
    description: 'Leading healthcare design conference featuring evidence-based design principles, patient experience innovations, and regulatory updates.',
    featured: true,
    registrationRequired: true,
    capacity: 1200,
    registered: 856,
    price: '$495',
    status: 'upcoming',
    tags: ['Healthcare', 'Conference', 'Evidence-Based Design']
  },
  {
    id: '4',
    title: 'Austin Design Week: Tech & Space Panel',
    type: 'Panel Discussion',
    category: 'Educational',
    date: '2024-09-12',
    time: '6:00 PM - 8:30 PM',
    location: 'Austin, TX',
    venue: 'Austin Convention Center',
    description: 'Panel discussion on the intersection of technology and space design, featuring leaders from major tech companies and design firms.',
    featured: false,
    registrationRequired: true,
    capacity: 200,
    registered: 178,
    price: '$25',
    status: 'upcoming',
    tags: ['Technology', 'Panel', 'Austin']
  },
  {
    id: '5',
    title: 'Workplace Strategy Workshop',
    type: 'Workshop',
    category: 'Educational',
    date: '2024-04-18',
    time: '1:00 PM - 5:00 PM',
    location: 'San Francisco, CA',
    venue: 'Tangram Design Studio',
    description: 'Hands-on workshop covering strategic workplace planning, space utilization analysis, and change management best practices.',
    featured: false,
    registrationRequired: true,
    capacity: 25,
    registered: 25,
    price: '$150',
    status: 'past',
    tags: ['Workshop', 'Workplace', 'Strategy']
  }
]

const eventTypes = ['All', 'Trade Show', 'Conference', 'Social Event', 'Workshop', 'Panel Discussion']

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'All' || event.type === selectedType
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesType && matchesSearch && event.status === 'upcoming'
  })

  const upcomingEvents = events.filter(event => event.status === 'upcoming')
  const featuredEvents = events.filter(event => event.featured && event.status === 'upcoming')

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Compact & Visual-Forward */}
      <section className="relative min-h-[70vh] bg-white overflow-hidden pt-32">
        
        <div className="relative z-10">
          <div className="w-full px-8 sm:px-16 lg:px-24 py-16">
            <div className="max-w-8xl mx-auto">
              
              {/* Split layout - Image & Content */}
              <div className="grid lg:grid-cols-2 gap-0 min-h-[50vh] items-center">
                
                {/* Left Column - Content */}
                <div className="flex flex-col justify-center space-y-8 lg:pr-16">
                  
                  {/* Breadcrumb navigation */}
                  <div className="flex items-center space-x-4 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-px bg-gray-900"></div>
                      <span>Industry</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Events</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Design</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Leadership</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Events
                        </span>
                      </h1>
                      
                      {/* Measurement lines */}
                      <div className="absolute -left-6 top-0 w-px h-16 bg-gradient-to-b from-gray-900 to-gray-400 opacity-50"></div>
                      <div className="absolute -left-8 top-0 w-4 h-px bg-gray-900 opacity-50"></div>
                      <div className="absolute -left-8 top-16 w-4 h-px bg-orange-500 opacity-70" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                    
                    {/* Subtext */}
                    <div className="max-w-lg relative pl-2">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-900 via-orange-500 to-transparent opacity-40" style={{ background: `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, transparent)` }}></div>
                      <div className="space-y-4">
                        <p className="text-xl md:text-2xl leading-[1.4] font-light text-gray-700 tracking-[-0.01em]">
                          Industry Connections
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          Join our design experts at premier industry events, workshops, and thought leadership sessions across the country.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: `${upcomingEvents.length}+`, label: "Upcoming Events" },
                      { value: "12+", label: "Events Per Year" },
                      { value: "500+", label: "Total Attendees" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-2xl md:text-3xl font-extralight text-gray-900">
                          {stat.value.includes('+') ? (
                            <>
                              {stat.value.replace('+', '')}<span className="text-xl" style={{ color: '#f9a31c' }}>+</span>
                            </>
                          ) : (
                            <>
                              {stat.value}<span className="text-xl" style={{ color: '#f9a31c' }}></span>
                            </>
                          )}
                        </div>
                        <div className="text-xs uppercase tracking-[0.15em] text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <CTAButton href="/contact" variant="primary" size="lg">
                      <span>Request Private Workshop</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/about" variant="outline" size="lg">
                      <span>About Our Team</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Right Column - Hero Image */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900">
                    
                    {/* Architectural overlay pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-px h-40 bg-white"></div>
                      <div className="absolute bottom-1/3 right-1/3 w-px h-32 bg-white"></div>
                      <div className="absolute top-1/2 right-1/4 w-20 h-px bg-white"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-16 h-px bg-white"></div>
                    </div>
                    
                    {/* Image overlay content */}
                    <div className="absolute inset-0 flex items-end p-12">
                      <div className="space-y-4">
                        <div className="text-white/90 text-sm uppercase tracking-[0.2em] font-medium">
                          Industry Events
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Design Leadership<br />& Innovation
                        </div>
                        <div className="w-12 h-px bg-white/60"></div>
                      </div>
                    </div>
                    
                    {/* Orange accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural elements */}
        <div className="absolute top-8 right-8 space-y-2 opacity-40">
          <div className="w-8 h-px bg-gray-900"></div>
          <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
          <div className="w-6 h-px bg-gray-900"></div>
        </div>
        
        {/* Vertical text */}
        <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 transform -rotate-90 origin-center whitespace-nowrap">
            Design Leadership
          </div>
        </div>
      </section>

      {/* Featured Events Section - Exact Homepage Architecture */}
      {featuredEvents.length > 0 && (
        <section className="relative py-32 lg:py-40 bg-gray-50 overflow-hidden">
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
                  <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">Featured Events</span>
                  <div className="w-16 h-px bg-gray-900"></div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-8 leading-tight">
                  Don't miss these
                  <span className="block text-gray-600">signature experiences</span>
                </h2>
                
                <div className="w-32 h-px bg-gray-900 mx-auto mb-8"></div>
                
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                  Join us at premier industry events where design leaders gather to shape the future 
                  of human-centered environments.
                </p>
              </div>

              {/* Featured events grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEvents.map((event) => (
                  <div key={event.id} className="group bg-white border border-gray-100 p-10 hover:shadow-xl transition-all duration-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10">
                      
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 mb-8 group-hover:scale-105 transition-transform duration-500">
                        <div className="text-center">
                          <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                          <div className="text-lg font-medium text-gray-900">{event.type}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                            {event.category}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-light text-gray-900 leading-tight">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4" />
                            <span>{event.venue}, {event.location}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-4 h-4" />
                            <span>{event.registered}/{event.capacity} registered</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="pt-4">
                          <CTAButton href="#" variant="primary" size="md">
                            <span>Register Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </CTAButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Events Section - Homepage Style */}
      <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-px bg-gray-900"></div>
                <span className="text-xs font-mono tracking-wider text-gray-500 uppercase">All Events</span>
                <div className="w-16 h-px bg-gray-900"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Complete event calendar
                <span className="block text-gray-600">for design professionals</span>
              </h2>
            </div>

            {/* Filters */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                        selectedType === type
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-6 py-4 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 w-80"
                  />
                </div>
              </div>
            </div>

            {/* Events grid */}
            <div className="space-y-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="group bg-white border border-gray-100 p-10 hover:shadow-xl transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-6">
                          {event.featured && (
                            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                              Featured
                            </span>
                          )}
                          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                            {event.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <CTAButton href="#" variant="primary" size="md">
                          <span>Register</span>
                          <ArrowRight className="w-4 h-4" />
                        </CTAButton>
                        
                        <CTAButton href="#" variant="outline" size="md">
                          <span>Learn More</span>
                          <ExternalLink className="w-4 h-4" />
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No events found matching your criteria.</p>
              </div>
            )}

            {/* Private Workshop CTA */}
            <div className="text-center mt-20">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
                Need a custom workshop for your team?
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CTAButton href="/contact" variant="primary" size="lg">
                  <span>Request Private Workshop</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/about" variant="outline" size="lg">
                  <span>Meet Our Experts</span>
                  <ArrowRight className="w-5 h-5" />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 