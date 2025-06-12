'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AIInsightsSection() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">AI-Powered Insights & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get intelligent recommendations, instant answers, and access to cutting-edge design insights from our experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-4">Smart Assistance</h3>
            <p className="text-gray-600">
              Get instant answers about our services, projects, and design capabilities with our AI assistant
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-4">Project Intelligence</h3>
            <p className="text-gray-600">
              Explore our portfolio with intelligent filtering, recommendations, and detailed case studies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-4">Design Insights</h3>
            <p className="text-gray-600">
              Stay informed about the latest workplace design trends, research, and industry innovations
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn btn-primary inline-flex items-center space-x-2">
            <span>Read Design Insights</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 