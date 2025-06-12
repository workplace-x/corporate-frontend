import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, MapPin, Mail, Linkedin } from 'lucide-react'
import { getTeamMembers, urlFor } from '@/lib/sanity'
import TeamClient from './TeamClient'
import CTAButton from '../../components/ui/CTAButton'

// Type for team member data from Sanity
export interface SanityTeamMember {
  _id: string
  name: string
  slug: { current: string }
  title: string
  department?: string
  location?: string
  yearHired?: number
  bio?: any[] // Rich text array
  specialties?: string[]
  education?: string
  experience?: string
  email: string
  phone?: string
  linkedin?: string
  featured?: boolean
  seniorLeadership?: boolean
  executiveTeam?: boolean
  boardOfDirectors?: boolean
  headshot?: any
}

export default async function TeamPage() {
  const allTeamMembers = await getTeamMembers() as SanityTeamMember[]
  
  // Filter out archived members and group by leadership roles
  const activeMembers = allTeamMembers.filter(member => member)
  const leadershipMembers = activeMembers.filter(member => 
    member.featured || member.seniorLeadership || member.executiveTeam || member.boardOfDirectors
  )
  const otherMembers = activeMembers.filter(member => 
    !member.featured && !member.seniorLeadership && !member.executiveTeam && !member.boardOfDirectors
  )

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
                      <span>Team</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Our People</span>
                    </div>
                  </div>
                  
                  {/* Typography - Refined sizing */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                        <span className="block transform hover:translate-x-1 transition-transform duration-500">Meet Our</span>
                        <span className="block relative transform hover:translate-x-2 transition-transform duration-500 delay-75">
                          <span className="relative z-20">Design</span>
                        </span>
                        <span className="block text-gray-600 italic transform translate-x-8 hover:translate-x-10 transition-transform duration-500 delay-150">
                          Team
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
                          Human-Centered Excellence
                        </p>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          We're here to help you turn ideas into impact through thoughtful design. Every expert, every perspective, every solution matters.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-8 pt-4">
                    {[
                      { value: `${activeMembers.length}+`, label: "Team Members" },
                      { value: "60+", label: "Years Experience" },
                      { value: "8", label: "Office Locations" }
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
                    <CTAButton href="/careers" variant="primary" size="lg">
                      <span>Join Our Team</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/contact" variant="outline" size="lg">
                      <span>Work With Us</span>
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
                          Human-Centered Excellence
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Expert Professionals<br />Creating Impact Together
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
            Human-Centered Excellence
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {leadershipMembers.length > 0 && (
        <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-1/3 left-1/4 w-px h-60 bg-gray-900"></div>
            <div className="absolute bottom-1/3 right-1/4 w-px h-60 bg-gray-900"></div>
          </div>

          <div className="relative z-10 px-8 sm:px-16 lg:px-24">
            <div className="max-w-8xl mx-auto">
              
              {/* Section Header */}
              <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
                <div className="lg:col-span-8 lg:col-start-1">
                  <div className="relative">
                    <div className="flex items-center space-x-6 mb-12">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Leadership</div>
                      <div className="w-16 h-px bg-gray-900"></div>
                      <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                      <div className="text-xs text-gray-400 tracking-wide">02 / 04</div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                      <span className="block transform hover:translate-x-1 transition-transform duration-300">Visionary leaders who</span>
                      <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">
                        guide our
                        <span className="italic text-gray-600 ml-3">design</span>
                      </span>
                      <span className="block text-gray-600 font-light transform translate-x-8 hover:translate-x-10 transition-transform duration-300 delay-200">
                        mission
                      </span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                      Leadership that combines decades of design expertise with a genuine passion for creating spaces where people thrive.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Leadership grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadershipMembers.map((member) => (
                  <Link 
                    key={member._id}
                    href={`/team/${member.slug.current}`}
                    className="group relative"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 relative overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      {member.headshot ? (
                        <Image
                          src={urlFor(member.headshot).width(400).height(300).url()}
                          alt={member.headshot.alt || member.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-light">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="text-sm uppercase tracking-[0.2em] font-medium mb-2">{member.title}</div>
                        <div className="text-xs text-white/70 mb-3">{member.department || 'Leadership Team'}</div>
                        <div className="text-lg font-light">{member.name}</div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-light text-gray-900">{member.name}</h3>
                      {member.location && (
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Team Members with Search/Filter */}
      <TeamClient 
        allMembers={activeMembers}
        leadershipMembers={leadershipMembers}
        otherMembers={otherMembers}
      />

      {/* Call to Action */}
      <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/20 to-white overflow-hidden">
        <div className="relative z-10 px-8 sm:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto text-center">
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center space-x-6 justify-center mb-12">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Join Our Mission</div>
                <div className="w-16 h-px bg-gray-900"></div>
                <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="text-xs text-gray-400 tracking-wide">04 / 04</div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900">
                Ready to work with us?
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Join our mission to create inspiring spaces through human-centered design, or partner with us to transform your organization's environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <CTAButton href="/careers" variant="primary" size="lg">
                  <span>Join Our Team</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
                
                <CTAButton href="/contact" variant="outline" size="lg">
                  <span>Work With Us</span>
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 