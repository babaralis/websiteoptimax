import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { FadeIn } from "@/components/animations/FadeIn";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta({
  title: `Terms and Conditions | ${SITE_CONFIG.name}`,
  description: "Read our terms and conditions for using our website and services. Understand your rights and responsibilities as a client.",
  noIndex: false,
});

export default function TermsPage() {
  const schemas = [
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Terms and Conditions", url: `${SITE_CONFIG.url}/terms` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <section className="py-20 lg:py-28">
        <div className="container">
          <FadeIn className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: December 2, 2024
            </p>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
             
              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  1. Delivery Policy
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Delivery Timeline</h3>
                    <p className="leading-relaxed">
                      Services are delivered according to the purchased package or signed agreement. 
                      Factors influencing turnaround times include service complexity and scope, speed 
                      of feedback, order date/project queue, and accuracy of initial requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">What Counts as &quot;Delivered&quot;?</h3>
                    <p className="leading-relaxed">
                      Delivery is considered complete when all agreed deliverables are completed per 
                      project scope, final files are shared in agreed formats, and work meets outlined standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Cancellations Before Delivery</h3>
                    <p className="leading-relaxed">
                      Refund eligibility for cancellations before delivery depends on the amount of work 
                      completed, terms in the agreement/package, and the standard refund policy (Section 3).
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  2. Payment Policy
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Monthly Packages</h3>
                    <p className="leading-relaxed">
                      Full payment in advance is required for work to begin. Ongoing services are billed 
                      monthly. Refunds are processed as per Section 3.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Pricing & Invoicing</h3>
                    <p className="leading-relaxed">
                      All prices are exclusive of VAT and applicable taxes, which will be added where required. 
                      Cost estimates are indicative and subject to final confirmation after reviewing full requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Additional Work & Rate Changes</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong className="text-foreground">Add-on services:</strong> Work outside the original 
                        quotation (e.g., extra design, development, third-party services) will be charged 
                        separately based on the current rate card.
                      </li>
                      <li>
                        <strong className="text-foreground">Rate revisions:</strong> Hourly or package rates 
                        may be updated once per twelve-month period maximum.
                      </li>
                      <li>
                        <strong className="text-foreground">Price Increase/revision:</strong> Requires at least 
                        two (2) months&apos; notice before any rate change.
                      </li>
                      <li>
                        <strong className="text-foreground">Your options:</strong> You can terminate the contract 
                        by providing three (3) months&apos; written notice within two (2) weeks of receiving a 
                        price-change notification if you don&apos;t accept new rates.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Late Payments</h3>
                    <p className="leading-relaxed">
                      Interest may be charged in accordance with applicable late payment legislation, calculated 
                      daily until paid in full. Services may be temporarily suspended. All outstanding amounts 
                      become immediately due if the agreement is terminated. We may offset amounts owed against 
                      amounts we owe you, where legally permitted.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  3. Refund Policy
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Refund requests are evaluated case-by-case within three (3) months from the purchase date.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">3.1 When Refunds May Be Approved:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong className="text-foreground">Copyright/Trademark Issues:</strong> If the delivered 
                        logo is proven to be copied or infringes existing intellectual property.
                      </li>
                      <li>
                        <strong className="text-foreground">Material Defects:</strong> If the final design is 
                        demonstrably defective or significantly different from what was agreed or advertised.
                      </li>
                      <li>
                        <strong className="text-foreground">Duplicate Orders:</strong> For accidentally placed 
                        duplicate orders for the same service.
                      </li>
                      <li>
                        <strong className="text-foreground">Quality Review Required:</strong> All refund requests 
                        undergo internal quality assurance review. If the team confirms the design is defective 
                        or unusable as promised, up to 100% of the project fee may be refunded in qualifying scenarios.
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2 text-foreground">3.2 Refund Timelines & Amounts:</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong className="text-foreground">Before initial concepts delivered:</strong> Up to 100% 
                          refund minus 10% processing fee.
                        </li>
                        <li>
                          <strong className="text-foreground">Within 48 hours after receiving initial concepts:</strong> 
                          Up to 75% refund minus 10% processing fee.
                        </li>
                        <li>
                          <strong className="text-foreground">Between 48-120 hours after initial delivery:</strong> 
                          Up to 35% refund minus 10% processing fee.
                        </li>
                        <li>
                          <strong className="text-foreground">After 120 hours:</strong> Generally not available. 
                          You are encouraged to contact us to explore remedies and improve the work rather than 
                          request a refund.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">3.3 Important Project Terms:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong className="text-foreground">Inactive Projects:</strong> If there is no communication 
                        for 30 consecutive days (except pre-agreed extensions), the project may be placed on hold and 
                        archived. A £50.00 reactivation fee applies to reactivate archived projects.
                      </li>
                      <li>
                        <strong className="text-foreground">Concept Approval:</strong> Once a concept is approved and 
                        revisions requested, the project enters the refinement stage. Standard revision rights apply 
                        from this point, and refund rights are generally voided after concept approval.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">3.4 When Refunds Are NOT Available:</h3>
                    <p className="leading-relaxed mb-2">Refunds are not offered in situations such as:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Change of mind after work has commenced.</li>
                      <li>Excessive revisions (e.g., revising branding guide, color scheme, font selection, adding/removing elements, general participation in large contests/broadcasts).</li>
                      <li>Copyright violations originating due to the client&apos;s own design or work.</li>
                      <li>Work where the design was created according to the client&apos;s submitted brief, files, or instructions.</li>
                      <li>Missing information from the client that fails to submit required briefs or specifications, causing delays or impacting outcomes.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  Your Acceptance
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By placing an order, making a payment, or using any {SITE_CONFIG.name} services, you confirm 
                  that you have read, understood, and agreed to these Terms & Conditions. This policy may be 
                  updated, and continued use of services after changes are posted constitutes acceptance of 
                  the updated terms.
                </p>
              </section>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}


