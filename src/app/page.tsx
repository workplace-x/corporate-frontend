import { getProjects } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { getEmployees } from '@/lib/employees'
import { getHomepageData } from '@/lib/sanity'
import HeroSection from '@/components/sections/HeroSection'
import PhilosophySection from '@/components/sections/PhilosophySection'
import ServicesSection from '@/components/sections/ServicesSection'
import MarketsSection from '@/components/sections/MarketsSection'
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection'
import TeamSection from '@/components/sections/TeamSection'

// Type for project data from Sanity
interface SanityProject {
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

export default async function Homepage() {
  // Fetch comprehensive homepage data including new CMS content
  const [featuredProjects, employees, homepageData] = await Promise.all([
    getProjects(true),
    getEmployees(),
    getHomepageData()
  ])
  
  // If no featured projects, get the first 3 projects
  const displayProjects = featuredProjects.length > 0 
    ? featuredProjects.slice(0, 3)
    : (await getProjects() as SanityProject[]).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with dynamic stats */}
      <HeroSection 
        title={{
          line1: "Where",
          line2: "People", 
          line3: "Meet Place"
        }}
        subtitle="We design transformative environments where human potential flourishes."
        description="Every detail serves purpose. Every space tells a story. Every experience matters."
        stats={[
          { value: "1,800+", label: "Projects Delivered", description: "Across 30+ industries worldwide" },
          { value: "96%", label: "Client Satisfaction", description: "Exceeding expectations consistently" },
          { value: "60+", label: "Years Excellence", description: "Since 1964, defining the future" }
        ]}
      />

      {/* Philosophy Section - Enhanced with CMS data */}
      <PhilosophySection 
        sectionNumber="02"
        totalSections="06"
        quote={{
          main: [
            "Design is not",
            "what it looks like",
            "Design is how it", 
            "works"
          ],
          subtext: [
            "Every space we create serves a deeper purpose. We don't just arrange furniture or select colors—we choreograph human experiences.",
            "Through evidence-based design principles and meticulous attention to behavioral psychology, we transform environments into catalysts for creativity, collaboration, and wellbeing."
          ]
        }}
        attribution={{
          title: "Core Design Philosophy",
          organization: "Tangram Interiors", 
          established: "Est. 1964",
          focus: "Human-Centered Design"
        }}
        metrics={[
          { value: "$250M+", label: "Annual Project Value", description: "Transforming billions in real estate" },
          { value: (homepageData.featuredProducts?.length || 50).toString(), label: "Featured Products", description: "Curated design solutions" },
          { value: (homepageData.verticalMarkets?.length || 8).toString(), label: "Market Specializations", description: "Industry-specific expertise" }
        ]}
      />

      {/* Services Section */}
      <ServicesSection 
        sectionNumber="03"
        totalSections="06"
      />

      {/* Markets Section */}
      <MarketsSection 
        sectionNumber="04"
        totalSections="06"
      />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection 
        sectionNumber="05"
        totalSections="06"
        projects={displayProjects}
        urlFor={urlFor}
      />

      {/* Team Section */}
      <TeamSection 
        sectionNumber="06"
        totalSections="06"
        philosophy={{
          title: ["Excellence", "Built on", "Relationships"],
          description: "Your people and brand are unique. We invest time understanding your culture, challenges, and aspirations, ensuring every space genuinely serves your vision."
        }}
        stats={[
          { value: "50+", label: "Design Professionals" },
          { value: "15+", label: "Years Average Experience" },
          { value: "70%", label: "Repeat Business" }
        ]}
        teamVisual={{
          title: "The Tangram Team",
          subtitle: "Passionate professionals dedicated to design excellence",
          showFloatingElements: true
        }}
        employees={employees}
      />
    </div>
  )
} 