// Corporate frontend types that extend the existing backend API types

export interface ProjectSummary {
  id: string
  title: string
  client: string
  location: string
  category: 'workplace' | 'healthcare' | 'education' | 'other'
  industry: string
  completion_date: Date
  project_size: number // square feet
  featured_image: string
  gallery: string[]
  description: string
  services_provided: string[]
  featured: boolean
  awards?: string[]
  metrics?: {
    sustainability_rating?: string
    employee_satisfaction?: number
    space_utilization_improvement?: number
  }
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  avatar_url: string
  location: string
  specialties: string[]
  years_experience: number
  education: string[]
  certifications: string[]
  email: string
  phone?: string
  linkedin_url?: string
  featured: boolean
  projects_completed: number
  languages?: string[]
}

export interface ServiceOffering {
  id: string
  name: string
  category: 'furniture' | 'walls' | 'technology' | 'custom' | 'facility'
  description: string
  detailed_description: string
  capabilities: string[]
  industries_served: string[]
  case_studies: string[] // Project IDs
  typical_timeline: string
  icon: string
  featured_image: string
}

export interface ClientTestimonial {
  id: string
  client_name: string
  client_title: string
  company: string
  industry: string
  project_id?: string
  testimonial: string
  rating: number
  date: Date
  featured: boolean
  avatar_url?: string
  project_image?: string
}

export interface CompanyMetrics {
  total_projects: number
  years_in_business: number
  square_feet_designed: number
  clients_served: number
  team_members: number
  locations: number
  awards_won: number
  sustainability_certifications: number
  current_month_projects: number
  current_year_revenue_growth: number
}

export interface OfficeLocation {
  id: string
  name: string
  type: 'showroom' | 'office' | 'warehouse'
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  contact: {
    phone: string
    email: string
    hours: string
  }
  team_members: string[] // Team member IDs
  specialties: string[]
  featured_image: string
  gallery: string[]
  amenities: string[]
}

export interface LeadData {
  source: 'website_form' | 'ai_chat' | 'project_inquiry' | 'quote_request'
  contact_info: {
    name: string
    email: string
    phone?: string
    company?: string
    title?: string
  }
  project_details: {
    type: 'workplace' | 'healthcare' | 'education' | 'other'
    industry?: string
    timeline?: string
    budget_range?: string
    location?: string
    square_footage?: number
    services_needed: string[]
  }
  preferences: {
    preferred_contact_method: 'email' | 'phone' | 'both'
    best_time_to_contact?: string
    urgency: 'immediate' | 'within_week' | 'within_month' | 'planning_phase'
  }
  qualification_score?: number
  utm_parameters?: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
  }
  created_at: Date
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author_id: string
  author: TeamMember
  category: string
  tags: string[]
  featured_image: string
  published_date: Date
  updated_date: Date
  featured: boolean
  read_time: number
  views: number
  related_projects?: string[]
}

export interface AIInteraction {
  session_id: string
  messages: {
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
    context?: string
  }[]
  lead_data?: Partial<LeadData>
  topics_discussed: string[]
  satisfaction_rating?: number
  converted_to_lead: boolean
  follow_up_scheduled: boolean
}

export interface AnalyticsEvent {
  event_type: 'page_view' | 'ai_interaction' | 'form_submission' | 'project_view' | 'contact_attempt'
  page_url: string
  user_session_id: string
  timestamp: Date
  properties: Record<string, any>
  user_agent: string
  referrer?: string
  utm_parameters?: {
    source?: string
    medium?: string
    campaign?: string
    content?: string
  }
}

// Integration with existing backend types
export interface CorporatePageData {
  hero: {
    headline: string
    subheadline: string
    cta_text: string
    background_image: string
    metrics: CompanyMetrics
  }
  featured_projects: ProjectSummary[]
  featured_team: TeamMember[]
  services: ServiceOffering[]
  testimonials: ClientTestimonial[]
  recent_posts: BlogPost[]
  locations: OfficeLocation[]
}

// API Response types
export interface CorporateApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
} 