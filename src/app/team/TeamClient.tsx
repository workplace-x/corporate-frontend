'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Filter, Users, MapPin, Mail, Linkedin } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import { SanityTeamMember } from './page'

interface TeamClientProps {
  allMembers: SanityTeamMember[]
  leadershipMembers: SanityTeamMember[]
  otherMembers: SanityTeamMember[]
}

export default function TeamClient({ 
  allMembers, 
  leadershipMembers, 
  otherMembers 
}: TeamClientProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Get unique departments for filter options
  const departments = ['All', ...Array.from(new Set(
    allMembers
      .map(member => member.department)
      .filter((dept): dept is string => dept !== undefined && dept !== null)
  )).sort()]

  // Filter members based on search and department
  const filteredMembers = allMembers.filter(member => {
    const matchesDepartment = selectedDepartment === 'All' || member.department === selectedDepartment
    const matchesSearch = searchTerm === '' || 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialties?.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase())) ||
      member.department?.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesDepartment && matchesSearch
  })

  // Filter out leadership members from the results to avoid duplication
  const displayMembers = filteredMembers.filter(member => 
    !leadershipMembers.some(leader => leader._id === member._id)
  )

  return (
    <>
      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search team members, roles, expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-gray-500 focus:border-blue-gray-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="md:col-span-5">
              <div className="flex items-center space-x-3">
                <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-600 flex-shrink-0">Filter by:</span>
                <div className="flex flex-wrap gap-2">
                  {departments.map(dept => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedDepartment === dept
                          ? 'bg-blue-gray-600 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Showing {displayMembers.length} of {allMembers.length} team members
              {searchTerm || selectedDepartment !== 'All' ? ' (filtered)' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayMembers.map((member) => (
                <Link 
                  key={member._id}
                  href={`/team/${member.slug.current}`}
                  className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {member.headshot ? (
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(member.headshot).width(160).height(160).url()}
                          alt={member.headshot.alt || member.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-blue-gray-100 rounded-full flex items-center justify-center text-blue-gray-600 text-lg font-medium group-hover:bg-blue-gray-200 transition-colors">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-charcoal-900 group-hover:text-blue-gray-700 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-gray-600 text-sm">{member.title}</p>
                      {member.department && (
                        <p className="text-xs text-gray-500">{member.department}</p>
                      )}
                    </div>

                    {member.location && (
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{member.location}</span>
                      </div>
                    )}

                    {member.specialties && member.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.slice(0, 2).map((specialty, idx) => (
                          <span key={idx} className="text-xs text-blue-gray-600 bg-blue-gray-100 px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                        {member.specialties.length > 2 && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            +{member.specialties.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Contact info for easier access */}
                    <div className="flex items-center space-x-3 text-gray-400">
                      {member.email && (
                        <Mail className="w-4 h-4" />
                      )}
                      {member.linkedin && (
                        <Linkedin className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-xl font-medium text-gray-900 mb-4">No team members found</h3>
              <p className="text-gray-600 mb-8">
                {searchTerm || selectedDepartment !== 'All' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'Team member data is being updated. Check back soon!'
                }
              </p>
              {(searchTerm || selectedDepartment !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedDepartment('All')
                  }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
} 