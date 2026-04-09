import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request an Intro Conversation | The Brand Spine',
  description:
    'Not a sales call. A mutual decision about fit. Request an intro conversation to explore whether governance architecture is what you need.',
  openGraph: {
    title: 'Request an Intro | The Brand Spine',
    description: 'Request an intro conversation to explore whether governance architecture is what you need.',
    url: 'https://thebrandspine.com/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
