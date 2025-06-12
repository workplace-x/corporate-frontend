'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface PageLayoutProps {
  children: React.ReactNode
  pageCode?: string
  title: string
  subtitle?: string
  description: string
  breadcrumbs?: BreadcrumbItem[]
  heroActions?: React.ReactNode
  heroStats?: React.ReactNode
  heroExtra?: React.ReactNode
  className?: string
}

// Smart breadcrumb generation based on pathname
const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]
  
  let currentPath = ''
  
  const pathLabels: Record<string, string> = {
    'about': 'About',
    'ecosystem': 'Our Ecosystem',
    'history': 'History',
    'services': 'Services',
    'contract-furniture': 'Contract Furniture',
    'architectural-walls': 'Architectural Walls',
    'technology': 'Technology Integration',
    'custom-furniture': 'Custom Furniture',
    'flooring': 'Flooring Solutions',
    'move-management': 'Move Management',
    'healthcare': 'Healthcare',
    'workplace': 'Workplace',
    'markets': 'Markets',
    'education': 'Education',
    'projects': 'Projects',
    'blog': 'Design Stories',
    'publications': 'Publications',
    'events': 'Events',
    'team': 'Our Team',
    'careers': 'Careers',
    'contact': 'Contact',
    'visit': 'Visit Us'
  }
  
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`
    const label = pathLabels[segment] || segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
    
    breadcrumbs.push({
      label,
      href: currentPath
    })
  })
  
  return breadcrumbs
}

export default function PageLayout({
  children,
  pageCode,
  title,
  subtitle,
  description,
  breadcrumbs,
  heroActions,
  heroStats,
  heroExtra,
  className = ''
}: PageLayoutProps) {
  const pathname = usePathname()
  const finalBreadcrumbs = breadcrumbs || generateBreadcrumbs(pathname)
  
  return (
    <main className={`pt-20 bg-white ${className}`}>
      {/* Consistent Breadcrumb System */}
      <div className="bg-gradient-to-r from-slate-blue/5 via-white to-olive-green/5 border-b border-slate-blue/10">
        <div className="container-max py-4">
          <nav className="text-sm font-light" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {finalBreadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-3 h-3 text-medium-gray mx-2" />
                  )}
                  {index === finalBreadcrumbs.length - 1 ? (
                    <span className="text-charcoal font-medium tracking-wide">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link 
                      href={crumb.href} 
                      className="text-medium-gray hover:text-slate-blue transition-colors tracking-wide"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Standardized Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-12 gap-6">
            {/* Page Code */}
            {pageCode && (
              <div className="col-span-12 lg:col-span-2">
                <div className="text-xs font-mono text-medium-gray mb-4 uppercase tracking-wider">
                  {pageCode}
                </div>
              </div>
            )}
            
            {/* Main Content */}
            <div className={`col-span-12 ${pageCode ? 'lg:col-span-8' : 'lg:col-span-10'}`}>
              {subtitle && (
                <div className="text-sm font-medium text-slate-blue mb-4 uppercase tracking-wider">
                  {subtitle}
                </div>
              )}
              
              <h1 className="heading-lg text-charcoal mb-8">
                {title}
              </h1>
              
              <p className="body-lg text-medium-gray mb-12 leading-relaxed">
                {description}
              </p>
              
              {/* Stats */}
              {heroStats && (
                <div className="mb-12">
                  {heroStats}
                </div>
              )}
              
              {/* Actions */}
              {heroActions && (
                <div className="flex items-center space-x-6">
                  {heroActions}
                </div>
              )}
            </div>
            
            {/* Extra Content */}
            {heroExtra && (
              <div className="col-span-12 lg:col-span-2">
                {heroExtra}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Page Content */}
      {children}
    </main>
  )
}

// Standard Hero Actions Component
interface HeroActionsProps {
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
    icon?: React.ReactNode
  }
}

export function StandardHeroActions({ primaryAction, secondaryAction }: HeroActionsProps) {
  return (
    <>
      {primaryAction && (
        <Link href={primaryAction.href} className="btn-primary">
          {primaryAction.label}
        </Link>
      )}
      {secondaryAction && (
        <Link 
          href={secondaryAction.href} 
          className="text-slate-blue hover:text-olive-green transition-colors font-medium flex items-center space-x-2"
        >
          <span>{secondaryAction.label}</span>
          {secondaryAction.icon}
        </Link>
      )}
    </>
  )
}

// Standard Hero Stats Component
interface Stat {
  value: string | number
  label: string
  suffix?: string
}

interface HeroStatsProps {
  stats: Stat[]
}

export function StandardHeroStats({ stats }: HeroStatsProps) {
  return (
    <div className={`grid grid-cols-${Math.min(stats.length, 4)} gap-8`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-light text-slate-blue mb-1">
            {stat.value}{stat.suffix || ''}
          </div>
          <div className="text-sm text-medium-gray">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

// Standard Section Component
interface StandardSectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'accent' | 'dark'
  title?: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export function StandardSection({ 
  children, 
  className = '', 
  background = 'white',
  title,
  subtitle,
  description,
  centered = false
}: StandardSectionProps) {
  const bgClasses = {
    white: 'bg-white',
    accent: 'bg-slate-blue/5',
    dark: 'bg-charcoal text-white'
  }

  return (
    <section className={`section-padding ${bgClasses[background]} ${className}`}>
      <div className="container-max">
        {(title || subtitle || description) && (
          <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {subtitle && (
              <div className="text-xs font-mono text-medium-gray mb-4 uppercase tracking-wider">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className={`heading-md ${background === 'dark' ? 'text-white' : 'text-charcoal'} mb-8`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`body-lg ${background === 'dark' ? 'text-gray-300' : 'text-medium-gray'} ${centered ? 'max-w-3xl mx-auto' : ''}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

// Standard CTA Section
interface StandardCTAProps {
  title: string
  description: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

export function StandardCTA({ title, description, primaryAction, secondaryAction }: StandardCTAProps) {
  return (
    <StandardSection background="dark" className="text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="heading-lg text-white">
          {title}
        </h2>
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href={primaryAction.href}
            className="btn-primary group"
          >
            {primaryAction.label}
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="btn-outline"
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </StandardSection>
  )
} 