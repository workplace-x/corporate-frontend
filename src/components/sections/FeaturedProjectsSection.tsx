import Link from 'next/link'
import Image from 'next/image'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  subHeader?: string
  location?: {
    cityState: string
  }
  year?: number
  size?: string
  images?: any[]
  client?: string
  verticalMarket?: string
  businessUnit?: string
}

interface FeaturedProjectsSectionProps {
  sectionNumber?: string
  totalSections?: string
  projects?: Project[]
  urlFor?: (source: any) => any
}

export default function FeaturedProjectsSection({
  sectionNumber = "03",
  totalSections = "04",
  projects = [],
  urlFor
}: FeaturedProjectsSectionProps) {
  
  // Default projects if none provided
  const defaultProjects = [
    {
      _id: '1',
      title: 'Corporate Innovation Center',
      slug: { current: 'corporate-innovation-center' },
      description: 'A transformative workspace designed to foster collaboration and innovation.',
      subHeader: 'Technology Headquarters',
      location: { cityState: 'San Francisco, CA' },
      year: 2024,
      size: '125,000 sq ft',
      images: [{ asset: { _ref: 'placeholder-1' } }],
      client: 'Fortune 500 Technology Company',
      verticalMarket: 'Technology',
      businessUnit: 'Corporate'
    },
    {
      _id: '2',
      title: 'Healthcare Wellness Center',
      slug: { current: 'healthcare-wellness-center' },
      description: 'Healing environments that support patient recovery and staff efficiency.',
      subHeader: 'Medical Facility',
      location: { cityState: 'Seattle, WA' },
      year: 2023,
      size: '75,000 sq ft',
      images: [{ asset: { _ref: 'placeholder-2' } }],
      client: 'Regional Healthcare Network',
      verticalMarket: 'Healthcare',
      businessUnit: 'Healthcare'
    },
    {
      _id: '3',
      title: 'Educational Learning Commons',
      slug: { current: 'educational-learning-commons' },
      description: 'Flexible learning spaces that adapt to modern educational methodologies.',
      subHeader: 'University Campus',
      location: { cityState: 'Austin, TX' },
      year: 2023,
      size: '50,000 sq ft',
      images: [{ asset: { _ref: 'placeholder-3' } }],
      client: 'State University System',
      verticalMarket: 'Education',
      businessUnit: 'Education'
    }
  ]

  const displayProjects = projects.length > 0 ? projects.slice(0, 3) : defaultProjects

  const getImageUrl = (project: any) => {
    // Check if we have a real image reference (not a placeholder)
    if (project.images && project.images[0] && project.images[0].asset && urlFor) {
      const assetRef = project.images[0].asset._ref
      // If it's a placeholder reference, use fallback instead
      if (assetRef && !assetRef.startsWith('placeholder-')) {
        return urlFor(project.images[0]).width(800).height(600).format('webp').url()
      }
    }
    // Fallback to Unsplash images for placeholders and missing images
    return `https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center&auto=format&q=80`
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Simplified architectural background - much cleaner */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute top-1/2 left-1/4 w-px h-40 bg-gray-900"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-40 bg-gray-900"></div>
      </div>
      
      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24">
        <div className="max-w-8xl mx-auto">
          
          {/* Enhanced section header with orange accents */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 relative">
                {/* Architectural measurement lines with orange accents */}
                <div className="absolute -left-4 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                <div className="absolute -left-6 top-24 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                  03
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Featured Projects</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">{sectionNumber} / {totalSections}</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] tracking-[-0.02em] text-gray-900">
                    <span className="block">Transforming Spaces,</span>
                    <span className="block text-gray-600 italic">Inspiring Performance</span>
                  </h2>
                </div>
              </div>
              
              <div className="lg:col-span-4 text-right">
                <Link 
                  href="/projects"
                  className="group inline-flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <span className="text-sm font-medium tracking-wide">View All Projects</span>
                  <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Enhanced projects grid with orange accents */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayProjects.map((project, index) => (
              <div key={project._id} className="group relative">
                <Link href={`/projects/${project.slug.current}`} className="block">
                  
                  {/* Project image */}
                  <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-gray-100">
                    <Image
                      src={getImageUrl(project)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Orange accent overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                    
                    {/* Project number with orange accent */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center relative">
                      <span className="text-xs font-medium text-gray-900">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                    </div>
                  </div>
                  
                  {/* Project details */}
                  <div className="space-y-4">
                    {/* Meta information with orange accent */}
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="uppercase tracking-[0.1em] font-medium">{project.verticalMarket}</span>
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span>{project.year}</span>
                      {project.location && (
                        <>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span>{project.location.cityState}</span>
                        </>
                      )}
                    </div>
                    
                    {/* Title and description */}
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-light text-gray-900 tracking-wide group-hover:text-gray-700 transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      {project.subHeader && (
                        <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">
                          {project.subHeader}
                        </p>
                      )}
                      
                      {project.description && (
                        <p className="text-gray-600 font-light leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Project specs */}
                    {project.size && (
                      <div className="pt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="uppercase tracking-[0.1em]">Project Size</span>
                          <span className="font-medium">{project.size}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Hover arrow with orange accent */}
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-2">
                      <div className="w-0 h-px bg-gray-900 group-hover:w-8 transition-all duration-300"></div>
                      <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                      <span className="text-xs uppercase tracking-[0.1em] text-gray-600">View Project</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Enhanced bottom section with orange accents */}
          <div className="mt-20 pt-12 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <span className="uppercase tracking-[0.2em]">Portfolio Highlights</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 tracking-wide">
                Showing {displayProjects.length} of 1,800+ Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 