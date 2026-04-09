import { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import GlassCard from '@/components/GlassCard'
import { getAllPosts, getPostBySlug, getPostsByCategory } from '@/lib/blog'
import { articleSchema, breadcrumbSchema, personSchema, faqSchema } from '@/lib/schema'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${post.title} | The Brand Spine`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      url: `https://thebrandspine.com/insights/${post.slug}`,
    },
  }
}

function renderMarkdownContent(content: string) {
  const paragraphs = content.split('\n\n').map((para, idx) => {
    if (para.startsWith('## ')) {
      return (
        <h2 key={idx} className="text-2xl font-serif font-bold text-white mt-8 mb-4">
          {para.replace(/^## /, '')}
        </h2>
      )
    }

    const parts = para.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-[#c9a96e]">
            {part.replace(/\*\*/g, '')}
          </strong>
        )
      }
      return part
    })

    return (
      <p key={idx} className="text-gray-300 leading-relaxed mb-4">
        {parts}
      </p>
    )
  })

  return paragraphs
}

function extractFAQ(content: string) {
  const faqMatch = content.match(/## FAQ\n([\s\S]*?)(?=##|$)/m)
  if (!faqMatch) return null

  const faqContent = faqMatch[1]
  const items = faqContent.split(/\n(?=\*\*Q:)/)

  const faqItems = items
    .map((item) => {
      const questionMatch = item.match(/\*\*Q: ([^*]+)\*\*/)
      const answerMatch = item.match(/\*\*A: ([^*]+)\*\*/)

      if (questionMatch && answerMatch) {
        return { question: questionMatch[1], answer: answerMatch[1] }
      }
      return null
    })
    .filter(Boolean) as Array<{ question: string; answer: string }>

  return faqItems.length > 0 ? faqItems : null
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/insights" className="text-[#c9a96e] hover:underline">
            Back to Insights
          </Link>
        </div>
      </main>
    )
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  const faqItems = extractFAQ(post.content)
  const contentWithoutFAQ = post.content.replace(/## FAQ\n[\s\S]*?(?=##|$)/m, '').trim()

  const articleSchemaData = articleSchema(
    post.title,
    post.description,
    post.author,
    post.datePublished,
    post.dateModified,
    `https://thebrandspine.com/insights/${post.slug}`
  )

  const personSchemaData = personSchema(
    post.author,
    'Co-Founder & Strategist',
    'Brand Spine facilitator and BrandOS architect.',
    'https://thebrandspine.com/about'
  )

  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: 'https://thebrandspine.com' },
    { name: 'Insights', url: 'https://thebrandspine.com/insights' },
    { name: post.title, url: `https://thebrandspine.com/insights/${post.slug}` },
  ])

  const faqSchemaData = faqItems ? faqSchema(faqItems) : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaData) }} />
      {faqSchemaData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />}

      <main>
        {/* Article Header */}
        <AnimatedSection className="px-4 md:px-8 pt-32 pb-8 max-w-3xl mx-auto">
          <Link href="/insights" className="text-[#c9a96e] hover:underline mb-8 inline-block text-sm">
            &larr; Back to Insights
          </Link>

          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c9a96e]">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8 pb-8 border-b border-white/10">
            <p className="text-sm">
              By{' '}
              <Link href="/about" className="text-[#c9a96e] hover:underline">
                {post.author}
              </Link>
            </p>
            <span>&middot;</span>
            <time dateTime={post.datePublished} className="text-sm">
              {new Date(post.datePublished).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&middot;</span>
            <span className="text-sm">{post.readTime} min read</span>
            {post.dateModified !== post.datePublished && (
              <>
                <span>&middot;</span>
                <span className="text-xs text-gray-500">
                  Updated{' '}
                  {new Date(post.dateModified).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </>
            )}
          </div>
        </AnimatedSection>

        {/* Article Content */}
        <AnimatedSection className="px-4 md:px-8 py-8 max-w-3xl mx-auto">
          <article className="prose-invert max-w-none">
            {renderMarkdownContent(contentWithoutFAQ)}
          </article>
        </AnimatedSection>

        {/* FAQ Section */}
        {faqItems && (
          <AnimatedSection className="px-4 md:px-8 py-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <GlassCard key={idx} className="p-6">
                  <h3 className="text-lg font-semibold text-[#c9a96e] mb-3">{item.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Author Bio */}
        <AnimatedSection className="px-4 md:px-8 py-16 max-w-3xl mx-auto">
          <GlassCard className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#c9a96e]/20 via-[#c9a96e]/5 to-transparent flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-serif font-bold text-[#c9a96e]">JA</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  <Link href="/about" className="hover:text-[#c9a96e] transition-colors">
                    {post.author}
                  </Link>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Co-founder and strategist at The Brand Spine. Former Senior VP at McCann. Helps scaling leaders build identity governance that makes authority compound instead of fracture.
                </p>
                <Link href="/about" className="text-[#c9a96e] hover:underline text-sm font-medium">
                  Learn more about Jo &rarr;
                </Link>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="px-4 md:px-8 py-16 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/assessment">
              <GlassCard className="h-full p-8 hover:border-[#c9a96e]/50 transition-colors cursor-pointer flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">Take the Governance Assessment</h3>
                  <p className="text-gray-300 text-sm">
                    See where your governance architecture is creating friction.
                  </p>
                </div>
                <div className="text-[#c9a96e] text-sm font-medium mt-4">Start Assessment &rarr;</div>
              </GlassCard>
            </Link>
            <Link href="/contact">
              <GlassCard className="h-full p-8 hover:border-[#c9a96e]/50 transition-colors cursor-pointer flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">Request an Intro Conversation</h3>
                  <p className="text-gray-300 text-sm">
                    Not a sales call. A mutual decision about fit.
                  </p>
                </div>
                <div className="text-[#c9a96e] text-sm font-medium mt-4">Request Conversation &rarr;</div>
              </GlassCard>
            </Link>
          </div>
        </AnimatedSection>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <AnimatedSection className="px-4 md:px-8 py-20 max-w-3xl mx-auto border-t border-white/10">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Related Articles</h2>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/insights/${relatedPost.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#c9a96e] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">{relatedPost.description}</p>
                      </div>
                      <div className="text-[#c9a96e] text-xl group-hover:translate-x-1 transition-transform flex-shrink-0">
                        &rarr;
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </main>
    </>
  )
}
