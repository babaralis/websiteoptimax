import { Metadata } from "next";
import { WebDevHero } from "@/sections/web-development/WebDevHero";
import { WebDevSuccess } from "@/sections/web-development/WebDevSuccess";
import { WebDevAI } from "@/sections/web-development/WebDevAI";
import { WebDevPortfolio } from "@/sections/web-development/WebDevPortfolio";
import { WebDevUX } from "@/sections/web-development/WebDevUX";
import { WebDevCopywriting } from "@/sections/web-development/WebDevCopywriting";
import { WebDevDesign } from "@/sections/web-development/WebDevDesign";
import { WebDevCTA } from "@/sections/web-development/WebDevCTA";
import { ProjectsGrid } from "@/sections/portfolio/ProjectsGrid";
import { PAGE_SEO, generateServiceSchema } from "@/lib/seo";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";

export const metadata: Metadata = genMeta(PAGE_SEO.webDevelopment);

export default function WebDevelopmentPage() {
  const serviceSchema = generateServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebDevHero />
      <WebDevSuccess />
      <WebDevAI />
      {/* <WebDevPortfolio /> */}

      <NewPortfolio limit={9} />

      {/* <div className="[&_.grid]:lg:grid-cols-2">
        <ProjectsGrid />
      </div> */}

      <WebDevUX />
      <WebDevCopywriting />
      <WebDevDesign />
      <WebDevCTA />
    </>
  );
}

