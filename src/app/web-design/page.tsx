import { Metadata } from "next";
import { LandingHero } from "@/components/webdesign/LandingHero";
import { WebDevSuccess } from "@/sections/web-development/WebDevSuccess";
import { WebDevAI } from "@/sections/web-development/WebDevAI";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";
import { WebDesignCTA } from "@/components/webdesign/WebDesignCTA";
import { TestimonialsSection } from "@/sections/reviews/TestimonialsSection";
import { WebDesignVision } from "@/components/webdesign/WebDesignVision";
import { WebDevUX } from "@/sections/web-development/WebDevUX";
import { WebDesignLead } from "@/components/webdesign/WebDesignLead";
import { WebDesignPopup } from "@/components/webdesign/WebDesignPopup";
import { WebDesignFloatingCTA } from "@/components/webdesign/WebDesignFloatingCTA";

import { PAGE_SEO, generateServiceSchema } from "@/lib/seo";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.webDevelopment);

export default function WebDesignPage() {
  const serviceSchema = generateServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebDesignPopup />
      <WebDesignFloatingCTA />
      <LandingHero />
      <WebDevSuccess />
      <WebDesignCTA />
      <WebDevAI />
      <NewPortfolio limit={9} />
      <WebDesignCTA />
      <TestimonialsSection />
      <WebDesignVision />
      <WebDevUX />
      <WebDesignLead />
    </>
  );
}
