import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Brand Spine | Identity Governance for Scaling Leaders',
  description: 'We build the governance architecture that defines how your brand thinks, decides, and communicates.',
};

export default function Home() {
  return (
    <div>
      <h1>The Brand Spine</h1>
      <p>Identity governance for scaling leaders.</p>
    </div>
  );
}
