import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrandOS | AI-Powered Brand Operating System | The Brand Spine',
  description: 'BrandOS is a three-tier AI operating system that encodes your governance architecture into decision support, drift detection, and voice execution across Claude, ChatGPT, and Gemini.',
  openGraph: {
    title: 'BrandOS | The Brand Spine',
    description: 'BrandOS is a three-tier AI operating system that encodes your governance architecture into decision support, drift detection, and voice execution.',
    url: 'https://thebrandspine.com/brandos',
    type: 'website',
  },
}

export default function BrandOSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
