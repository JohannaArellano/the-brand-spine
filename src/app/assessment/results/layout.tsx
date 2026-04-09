import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Governance Friction Report | The Brand Spine',
  description: 'Discover your leadership governance posture and where friction lives in your decision-making across different relationship contexts.',
  openGraph: {
    title: 'Your Governance Friction Report | The Brand Spine',
    description: 'Personalized insights about your leadership governance style and friction points.',
    type: 'website',
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
