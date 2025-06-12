'use client'

import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
  className?: string
  parallax?: boolean
  parallaxSpeed?: number
  stagger?: boolean
  staggerDelay?: number
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  distance = 60,
  threshold = 0.1,
  className = '',
  parallax = false,
  parallaxSpeed = 0.5,
  stagger = false,
  staggerDelay = 100
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  useEffect(() => {
    if (parallax) {
      const handleScroll = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect()
          const scrolled = window.pageYOffset
          const rate = scrolled * parallaxSpeed
          setScrollY(rate)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [parallax, parallaxSpeed])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`
        case 'down':
          return `translateY(-${distance}px)`
        case 'left':
          return `translateX(${distance}px)`
        case 'right':
          return `translateX(-${distance}px)`
        case 'scale':
          return 'scale(0.8)'
        case 'rotate':
          return 'rotate(10deg)'
        default:
          return 'none'
      }
    }

    if (parallax) {
      return `translateY(${scrollY}px)`
    }

    return 'none'
  }

  const getOpacity = () => {
    if (direction === 'fade') {
      return isVisible ? 1 : 0
    }
    return isVisible ? 1 : 0
  }

  const animationStyle = {
    transform: getTransform(),
    opacity: getOpacity(),
    transition: isVisible 
      ? `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      : 'none'
  }

  // Handle staggered animations for child elements
  const processChildren = (children: ReactNode): ReactNode => {
    if (!stagger) return children

    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const childStyle = {
          animationDelay: `${delay + (index * staggerDelay)}ms`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : getTransform(),
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`
        }
        
        return React.cloneElement(child, {
          style: {
            ...(child.props as any)?.style,
            ...childStyle
          }
        } as any)
      }
      return child
    })
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={animationStyle}
    >
      {processChildren(children)}
    </div>
  )
}

// Specialized scroll reveal components for common patterns
export function FadeInUp({ children, className = '', delay = 0 }: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <ScrollReveal direction="up" delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
}

export function StaggeredReveal({ children, className = '', delay = 0 }: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <ScrollReveal stagger staggerDelay={150} delay={delay} className={className}>
      {children}
    </ScrollReveal>
  )
}

export function ParallaxContainer({ children, speed = 0.3, className = '' }: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  return (
    <ScrollReveal parallax parallaxSpeed={speed} className={className}>
      {children}
    </ScrollReveal>
  )
}

// Advanced scroll-triggered counter component
export function AnimatedCounter({ 
  target, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '' 
}: {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      const steps = 60
      const increment = target / steps
      const stepDuration = duration / steps
      
      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        setCount(Math.floor(target * easeOut))
        
        if (currentStep >= steps) {
          setCount(target)
          clearInterval(timer)
        }
      }, stepDuration)
      
      return () => clearInterval(timer)
    }
  }, [isVisible, target, duration])

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// Magnetic hover effect component
export function MagneticHover({ 
  children, 
  strength = 0.3,
  className = '' 
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const elementRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={elementRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

// Smooth scroll component for enhanced navigation
export function SmoothScrollLink({ 
  href, 
  children, 
  className = '',
  offset = 0 
}: {
  href: string
  children: ReactNode
  className?: string
  offset?: number
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const elementPosition = targetElement.offsetTop - offset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
} 