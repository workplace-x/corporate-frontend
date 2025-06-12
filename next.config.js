/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Temporarily disable typed routes to fix Link errors
    // typedRoutes: true,
  },
  images: {
    domains: ['tangraminteriors.com', 'images.unsplash.com', 'cdn.sanity.io', 'ksvfdygosiqaafnxcyou.supabase.co'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    return config
  },
}

module.exports = nextConfig 