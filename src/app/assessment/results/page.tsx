'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';

type GovernancePosition = 'Sovereign' | 'Partner' | 'Influencer' | 'Subordinate' | null;
type FrictionType = string;

interface ResultData {
  dominantPosture: GovernancePosition;
  diagnosticAnswers: Array<{ position: GovernancePosition; friction: FrictionType }>;
  q9: string;
  q10: string | string[];
  q11: string;
  contact: { firstName: string; lastName: string; email: string; company: string };
}

interface FrictionPoint {
  context: string;
  description: string;
}

const POSTURE_DESCRIPTIONS: Record<GovernancePosition, string> = {
  Sovereign: "You lead with decisive clarity. When you hold authority, decisions are made efficiently and expectations are clear. Your team rarely wonders where you stand.",
  Partner: "You lead through collaboration. Shared decision-making, mutual input, and co-creation are your default operating mode. You build buy-in before you build momentum.",
  Influencer: "You lead through calibrated influence. You shape outcomes indirectly -- through questions, reframing, and strategic positioning rather than direct authority.",
  Subordinate: "You lead by creating space. You defer to context, prioritize relationships, and avoid unnecessary friction. Your leadership shows up in restraint rather than assertion.",
};

const FRICTION_CONTEXT_MAP: Record<string, string> = {
  'friction-partner': 'In shared authority relationships',
  'friction-subordinate': 'When you lack final authority',
  'avoidant': 'When avoiding direct communication',
  'mismatch': 'In intimate partnerships',
  'overcorrecting': 'With professional boundaries',
};

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<ResultData | null>(null);
  const [frictionPoints, setFrictionPoints] = useState<FrictionPoint[]>([]);
  const [wtpTier, setWtpTier] = useState<'Tier1' | 'Tier2' | 'Tier3'>('Tier2');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('assessmentResults');
    if (!stored) {
      router.push('/assessment');
      return;
    }

    const data = JSON.parse(stored) as ResultData;
    setResults(data);

    // Determine friction points
    const frictions: FrictionPoint[] = [];
    const posture = data.dominantPosture;

    // Analyze diagnostic answers for friction
    data.diagnosticAnswers.forEach((ans, idx) => {
      if (ans.friction === 'friction') {
        const contexts = {
          0: 'In partnership contexts where authority is shared',
          1: 'When delegating to direct reports',
          2: 'When challenging higher authority',
          3: 'In developmental moments with your team',
          4: 'In intimate partnership decisions',
          5: 'With clients or customers you advise',
          6: 'In collective decision-making settings',
          7: 'When adapting your leadership approach',
        };
        frictions.push({
          context: contexts[idx] || 'In various contexts',
          description: `Your instinct to lead with ${posture === 'Sovereign' ? 'decisive authority' : posture === 'Partner' ? 'collaboration' : posture === 'Influencer' ? 'influence' : 'restraint'} creates friction when the relationship structure does not support it.`,
        });
      } else if (ans.friction === 'under') {
        frictions.push({
          context: `In ${['partnership', 'delegation', 'challenge'][idx] || 'various'} contexts`,
          description: `You under-assert your perspective, defaulting to reservation when the situation may call for more clarity.`,
        });
      }
    });

    // Take only top 2-3 friction points
    setFrictionPoints(frictions.slice(0, 3));

    // Determine WTP tier
    const hasInvestedLeadership = Array.isArray(data.q10) ? data.q10.length > 0 && data.q10.some(v => v !== 'D') : data.q10 !== 'D';
    const wtp = data.q11;

    if (hasInvestedLeadership && (wtp === 'A' || wtp === 'B')) {
      setWtpTier('Tier1');
    } else if (wtp === 'C' || (!hasInvestedLeadership && (wtp === 'A' || wtp === 'B'))) {
      setWtpTier('Tier2');
    } else {
      setWtpTier('Tier3');
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading || !results) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="animate-pulse">Loading your results...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-16 sm:py-24">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <SectionHeading>Your Governance Friction Report</SectionHeading>
            <p className="text-lg text-gray-400 mt-6">
              Here is where your leadership style creates friction -- and where it thrives.
            </p>
          </div>

          {/* Primary Posture */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <GlassCard className="p-8 sm:p-12 mb-12 border-l-4 border-[#c9a96e]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Governance Posture</h2>
              <h3 className="text-2xl font-semibold text-[#c9a96e] mb-6">{results.dominantPosture}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {POSTURE_DESCRIPTIONS[results.dominantPosture]}
              </p>
            </GlassCard>
          </motion.div>

          {/* Friction Points */}
          {frictionPoints.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8">Where Your Friction Lives</h2>
                <div className="space-y-4">
                  {frictionPoints.map((point, idx) => (
                    <GlassCard key={idx} className="p-6 sm:p-8">
                      <h3 className="font-semibold text-[#c9a96e] mb-2">{point.context}</h3>
                      <p className="text-gray-300 leading-relaxed">{point.description}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Diagnostic Question */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <GlassCard className="p-8 sm:p-12 mb-12 bg-white/5 border-white/10">
              <p className="text-lg text-gray-300 italic leading-relaxed">
                The question is not whether your values are right. The question is whether the way you enforce them changes when your authority position changes. Most leaders enforce the same way everywhere. That is where governance friction lives.
              </p>
            </GlassCard>
          </motion.div>

          {/* CTA Based on WTP Tier */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="bg-gradient-to-r from-[#c9a96e]/20 to-transparent p-8 sm:p-12 rounded-lg border border-[#c9a96e]/30">
              {wtpTier === 'Tier1' && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Build Your Governance Architecture?</h3>
                  <p className="text-gray-300 mb-8">
                    You have clarity about leadership and you are ready to make it explicit. Let us show you how to encode your decision-making so it scales with your organization.
                  </p>
                  <a
                    href="https://calendly.com/the-brand-spine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors"
                  >
                    Schedule a Conversation
                  </a>
                </div>
              )}

              {wtpTier === 'Tier2' && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Go Deeper Into Your Governance</h3>
                  <p className="text-gray-300 mb-8">
                    Join leaders who are making their governance explicit. We send a weekly insight on leadership clarity, decision-making architecture, and how to operate more effectively across different authority contexts.
                  </p>
                  <button
                    onClick={() => {
                      // Email signup integration would go here
                      alert('Email signup form would appear here');
                    }}
                    className="inline-block px-8 py-4 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors"
                  >
                    Join the Mailing List
                  </button>
                </div>
              )}

              {wtpTier === 'Tier3' && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                  <p className="text-gray-300 mb-8">
                    As your understanding of governance deepens, we will have insights and frameworks that might help. We publish monthly on leadership clarity and decision-making architecture.
                  </p>
                  <button
                    onClick={() => {
                      // Email signup integration would go here
                      alert('Email signup form would appear here');
                    }}
                    className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-colors"
                  >
                    Get Monthly Insights
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm"
          >
            <p>
              {results.contact.firstName}, your assessment results have been saved to{' '}
              <span className="font-medium text-gray-400">{results.contact.email}</span>
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
