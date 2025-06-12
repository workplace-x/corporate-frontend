// Employee data integration helper
// Replace with your actual CMS/API integration

export interface Employee {
  id: string
  name: string
  title: string
  department: string
  headshotUrl?: string
  featured?: boolean
  bio?: string
  email?: string
  linkedin?: string
  startDate?: string
}

// Example integration with Sanity CMS
export async function getEmployeesFromSanity(): Promise<Employee[]> {
  try {
    // Replace with your Sanity client
    // const employees = await sanity.fetch(`
    //   *[_type == "employee"] | order(featured desc, name asc) {
    //     _id,
    //     name,
    //     title,
    //     department,
    //     "headshotUrl": headshot.asset->url,
    //     featured,
    //     bio,
    //     email,
    //     linkedin,
    //     startDate
    //   }
    // `)
    
    return []
  } catch (error) {
    console.error('Error fetching employees from Sanity:', error)
    return []
  }
}

// Example integration with Supabase
export async function getEmployeesFromSupabase(): Promise<Employee[]> {
  try {
    // Replace with your Supabase client
    // const { data: employees, error } = await supabase
    //   .from('employees')
    //   .select(`
    //     id,
    //     name,
    //     title,
    //     department,
    //     headshot_url,
    //     featured,
    //     bio,
    //     email,
    //     linkedin,
    //     start_date
    //   `)
    //   .order('featured', { ascending: false })
    //   .order('name', { ascending: true })
    
    // if (error) throw error
    
    // return employees.map(emp => ({
    //   id: emp.id,
    //   name: emp.name,
    //   title: emp.title,
    //   department: emp.department,
    //   headshotUrl: emp.headshot_url,
    //   featured: emp.featured,
    //   bio: emp.bio,
    //   email: emp.email,
    //   linkedin: emp.linkedin,
    //   startDate: emp.start_date
    // }))
    
    return []
  } catch (error) {
    console.error('Error fetching employees from Supabase:', error)
    return []
  }
}

// Example integration with Contentful
export async function getEmployeesFromContentful(): Promise<Employee[]> {
  try {
    // Replace with your Contentful client
    // const response = await contentful.getEntries({
    //   content_type: 'employee',
    //   order: '-fields.featured,fields.name'
    // })
    
    // return response.items.map(item => ({
    //   id: item.sys.id,
    //   name: item.fields.name,
    //   title: item.fields.title,
    //   department: item.fields.department,
    //   headshotUrl: item.fields.headshot?.fields?.file?.url,
    //   featured: item.fields.featured,
    //   bio: item.fields.bio,
    //   email: item.fields.email,
    //   linkedin: item.fields.linkedin,
    //   startDate: item.fields.startDate
    // }))
    
    return []
  } catch (error) {
    console.error('Error fetching employees from Contentful:', error)
    return []
  }
}

// Example integration with custom API
export async function getEmployeesFromAPI(): Promise<Employee[]> {
  try {
    // Replace with your API endpoint
    // const response = await fetch('/api/employees', {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.API_TOKEN}`
    //   }
    // })
    
    // if (!response.ok) {
    //   throw new Error('Failed to fetch employees')
    // }
    
    // const data = await response.json()
    // return data.employees
    
    return []
  } catch (error) {
    console.error('Error fetching employees from API:', error)
    return []
  }
}

// Utility function to validate and clean employee data
export function validateEmployeeData(employees: any[]): Employee[] {
  return employees.filter(emp => {
    // Ensure required fields exist
    if (!emp.id || !emp.name || !emp.title) {
      console.warn('Employee missing required fields:', emp)
      return false
    }
    
    // Validate headshot URL if provided
    if (emp.headshotUrl && !isValidUrl(emp.headshotUrl)) {
      console.warn('Invalid headshot URL for employee:', emp.name)
      emp.headshotUrl = undefined
    }
    
    return true
  }).map(emp => ({
    id: String(emp.id),
    name: emp.name.trim(),
    title: emp.title.trim(),
    department: emp.department?.trim() || 'General',
    headshotUrl: emp.headshotUrl,
    featured: Boolean(emp.featured),
    bio: emp.bio?.trim(),
    email: emp.email?.trim(),
    linkedin: emp.linkedin?.trim(),
    startDate: emp.startDate
  }))
}

// Helper function to validate URLs
function isValidUrl(string: string): boolean {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

// Main function to get employees (replace with your preferred method)
export async function getEmployees(): Promise<Employee[]> {
  // Choose your CMS integration method:
  
  // Option 1: Sanity CMS
  // return await getEmployeesFromSanity()
  
  // Option 2: Supabase
  // return await getEmployeesFromSupabase()
  
  // Option 3: Contentful
  // return await getEmployeesFromContentful()
  
  // Option 4: Custom API
  // return await getEmployeesFromAPI()
  
  // For now, return sample data (replace with your integration)
  const sampleEmployees = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Chief Executive Officer',
      department: 'Leadership',
      headshotUrl: 'https://images.unsplash.com/photo-1494790108755-2616b2b1d6d0?w=64&h=64&fit=crop&crop=face',
      featured: true,
      bio: 'Leading Tangram Interiors with 20+ years of design excellence.',
      email: 'sarah@tangraminteriors.com'
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Chief Operating Officer',
      department: 'Operations',
      headshotUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      featured: true,
      bio: 'Streamlining operations and ensuring project delivery excellence.'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      title: 'VP of Design',
      department: 'Design',
      headshotUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      featured: true,
      bio: 'Visionary designer creating spaces that inspire and transform.'
    },
    {
      id: '4',
      name: 'David Kim',
      title: 'Senior Project Manager',
      department: 'Project Management',
      headshotUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      featured: true
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      title: 'Lead Designer',
      department: 'Design',
      headshotUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face',
      featured: false
    },
    {
      id: '6',
      name: 'Robert Williams',
      title: 'Project Coordinator',
      department: 'Project Management',
      headshotUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
      featured: false
    },
    {
      id: '7',
      name: 'Jennifer Davis',
      title: 'Interior Designer',
      department: 'Design',
      headshotUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face',
      featured: false
    },
    {
      id: '8',
      name: 'Alex Martinez',
      title: 'Space Planner',
      department: 'Design',
      headshotUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=64&h=64&fit=crop&crop=face',
      featured: false
    }
    // Add more employees as needed...
  ]
  
  return validateEmployeeData(sampleEmployees)
} 