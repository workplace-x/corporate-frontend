'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, MapPin, Square, Users, Award, Share2, Download, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useProject } from '@/hooks/useProjects'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showVideoModal, setShowVideoModal] = useState(false)

  // Mock project data for now since useProject needs the API integration
  const project = {
    id: projectId,
    title: 'Modern Corporate Headquarters',
    client: 'Tech Innovators Inc.',
    location: 'Los Angeles, CA',
    category: 'workplace',
    industry: 'Technology',
    completion_date: new Date('2024-01-15'),
    project_size: 25000,
    featured_image: '/images/project-1.jpg',
    gallery: [
      '/images/project-1-1.jpg',
      '/images/project-1-2.jpg',
      '/images/project-1-3.jpg',
      '/images/project-1-4.jpg',
      '/images/project-1-5.jpg'
    ],
    description: 'A cutting-edge workspace design featuring flexible collaboration areas and state-of-the-art technology integration that transforms how teams work together.',
    services_provided: ['Contract Furniture', 'Technology Integration', 'Architectural Walls', 'Move Management'],
    featured: true,
    detailed_description: `This transformative 25,000 square foot headquarters represents the future of workplace design. By seamlessly integrating cutting-edge technology with human-centered design principles, we created spaces that adapt to the evolving needs of a dynamic tech company.

    The design philosophy centered on fostering collaboration while providing quiet zones for focused work. Every element, from the custom furniture selections to the innovative wall systems, was chosen to support the company's culture of innovation and transparency.`,
    challenge: `The client needed a space that could accommodate rapid growth while maintaining their startup culture. The existing building had limitations in terms of natural light and open collaboration spaces, requiring creative solutions to maximize the potential of the space.`,
    solution: `We implemented a flexible zoning strategy with movable architectural walls that allow spaces to be reconfigured based on team needs. Strategic use of glass partitions maintains visual connectivity while providing acoustic privacy. The technology integration includes state-of-the-art AV systems that support hybrid work models.`,
    results: [
      'Increased employee satisfaction by 40%',
      'Improved collaboration metrics by 35%',
      'Reduced space utilization costs by 20%',
      'LEED Gold certification achieved'
    ],
    awards: [
      'Interior Design Best of Year Award 2024',
      'Commercial Design Excellence Award',
      'Sustainable Design Innovation Award'
    ],
    team: [
      { name: 'Sarah Johnson', role: 'Principal Designer' },
      { name: 'Michael Chen', role: 'Project Manager' },
      { name: 'Emily Rodriguez', role: 'Technology Specialist' }
    ],
    specs: {
      duration: '8 months',
      budget: '$2.8M',
      sustainability: 'LEED Gold',
      occupancy: '150 employees'
    }
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <Link href="/projects" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"
        >
          {/* Image placeholder */}
        </motion.div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40">
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-32">
            <div className="container-custom pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-4xl text-white"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  {project.featured && (
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                      Featured Project
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {project.title}
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 max-w-3xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="w-5 h-5" />
                    <span>{project.project_size.toLocaleString()} sq ft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(project.completion_date).getFullYear()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{project.client}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-20 right-8 flex space-x-3">
          <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-4">
                {project.detailed_description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 font-light leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Challenge & Solution */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.section>

            {/* Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8">Project Gallery</h3>
              
              {/* Main Image */}
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                
                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {activeImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-4">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                      index === activeImageIndex 
                        ? 'ring-2 ring-blue-600 scale-105' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  </button>
                ))}
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8">Results & Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600">{result}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Awards */}
            {project.awards.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-8">Awards & Recognition</h3>
                <div className="space-y-4">
                  {project.awards.map((award, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <span className="text-gray-800 font-medium">{award}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Specs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Duration</p>
                  <p className="text-lg font-semibold">{project.specs.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Investment</p>
                  <p className="text-lg font-semibold">{project.specs.budget}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Sustainability</p>
                  <p className="text-lg font-semibold">{project.specs.sustainability}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Occupancy</p>
                  <p className="text-lg font-semibold">{project.specs.occupancy}</p>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Services Provided</h3>
              <div className="space-y-3">
                {project.services_provided.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Team */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Project Team</h3>
              <div className="space-y-4">
                {project.team.map((member, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Space?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how we can create an extraordinary workspace for your organization.
              </p>
              <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className="bg-gray-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Related Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more transformative spaces from our portfolio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Related Project {item}</h3>
                  <p className="text-gray-600 mb-4">Brief description of this related project...</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Location</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 