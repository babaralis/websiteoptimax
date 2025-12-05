import { Metadata } from "next";
import { PAGE_SEO, generateServiceSchema } from "@/lib/seo";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.websiteOptimization);

export default function WebsiteOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}

