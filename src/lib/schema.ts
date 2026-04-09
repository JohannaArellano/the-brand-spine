/* eslint-disable @typescript-eslint/no-explicit-any */

export function organizationSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Brand Spine, Inc.',
    url: 'https://thebrandspine.com',
    logo: 'https://thebrandspine.com/logo.png',
    description:
      'We build the governance architecture that defines how you think, decide, and protect authority, then encode it into an AI-powered operating system called BrandOS.',
    sameAs: [
      'https://twitter.com/thebrandspine',
      'https://linkedin.com/company/thebrandspine',
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'Jo Arellano',
        url: 'https://thebrandspine.com/about',
      },
      {
        '@type': 'Person',
        name: 'Brett Moore',
        url: 'https://thebrandspine.com/about',
      },
    ],
    foundingDate: '2026',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'jo@thebrandspine.com',
    },
  }
}

export function websiteSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Brand Spine',
    url: 'https://thebrandspine.com',
    description:
      'Identity Governance for Scaling Leaders - we build the governance architecture that defines how you think, decide, and protect authority.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://thebrandspine.com/search?q={search_term_string}',
      },
      query_input: 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function serviceSchema(
  name: string,
  description: string,
  provider?: string
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'The Brand Spine, Inc.',
      url: 'https://thebrandspine.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'US',
    },
  }
}

export function personSchema(
  name: string,
  jobTitle: string,
  description: string,
  url: string
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url,
    worksFor: {
      '@type': 'Organization',
      name: 'The Brand Spine, Inc.',
      url: 'https://thebrandspine.com',
    },
  }
}

export function professionalServiceSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'The Brand Spine',
    description:
      'Identity governance and BrandOS platform services for scaling leaders',
    url: 'https://thebrandspine.com',
    areaServed: {
      '@type': 'Country',
      name: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'jo@thebrandspine.com',
    },
  }
}

export function articleSchema(
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  url: string
): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'The Brand Spine, Inc.',
      url: 'https://thebrandspine.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thebrandspine.com/logo.png',
      },
    },
  }
}

export function webPageSchema(name: string, description: string, url: string): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'The Brand Spine, Inc.',
      url: 'https://thebrandspine.com',
    },
  }
}
