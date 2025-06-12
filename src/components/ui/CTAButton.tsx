import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group"
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 border-2 border-gray-900 hover:border-gray-800",
    secondary: "bg-gray-700 text-white hover:bg-gray-600 border-2 border-gray-700 hover:border-gray-600",
    outline: "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
  }
  
  const sizes = {
    sm: "px-8 py-3 text-sm space-x-2",
    md: "px-12 py-4 text-base space-x-3",
    lg: "px-16 py-6 text-lg space-x-4"
  }

  return (
    <Link 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      
      {/* Orange accent hover effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: '#f9a31c' }}
      ></div>
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
      
      {/* Orange corner accent */}
      <div 
        className="absolute top-1 right-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ backgroundColor: '#f9a31c' }}
      ></div>
    </Link>
  )
} 