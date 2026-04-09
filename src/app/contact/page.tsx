'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import SectionHeading from '@/components/SectionHeading'
import GlassCard from '@/components/GlassCard'
import { webPageSchema } from '@/lib/schema'

interface FormData {
  name: string
  email: string
  company: string
  role: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Replace with actual form submission endpoint
      // For now, simulate the submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  const schemaData = webPageSchema(
    'Request an Intro Conversation',
    'Not a sales call. A mutual decision about fit.',
    'https://thebrandspine.com/contact'
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <main>
        {/* Hero Section */}
        <AnimatedSection className="relative min-h-[500px] flex items-center justify-center py-20 px-4 md:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Request an Intro Conversation
            </h1>
            <p className="text-xl text-gray-300 mb-4">Not a sales call. A mutual decision about fit.</p>
            <p className="text-lg text-gray-400">
              If governance infrastructure is what you need, we'll tell you. If it isn't, we'll tell you that too.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection className="px-4 md:px-8 py-20 max-w-2xl mx-auto">
          {submitted && (
            <div className="mb-8 p-6 bg-[#c9a96e]/10 border border-[#c9a96e]/30 rounded-lg">
              <p className="text-[#c9a96e] font-medium">
                Thank you for reaching out. We'll be in touch within 24 hours.
              </p>
            </div>
          )}

          <GlassCard className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-colors"
                  placeholder="Your company name"
                />
              </div>

              {/* Role Field */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-colors"
                  placeholder="e.g., Chief Marketing Officer"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  What brought you here?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-colors resize-none"
                  placeholder="Tell us what's on your mind. What challenges are you facing with your brand?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-[#c9a96e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b896] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Sending...' : 'Request Conversation'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will only be used to contact you about your request.
              </p>
            </form>
          </GlassCard>
        </AnimatedSection>

        {/* Alternative CTA */}
        <AnimatedSection className="px-4 md:px-8 py-16 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Not ready for a conversation?</p>
            <Link
              href="/assessment"
              className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-[#c9a96e]/50 transition-colors font-medium"
            >
              Take the Governance Assessment First
            </Link>
          </div>
        </AnimatedSection>

        {/* Contact Info Section */}
        <AnimatedSection className="px-4 md:px-8 py-20 max-w-2xl mx-auto border-t border-white/10">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-white mb-8">Or reach out directly</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a
                href="mailto:jo@thebrandspine.com"
                className="text-[#c9a96e] hover:underline font-medium"
              >
                jo@thebrandspine.com
              </a>
              <span className="text-gray-500 hidden md:block">Â·</span>
              <a
                href="mailto:brett@thebrandspine.com"
                className="text-[#c9a96e] hover:underline font-medium"
              >
                brett@thebrandspine.com
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  )
}
