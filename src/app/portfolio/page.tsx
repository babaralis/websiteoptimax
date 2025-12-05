import { Metadata } from "next";
import { PortfolioHero } from "@/sections/portfolio/PortfolioHero";
import { ProjectsGrid } from "@/sections/portfolio/ProjectsGrid";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";
import { CaseStudySection } from "@/sections/portfolio/CaseStudySection";
import { ResultsMetrics } from "@/sections/portfolio/ResultsMetrics";
import { PortfolioCTA } from "@/sections/portfolio/PortfolioCTA";
import { PAGE_SEO, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.portfolio);

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Portfolio", url: `${SITE_CONFIG.url}/portfolio` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PortfolioHero />
      <NewPortfolio />

      {/* <div className="[&_.grid]:lg:grid-cols-2">
        <ProjectsGrid />
      </div> */}

      <CaseStudySection />
      <ResultsMetrics />
      <PortfolioCTA />
    </>
  );
}

