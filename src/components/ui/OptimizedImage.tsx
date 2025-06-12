import React, { useState } from 'react'
import Image from 'next/image'
import { Camera, Play, ArrowUpRight } from 'lucide-react'

interface OptimizedImageProps {
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
  aspect?: 'square' | 'video' | 'portrait' | 'wide' | 'hero'
  placeholder?: 'project' | 'team' | 'office' | 'product' | 'abstract' | 'process'
  showOverlay?: boolean
  overlayContent?: React.ReactNode
  priority?: boolean
  sizes?: string
  onClick?: () => void
}

const aspectRatios = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
  hero: 'aspect-[16/9]'
}

const placeholderStyles = {
  project: 'bg-gradient-to-br from-blue-100 via-gray-100 to-blue-50',
  team: 'bg-gradient-to-br from-green-100 via-gray-100 to-green-50',
  office: 'bg-gradient-to-br from-purple-100 via-gray-100 to-purple-50',
  product: 'bg-gradient-to-br from-red-100 via-gray-100 to-red-50',
  abstract: 'bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100',
  process: 'bg-gradient-to-br from-orange-100 via-gray-100 to-orange-50'
}

const placeholderIcons = {
  project: Camera,
  team: Camera,
  office: Camera,
  product: Camera,
  abstract: Play,
  process: ArrowUpRight
}

const placeholderDescriptions = {
  project: {
    title: 'Project Photography',
    description: 'Professional documentation of completed workspace transformations showcasing design impact and functionality'
  },
  team: {
    title: 'Team Photography',
    description: 'Professional headshots and collaboration images highlighting our design experts and company culture'
  },
  office: {
    title: 'Office Environment',
    description: 'Contemporary workspace photography demonstrating innovative furniture solutions and spatial planning'
  },
  product: {
    title: 'Product Showcase',
    description: 'High-resolution Steelcase furniture and custom solutions photography with detailed specifications'
  },
  abstract: {
    title: 'Design Visualization',
    description: 'Abstract design elements and conceptual imagery representing innovation and transformation'
  },
  process: {
    title: 'Process Documentation',
    description: 'Behind-the-scenes photography of design process, installation, and client collaboration moments'
  }
}

export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  aspect = 'video',
  placeholder = 'project',
  showOverlay = false,
  overlayContent,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onClick
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  const Icon = placeholderIcons[placeholder]
  const placeholderInfo = placeholderDescriptions[placeholder]
  
  const containerClasses = `
    relative overflow-hidden rounded-lg group cursor-pointer transition-all duration-500
    ${aspectRatios[aspect]}
    ${onClick ? 'hover:scale-[1.02] hover:shadow-2xl' : ''}
    ${className}
  `

  const renderPlaceholder = () => (
    <div className={`${placeholderStyles[placeholder]} flex flex-col items-center justify-center h-full relative`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Icon and Text */}
      <div className="relative z-10 text-center max-w-xs mx-auto p-6">
        <div className="mb-4 p-4 bg-white/70 backdrop-blur-sm rounded-full inline-flex">
          <Icon className="w-8 h-8 text-gray-600" />
        </div>
        <h3 className="text-sm font-medium text-gray-800 mb-2">
          {placeholderInfo.title}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          {placeholderInfo.description}
        </p>
      </div>
      
      {/* Corner Indicator */}
      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      </div>
    </div>
  )

  const renderImage = () => (
    <div className="relative h-full">
      <Image
        src={src!}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-all duration-700 ${
          imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
      
      {/* Loading State */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-red-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  )

  return (
    <div className={containerClasses} onClick={onClick}>
      {src && !imageError ? renderImage() : renderPlaceholder()}
      
      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {overlayContent}
          </div>
        </div>
      )}
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  )
}

// Specialized Image Components
export function ProjectImage(props: Omit<OptimizedImageProps, 'placeholder'>) {
  return <OptimizedImage {...props} placeholder="project" />
}

export function TeamImage(props: Omit<OptimizedImageProps, 'placeholder'>) {
  return <OptimizedImage {...props} placeholder="team" aspect="portrait" />
}

export function OfficeImage(props: Omit<OptimizedImageProps, 'placeholder'>) {
  return <OptimizedImage {...props} placeholder="office" />
}

export function ProductImage(props: Omit<OptimizedImageProps, 'placeholder'>) {
  return <OptimizedImage {...props} placeholder="product" aspect="square" />
}

export function HeroImage(props: Omit<OptimizedImageProps, 'placeholder'>) {
  return <OptimizedImage {...props} placeholder="abstract" aspect="hero" />
} 