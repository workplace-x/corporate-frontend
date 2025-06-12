import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Mail, Linkedin, Phone, Award, Calendar, Users } from 'lucide-react'
import { getTeamMemberBySlug, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import CTAButton from '@/components/ui/CTAButton'

// Generate static params for all team members
export async function generateStaticParams() {
  // For now return empty array - team members will be generated on demand
  return []
}

export default async function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = await getTeamMemberBySlug(params.slug)
  
  if (!member) {
    notFound()
  }

  const currentYear = new Date().getFullYear()
  const yearsOfExperience = member.yearHired ? currentYear - member.yearHired : null

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Sophisticated Homepage Architecture */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Architectural background - exactly like homepage */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-1/4 left-1/3 w-px h-80 bg-gray-900"></div>
          <div className="absolute bottom-1/4 right-1/3 w-px h-80 bg-gray-900"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full px-8 sm:px-16 lg:px-24 py-24">
            <div className="max-w-8xl mx-auto">
              
              {/* Navigation */}
              <div className="mb-16">
                <Link 
                  href="/team" 
                  className="inline-flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Team</span>
                </Link>
              </div>
              
              {/* Exact homepage grid system */}
              <div className="grid lg:grid-cols-12 gap-12 items-end min-h-[70vh]">
                
                {/* Left Column - Typography Excellence */}
                <div className="lg:col-span-8 lg:col-start-1 space-y-16">
                  
                  {/* Brand elements - exact homepage style */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-px bg-gray-900"></div>
                        <span>Team Member</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                        <span>{member.department || 'Professional'}</span>
                      </div>
                    </div>
                    
                    {/* Vertical text - exact homepage positioning */}
                    <div className="hidden lg:flex items-center justify-center fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="text-xs uppercase tracking-[0.25em] text-gray-500 transform -rotate-90 origin-center whitespace-nowrap">
                        Design Professional
                      </div>
                    </div>
                  </div>
                  
                  {/* Typography - EXACT homepage sizing but responsive for names */}
                  <div className="space-y-12">
                    <div className="relative">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-8">
                        {member.name}
                      </h1>
                      
                      <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-8">
                        {member.title}
                      </p>
                      
                      {/* Leadership badges */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {member.boardOfDirectors && (
                          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                            Board of Directors
                          </span>
                        )}
                        {member.executiveTeam && (
                          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            Executive Team
                          </span>
                        )}
                        {member.seniorLeadership && (
                          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                            Senior Leadership
                          </span>
                        )}
                        {member.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                            Featured Team Member
                          </span>
                        )}
                      </div>
                      
                      {/* Exact homepage measurement lines */}
                      <div className="absolute -left-6 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-50"></div>
                      <div className="absolute -left-8 top-0 w-4 h-px bg-gray-900 opacity-50"></div>
                      <div className="absolute -left-8 top-24 w-4 h-px bg-orange-500 opacity-70" style={{ backgroundColor: '#f9a31c' }}></div>
                      <div className="absolute -left-12 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                        01
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Information - homepage styling */}
                  <div className="grid md:grid-cols-2 gap-8 pt-8">
                    <div className="space-y-4">
                      <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">Contact Information</h3>
                      <div className="space-y-3">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          <span>{member.email}</span>
                        </a>
                        
                        {member.phone && (
                          <a 
                            href={`tel:${member.phone}`}
                            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Phone className="w-5 h-5" />
                            <span>{member.phone}</span>
                          </a>
                        )}
                        
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn Profile</span>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">Professional Details</h3>
                      <div className="space-y-3">
                        {member.location && (
                          <div className="flex items-center space-x-3 text-gray-600">
                            <MapPin className="w-5 h-5" />
                            <span>{member.location}</span>
                          </div>
                        )}
                        
                        {yearsOfExperience && (
                          <div className="flex items-center space-x-3 text-gray-600">
                            <Calendar className="w-5 h-5" />
                            <span>{yearsOfExperience} years with Tangram</span>
                          </div>
                        )}
                        
                        {member.department && (
                          <div className="flex items-center space-x-3 text-gray-600">
                            <Award className="w-5 h-5" />
                            <span>{member.department}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* CTAs - exact homepage style */}
                  <div className="flex flex-col sm:flex-row gap-8 pt-8">
                    <CTAButton href={`mailto:${member.email}`} variant="primary" size="lg">
                      <span>Contact {member.name.split(' ')[0]}</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                    
                    <CTAButton href="/contact" variant="outline" size="lg">
                      <span>Start Your Project</span>
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </CTAButton>
                  </div>
                </div>
                
                {/* Right Column - Profile Image */}
                <div className="lg:col-span-4 lg:col-start-9">
                  <div className="relative group">
                    {member.headshot ? (
                      <div className="aspect-[4/5] rounded-lg overflow-hidden">
                        <Image
                          src={urlFor(member.headshot).width(600).height(750).url()}
                          alt={member.headshot.alt || member.name}
                          width={600}
                          height={750}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="text-6xl font-light mb-4">
                            {member.name.split(' ').map((n: string) => n[0]).join('')}
                          </div>
                          <div className="text-lg font-light">Team Member</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Scroll indicator - exact homepage style */}
                    <div className="absolute bottom-8 right-8 text-right space-y-4 opacity-60">
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll to Learn More</div>
                      <div className="flex justify-end">
                        <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent" style={{ background: `linear-gradient(to bottom, #f9a31c, transparent)` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots - exact homepage style */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-3 z-20">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
          <div className="w-1.5 h-6 bg-gray-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
      </section>
    </div>
  )
} 