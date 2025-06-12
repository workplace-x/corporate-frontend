'use client'

import React from 'react'
import { motion } from 'framer-motion'

const locations = [
  {
    name: "Los Angeles",
    state: "California", 
    description: "Our flagship showroom in the heart of LA"
  },
  {
    name: "Fresno", 
    state: "California",
    description: "Central Valley operations and design center"
  },
  {
    name: "Dallas",
    state: "Texas", 
    description: "Expanding our reach in the Texas market"
  }
]

export default function LocationsSection() {
  return (
    <div className="section-padding text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Locations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multiple showrooms across California and Texas to serve you better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center glass-effect rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-2">{location.name}</h3>
              <p className="text-lg text-gray-300 mb-4">{location.state}</p>
              <p className="text-gray-400">{location.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
            Find Your Nearest Location
          </button>
        </motion.div>
      </div>
    </div>
  )
} 