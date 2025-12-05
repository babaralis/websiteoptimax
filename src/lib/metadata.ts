import { Metadata } from "next";
import { SEOConfig } from "./seo";
import { SITE_CONFIG } from "./constants";

export function generateMetadata(seoConfig: Partial<SEOConfig>): Metadata {
  const seo = { ...seoConfig };
  const canonicalUrl = seo.canonicalUrl || SITE_CONFIG.url;
  const ogImage = seo.ogImage || `${SITE_CONFIG.url}/og-image.jpg`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: seo.noIndex ? "noindex, nofollow" : undefined,
    openGraph: {
      type: seo.ogType || "website",
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      images: [{ url: ogImage }],
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}

