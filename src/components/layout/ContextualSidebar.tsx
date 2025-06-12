import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItem {
  label: string
  href: string
  isActive?: boolean
}

interface ContextualSidebarProps {
  title: string
  items: SidebarItem[]
  className?: string
}

export default function ContextualSidebar({ title, items, className = '' }: ContextualSidebarProps) {
  const pathname = usePathname()

  return (
    <div className={`bg-gray-50 border-l border-gray-200 ${className}`}>
      <div className="p-6">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">
          More in {title}
        </h3>
        <nav className="space-y-3">
          {items.map((item) => {
            const isActive = pathname === item.href || item.isActive
            return (
              <Link
                key={item.href}
                href={item.href as any}
                className={`block text-sm transition-colors ${
                  isActive
                    ? 'text-red-600 font-medium'
                    : 'text-gray-600 hover:text-gray-900 font-light'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                )}
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

// Predefined sidebar configurations for different sections
export const aboutSidebarItems: SidebarItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Ecosystem', href: '/about/ecosystem' },
  { label: 'History', href: '/about/history' },
  { label: 'Meet Our Team', href: '/team' },
  { label: 'Visit', href: '/visit' },
  { label: 'Careers', href: '/careers' },
  { label: 'Volunteer', href: '/volunteer' }
]

export const servicesSidebarItems: SidebarItem[] = [
  { label: 'All Services', href: '/services' },
  { label: 'Contract Furniture', href: '/services/contract-furniture' },
  { label: 'Architectural Walls', href: '/services/architectural-walls' },
  { label: 'Technology Integration', href: '/services/technology' },
  { label: 'Custom Furniture (Studio Other)', href: '/services/custom-furniture' },
  { label: 'Flooring & Specialty Interiors', href: '/services/flooring' },
  { label: 'Move Management', href: '/services/move-management' }
]

export const marketsSidebarItems: SidebarItem[] = [
  { label: 'All Markets', href: '/markets' },
  { label: 'Workplace', href: '/markets/workplace' },
  { label: 'Healthcare', href: '/markets/healthcare' },
  { label: 'Education', href: '/markets/education' }
]

export const projectsSidebarItems: SidebarItem[] = [
  { label: 'All Projects', href: '/projects' },
  { label: 'Featured Work', href: '/projects/featured' },
  { label: 'Case Studies', href: '/projects/case-studies' },
  { label: 'Awards', href: '/projects/awards' }
]

export const eventsSidebarItems: SidebarItem[] = [
  { label: 'All Events', href: '/events' },
  { label: 'Trade Shows', href: '/events?filter=trade-show' },
  { label: 'Conferences', href: '/events?filter=conference' },
  { label: 'Workshops', href: '/events?filter=workshop' },
  { label: 'Social Events', href: '/events?filter=social' }
]

export const storiesSidebarItems: SidebarItem[] = [
  { label: 'Design Stories', href: '/blog' },
  { label: 'Client Success', href: '/blog/success' },
  { label: 'Industry Insights', href: '/blog/insights' },
  { label: 'Press Mentions', href: '/blog/press' }
]

export const resourcesSidebarItems: SidebarItem[] = [
  { label: 'Design Guidelines', href: '/resources/guidelines' },
  { label: 'How-To Blog', href: '/resources/blog' },
  { label: 'Spaces + Studios', href: '/resources/spaces' },
  { label: 'Resource Hub', href: '/resources/hub' }
] 