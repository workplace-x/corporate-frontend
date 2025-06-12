'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can create an extraordinary workspace that enhances your business and delights your people.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📧</span>
                <span>hello@tangraminteriors.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📞</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📍</span>
                <span>California & Texas Locations</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Start Your Project</h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn bg-white text-gray-900 hover:bg-gray-100 font-semibold"
              >
                Get Started
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 