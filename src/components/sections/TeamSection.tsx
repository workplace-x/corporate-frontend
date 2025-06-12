import Link from 'next/link'
import Image from 'next/image'
import EmployeePhoto from './EmployeePhoto'
import CTAButton from '../ui/CTAButton'

interface Employee {
  id: string
  name: string
  title: string
  department: string
  headshotUrl?: string
  featured?: boolean
  bio?: string
  image?: string
  yearsWithCompany?: number
  location?: string
  specialties?: string[]
}

interface TeamSectionProps {
  sectionNumber?: string
  totalSections?: string
  philosophy?: {
    title: string[]
    description: string
  }
  stats?: Array<{
    value: string
    label: string
  }>
  teamVisual?: {
    title: string
    subtitle: string
    showFloatingElements?: boolean
  }
  employees?: Employee[]
}

export default function TeamSection({
  sectionNumber = "04",
  totalSections = "04",
  philosophy = {
    title: ["Excellence", "Built on", "Relationships"],
    description: "Your people and brand are unique. We invest time understanding your culture, challenges, and aspirations, ensuring every space genuinely serves your vision."
  },
  stats = [
    { value: "50+", label: "Design Professionals" },
    { value: "15+", label: "Years Average Experience" },
    { value: "70%", label: "Repeat Business" }
  ],
  teamVisual = {
    title: "The Tangram Team",
    subtitle: "Passionate professionals dedicated to design excellence",
    showFloatingElements: true
  },
  employees = []
}: TeamSectionProps) {
  
  // Smart positioning system for employee photos
  const positions = [
    // Leadership tier - larger photos
    { size: "w-16 h-16", position: "top-0 left-12", delay: "delay-0" },
    { size: "w-14 h-14", position: "top-0 left-32", delay: "delay-100" },
    { size: "w-12 h-12", position: "top-2 right-20", delay: "delay-200" },
    
    // Department leads - medium photos  
    { size: "w-12 h-12", position: "top-20 left-16", delay: "delay-300" },
    { size: "w-14 h-14", position: "top-16 left-40", delay: "delay-400" },
    { size: "w-13 h-13", position: "top-24 right-32", delay: "delay-500" },
    
    // Team members - varied sizes
    { size: "w-11 h-11", position: "bottom-20 left-20", delay: "delay-600" },
    { size: "w-12 h-12", position: "bottom-16 left-44", delay: "delay-700" },
    { size: "w-10 h-10", position: "bottom-24 right-24", delay: "delay-800" },
    
    // Supporting team - smaller
    { size: "w-8 h-8", position: "top-8 left-64", delay: "delay-900" },
    { size: "w-9 h-9", position: "bottom-8 left-32", delay: "delay-1000" },
    { size: "w-8 h-8", position: "top-32 right-16", delay: "delay-1100" },
    
    // Additional positions for larger teams
    { size: "w-10 h-10", position: "top-12 right-40", delay: "delay-1200" },
    { size: "w-9 h-9", position: "bottom-32 right-12", delay: "delay-1300" },
    { size: "w-11 h-11", position: "top-40 left-24", delay: "delay-1400" }
  ]
  
  // Get featured employees first, then others
  const featuredEmployees = employees.filter(emp => emp.featured).slice(0, 8)
  const otherEmployees = employees.filter(emp => !emp.featured).slice(0, 7)
  const displayEmployees = [...featuredEmployees, ...otherEmployees].slice(0, 15)
  
  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden">
      {/* Simplified architectural background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 left-1/5 w-px h-60 bg-gray-900"></div>
        <div className="absolute bottom-1/4 right-1/5 w-px h-60 bg-gray-900"></div>
      </div>
      
      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24">
        <div className="max-w-8xl mx-auto">
          
          {/* Enhanced main content grid */}
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
            
            {/* Philosophy section with orange accents */}
            <div className="lg:col-span-7 lg:col-start-1 space-y-16">
              <div className="relative">
                {/* Architectural measurement lines with orange accents */}
                <div className="absolute -left-4 top-0 w-px h-24 bg-gradient-to-b from-gray-900 to-gray-400 opacity-40"></div>
                <div className="absolute -left-6 top-0 w-3 h-px bg-gray-900 opacity-40"></div>
                <div className="absolute -left-6 top-24 w-3 h-px opacity-60" style={{ backgroundColor: '#f9a31c' }}></div>
                <div className="absolute -left-10 top-3 text-xs text-gray-500 transform -rotate-90 origin-center">
                  04
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Our Team</div>
                    <div className="w-16 h-px bg-gray-900"></div>
                    <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                    <div className="text-xs text-gray-400 tracking-wide">{sectionNumber} / {totalSections}</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[1.1] tracking-[-0.02em] text-gray-900">
                    <span className="block transform hover:translate-x-1 transition-transform duration-300">{philosophy.title[0]}</span>
                    <span className="block transform hover:translate-x-2 transition-transform duration-300 delay-75">{philosophy.title[1]}</span>
                    <span className="block text-gray-600 italic transform translate-x-6 hover:translate-x-8 transition-transform duration-300 delay-150">
                      {philosophy.title[2]}
                    </span>
                  </h2>
                </div>
              </div>
              
              {/* Enhanced description with orange accent */}
              <div className="max-w-3xl relative pl-2">
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gray-900 via-orange-500 to-transparent opacity-40" style={{ background: `linear-gradient(to bottom, rgb(17, 24, 39), #f9a31c, transparent)` }}></div>
                <p className="text-xl text-gray-600 font-light leading-relaxed tracking-wide">
                  {philosophy.description}
                </p>
              </div>
              
              {/* Team stats with orange accents */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -left-2 top-0 w-px h-full bg-gradient-to-b from-gray-400 to-gray-200 group-hover:from-orange-500 transition-colors duration-200" style={{ background: index === 1 ? `linear-gradient(to bottom, #f9a31c, rgb(229, 231, 235))` : undefined }}></div>
                    
                    <div className="text-center space-y-2 transform group-hover:translate-x-0.5 transition-transform duration-200">
                      <div className="text-3xl md:text-4xl font-extralight text-gray-900 tracking-[-0.01em]">
                        {stat.value.includes('+') ? (
                          <>
                            {stat.value.replace('+', '')}<span className="text-2xl" style={{ color: '#f9a31c' }}>+</span>
                          </>
                        ) : stat.value.includes('%') ? (
                          <>
                            {stat.value.replace('%', '')}<span className="text-2xl" style={{ color: '#f9a31c' }}>%</span>
                          </>
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-xs uppercase tracking-[0.1em] text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced team visual section with orange accents */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-12">
              <div className="relative">
                {/* Team arrangement visual */}
                <div className="space-y-8">
                  <div className="text-right space-y-2">
                    <h3 className="text-2xl font-light text-gray-900 tracking-wide">{teamVisual.title}</h3>
                    <p className="text-sm text-gray-600">{teamVisual.subtitle}</p>
                  </div>
                  
                  {/* Geometric team representation with orange accents */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {/* Abstract team visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-3">
                        {Array.from({ length: 12 }).map((_, index) => (
                          <div 
                            key={index}
                            className={`w-8 h-8 rounded-full transition-all duration-300 hover:scale-110`}
                            style={{
                              backgroundColor: index < 2 ? '#f9a31c' : 
                                              index < 5 ? 'rgb(17, 24, 39)' : 
                                              index < 8 ? 'rgb(75, 85, 99)' : 'rgb(156, 163, 175)',
                              animationDelay: `${index * 100}ms`,
                              opacity: 0.8 - (index * 0.05)
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Orange accent line */}
                    <div className="absolute bottom-4 right-4 w-12 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                  </div>
                </div>
                
                {/* Architectural details with orange accent */}
                <div className="flex justify-end space-x-4 pt-4 opacity-40">
                  <div className="w-8 h-px bg-gray-900"></div>
                  <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="w-6 h-px bg-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced employee showcase with orange accents */}
          {employees.length > 0 && (
            <div className="pt-16 border-t border-gray-100">
              <div className="mb-12">
                <div className="flex items-center space-x-6">
                  <h3 className="text-2xl font-light text-gray-900 tracking-wide">Meet Our Leaders</h3>
                  <div className="w-20 h-px bg-gray-900"></div>
                  <div className="w-4 h-px" style={{ backgroundColor: '#f9a31c' }}></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {employees.slice(0, 4).map((employee, index) => (
                  <div key={employee.id} className="group relative space-y-4">
                    {/* Employee photo */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      {employee.image ? (
                        <Image
                          src={employee.image}
                          alt={employee.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-2xl">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                      
                      {/* Orange accent overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundColor: '#f9a31c' }}></div>
                      
                      {/* Employee number with orange accent */}
                      <div className="absolute top-3 left-3 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center relative">
                        <span className="text-xs font-medium text-gray-900">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                      </div>
                    </div>
                    
                    {/* Employee details */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium text-gray-900 tracking-wide group-hover:text-gray-700 transition-colors duration-200">
                        {employee.name}
                      </h4>
                      <p className="text-sm text-gray-600 tracking-wide">{employee.title}</p>
                      {employee.department && (
                        <p className="text-xs uppercase tracking-[0.1em] text-gray-500 font-medium">
                          {employee.department}
                        </p>
                      )}
                      
                      {/* Additional details on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pt-2">
                        {employee.yearsWithCompany && (
                          <div className="text-xs text-gray-500">
                            {employee.yearsWithCompany} years with Tangram
                          </div>
                        )}
                        {employee.location && (
                          <div className="text-xs text-gray-500">
                            {employee.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Enhanced bottom section with orange accents */}
          <div className="mt-20 pt-12 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <span className="uppercase tracking-[0.2em]">Team Excellence</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 tracking-wide">
                Cultivating talent since 1964
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 