import { Metadata } from "next";
import { AIHeroSection } from "@/components/aiAgentComponents/AIHeroSection";
import { AIServicesSection } from "@/components/aiAgentComponents/AIServicesSection";
import { AIBenefitsSection } from "@/components/aiAgentComponents/AIBenefitsSection";
import { AIIndustrySection } from "@/components/aiAgentComponents/AIIndustrySection";
import { AINetworkSection } from "@/components/aiAgentComponents/AINetworkSection";
import { AIFAQSection } from "@/components/aiAgentComponents/AIFAQSection";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta({
  title: "AI Agent Services | Intelligent AI Solutions That Work 24/7",
  description: "Transform your business with cutting-edge AI solutions that automate workflows, enhance customer experiences, and drive measurable results around the clock.",
  keywords: ["AI agents", "AI services", "automation", "customer support AI", "business AI solutions"],

});

export default function AIAgentPage() {
  return (
    <>
      <AIHeroSection />
      <AIServicesSection />
      <AIBenefitsSection />
      <AIIndustrySection />
      <AINetworkSection />
      <AIFAQSection />
    </>
  );
}

