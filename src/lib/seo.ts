import { SITE_CONFIG, FAQS, TESTIMONIALS } from "./constants";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}

export const DEFAULT_SEO: SEOConfig = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: [
    "B2B web design",
    "SaaS website development",
    "digital marketing agency",
    "lead generation websites",
    "conversion optimization",
    "enterprise web development",
    "B2B digital agency",
  ],
  ogType: "website",
};

export const PAGE_SEO: Record<string, SEOConfig> = {
  home: {
    title: `${SITE_CONFIG.name} | B2B Web Design & Digital Marketing`,
    description: "Award-winning web design and digital marketing for B2B, SaaS, and service brands. 340% average lead increase. Book your free strategy session.",
    keywords: ["B2B web design", "SaaS website development", "digital marketing agency", "lead generation", "conversion optimization"],
  },
  services: {
    title: `Services | ${SITE_CONFIG.name}`,
    description: "Strategic web design, development, and digital marketing services for B2B growth. From startups to enterprise, we build websites that generate revenue.",
    keywords: ["B2B website services", "SaaS web development", "enterprise web design", "digital marketing services"],
  },
  webDevelopment: {
    title: `Web Design & Development | ${SITE_CONFIG.name}`,
    description: "High-performance B2B web design and development that converts visitors into qualified leads. AI-optimized, conversion-focused, and built for growth.",
    keywords: ["B2B web development", "SaaS website design", "enterprise web design", "conversion optimization", "AI-optimized websites"],
  },
  websiteOptimization: {
    title: `Website Optimization | ${SITE_CONFIG.name}`,
    description: "Get more leads from traffic you already have. Our optimization program finds conversion killers and fixes them—47% average conversion lift in 90 days.",
    keywords: ["website optimization", "conversion rate optimization", "CRO agency", "SEO optimization", "B2B website optimization"],
  },
  portfolio: {
    title: `Case Studies & Portfolio | ${SITE_CONFIG.name}`,
    description: "See real B2B results: 340% lead increases, $2.3M pipeline generated, and 68% shorter sales cycles. View our client success stories.",
    keywords: ["B2B web design portfolio", "SaaS case studies", "client results", "digital marketing examples"],
  },
  reviews: {
    title: `Client Reviews & Testimonials | ${SITE_CONFIG.name}`,
    description: "What B2B and SaaS leaders say about working with Orbitline Digital Studio. Real testimonials from real clients.",
    keywords: ["B2B agency reviews", "web design testimonials", "client success stories"],
  },
  about: {
    title: `About Us | ${SITE_CONFIG.name}`,
    description: "We're a B2B-focused digital agency that combines strategic thinking with flawless execution. Learn about our team and approach.",
    keywords: ["B2B digital agency", "about Orbitline", "web design team"],
  },
  contact: {
    title: `Contact Us | ${SITE_CONFIG.name}`,
    description: "Ready to accelerate your B2B growth? Book a free strategy session or send us a message. Limited availability.",
    keywords: ["contact", "B2B consultation", "book a call", "free strategy session"],
  },
  privacy: {
    title: `Privacy Policy | ${SITE_CONFIG.name}`,
    description: "Learn how Orbitline Digital Studio collects, uses, and protects your personal information.",
    noIndex: true,
  },
  terms: {
    title: `Terms & Conditions | ${SITE_CONFIG.name}`,
    description: "Read our terms of service and conditions for using our website and services.",
    noIndex: true,
  },
};

// JSON-LD Schema Generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    sameAs: [
      "https://twitter.com/orbitlinedigital",
      "https://linkedin.com/company/orbitlinedigital",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "B2B Web Design & Digital Marketing",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    description: "High-performance web design, development, and digital marketing for B2B, SaaS, and service brands",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "B2B Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Starter",
            description: "For startups and SMBs ready to establish a strong digital foundation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Scale Package",
            description: "For growth-stage companies ready to dominate their market",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Transform",
            description: "Full digital transformation for market leaders",
          },
        },
      ],
    },
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateAggregateRatingSchema() {
  const avgRating = TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0) / TESTIMONIALS.length;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: TESTIMONIALS.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
