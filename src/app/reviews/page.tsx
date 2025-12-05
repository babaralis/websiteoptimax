import { Metadata } from "next";
import { ReviewsHero } from "@/sections/reviews/ReviewsHero";
import { TestimonialsSection } from "@/sections/reviews/TestimonialsSection";
import { ClientLogos } from "@/sections/reviews/ClientLogos";
import { ObjectionsSection } from "@/sections/reviews/ObjectionsSection";
import { ReviewsCTA } from "@/sections/reviews/ReviewsCTA";
import { PAGE_SEO, generateAggregateRatingSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.reviews);

export default function ReviewsPage() {
  const ratingSchema = generateAggregateRatingSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Reviews", url: `${SITE_CONFIG.url}/reviews` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([ratingSchema, breadcrumbSchema]) }}
      />
      <ReviewsHero />
      <ClientLogos />
      <TestimonialsSection />
      <ObjectionsSection />
      <ReviewsCTA />
    </>
  );
}

