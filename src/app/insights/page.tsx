import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getCategories } from '@/lib/blog'
import AnimatedSection from '@/components/AnimatedSection'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Insights | The Brand Spine',
  description: 'Strategic perspectives on identity governance, brand architecture, and scaling leadership with clarity.',
}

export default function InsightsPage() {
  const posts = getAllPosts()
  const categories = getCategories()

  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedSection className="section-container section-spacing pt-32">
        <SectionHeading
          eyebrow="INSIGHTS"
          title="Perspectives on Identity Governance"
          className="mb-16"
        />
        <p className="text-lg text-white/70 max-w-2xl mb-12">
          Strategic thinking on brand architecture, governance systems, and the infrastructure behind leaders who scale without losing signal.
        </p>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-8">
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="text-sm text-gold/80 uppercase tracking-wider mr-2 self-center">Filter:</span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 border border-gold/30 text-sm text-white/70 rounded-full hover:border-gold/60 hover:text-white transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group block p-8 border border-white/10 rounded-lg hover:border-gold/40 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-gold/70 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-white/30">|</span>
                <span className="text-xs text-white/40">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-gold/90 transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30">
                  {post.author} -- {post.datePublished}
                </span>
                <span className="text-gold/60 text-sm group-hover:text-gold group-hover:translate-x-1 transition-all">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>
    </main>
  )
}
