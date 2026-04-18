'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
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

// ── V2 Posture Descriptions ──────────────────────────────────────────────────

const POSTURE_DESCRIPTIONS: Record<string, string> = {
  Sovereign:
    'You lead through direct authority. When a decision needs to be made, you make it. You take ownership of outcomes, set the direction, and expect the people around you to execute. You don\u2019t wait for consensus because you\u2019ve already run the analysis. Speed and clarity are how you build momentum.',
  Partner:
    'You lead through collaboration. Shared decision-making, mutual input, and co-creation are your default operating mode. You build buy-in before you build momentum. You believe the best outcomes come from bringing the right people into the process, not from making the call alone.',
  Influencer:
    'You lead through shaping. You guide outcomes without needing to own them. You ask the question that reframes the room. You create the conditions for the right decision to happen rather than making it yourself. Your authority comes from insight, not position.',
  Subordinate:
    'You lead through execution and trust. You respect the chain. When someone has earned authority, you give them the room to exercise it. You do your best work inside clear structures with defined accountability. You don\u2019t need to be the one making the call. You need to know the call was made well.',
};

// ── V2 Friction Narratives ───────────────────────────────────────────────────

const FRICTION_NARRATIVES: Record<string, string> = {
  Sovereign:
    'In relationships where you hold final authority, your governance works. The problem shows up in the spaces where you don\u2019t.\n\nWhen you operate as a Sovereign in a partnership where authority is shared, the other person feels overridden, not led. When you make the call in a room where your role is to influence, not decide, people experience your clarity as control. The friction isn\u2019t your decisiveness. It\u2019s that you enforce the same way regardless of where you sit on the authority gradient.\n\nThe cost adds up quietly. Partners stop bringing you into decisions early. Collaborators edit themselves around you instead of engaging directly. You start hearing about disagreements after the fact instead of during the conversation. None of this looks like a crisis. It looks like people deferring to you. But deference and alignment are not the same thing, and the gap between them is where governance breaks down.',
  Partner:
    'In partnership contexts where authority is shared, your governance works. The problem shows up in the spaces where it shouldn\u2019t.\n\nWhen you operate as a Partner in relationships where you actually have final authority, decisions slow down. You build consensus for calls that should have been made three meetings ago. When you\u2019re in an advisory role where your job is to influence without deciding, you over-invest in the outcome because your instinct is to co-own it. The friction isn\u2019t your collaborative nature. It\u2019s that you lead with collaboration even when the relationship structure doesn\u2019t call for it.\n\nThe cost shows up as speed. Opportunities that required a fast call got the full buy-in process instead. Team members who needed direction got a collaborative conversation that felt like ambiguity. You\u2019ve probably had the experience of someone saying \u201Cjust tell me what to do\u201D and feeling like they were missing the point. They weren\u2019t missing the point. They were telling you that in that moment, they needed a directive, not a dialogue.',
  Influencer:
    'In advisory and influence contexts, your governance works. The problem shows up when the situation demands something more direct.\n\nWhen you\u2019re in a position of final authority and you default to shaping rather than deciding, the people around you don\u2019t know where you stand. When you guide a conversation toward the right answer instead of stating it, your team may experience that as uncertainty rather than empowerment. When a direct report needs to be corrected, influence mode softens the message enough that it doesn\u2019t land. The friction isn\u2019t your insight. It\u2019s that you apply influence in contexts that require enforcement.\n\nThe cost shows up as accountability gaps. The decision you shaped but didn\u2019t own gets reversed when you leave the room. The correction you implied but didn\u2019t state gets treated as optional. You\u2019ve probably had the experience of a team executing something differently than you intended and wondering how they missed it. They didn\u2019t miss it. You influenced when the moment required directing.',
  Subordinate:
    'In contexts where someone else holds legitimate authority, your governance works. The problem shows up when the structure shifts and you don\u2019t shift with it.\n\nWhen you hold final authority but default to deferring upward or seeking validation, decisions stall waiting for approval that was already yours to give. When you\u2019re in a partnership where authority is shared but you habitually yield, your perspective gets underweighted and the partnership becomes lopsided. When the moment calls for you to step in directly and you wait for permission or consensus first, the window closes. The friction isn\u2019t your respect for structure. It\u2019s that you defer even when the structure has placed you in charge.\n\nThe cost shows up as missed authority moments. The room looked to you for direction and you looked to someone else. The decision that needed your conviction got your compliance instead. You\u2019ve probably had the experience of knowing exactly what should happen but waiting for someone else to say it first. That gap between knowing and acting is where governance breaks down.',
};

// ── V2 Email Gate Copy (posture-specific) ────────────────────────────────────

const EMAIL_GATE_COPY: Record<string, string> = {
  Sovereign:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates resistance, and the one structural pattern behind the friction you\u2019re already sensing.',
  Partner:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates decision bottlenecks, and the one structural pattern behind the friction you\u2019re already sensing.',
  Influencer:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates ambiguity, and the one structural pattern behind the friction you\u2019re already sensing.',
  Subordinate:
    'Enter your email for your full Governance Friction Report \u2014 it goes deeper into where your governance works, where it creates passivity, and the one structural pattern behind the friction you\u2019re already sensing.',
};

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<ResultData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [emailForReport, setEmailForReport] = useState('');
  const [firstNameForReport, setFirstNameForReport] = useState('');
  const [reportRequested, setReportRequested] = useState(false);
  const [reportDownloaded, setReportDownloaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('assessmentResults');
    if (!stored) {
      router.push('/assessment');
      return;
    }

    const data = JSON.parse(stored) as ResultData;
    setResults(data);

    // Pre-fill from assessment contact info
    if (data.contact?.email) setEmailForReport(data.contact.email);
    if (data.contact?.firstName) setFirstNameForReport(data.contact.firstName);

    setIsLoading(false);
  }, [router]);

  const handleReportRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration point: send email + first name to email service
    // For now, mark as requested and simulate download
    setReportRequested(true);
    setTimeout(() => {
      setReportDownloaded(true);
    }, 1500);
  };

  if (isLoading || !results) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="animate-pulse">Loading your results...</div>
      </div>
    );
  }

  const posture = results.dominantPosture || 'Sovereign';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-16 sm:py-24">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto">

          {/* ── Posture Label + Description ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-8 sm:p-12 mb-12 border-l-4 border-[#c9a96e]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Your Governance Posture
              </h2>
              <h3 className="text-2xl font-semibold text-[#c9a96e] mb-6">
                {posture}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {POSTURE_DESCRIPTIONS[posture]}
              </p>
            </GlassCard>
          </motion.div>

          {/* ── Where Your Friction Lives ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8">
                Where Your Friction Lives
              </h2>
              <GlassCard className="p-8 sm:p-12">
                {FRICTION_NARRATIVES[posture].split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-gray-300 leading-relaxed mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </GlassCard>
            </div>
          </motion.div>

          {/* ── Diagnostic Question (shared across all postures) ──────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-8 sm:p-12 mb-12 bg-white/5 border-white/10">
              <p className="text-lg text-gray-300 italic leading-relaxed">
                The question is not whether your values are right. The question
                is whether the way you enforce them changes when your authority
                position changes. Most leaders enforce the same way everywhere.
                That is where governance friction lives.
              </p>
            </GlassCard>
          </motion.div>

          {/* ── Light CTA (always visible) ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <div className="mb-12 text-center">
              <p className="text-gray-400 mb-6">
                If this described something you recognize, the conversation is
                about whether it&apos;s worth building the structure to fix it.
              </p>
              <a
                href="https://calendly.com/the-brand-spine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-[#c9a96e]/40 text-[#c9a96e] font-semibold rounded-lg hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all"
              >
                Schedule a Conversation
              </a>
            </div>
          </motion.div>

          {/* ── Email Gate for Full Report ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-[#c9a96e]/20 to-transparent p-8 sm:p-12 rounded-lg border border-[#c9a96e]/30 mb-12">
              <h3 className="text-2xl font-bold mb-4">
                See how this plays out across all four authority positions.
              </h3>
              <p className="text-gray-300 mb-8">
                {EMAIL_GATE_COPY[posture]}
              </p>

              {!reportRequested ? (
                <form onSubmit={handleReportRequest} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstNameForReport}
                    onChange={(e) => setFirstNameForReport(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]/60"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={emailForReport}
                    onChange={(e) => setEmailForReport(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e]/60"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors whitespace-nowrap"
                  >
                    Download Report
                  </button>
                </form>
              ) : !reportDownloaded ? (
                <div className="text-center py-4">
                  <div className="animate-pulse text-[#c9a96e]">
                    Preparing your report...
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-[#c9a96e] font-semibold mb-2">
                    Your Governance Friction Report is ready.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Check your inbox at{' '}
                    <span className="text-gray-300">{emailForReport}</span>
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* ── Stronger CTA (appears after report download) ──────────── */}
          {reportDownloaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <p className="text-gray-300 mb-6 text-lg">
                  You&apos;ve seen where the friction lives. The next question is
                  whether you want to keep navigating it by instinct or build the
                  structure that resolves it.
                </p>
                <a
                  href="https://calendly.com/the-brand-spine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b276] transition-colors text-lg"
                >
                  See If This Is Yours to Solve
                </a>
              </div>
            </motion.div>
          )}

          {/* ── Footer ────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm"
          >
            <p>
              {results.contact.firstName}, your governance posture results are
              saved for your reference.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
