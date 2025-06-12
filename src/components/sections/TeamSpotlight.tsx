'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TeamMember } from '@/types/corporate'
import Link from 'next/link'

interface TeamSpotlightProps {
  teamMembers?: TeamMember[]
  isLoading: boolean
}

export default function TeamSpotlight({ teamMembers, isLoading }: TeamSpotlightProps) {
  if (isLoading) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-pulse">Loading team...</div>
          </div>
        </div>
      </div>
    )
  }

  // Show featured team members if available
  const featuredMembers = teamMembers?.filter(member => member.featured)?.slice(0, 4) || []

  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate designers and innovators creating extraordinary spaces that inspire and transform
          </p>
        </motion.div>

        {featuredMembers.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {featuredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={`/team/${member.id}` as any}>
                    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                      <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                            {member.years_experience} years
                          </span>
                        </div>
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                        <p className="text-blue-600 font-medium text-sm mb-3">{member.title}</p>
                        <p className="text-gray-600 text-sm line-clamp-2">{member.bio}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 mb-8"
            >
              Our talented team of {teamMembers?.length || '75+'} professionals is ready to transform your space.
            </motion.div>
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/team" className="btn btn-primary inline-flex items-center space-x-2">
            <span>Meet Our Full Team</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 