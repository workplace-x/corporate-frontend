'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Building, Heart, GraduationCap, School, Coffee, Shield } from 'lucide-react'
import { FadeInUp, StaggeredReveal, MagneticHover, AnimatedCounter } from '../../components/ui/ScrollReveal'

const markets = [
  {
    id: 'workplace',
    title: 'Workplaces',
    subtitle: 'Corporate Offices',
    description: 'Future-ready environments for business offices, tech firms, media companies, and corporate environments.',
    icon: <Building className="w-8 h-8" />,
    stats: { projects: 1200, size: '5.2M sq ft', satisfaction: '96%' },
    highlights: [
      'Activity-based working design',
      'Brand & culture integration', 
      'Smart technology deployment',
      'Wellness-focused environments'
    ],
    clients: ['Global entertainment studios', 'Tech startups', 'Financial services', 'Law firms'],
    href: '/markets/workplace',
    featured: true
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Healing Environments',
    description: 'Patient-centered spaces for hospitals, clinics, and wellness facilities focused on comfort and efficiency.',
    icon: <Heart className="w-8 h-8" />,
    stats: { projects: 180, size: '1.8M sq ft', satisfaction: '98%' },
    highlights: [
      'Evidence-based design principles',
      'Infection control materials',
      'Caregiver workflow optimization',
      'Family-friendly spaces'
    ],
    clients: ['Regional hospitals', 'Medical clinics', 'Dental practices', 'Wellness centers'],
    href: '/markets/healthcare',
    featured: true
  },
  {
    id: 'higher-education',
    title: 'Higher Education',
    subtitle: 'Learning Innovation',
    description: 'Collaborative spaces for universities and colleges that enhance learning outcomes and campus life.',
    icon: <GraduationCap className="w-8 h-8" />,
    stats: { projects: 95, size: '1.2M sq ft', satisfaction: '94%' },
    highlights: [
      'Active learning classrooms',
      'Collaborative commons',
      'Cutting-edge labs & studios',
      'Flexible library spaces'
    ],
    clients: ['State universities', 'Private colleges', 'Community colleges', 'Research institutions'],
    href: '/markets/education',
    featured: false
  },
  {
    id: 'k12-education',
    title: 'K-12 Education',
    subtitle: 'Inspiring Young Minds',
    description: 'Dynamic learning environments that adapt to modern pedagogy and support 21st-century learning.',
    icon: <School className="w-8 h-8" />,
    stats: { projects: 240, size: '2.1M sq ft', satisfaction: '97%' },
    highlights: [
      'Flexible classroom design',
      'STEM learning spaces',
      'Age-appropriate solutions',
      'Safety & durability focus'
    ],
    clients: ['Public school districts', 'Private schools', 'Charter schools', 'Specialty academies'],
    href: '/markets/education',
    featured: false
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    subtitle: 'Experience Design',
    description: 'Memorable spaces for hotels, restaurants, lounges, and entertainment venues that create lasting impressions.',
    icon: <Coffee className="w-8 h-8" />,
    stats: { projects: 85, size: '450K sq ft', satisfaction: '95%' },
    highlights: [
      'Guest experience optimization',
      'Brand storytelling through design',
      'Durable hospitality finishes',
      'Operational efficiency'
    ],
    clients: ['Boutique hotels', 'Corporate venues', 'Restaurant chains', 'Entertainment spaces'],
    href: '/services', // No dedicated hospitality market page yet
    featured: false
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    subtitle: 'Civic Excellence',
    description: 'Efficient, welcoming spaces for government offices and civic centers that serve the community.',
    icon: <Shield className="w-8 h-8" />,
    stats: { projects: 125, size: '890K sq ft', satisfaction: '92%' },
    highlights: [
      'Public-friendly interfaces',
      'Security integration',
      'Budget-conscious solutions',
      'ADA compliance excellence'
    ],
    clients: ['City halls', 'Federal agencies', 'Court systems', 'Public libraries'],
    href: '/services', // No dedicated government market page yet
    featured: false
  }
]

export default function MarketsPage() {
  const [selectedMarket, setSelectedMarket] = useState(null)

  return (
    <main className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeInUp>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-2">
                <div className="text-xs font-mono text-medium-gray mb-4">002_MARKETS</div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <h1 className="heading-lg text-charcoal mb-8">
                  Industries We Serve –
                  <br />
                  <span className="text-slate-blue">Everywhere</span>
                </h1>
                <p className="body-lg text-medium-gray mb-12">
                  For over 50 years, we've partnered with organizations across industries 
                  to create transformative environments. Each market has unique needs, 
                  challenges, and opportunities – and we bring deep expertise to every one.
                </p>
                <div className="flex items-center space-x-6">
                  <Link href="/contact" className="btn-primary">
                    Start Your Project
                  </Link>
                  <Link href="/services" className="text-slate-blue hover:text-olive-green transition-colors font-medium flex items-center space-x-2">
                    <span>Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Primary Market Focus */}
      <section className="section-padding bg-slate-blue/5">
        <div className="container-max">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="heading-md text-charcoal mb-8">
                Primary Market Focus
              </h2>
              <p className="body-lg text-medium-gray max-w-3xl mx-auto">
                Our deepest expertise lies in workplace and healthcare environments, 
                where we've delivered exceptional results for over two decades.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {markets.filter(market => market.featured).map((market, index) => (
              <FadeInUp key={market.id} delay={index * 200}>
                <div className="bg-white rounded-2xl p-12 shadow-glass hover:shadow-slate-lg transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-slate-blue/10 rounded-2xl flex items-center justify-center text-slate-blue group-hover:bg-slate-blue group-hover:text-white transition-all duration-300">
                        {market.icon}
                      </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-medium-gray mb-1">FEATURED</div>
                      <div className="w-2 h-2 bg-slate-blue rounded-full"></div>
                      </div>
                    </div>
                    
                  <h3 className="heading-sm text-charcoal mb-2 group-hover:text-slate-blue transition-colors">
                    {market.title}
                  </h3>
                  <p className="text-sm text-medium-gray mb-6">{market.subtitle}</p>
                  <p className="body-md text-medium-gray mb-8 leading-relaxed">{market.description}</p>
                    
                  <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                      <div className="text-2xl font-light text-slate-blue mb-1">{market.stats.projects}+</div>
                      <div className="text-xs text-medium-gray">Projects</div>
                      </div>
                      <div className="text-center">
                      <div className="text-2xl font-light text-slate-blue mb-1">{market.stats.size}</div>
                      <div className="text-xs text-medium-gray">Designed</div>
                      </div>
                      <div className="text-center">
                      <div className="text-2xl font-light text-slate-blue mb-1">{market.stats.satisfaction}</div>
                      <div className="text-xs text-medium-gray">Satisfaction</div>
                    </div>
                      </div>
                      
                      <Link 
                        href={market.href}
                    className="inline-flex items-center text-slate-blue font-medium hover:text-olive-green transition-colors group"
                      >
                        Explore {market.title}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* All Markets */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="heading-md text-charcoal mb-8">
                Complete Market Expertise
              </h2>
              <p className="body-lg text-medium-gray max-w-3xl mx-auto">
                Specialized knowledge across diverse industries, from emerging sectors 
                to established markets, always focused on human-centered design.
              </p>
            </div>
          </FadeInUp>

          <StaggeredReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {markets.filter(market => !market.featured).map((market, index) => (
              <MagneticHover key={market.id} strength={0.05}>
                <div className="bg-white border border-slate-blue/15 rounded-2xl p-8 hover:shadow-slate-lg transition-all duration-500 group">
                  <div className="w-12 h-12 bg-olive-green/10 rounded-xl flex items-center justify-center text-olive-green mb-6 group-hover:bg-olive-green group-hover:text-white transition-all duration-300">
                      {market.icon}
                  </div>
                  
                  <h3 className="text-lg font-medium text-charcoal mb-2 group-hover:text-olive-green transition-colors">
                    {market.title}
                  </h3>
                  <p className="text-sm text-medium-gray mb-4">{market.subtitle}</p>
                  <p className="text-sm text-medium-gray leading-relaxed mb-6">{market.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {market.highlights.slice(0, 2).map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-olive-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-medium-gray">{highlight}</span>
                    </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={market.href}
                    className="inline-flex items-center text-olive-green font-medium text-sm hover:text-slate-blue transition-colors"
                  >
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </MagneticHover>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Cross-Industry Innovation */}
      <section className="section-padding bg-slate-blue/5">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
            <FadeInUp>
                <div className="space-y-4">
                  <h2 className="heading-md text-charcoal">
                  One Partner,
                  <br />
                    <span className="text-slate-blue">Every Market</span>
                </h2>
                  <p className="body-lg text-medium-gray">
                  What sets Tangram apart is our ability to translate insights across 
                  industries. A wellness innovation from healthcare enhances workplace 
                  design. A collaborative solution from education transforms corporate meetings.
                </p>
                </div>
              </FadeInUp>
              
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-blue rounded-lg flex items-center justify-center text-white text-sm font-medium flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                    <h3 className="text-lg font-medium text-charcoal mb-2">Cross-Pollination of Ideas</h3>
                    <p className="text-medium-gray">We apply learnings from one market to innovate in another, creating unique solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-blue rounded-lg flex items-center justify-center text-white text-sm font-medium flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                    <h3 className="text-lg font-medium text-charcoal mb-2">Consistent Excellence</h3>
                    <p className="text-medium-gray">The same team, processes, and quality standards across all markets.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-slate-blue rounded-lg flex items-center justify-center text-white text-sm font-medium flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                    <h3 className="text-lg font-medium text-charcoal mb-2">Holistic Understanding</h3>
                    <p className="text-medium-gray">Deep market knowledge combined with broad industry perspective.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] bg-gradient-to-br from-slate-blue/10 to-olive-green/10 rounded-2xl flex items-center justify-center border border-slate-blue/15">
              <div className="text-center text-slate-blue">
                <div className="text-4xl mb-4">📸</div>
                <div className="text-lg font-medium mb-2">Cross-Industry Innovation</div>
                <div className="text-sm max-w-xs leading-relaxed">
                  Ideas flowing between markets to create breakthrough solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="heading-lg text-white">
              Ready to Transform Your Industry?
              </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Let's bring our multi-industry expertise to your unique challenges and create 
              spaces that set new standards in your market.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                className="btn-primary group"
                >
                Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                className="btn-outline"
                >
                View Our Portfolio
                </Link>
              </div>
            </div>
        </div>
      </section>
    </main>
  )
} 