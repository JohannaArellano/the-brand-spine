import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { organizationSchema, websiteSchema } from '@/lib/schema'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'The Brand Spine | Identity Governance for Scaling Leaders',
  description:
    'We build the governance architecture that defines how you think, decide, and protect authority, then encode it into an AI-powered operating system called BrandOS.',
  metadataBase: new URL('https://thebrandspine.com'),
  openGraph: {
    title: 'The Brand Spine | Identity Governance for Scaling Leaders',
    description:
      'We build the governance architecture that defines how you think, decide, and protect authority, then encode it into an AI-powered operating system called BrandOS.',
    url: 'https://thebrandspine.com',
    siteName: 'The Brand Spine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Brand Spine | Identity Governance for Scaling Leaders',
    description:
      'We build the governance architecture that defines how you think, decide, and protect authority, then encode it into an AI-powered operating system called BrandOS.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationJsonLd = organizationSchema()
const websiteJsonLd = websiteSchema()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-brand-black text-brand-cream font-sans antialiased">
        {/* Noise texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          }}
        />

        <CursorGlow />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
