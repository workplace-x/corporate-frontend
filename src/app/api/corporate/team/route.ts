import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get('featured')
  const location = searchParams.get('location')
  const limit = parseInt(searchParams.get('limit') || '20')
  
  // Mock team data
  const allTeamMembers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Principal Designer',
      bio: 'Leading innovative workspace solutions with 15+ years of experience in commercial interior design.',
      avatar_url: '/images/team-sarah.jpg',
      location: 'Los Angeles, CA',
      specialties: ['Workplace Design', 'Technology Integration', 'Sustainable Design'],
      years_experience: 15,
      education: ['M.Arch from UCLA', 'B.A. Interior Design from Art Center'],
      certifications: ['LEED AP', 'NCIDQ', 'WELL AP'],
      email: 'sarah@tangraminteriors.com',
      featured: true,
      projects_completed: 120
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Senior Project Manager',
      bio: 'Expert in managing complex commercial projects from concept to completion.',
      avatar_url: '/images/team-michael.jpg',
      location: 'Los Angeles, CA',
      specialties: ['Project Management', 'Healthcare Design', 'Client Relations'],
      years_experience: 12,
      education: ['MBA from USC', 'B.S. Architecture from UC Berkeley'],
      certifications: ['PMP', 'LEED AP'],
      email: 'michael@tangraminteriors.com',
      featured: true,
      projects_completed: 85
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      title: 'Technology Integration Specialist',
      bio: 'Bridging the gap between design and technology in modern workspaces.',
      avatar_url: '/images/team-emily.jpg',
      location: 'Fresno, CA',
      specialties: ['AV Systems', 'Smart Building Technology', 'Workplace Innovation'],
      years_experience: 8,
      education: ['B.S. Electrical Engineering from Cal Poly'],
      certifications: ['CTS', 'AVIXA'],
      email: 'emily@tangraminteriors.com',
      featured: true,
      projects_completed: 65
    },
    {
      id: '4',
      name: 'David Kim',
      title: 'Healthcare Design Lead',
      bio: 'Specialized in creating healing environments that promote patient wellness.',
      avatar_url: '/images/team-david.jpg',
      location: 'Los Angeles, CA',
      specialties: ['Healthcare Design', 'Evidence-Based Design', 'Patient Experience'],
      years_experience: 10,
      education: ['M.S. Healthcare Design from Clemson'],
      certifications: ['EDAC', 'LEED AP'],
      email: 'david@tangraminteriors.com',
      featured: false,
      projects_completed: 45
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      title: 'Regional Director - Texas',
      bio: 'Leading our expansion into the Texas market with passion and expertise.',
      avatar_url: '/images/team-lisa.jpg',
      location: 'Dallas, TX',
      specialties: ['Business Development', 'Corporate Design', 'Market Expansion'],
      years_experience: 18,
      education: ['MBA from UT Austin', 'B.A. Interior Design from Texas State'],
      certifications: ['NCIDQ', 'IIDA'],
      email: 'lisa@tangraminteriors.com',
      featured: true,
      projects_completed: 150
    }
  ]

  // Filter team members based on query parameters
  let filteredMembers = allTeamMembers

  if (featured === 'true') {
    filteredMembers = filteredMembers.filter(m => m.featured)
  }

  if (location) {
    filteredMembers = filteredMembers.filter(m => 
      m.location.toLowerCase().includes(location.toLowerCase())
    )
  }

  // Apply limit
  filteredMembers = filteredMembers.slice(0, limit)

  return NextResponse.json({
    success: true,
    data: filteredMembers,
    pagination: {
      page: 1,
      limit,
      total: filteredMembers.length,
      pages: 1
    }
  })
} 