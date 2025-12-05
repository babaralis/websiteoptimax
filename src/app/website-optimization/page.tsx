import { Metadata } from "next";
import { OptimizationHero } from "@/sections/website-optimization/OptimizationHero";
import { OptimizationProblem } from "@/sections/website-optimization/OptimizationProblem";
import { OptimizationCaseStudies } from "@/sections/website-optimization/OptimizationCaseStudies";
import { OptimizationValueStack } from "@/sections/website-optimization/OptimizationValueStack";
import { OptimizationProcess } from "@/sections/website-optimization/OptimizationProcess";
import { OptimizationGuarantee } from "@/sections/website-optimization/OptimizationGuarantee";
import { OptimizationQualification } from "@/sections/website-optimization/OptimizationQualification";
import { OptimizationCTA } from "@/sections/website-optimization/OptimizationCTA";
import { PAGE_SEO, generateServiceSchema } from "@/lib/seo";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.websiteOptimization);

export default function WebsiteOptimizationPage() {
  const serviceSchema = generateServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <OptimizationHero />
      <OptimizationProblem />
      <OptimizationCaseStudies />
      <OptimizationValueStack />
      <OptimizationProcess />
      <OptimizationGuarantee />
      <OptimizationQualification />
      <OptimizationCTA />
    </>
  );
}

