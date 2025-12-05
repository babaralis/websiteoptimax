import { Metadata } from "next";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactForm } from "@/sections/contact/ContactForm";
import { BookingSection } from "@/sections/contact/BookingSection";
import { PAGE_SEO, generateBreadcrumbSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta(PAGE_SEO.contact);

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactHero />
      <section className="pt-24 lg:pt-32 pb-24 lg:pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 h-full">
              <BookingSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

