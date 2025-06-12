import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Filter, Grid3X3, Rows3, Maximize2 } from 'lucide-react'
import OptimizedImage, { ProjectImage, OfficeImage, ProductImage } from './OptimizedImage'

interface GalleryImage {
  id: string
  src?: string
  alt: string
  title?: string
  description?: string
  category?: string
  aspect?: 'square' | 'video' | 'portrait' | 'wide' | 'hero'
  placeholder?: 'project' | 'team' | 'office' | 'product' | 'abstract' | 'process'
}

interface ImageGalleryProps {
  images: GalleryImage[]
  layout?: 'grid' | 'masonry' | 'carousel'
  columns?: 2 | 3 | 4
  showFilter?: boolean
  showLightbox?: boolean
  className?: string
}

export default function ImageGallery({
  images,
  layout = 'grid',
  columns = 3,
  showFilter = true,
  showLightbox = true,
  className = ''
}: ImageGalleryProps) {
  const [filteredImages, setFilteredImages] = useState(images)
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [layoutMode, setLayoutMode] = useState(layout)

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(images.map(img => img.category).filter((cat): cat is string => Boolean(cat))))]

  // Filter images
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(images)
    } else {
      setFilteredImages(images.filter(img => img.category === activeFilter))
    }
  }, [activeFilter, images])

  const handleFilter = (category: string) => {
    setActiveFilter(category)
  }

  const openLightbox = (index: number) => {
    if (showLightbox) {
      setLightboxIndex(index)
    }
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return
    
    const newIndex = direction === 'prev' 
      ? (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      : (lightboxIndex + 1) % filteredImages.length
    
    setLightboxIndex(newIndex)
  }

  const getGridClasses = () => {
    const baseClasses = 'grid gap-6'
    switch (columns) {
      case 2:
        return `${baseClasses} grid-cols-1 md:grid-cols-2`
      case 3:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
      case 4:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
      default:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
    }
  }

  const getMasonryClasses = () => {
    return 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
  }

  const renderImage = (image: GalleryImage, index: number) => {
    const ImageComponent = image.placeholder === 'office' ? OfficeImage : 
                          image.placeholder === 'product' ? ProductImage : 
                          ProjectImage

    return (
      <div 
        key={image.id} 
        className={`${layoutMode === 'masonry' ? 'break-inside-avoid mb-6' : ''} group`}
        onClick={() => openLightbox(index)}
      >
        <ImageComponent
          src={image.src}
          alt={image.alt}
          aspect={image.aspect}
          showOverlay={true}
          overlayContent={
            <div>
              {image.title && (
                <h3 className="text-lg font-medium mb-2">{image.title}</h3>
              )}
              {image.description && (
                <p className="text-sm opacity-90">{image.description}</p>
              )}
              {image.category && (
                <div className="mt-3">
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              )}
            </div>
          }
          className="w-full h-auto"
        />
      </div>
    )
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Controls */}
      {(showFilter || true) && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Filter */}
          {showFilter && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleFilter(category)}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Layout Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Layout:</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-2 rounded transition-colors ${
                  layoutMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-400'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('masonry')}
                className={`p-2 rounded transition-colors ${
                  layoutMode === 'masonry' ? 'bg-white shadow-sm' : 'text-gray-400'
                }`}
              >
                <Rows3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className={layoutMode === 'masonry' ? getMasonryClasses() : getGridClasses()}>
        {filteredImages.map((image, index) => renderImage(image, index))}
      </div>

      {/* Results Count */}
      <div className="text-center text-sm text-gray-500">
        Showing {filteredImages.length} of {images.length} images
      </div>

      {/* Lightbox */}
      {showLightbox && lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 text-white/80 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 text-white/80 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] mx-auto p-6">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              <OptimizedImage
                src={filteredImages[lightboxIndex]?.src}
                alt={filteredImages[lightboxIndex]?.alt || ''}
                aspect="hero"
                className="w-full h-auto max-h-[70vh]"
                priority
              />
              
              {/* Image Info */}
              {(filteredImages[lightboxIndex]?.title || filteredImages[lightboxIndex]?.description) && (
                <div className="p-6 bg-white">
                  {filteredImages[lightboxIndex]?.title && (
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {filteredImages[lightboxIndex].title}
                    </h3>
                  )}
                  {filteredImages[lightboxIndex]?.description && (
                    <p className="text-gray-600">
                      {filteredImages[lightboxIndex].description}
                    </p>
                  )}
                  {filteredImages[lightboxIndex]?.category && (
                    <div className="mt-4">
                      <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {filteredImages[lightboxIndex].category}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
            {lightboxIndex + 1} of {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  )
}

// Specialized Gallery Components
export function ProjectGallery(props: Omit<ImageGalleryProps, 'layout'>) {
  return <ImageGallery {...props} layout="masonry" />
}

export function ProductGallery(props: Omit<ImageGalleryProps, 'layout'>) {
  return <ImageGallery {...props} layout="grid" columns={4} />
}

export function OfficeGallery(props: Omit<ImageGalleryProps, 'layout'>) {
  return <ImageGallery {...props} layout="grid" columns={3} />
} 