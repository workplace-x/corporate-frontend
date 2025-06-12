'use client'

import Image from 'next/image'
import { useState } from 'react'

interface EmployeePhotoProps {
  employee: {
    id: string
    name: string
    title: string
    department: string
    headshotUrl?: string
  }
  size: string
  position: string
  delay: string
}

export default function EmployeePhoto({ employee, size, position, delay }: EmployeePhotoProps) {
  const [imageError, setImageError] = useState(false)

  const initials = employee.name.split(' ').map(n => n[0]).join('')

  return (
    <div
      className={`absolute ${position} ${size} rounded-full overflow-hidden border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-500 ${delay}`}
      title={`${employee.name} - ${employee.title}`}
    >
      {employee.headshotUrl && !imageError ? (
        <Image
          src={employee.headshotUrl}
          alt={`${employee.name}, ${employee.title}`}
          width={64}
          height={64}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        // Fallback for employees without photos or failed images
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
          <span className="text-white font-medium text-xs">
            {initials}
          </span>
        </div>
      )}
      
      {/* Hover bio card */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none min-w-max">
        <h4 className="font-medium text-gray-900 text-sm">{employee.name}</h4>
        <p className="text-xs text-gray-600">{employee.title}</p>
        <p className="text-xs text-gray-500">{employee.department}</p>
      </div>
    </div>
  )
} 