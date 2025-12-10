import { Metadata } from "next";
import { HeroSection } from "@/sections/home/HeroSection";
import { PainSection } from "@/sections/home/PainSection";
import { SolutionSection } from "@/sections/home/SolutionSection";
import { SocialProofSection } from "@/sections/home/SocialProofSection";
import { ProcessSection } from "@/sections/home/ProcessSection";
import { FAQSection } from "@/sections/home/FAQSection";
import { CTASection } from "@/sections/home/CTASection";
import {
  PAGE_SEO,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateFAQSchema,
  generateAggregateRatingSchema,
} from "@/lib/seo";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { ProjectsGrid } from "@/sections/portfolio/ProjectsGrid";
import { HomeWebPricing } from "@/components/pricing/HomeWebPricing";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";

export const metadata: Metadata = genMeta(PAGE_SEO.home);

export default function HomePage() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateFAQSchema(),
    generateAggregateRatingSchema(),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <NewPortfolio limit={9} />
      <HomeWebPricing className="pt-0" />
      <SocialProofSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

