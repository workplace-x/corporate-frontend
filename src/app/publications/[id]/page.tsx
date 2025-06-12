import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag, Download, ExternalLink } from 'lucide-react'
import CTAButton from '@/components/ui/CTAButton'

// Mock data for publications
const publications = [
  {
    id: 'workplace-wellness-study-2024',
    title: 'The Impact of Biophilic Design on Employee Wellbeing',
    subtitle: 'A Comprehensive Study of Workplace Wellness Interventions',
    author: 'Dr. Sarah Chen, FAIA',
    date: '2024-02-15',
    category: 'Research Paper',
    tags: ['Workplace', 'Wellness', 'Biophilic Design', 'Employee Productivity'],
    excerpt: 'This comprehensive study examines how biophilic design elements in workplace environments contribute to improved employee satisfaction, reduced stress levels, and increased productivity.',
    content: 'Full publication content would be rendered here with detailed research findings, methodology, data analysis, and conclusions...',
    downloadUrl: '/downloads/workplace-wellness-study-2024.pdf',
    externalUrl: 'https://example.com/external-study'
  },
  {
    id: 'sustainable-furniture-report-2023',
    title: 'Sustainable Materials in Contract Furniture',
    subtitle: 'Environmental Impact and Performance Analysis',
    author: 'Michael Rodriguez, LEED AP',
    date: '2023-11-20',
    category: 'White Paper',
    tags: ['Sustainability', 'Materials', 'Environmental Impact', 'Contract Furniture'],
    excerpt: 'An in-depth analysis of sustainable material options in contract furniture manufacturing and their long-term environmental and performance benefits.',
    content: 'Full publication content would be rendered here with detailed analysis, case studies, and recommendations...',
    downloadUrl: '/downloads/sustainable-furniture-report-2023.pdf'
  }
]

function getPublicationById(id: string) {
  return publications.find(pub => pub.id === id)
}

interface PublicationViewerProps {
  params: {
    id: string
  }
}

export default function PublicationViewer({ params }: PublicationViewerProps) {
  const publication = getPublicationById(params.id)
  
  if (!publication) {
    return (
      <div className="min-h-screen bg-white">
        <section className="relative min-h-[70vh] bg-white overflow-hidden pt-32">
          <div className="relative z-10 flex items-center justify-center min-h-[70vh]">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900">Publication Not Found</h1>
              <p className="text-xl text-gray-600">The publication you're looking for doesn't exist.</p>
              <CTAButton href="/publications" variant="primary" size="lg">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Publications</span>
              </CTAButton>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Compact & Visual-Forward */}
      <section className="relative min-h-[70vh] bg-white overflow-hidden pt-32">
        
        <div className="relative z-10">
          <div className="w-full px-8 sm:px-16 lg:px-24 py-16">
            <div className="max-w-8xl mx-auto">
              
              {/* Navigation */}
              <div className="mb-8">
                <Link 
                  href="/publications" 
                  className="inline-flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Publications</span>
                </Link>
              </div>
              
              {/* Split layout - Image & Content */}
              <div className="grid lg:grid-cols-2 gap-0 min-h-[50vh] items-center">
                
                {/* Left Column - Content */}
                <div className="flex flex-col justify-center space-y-8 lg:pr-16">
                  
                  {/* Breadcrumb navigation */}
                  <div className="flex items-center space-x-4 text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-px bg-gray-900"></div>
                      <span>{publication.category}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>Publication</span>
                    </div>
                  </div>
                  
                  {/* Typography */}
                  <div className="space-y-8">
                    <div className="relative">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight leading-[0.9] tracking-[-0.03em] text-gray-900 mb-6">
                        {publication.title}
                      </h1>
                      
                      {publication.subtitle && (
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-6">
                          {publication.subtitle}
                        </h2>
                      )}
                      
                      {/* Measurement lines */}
                      <div className="absolute -left-6 top-0 w-px h-16 bg-gradient-to-b from-gray-900 to-gray-400 opacity-50"></div>
                      <div className="absolute -left-8 top-0 w-4 h-px bg-gray-900 opacity-50"></div>
                      <div className="absolute -left-8 top-16 w-4 h-px bg-orange-500 opacity-70" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                    
                    {/* Publication meta */}
                    <div className="max-w-lg relative pl-2">
                      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-900 via-orange-500 to-transparent opacity-40" style={{ background: `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, transparent)` }}></div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{publication.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(publication.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                          {publication.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {publication.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center text-sm bg-green-100 text-green-600 px-4 py-2 rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-2" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    {publication.downloadUrl && (
                      <CTAButton href={publication.downloadUrl} variant="primary" size="lg">
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </CTAButton>
                    )}
                    
                    {publication.externalUrl && (
                      <CTAButton href={publication.externalUrl} variant="outline" size="lg">
                        <ExternalLink className="w-4 h-4" />
                        <span>View External Source</span>
                      </CTAButton>
                    )}
                  </div>
                </div>
                
                {/* Right Column - Publication Visual */}
                <div className="relative bg-gray-100 overflow-hidden min-h-[500px] lg:min-h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-900">
                    
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
                          {publication.category}
                        </div>
                        <div className="text-white text-xl md:text-2xl font-light leading-tight">
                          Research<br />Publication
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
            Research Publication
          </div>
        </div>
      </section>

      {/* Publication Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="bg-white p-12 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-8">Publication Content</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                {publication.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">More Publications</h3>
            <p className="text-xl text-gray-600">Explore additional research and insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.filter(p => p.id !== publication.id).map((pub) => (
              <Link
                key={pub.id}
                href={`/publications/${pub.id}`}
                className="group bg-white border border-gray-100 p-8 hover:shadow-xl transition-all duration-700"
              >
                <div className="space-y-6">
                  <div className="bg-indigo-100 p-6 text-center">
                    <div className="text-4xl mb-3">📄</div>
                    <div className="text-sm font-medium text-indigo-600">{pub.category}</div>
                  </div>
                  
                  <h4 className="text-xl font-medium text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                    {pub.title}
                  </h4>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{pub.author}</span>
                    <span>{new Date(pub.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="text-indigo-600 font-medium">
                    Read Publication →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <CTAButton href="/publications" variant="outline" size="lg">
              <span>View All Publications</span>
              <div className="w-2 h-2 bg-current rounded-full"></div>
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
} 