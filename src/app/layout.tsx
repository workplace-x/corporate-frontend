import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Tangram Interiors | Transforming Spaces, Inspiring Performance',
  description: 'Premier interior design firm specializing in workplace strategy, contract furniture, and technology integration. Since 1964, we\'ve transformed 1,800+ spaces nationwide.',
  keywords: 'interior design, workplace strategy, contract furniture, Steelcase partner, office design, healthcare design, education design',
  authors: [{ name: 'Tangram Interiors' }],
  openGraph: {
    title: 'Tangram Interiors | Transforming Spaces, Inspiring Performance',
    description: 'Premier interior design firm specializing in workplace strategy, contract furniture, and technology integration.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangram Interiors | Transforming Spaces, Inspiring Performance',
    description: 'Premier interior design firm specializing in workplace strategy, contract furniture, and technology integration.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-primary text-gray-900 bg-white antialiased">
        <Header />
        
        {children}
        
        <Footer />
        
        {/* Simple Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tangram = {
                version: '2.0.0',
                initialized: Date.now()
              };
            `
          }}
        />
      </body>
    </html>
  )
} 