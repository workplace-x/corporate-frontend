import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Building, Users, Award, Target, Lightbulb, TrendingUp, Quote, CheckCircle, Clock, Palette, Layers, Zap, Plus, Eye, Play, ExternalLink, Star, Heart, BookOpen } from 'lucide-react'
import { getProjectBySlug, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import CTAButton from '@/components/ui/CTAButton'

// Generate static params for all projects
export async function generateStaticParams() {
  return []
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

  // Enhanced interactive visual data
  const visualData = {
    heroStats: [
      { label: "Project Value", value: "$2.4M" },
      { label: "Timeline", value: "17 weeks" },
      { label: "Team Size", value: "12 experts" },
      { label: "Impact Score", value: "9.6/10" }
    ],
    interactiveImages: [
      {
        id: 1,
        url: project.images?.[0] ? urlFor(project.images[0]).width(1920).height(1080).url() : null,
        title: "Reception & Welcome Area",
        description: "First impressions matter - biophilic design meets modern hospitality",
        products: [
          { x: 25, y: 35, name: "Steelcase Gesture Chair", category: "Seating", price: "$1,200", partner: "Steelcase" },
          { x: 60, y: 45, name: "Custom Reception Desk", category: "Furniture", price: "Custom", partner: "Local Artisan" },
          { x: 80, y: 25, name: "Philips Hue Lighting", category: "Lighting", price: "$450", partner: "Philips" }
        ],
        stats: [
          { metric: "Visitor Satisfaction", value: "96%", change: "+23%" },
          { metric: "Wait Time Perception", value: "-40%", change: "improvement" }
        ]
      },
      {
        id: 2,
        url: project.images?.[1] ? urlFor(project.images[1]).width(1920).height(1080).url() : null,
        title: "Collaborative Workspace",
        description: "Flexible spaces that adapt to team dynamics and project needs",
        products: [
          { x: 30, y: 50, name: "Herman Miller Sayl", category: "Seating", price: "$850", partner: "Herman Miller" },
          { x: 70, y: 30, name: "Height-Adjustable Table", category: "Furniture", price: "$1,400", partner: "Steelcase" },
          { x: 45, y: 70, name: "Acoustic Panels", category: "Acoustics", price: "$280/sqft", partner: "Kirei" }
        ],
        stats: [
          { metric: "Collaboration Increase", value: "320%", change: "+220%" },
          { metric: "Noise Reduction", value: "65%", change: "improvement" }
        ]
      },
      {
        id: 3,
        url: project.images?.[2] ? urlFor(project.images[2]).width(1920).height(1080).url() : null,
        title: "Executive Conference Room",
        description: "Where decisions are made - technology meets timeless design",
        products: [
          { x: 50, y: 40, name: "Conference Table", category: "Furniture", price: "$8,500", partner: "Knoll" },
          { x: 20, y: 60, name: "Executive Seating", category: "Seating", price: "$2,200", partner: "Herman Miller" },
          { x: 85, y: 20, name: "Video Conferencing", category: "Technology", price: "$15,000", partner: "Crestron" }
        ],
        stats: [
          { metric: "Meeting Efficiency", value: "87%", change: "+34%" },
          { metric: "Technology Adoption", value: "100%", change: "seamless" }
        ]
      }
    ],
    partners: [
      { name: "Steelcase", role: "Primary Furniture Partner", products: 45 },
      { name: "Herman Miller", role: "Seating Solutions", products: 28 },
      { name: "Philips", role: "Lighting Technology", products: 15 },
      { name: "Crestron", role: "AV Integration", products: 8 }
    ],
    team: [
      { name: "Sarah Chen", role: "Lead Designer", contribution: "Space planning & concept development" },
      { name: "Marcus Rodriguez", role: "Project Manager", contribution: "Timeline & budget management" },
      { name: "Elena Kowalski", role: "Sustainability Lead", contribution: "LEED certification & materials" },
      { name: "David Kim", role: "Technology Integration", contribution: "Smart building systems" }
    ],
    process: [
      { phase: "Discovery & Research", duration: "2 weeks", description: "Stakeholder interviews, space analysis, and user behavior studies", icon: Target },
      { phase: "Concept Development", duration: "3 weeks", description: "Ideation workshops, concept validation, and design exploration", icon: Lightbulb },
      { phase: "Design Development", duration: "4 weeks", description: "Detailed design, material selection, and technical documentation", icon: BookOpen },
      { phase: "Implementation", duration: "8 weeks", description: "Construction oversight, quality control, and final installation", icon: Award }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Immersive Hero Section */}
      <section className="relative h-screen overflow-hidden">
        
        {/* Full-screen background image */}
        <div className="absolute inset-0">
          {project.images && project.images[0] ? (
            <Image
              src={urlFor(project.images[0]).width(1920).height(1080).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-black">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-px h-40 bg-white"></div>
                <div className="absolute bottom-1/3 right-1/3 w-px h-32 bg-white"></div>
                <div className="absolute top-1/2 right-1/4 w-20 h-px bg-white"></div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-px bg-white"></div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Navigation overlay */}
        <div className="absolute top-8 left-8 z-50">
          <Link 
            href="/projects" 
            className="inline-flex items-center space-x-3 text-white/80 hover:text-white transition-colors font-medium bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-8">
            
            {/* Project meta */}
            <div className="flex items-center justify-center space-x-6 mb-8 text-sm uppercase tracking-[0.3em] text-white/70">
              <span>{project.verticalMarket || 'Case Study'}</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
              <span>{project.year}</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full" style={{ backgroundColor: '#f9a31c' }}></div>
              <span>{project.location?.cityState}</span>
            </div>
            
            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.85] tracking-[-0.02em] mb-6">
              {project.title}
            </h1>
            
            {project.client && (
              <p className="text-xl md:text-2xl text-white/80 font-light mb-8">
                for {project.client}
              </p>
            )}
            
            {/* CTA */}
            <div className="flex items-center justify-center space-x-4">
              <button className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all">
                <Play className="w-5 h-5" />
                <span>Watch Story</span>
              </button>
              <button className="inline-flex items-center space-x-3 bg-orange-500 px-6 py-3 rounded-full text-white hover:bg-orange-600 transition-all" style={{ backgroundColor: '#f9a31c' }}>
                <Eye className="w-5 h-5" />
                <span>Explore Project</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Hero stats overlay */}
        <div className="absolute bottom-8 left-8 right-8 z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {visualData.heroStats.map((stat, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-extralight text-white" style={{ color: index % 2 === 0 ? '#f9a31c' : 'white' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Image Sections */}
      {visualData.interactiveImages.map((imageData, index) => (
        <section key={imageData.id} className="relative h-screen">
          
          {/* Full-screen image */}
          <div className="absolute inset-0">
            {imageData.url ? (
              <Image
                src={imageData.url}
                alt={imageData.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-px h-40 bg-white"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-px h-32 bg-white"></div>
                  <div className="absolute top-1/2 right-1/4 w-20 h-px bg-white"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-16 h-px bg-white"></div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Interactive product hotspots */}
          {imageData.products.map((product, productIndex) => (
            <div
              key={productIndex}
              className="absolute group cursor-pointer z-30"
              style={{ left: `${product.x}%`, top: `${product.y}%` }}
            >
              {/* Hotspot indicator */}
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse hover:animate-none transition-all" style={{ backgroundColor: '#f9a31c' }}>
                <Plus className="w-3 h-3 text-white" />
              </div>
              
              {/* Product info popup */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-xl p-4 min-w-[250px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="text-white font-medium mb-1">{product.name}</div>
                <div className="text-white/70 text-sm mb-2">{product.category}</div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-medium" style={{ color: '#f9a31c' }}>{product.price}</span>
                  <span className="text-white/50 text-xs">{product.partner}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Section info overlay */}
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-end">
                
                {/* Content */}
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className="text-3xl md:text-4xl font-light mb-4">{imageData.title}</h2>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">{imageData.description}</p>
                  
                  <div className="flex items-center space-x-4">
                    <button className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors" style={{ color: '#f9a31c' }}>
                      <Plus className="w-4 h-4" />
                      <span>View Products ({imageData.products.length})</span>
                    </button>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {imageData.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: '#f9a31c' }}>
                        {stat.value}
                      </div>
                      <div className="text-white/70 text-sm font-medium mb-1">{stat.metric}</div>
                      <div className="text-green-400 text-xs">{stat.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Rich Text Project Story Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8" style={{ color: '#f9a31c' }} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Project Story</h2>
            <p className="text-xl text-white/70">The complete narrative of design, process, and transformation</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Story Content */}
            <div className="lg:col-span-2">
              
              {/* Project Description */}
              {project.description && (
                <div className="mb-12">
                  <h3 className="text-2xl font-light mb-6 text-orange-400" style={{ color: '#f9a31c' }}>Overview</h3>
                  <p className="text-lg text-white/80 leading-relaxed">{project.description}</p>
                </div>
              )}
              
              {/* Rich Text Writeup */}
              {project.projectWriteUp && (
                <div className="mb-12">
                  <h3 className="text-2xl font-light mb-6 text-orange-400" style={{ color: '#f9a31c' }}>Design Narrative</h3>
                  <div className="prose prose-lg prose-invert max-w-none">
                    <div className="text-white/80 leading-relaxed space-y-6">
                      <PortableText 
                        value={project.projectWriteUp}
                        components={{
                          block: {
                            normal: ({children}) => <p className="text-lg leading-relaxed mb-6 text-white/80">{children}</p>,
                            h2: ({children}) => <h2 className="text-3xl font-light mb-6 text-orange-400" style={{ color: '#f9a31c' }}>{children}</h2>,
                            h3: ({children}) => <h3 className="text-2xl font-light mb-4 text-white">{children}</h3>,
                            h4: ({children}) => <h4 className="text-xl font-medium mb-3 text-white">{children}</h4>,
                            blockquote: ({children}) => (
                              <blockquote className="border-l-4 border-orange-500 pl-6 py-4 my-8 bg-white/5 rounded-r-xl">
                                <div className="text-xl font-light italic text-white/90">{children}</div>
                              </blockquote>
                            )
                          },
                          list: {
                            bullet: ({children}) => <ul className="space-y-2 mb-6 ml-6">{children}</ul>,
                            number: ({children}) => <ol className="space-y-2 mb-6 ml-6 list-decimal">{children}</ol>,
                          },
                          listItem: {
                            bullet: ({children}) => <li className="text-white/80 flex items-start"><span className="text-orange-400 mr-3" style={{ color: '#f9a31c' }}>•</span><span>{children}</span></li>,
                            number: ({children}) => <li className="text-white/80">{children}</li>,
                          },
                          marks: {
                            strong: ({children}) => <strong className="font-semibold text-white">{children}</strong>,
                            em: ({children}) => <em className="italic text-orange-400" style={{ color: '#f9a31c' }}>{children}</em>,
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Process Timeline */}
              <div>
                <h3 className="text-2xl font-light mb-8 text-orange-400" style={{ color: '#f9a31c' }}>Design Process</h3>
                <div className="space-y-8">
                  {visualData.process.map((phase, index) => {
                    const IconComponent = phase.icon
                    return (
                      <div key={index} className="flex items-start space-x-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                            <IconComponent className="w-8 h-8 text-white/60 group-hover:text-orange-400" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-medium text-white">{phase.phase}</h4>
                            <span className="text-sm text-orange-400 font-medium" style={{ color: '#f9a31c' }}>{phase.duration}</span>
                          </div>
                          <p className="text-white/70 leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Project Specifications */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-medium text-white mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  {project.location?.cityState && (
                    <div>
                      <div className="text-sm font-medium text-white/90 mb-2">Location</div>
                      <div className="text-sm text-white/70">{project.location.cityState}</div>
                    </div>
                  )}
                  
                  {project.year && (
                    <div>
                      <div className="text-sm font-medium text-white/90 mb-2">Year Completed</div>
                      <div className="text-sm text-white/70">{project.year}</div>
                    </div>
                  )}
                  
                  {project.size && (
                    <div>
                      <div className="text-sm font-medium text-white/90 mb-2">Project Size</div>
                      <div className="text-sm text-white/70">{project.size}</div>
                    </div>
                  )}
                  
                  {project.partners && project.partners.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-white/90 mb-2">Key Partners</div>
                      <div className="text-sm text-white/70">{project.partners.slice(0, 3).join(', ')}</div>
                    </div>
                  )}
                  
                  {project.products && project.products.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-white/90 mb-2">Featured Products</div>
                      <div className="text-sm text-white/70">{project.products.slice(0, 3).join(', ')}</div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Awards */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-medium text-white mb-6">Recognition</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-white/80">IIDA Excellence Award 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-white/80">Sustainable Design Leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-white/80">Workplace Innovation Award</span>
                  </div>
                </div>
              </div>
              
              {/* Photography Credit */}
              {project.photographerCredit && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-medium text-white mb-4">Photography</h3>
                  <div className="text-sm text-white/70">
                    {project.photographerWebsite ? (
                      <a 
                        href={project.photographerWebsite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                        style={{ color: '#f9a31c' }}
                      >
                        {project.photographerCredit}
                      </a>
                    ) : (
                      <span className="font-medium">{project.photographerCredit}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Trusted Partners</h2>
            <p className="text-xl text-white/70">Collaborating with industry leaders to deliver excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visualData.partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                
                {/* Partner logo placeholder */}
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <Building className="w-8 h-8 text-white/60 group-hover:text-orange-400" />
                </div>
                
                <h3 className="text-xl font-medium mb-2">{partner.name}</h3>
                <p className="text-white/70 text-sm mb-4">{partner.role}</p>
                
                <div className="flex items-center justify-center space-x-2 text-orange-400" style={{ color: '#f9a31c' }}>
                  <span className="text-2xl font-light">{partner.products}</span>
                  <span className="text-sm text-white/60">products</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Spotlight */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Project Team</h2>
            <p className="text-xl text-white/70">The experts who brought this vision to life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visualData.team.map((member, index) => (
              <div key={index} className="group">
                
                {/* Team member image placeholder */}
                <div className="aspect-square bg-white/10 rounded-2xl mb-6 overflow-hidden relative group-hover:bg-white/20 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white/40" />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-white/80 text-sm leading-relaxed">{member.contribution}</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-orange-400 text-sm font-medium" style={{ color: '#f9a31c' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial - Immersive */}
      <section className="relative py-32 overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
          
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Quote className="w-10 h-10 text-white/60" />
          </div>
          
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-12">
            "Tangram transformed our workplace into something truly extraordinary. The space doesn't just look amazing—it's fundamentally changed how our team collaborates and feels about coming to work."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white/60" />
            </div>
            <div className="text-left">
              <div className="text-xl font-medium">Sarah Mitchell</div>
              <div className="text-white/70">CEO, Innovation Labs</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" style={{ color: '#f9a31c' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Immersive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background image */}
        <div className="absolute inset-0">
          {project.images && project.images[project.images.length - 1] ? (
            <Image
              src={urlFor(project.images[project.images.length - 1]).width(1920).height(1080).url()}
              alt="Next project"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-black"></div>
          )}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          
          <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10" style={{ color: '#f9a31c' }} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Ready to Transform<br />Your Space?
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our team is ready to bring the same level of innovation and excellence to your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              <span>Start Your Project</span>
              <Heart className="w-5 h-5" />
            </CTAButton>
            <CTAButton href="/projects" variant="outline" size="lg">
              <span>Explore More Work</span>
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
} 