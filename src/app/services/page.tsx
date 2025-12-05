import { Metadata } from "next";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { FeaturesComparison } from "@/sections/services/FeaturesComparison";
import { QualificationSection } from "@/sections/services/QualificationSection";
import { ServicesCTA } from "@/sections/services/ServicesCTA";
import { PAGE_SEO, generateServiceSchema } from "@/lib/seo";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.services);

export default function ServicesPage() {
  const serviceSchema = generateServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesHero />
      <FeaturesComparison />
      <QualificationSection />
      <ServicesCTA />
    </>
  );
}

