export const SITE_CONFIG = {
  name: "Website Optimax",
  tagline: "Award-Winning Digital Marketing & Web Development",
  description: "High-performance web design, development, and digital marketing for B2B, SaaS, and service brands. We build websites that generate qualified leads and revenue.",
  url: "https://websiteoptimax.com",
  email: "info@websiteoptimax.com",
  phone: "+1 (346) 626-8322",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_DROPDOWN = [
  { label: "All Services", href: "/services", description: "Overview of our service offerings" },
  { label: "Web Development", href: "/web-development", description: "High-performance websites for B2B brands" },
  { label: "Website Optimization", href: "/website-optimization", description: "Convert more visitors into customers" },
  { label: "AI Agent Development", href: "/ai-agent", description: "Automate your business with AI" },
];

export const FOOTER_LINKS = {
  services: [
    // { label: "Web Design", href: "/services#design" },
    { label: "Web Development", href: "/web-development" },
    { label: "Website Optimization", href: "/website-optimization" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const PAIN_POINTS = [
  {
    title: "Your website isn't generating leads",
    description: "Traffic comes in, but qualified leads don't follow. Your competitors are winning deals you should be closing.",
    icon: "AlertTriangle",
  },
  {
    title: "Outdated design hurts credibility",
    description: "B2B buyers judge your capability by your website. An old design signals an outdated company.",
    icon: "TrendingDown",
  },
  {
    title: "Slow performance kills conversions",
    description: "Every second of delay costs you 7% in conversions. Enterprise buyers won't wait.",
    icon: "Clock",
  },
  {
    title: "Poor mobile experience",
    description: "65% of B2B research happens on mobile. If your site isn't optimized, you're invisible.",
    icon: "Smartphone",
  },
];

export const CONSEQUENCES = [
  "Losing enterprise deals to competitors with better digital presence",
  "Wasted marketing spend on traffic that doesn't convert",
  "Sales team struggling with unqualified leads",
  "Damaged brand perception in your market",
];

export const SOLUTIONS = [
  {
    title: "Strategic Web Design",
    description: "Conversion-focused design that positions you as the industry leader and drives action.",
    icon: "Target",
  },
  {
    title: "High-Performance Development",
    description: "Lightning-fast, secure, and scalable websites built for enterprise-grade reliability.",
    icon: "Zap",
  },
  {
    title: "B2B Lead Generation",
    description: "Strategic funnels that attract, qualify, and convert your ideal customers.",
    icon: "BarChart3",
  },
  {
    title: "Data-Driven Optimization",
    description: "Continuous A/B testing and analytics to maximize your marketing ROI.",
    icon: "Smartphone",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We dive deep into your business, market, and goals to craft a winning digital strategy.",
    duration: "Week 1",
  },
  {
    step: 2,
    title: "Design & Architecture",
    description: "Custom designs and technical blueprints that align with your brand and conversion goals.",
    duration: "Week 2-3",
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Pixel-perfect development with rigorous QA across all devices and browsers.",
    duration: "Week 4-6",
  },
  {
    step: 4,
    title: "Launch & Optimize",
    description: "Strategic launch with ongoing optimization to continuously improve results.",
    duration: "Ongoing",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Website Optimax transformed our digital presence. Lead quality improved 340% and our sales cycle shortened by 3 weeks.",
    author: "Sarah Mitchell",
    role: "VP Marketing, TechFlow SaaS",
    image: "/testimonials/sarah.jpg",
    rating: 5,
    metric: "+340% Lead Quality",
  },
  {
    quote: "They didn't just build a website—they built a revenue engine. Best investment we've made in 5 years.",
    author: "Michael Chen",
    role: "CEO, GrowthLabs",
    image: "/testimonials/michael.jpg",
    rating: 5,
    metric: "$2.3M Pipeline Generated",
  },
  {
    quote: "Finally, a team that understands B2B. Our website now books 50+ qualified demos per month.",
    author: "Emma Rodriguez",
    role: "CMO, ScaleUp Agency",
    image: "/testimonials/emma.jpg",
    rating: 5,
    metric: "50+ Demos/Month",
  },
];

export const FAQS = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in B2B, SaaS, and professional service companies. Our deep expertise in these sectors means we understand complex sales cycles, multiple stakeholders, and the importance of building trust through your digital presence.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects are completed within 6-8 weeks. This includes discovery, design, development, and launch. For larger enterprise projects, timelines may extend to 10-12 weeks. We also offer accelerated timelines for urgent needs.",
  },
  {
    question: "What makes Website Optimax different from other agencies?",
    answer: "We're not just designers—we're conversion architects. Every decision we make is backed by data and focused on generating measurable business results. Plus, our B2B specialization means we speak your language and understand your buyers.",
  },
  {
    question: "What's the investment range?",
    answer: "Projects start at $15,000 for focused landing page systems and range up to $75,000+ for comprehensive digital transformations. We also offer performance-based pricing for qualified clients. Book a call to get a custom quote.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. We offer monthly retainer packages that include performance monitoring, A/B testing, content updates, and continuous optimization. Most clients see their best ROI improvements in months 3-6 of our partnership.",
  },
];

export const STATS = [
  { value: "340%", label: "Avg. Lead Increase" },
  { value: "127+", label: "B2B Brands Served" },
  { value: "98%", label: "Client Retention" },
  { value: "<1.5s", label: "Avg. Load Time" },
];

export const SERVICES = [
  {
    title: "Growth Starter",
    price: "$15,000",
    description: "For startups and SMBs ready to establish a strong digital foundation",
    features: [
      "5-8 page custom website",
      "Mobile-first responsive design",
      "SEO foundation & analytics",
      "Lead capture system",
      "CRM integration",
      "60-day optimization support",
    ],
    popular: false,
  },
  {
    title: "Scale Package",
    price: "$35,000",
    description: "For growth-stage companies ready to dominate their market",
    features: [
      "10-20 page custom website",
      "Advanced conversion architecture",
      "Full SEO & content strategy",
      "Marketing automation setup",
      "A/B testing framework",
      "90-day optimization program",
      "Dedicated success manager",
    ],
    popular: true,
  },
  {
    title: "Enterprise Transform",
    price: "$75,000+",
    description: "Full digital transformation for market leaders",
    features: [
      "Unlimited pages & features",
      "Custom application development",
      "Multi-market/language support",
      "Advanced analytics & BI",
      "Enterprise integrations",
      "12-month growth partnership",
      "Quarterly strategy reviews",
    ],
    popular: false,
  },
];

export const PORTFOLIO_ITEMS = [
  {
    title: "TechFlow SaaS Platform",
    category: "SaaS",
    image: "/portfolio/techflow.jpg",
    result: "+340% conversions",
    description: "Complete digital transformation that tripled their enterprise trial signups.",
  },
  {
    title: "GrowthLabs Agency",
    category: "B2B Services",
    image: "/portfolio/growthlabs.jpg",
    result: "$2.3M pipeline",
    description: "Lead generation engine that books 50+ qualified calls per month.",
  },
  {
    title: "CloudSecure Enterprise",
    category: "Enterprise SaaS",
    image: "/portfolio/fitpro.jpg",
    result: "68% shorter sales cycle",
    description: "Enterprise website redesign that accelerated deal velocity.",
  },
];

export const COMPANY_VALUES = [
  {
    title: "Results Over Everything",
    description: "We measure success by your revenue impact, not vanity metrics.",
  },
  {
    title: "Strategic Partnership",
    description: "We're an extension of your team, invested in your long-term success.",
  },
  {
    title: "Relentless Optimization",
    description: "Launch is just the beginning. We continuously improve performance.",
  },
  {
    title: "Transparent Communication",
    description: "You'll always know what we're doing, why, and what results to expect.",
  },
];
