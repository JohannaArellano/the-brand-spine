import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights | Brand Governance & Identity Infrastructure | The Brand Spine',
  description:
    'Thought leadership on identity infrastructure, brand governance, AI-powered brand systems, and the decision architecture that makes leadership authority compound.',
  openGraph: {
    title: 'Insights | The Brand Spine',
    description:
      'Thought leadership on identity infrastructure, brand governance, AI-powered brand systems, and the decision architecture that makes leadership authority compound.',
    url: 'https://thebrandspine.com/insights',
    type: 'website',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
