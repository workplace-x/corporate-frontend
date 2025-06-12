'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Award, Mail, Linkedin, Phone, Download, Share2, ExternalLink, Star, Users, Building } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function TeamMemberDetailPage() {
  const params = useParams()
  const memberId = params.id as string
  const [activeTab, setActiveTab] = useState('overview')

  // Mock team member data
  const member = {
    id: memberId,
    name: 'Sarah Johnson',
    title: 'Principal Designer & Senior Associate',
    location: 'Los Angeles, CA',
    email: 'sarah.johnson@tangram.com',
    phone: '+1 (555) 123-4567',
    linkedin_url: 'https://linkedin.com/in/sarahjohnson',
    years_experience: 12,
    bio: 'Sarah brings over 12 years of innovative design expertise to transformative workplace environments. Her human-centered approach to space planning has earned international recognition and numerous industry awards.',
    detailed_bio: `Sarah Johnson is a visionary designer whose work sits at the intersection of technology, sustainability, and human experience. With over a decade of experience in commercial design, she has led teams in creating award-winning spaces that redefine how organizations think about their physical environments.

    Her design philosophy centers on the belief that thoughtful spaces can fundamentally transform how people work, collaborate, and thrive. This approach has guided her through projects ranging from cutting-edge tech headquarters to innovative healthcare facilities.

    Prior to joining Tangram, Sarah worked at renowned firms in San Francisco and New York, where she honed her expertise in large-scale commercial projects. She holds a Master of Architecture from UC Berkeley and is a licensed architect in California.`,
    specialties: [
      'Workplace Strategy',
      'Technology Integration',
      'Sustainable Design',
      'Space Planning',
      'Project Management'
    ],
    certifications: [
      'LEED AP BD+C',
      'NCIDQ Certified',
      'California Licensed Architect'
    ],
    education: [
      {
        degree: 'Master of Architecture',
        school: 'UC Berkeley',
        year: '2012'
      },
      {
        degree: 'Bachelor of Environmental Design',
        school: 'Cal Poly San Luis Obispo',
        year: '2010'
      }
    ],
    awards: [
      'Interior Design Best of Year Award 2024',
      'IIDA Design Excellence Award 2023',
      'AIA California Honor Award 2022',
      'Green Building Award 2021'
    ],
    featured_projects: [
      {
        id: '1',
        title: 'Tech Innovators Headquarters',
        client: 'Tech Innovators Inc.',
        size: '25,000 sq ft',
        year: '2024',
        role: 'Principal Designer',
        description: 'Led the design of a cutting-edge headquarters featuring flexible collaboration spaces and state-of-the-art technology integration.'
      },
      {
        id: '2',
        title: 'Healthcare Innovation Center',
        client: 'Regional Medical Group',
        size: '15,000 sq ft',
        year: '2023',
        role: 'Design Lead',
        description: 'Created a healing environment that combines advanced medical technology with biophilic design principles.'
      },
      {
        id: '3',
        title: 'Sustainable Office Complex',
        client: 'Green Energy Corp',
        size: '40,000 sq ft',
        year: '2023',
        role: 'Sustainability Lead',
        description: 'Achieved LEED Platinum certification through innovative sustainable design strategies and material selection.'
      }
    ],
    projects_completed: 28,
    clients_served: 15,
    awards_received: 8,
    team_managed: 12,
    publications: [
      {
        title: 'The Future of Workplace Design',
        publication: 'Architectural Review',
        year: '2024'
      },
      {
        title: 'Biophilic Design in Healthcare Environments',
        publication: 'Healthcare Design Magazine',
        year: '2023'
      }
    ],
    speaking_engagements: [
      {
        event: 'NeoCon Design Conference',
        topic: 'Technology Integration in Modern Workspaces',
        year: '2024'
      },
      {
        event: 'IIDA Leadership Breakfast',
        topic: 'Sustainable Design Practices',
        year: '2023'
      }
    ]
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'recognition', label: 'Recognition' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <Link href="/team" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Team</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image & Quick Actions */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="sticky top-8"
              >
                {/* Profile Image */}
                <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Contact Sarah</span>
                  </button>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>

                  <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Bio</span>
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{member.projects_completed}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{member.years_experience}</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{member.awards_received}</div>
                      <div className="text-sm text-gray-600">Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{member.clients_served}</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">{member.name}</h1>
                  <p className="text-xl text-blue-600 font-medium mb-4">{member.title}</p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{member.years_experience} years experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5" />
                      <span>{member.awards_received} awards</span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">{member.bio}</p>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                  <nav className="flex space-x-8">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    {/* Detailed Bio */}
                    <section>
                      <h3 className="text-2xl font-bold mb-4">About Sarah</h3>
                      <div className="space-y-4">
                        {member.detailed_bio.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-lg text-gray-600 font-light leading-relaxed">{paragraph.trim()}</p>
                        ))}
                      </div>
                    </section>

                    {/* Education */}
                    <section>
                      <h3 className="text-2xl font-bold mb-6">Education</h3>
                      <div className="space-y-4">
                        {member.education.map((edu, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                              <p className="text-gray-600">{edu.school} • {edu.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Specialties */}
                    <section>
                      <h3 className="text-2xl font-bold mb-6">Core Specialties</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {member.specialties.map((specialty, index) => (
                          <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900">{specialty}</h4>
                          </div>
                        ))}
                      </div>
                    </section>
                  </motion.div>
                )}

                {activeTab === 'projects' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold">Featured Projects</h3>
                    <div className="space-y-8">
                      {member.featured_projects.map((project, index) => (
                        <div key={project.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-1">
                              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg"></div>
                            </div>
                            <div className="md:col-span-2">
                              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                              <p className="text-blue-600 font-medium mb-3">{project.client}</p>
                              <p className="text-gray-600 mb-4">{project.description}</p>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                <span className="flex items-center space-x-1">
                                  <Building className="w-4 h-4" />
                                  <span>{project.size}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{project.year}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Users className="w-4 h-4" />
                                  <span>{project.role}</span>
                                </span>
                              </div>

                              <Link href={`/projects/${project.id}` as any} className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                                <span>View Project</span>
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'expertise' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    {/* Certifications */}
                    <section>
                      <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {member.certifications.map((cert, index) => (
                          <div key={index} className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-center space-x-3">
                            <Award className="w-6 h-6 text-green-600 flex-shrink-0" />
                            <span className="font-medium text-green-900">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Publications */}
                    <section>
                      <h3 className="text-2xl font-bold mb-6">Publications</h3>
                      <div className="space-y-4">
                        {member.publications.map((pub, index) => (
                          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">{pub.title}</h4>
                            <p className="text-gray-600">{pub.publication} • {pub.year}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Speaking Engagements */}
                    <section>
                      <h3 className="text-2xl font-bold mb-6">Speaking Engagements</h3>
                      <div className="space-y-4">
                        {member.speaking_engagements.map((event, index) => (
                          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">{event.topic}</h4>
                            <p className="text-gray-600">{event.event} • {event.year}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </motion.div>
                )}

                {activeTab === 'recognition' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold">Awards & Recognition</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {member.awards.map((award, index) => (
                        <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-yellow-400 p-2 rounded-full">
                              <Award className="w-6 h-6 text-yellow-900" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">{award}</h4>
                              <p className="text-gray-600 text-sm">Recognized for outstanding achievement in design excellence and innovation</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Connect with Sarah to discuss how we can transform your space with innovative design solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Our Process
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 