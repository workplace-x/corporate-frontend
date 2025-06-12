import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get('featured')
  const category = searchParams.get('category')
  const limit = parseInt(searchParams.get('limit') || '12')
  
  // Mock projects data
  const allProjects = [
    {
      id: '1',
      title: 'Modern Corporate Headquarters',
      client: 'Tech Innovators Inc.',
      location: 'Los Angeles, CA',
      category: 'workplace',
      industry: 'Technology',
      completion_date: new Date('2024-01-15'),
      project_size: 25000,
      featured_image: '/images/project-1.jpg',
      gallery: [],
      description: 'A cutting-edge workspace design featuring flexible collaboration areas and state-of-the-art technology integration.',
      services_provided: ['Contract Furniture', 'Technology Integration', 'Architectural Walls'],
      featured: true
    },
    {
      id: '2',
      title: 'Healing Environment Design',
      client: 'Regional Medical Center',
      location: 'San Francisco, CA',
      category: 'healthcare',
      industry: 'Healthcare',
      completion_date: new Date('2024-02-20'),
      project_size: 15000,
      featured_image: '/images/project-2.jpg',
      gallery: [],
      description: 'Patient-centered design promoting wellness and recovery with calming aesthetics.',
      services_provided: ['Architectural Walls', 'Custom Design'],
      featured: true
    },
    {
      id: '3',
      title: 'Innovation Learning Center',
      client: 'University of California',
      location: 'Fresno, CA',
      category: 'education',
      industry: 'Education',
      completion_date: new Date('2024-03-10'),
      project_size: 18000,
      featured_image: '/images/project-3.jpg',
      gallery: [],
      description: 'Modern learning environment designed to inspire creativity and collaboration.',
      services_provided: ['Contract Furniture', 'Technology Integration'],
      featured: true
    },
    {
      id: '4',
      title: 'Executive Conference Center',
      client: 'Global Finance Corp',
      location: 'Dallas, TX',
      category: 'workplace',
      industry: 'Finance',
      completion_date: new Date('2024-03-25'),
      project_size: 12000,
      featured_image: '/images/project-4.jpg',
      gallery: [],
      description: 'Sophisticated meeting spaces designed for high-level executive discussions.',
      services_provided: ['Contract Furniture', 'Technology Integration'],
      featured: false
    }
  ]

  // Filter projects based on query parameters
  let filteredProjects = allProjects

  if (featured === 'true') {
    filteredProjects = filteredProjects.filter(p => p.featured)
  }

  if (category) {
    filteredProjects = filteredProjects.filter(p => p.category === category)
  }

  // Apply limit
  filteredProjects = filteredProjects.slice(0, limit)

  return NextResponse.json({
    success: true,
    data: filteredProjects,
    pagination: {
      page: 1,
      limit,
      total: filteredProjects.length,
      pages: 1
    }
  })
} 