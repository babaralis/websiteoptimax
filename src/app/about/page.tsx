import { Metadata } from "next";
import { AboutHero } from "@/sections/about/AboutHero";
import { StorySection } from "@/sections/about/StorySection";
import { TeamSection } from "@/sections/about/TeamSection";
import { ValuesSection } from "@/sections/about/ValuesSection";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { PAGE_SEO, generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.about);

export default function AboutPage() {
  const schemas = [
    generateOrganizationSchema(),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "About", url: `${SITE_CONFIG.url}/about` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AboutHero />
      <StorySection />
      <TeamSection />
      <ValuesSection />
      <AboutCTA />
    </>
  );
}

