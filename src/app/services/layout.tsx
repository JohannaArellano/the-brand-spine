import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | The Brand Spine: Governance Architecture + BrandOS',
  description: 'Two deliverables that work as one system. The Brand Spine defines your governance architecture. BrandOS encodes it into an AI operating system with three tiers.',
  openGraph: {
    title: 'Services | The Brand Spine',
    description: 'Two deliverables that work as one system. The Brand Spine defines your governance architecture. BrandOS encodes it into an AI operating system with three tiers.',
    url: 'https://thebrandspine.com/services',
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
