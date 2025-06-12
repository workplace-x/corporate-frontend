import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data for development
  const mockData = {
    success: true,
    data: {
      hero: {
        headline: "We Design Transformative Spaces that Seamlessly Integrate People, Technology, and Place",
        subheadline: "Creating a Unified Ecosystem Where Experiences Thrive",
        cta_text: "Explore Our Work",
        background_image: "/images/hero-workspace.jpg",
        metrics: {
          total_projects: 500,
          years_in_business: 15,
          square_feet_designed: 2500000,
          clients_served: 200,
          team_members: 75,
          locations: 5,
          awards_won: 25,
          sustainability_certifications: 10,
          current_month_projects: 12,
          current_year_revenue_growth: 15,
        }
      },
      featured_projects: [
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
        }
      ],
      featured_team: [
        {
          id: '1',
          name: 'Sarah Johnson',
          title: 'Principal Designer',
          bio: 'Leading innovative workspace solutions with 15+ years of experience.',
          avatar_url: '/images/team-sarah.jpg',
          location: 'Los Angeles, CA',
          specialties: ['Workplace Design', 'Technology Integration'],
          years_experience: 15,
          education: ['M.Arch from UCLA'],
          certifications: ['LEED AP', 'NCIDQ'],
          email: 'sarah@tangraminteriors.com',
          featured: true,
          projects_completed: 120
        }
      ],
      services: [
        {
          id: '1',
          name: 'Contract Furniture',
          category: 'furniture',
          description: 'Innovative workspace solutions with industry-leading manufacturers',
          detailed_description: 'We partner with top manufacturers to provide cutting-edge furniture solutions.',
          capabilities: ['Space Planning', 'Furniture Selection', 'Installation Management'],
          industries_served: ['Corporate', 'Healthcare', 'Education'],
          case_studies: ['1', '2'],
          typical_timeline: '6-12 weeks',
          icon: 'furniture',
          featured_image: '/images/service-furniture.jpg'
        }
      ],
      testimonials: [
        {
          id: '1',
          client_name: 'John Smith',
          client_title: 'CEO',
          company: 'Tech Innovators Inc.',
          industry: 'Technology',
          project_id: '1',
          testimonial: 'Tangram transformed our workspace into a dynamic environment that truly reflects our innovative culture.',
          rating: 5,
          date: new Date('2024-01-20'),
          featured: true,
          avatar_url: '/images/client-john.jpg'
        }
      ],
      recent_posts: [],
      locations: [
        {
          id: '1',
          name: 'Los Angeles Showroom',
          type: 'showroom',
          address: {
            street: '123 Design District Blvd',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90028',
            country: 'USA'
          },
          coordinates: { lat: 34.0522, lng: -118.2437 },
          contact: {
            phone: '(323) 555-0100',
            email: 'la@tangraminteriors.com',
            hours: 'Mon-Fri 9AM-6PM'
          },
          team_members: ['1'],
          specialties: ['Workplace Design', 'Technology'],
          featured_image: '/images/location-la.jpg',
          gallery: [],
          amenities: ['Showroom', 'Meeting Rooms', 'Parking']
        }
      ]
    }
  }

  return NextResponse.json(mockData)
} 