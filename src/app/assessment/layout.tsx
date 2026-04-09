import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Governance Assessment | Where Is Your Governance Leaking? | The Brand Spine',
  description: 'Most leaders enforce the same way in every relationship. That works until it doesn\'t. This 6-minute assessment shows you where the friction lives.',
  openGraph: {
    title: 'Governance Assessment | The Brand Spine',
    description: 'Discover where your governance is leaking with our proprietary behavioral assessment.',
    type: 'website',
  },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
