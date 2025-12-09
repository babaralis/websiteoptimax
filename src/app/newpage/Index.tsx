import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "./home/HeroSection";
import { PainSection } from "./home/PainSection";
import { SolutionSection } from "./home/SolutionSection";
import { SocialProofSection } from "./home/SocialProofSection";
import { ProcessSection } from "./home/ProcessSection";
import { FAQSection } from "./home/FAQSection";
import { CTASection } from "./home/CTASection";
import {
  PAGE_SEO,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateFAQSchema,
  generateAggregateRatingSchema,
} from "@/lib/seo";

const Index = () => {
  const schemas = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateFAQSchema(),
    generateAggregateRatingSchema(),
  ];

  return (
    <Layout>
      <SEOHead config={PAGE_SEO.home} schemas={schemas} />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <SocialProofSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
