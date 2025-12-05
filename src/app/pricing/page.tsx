import { Metadata } from "next";
import { PricingHero } from "@/sections/pricing/PricingHero";
import { PricingTiers } from "@/sections/pricing/PricingTiers";
import { PricingComparison } from "@/sections/pricing/PricingComparison";
import { PricingTestimonials } from "@/sections/pricing/PricingTestimonials";
import { PricingFAQ } from "@/sections/pricing/PricingFAQ";
import { PricingCTA } from "@/sections/pricing/PricingCTA";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { WebPricing } from "@/components/pricing/WebPricing";

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Orbitline B2B Web Design Services",
  description: "High-performance web design and development for B2B and SaaS companies",
  offers: [
    {
      "@type": "Offer",
      name: "Growth Starter",
      price: "15000",
      priceCurrency: "USD",
      description: "5-8 page custom website for startups and SMBs",
    },
    {
      "@type": "Offer",
      name: "Scale Package",
      price: "35000",
      priceCurrency: "USD",
      description: "10-20 page custom website for growth-stage companies",
    },
    {
      "@type": "Offer",
      name: "Enterprise Transform",
      price: "75000",
      priceCurrency: "USD",
      description: "Full digital transformation for market leaders",
    },
  ],
};

export const metadata: Metadata = genMeta({
  title: "Pricing | B2B Web Design Investment Plans | Orbitline",
  description: "Transparent pricing for B2B web design and development. Packages from $15,000 to $75,000+. 30-day money-back guarantee. See what's included.",
  keywords: ["b2b web design pricing", "website development cost", "saas website pricing", "web design packages"],
  ogImage: "/og-pricing.jpg",
});

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <PricingHero />
      <PricingTiers />
      <WebPricing />
      <PricingComparison />
      <PricingTestimonials />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}

