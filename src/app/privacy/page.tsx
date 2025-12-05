import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { FadeIn } from "@/components/animations/FadeIn";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata: Metadata = genMeta({
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: "Learn how we collect, use, and protect your personal information. Our privacy policy explains our data practices and your rights.",
  noIndex: false,
});

export default function PrivacyPage() {
  const schemas = [
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Privacy Policy", url: `${SITE_CONFIG.url}/privacy` },
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: December 2, 2024
            </p>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <section>
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  Information We Collect
                </h2>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  1. Automatically Collected Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>IP address and browser data</li>
                  <li>Device information</li>
                  <li>Location information</li>
                  <li>Language preferences</li>
                  <li>Operating system and platform</li>
                  <li>Pages viewed and actions taken on our site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  2. Information You Provide
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During account creation and service use, we collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Full name and contact information</li>
                  <li>Email address, and phone number</li>
                  <li>Billing address (where applicable)</li>
                  <li>Payment information (credit card or banking details)</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Process orders and deliver services</li>
                  <li>Send important account notifications and updates</li>
                  <li>Share occasional offers, promotions, and blog content (you can opt out anytime)</li>
                  <li>Improve our services and user experience</li>
                  <li>Prevent fraud and maintain security</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                  We never sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
                <hr className="my-6 border-muted" />
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  4. Email Communications
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may receive emails from us regarding:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Order confirmations and updates</li>
                  <li>Account security notifications</li>
                  <li>Service announcements</li>
                  <li>Marketing offers and promotions (optional)</li>
                  <li>Blog posts and company news (optional)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Unsubscribe anytime by clicking the link at the bottom of any email or updating your preferences in your account settings.
                </p>
                <hr className="my-6 border-muted" />
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your trust matters to us. We protect your information through:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Industry-standard encryption (SSL/TLS)</li>
                  <li>Regular security audits and updates</li>
                  <li>Restricted employee access to sensitive data</li>
                  <li>Continuous monitoring for vulnerabilities</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                  Important: {SITE_CONFIG.name} employees will never ask you to share credit card details via email, 
                  phone, or chat. If someone does, do not comply and report it to us immediately at{" "}
                  <a href="mailto:security@websiteoptimax.com" className="text-primary hover:underline">
                    security@websiteoptimax.com
                  </a>
                </p>
                <hr className="my-6 border-muted" />
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  6. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal information at any time</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Delete your personal and associated data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Manage your information through your account dashboard or contact us at{" "}
                  <a href="mailto:privacy@websiteoptimax.com" className="text-primary hover:underline">
                    privacy@websiteoptimax.com
                  </a>
                </p>
                <hr className="my-6 border-muted" />
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  7. Special Policies
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Children&apos;s Privacy</h3>
                    <p className="leading-relaxed">
                      We do not knowingly collect information from children under 13. If we discover such data has 
                      been submitted, we will delete it immediately.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Third-Party Links</h3>
                    <p className="leading-relaxed">
                      Our website may contain links to external sites. We are not responsible for the privacy 
                      practices of these third-party sites. We encourage you to review their privacy policies 
                      before sharing any information.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Testimonials</h3>
                    <p className="leading-relaxed">
                      We feature customer testimonials with your permission. If you&apos;d like to modify or remove 
                      your testimonial, contact us at{" "}
                      <a href="mailto:support@websiteoptimax.com" className="text-primary hover:underline">
                        support@websiteoptimax.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Pseudonym Policy</h3>
                    <p className="leading-relaxed mb-2">
                      For consistency and ease of communication, our team may use professional pseudonyms. This practice:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provides you with a consistent point of contact</li>
                      <li>Ensures a streamlined company culture</li>
                      <li>Protects employee privacy and promotes our global team</li>
                    </ul>
                    <p className="leading-relaxed mt-2">
                      All team members, regardless of name used, are bound by strict confidentiality agreements.
                    </p>
                  </div>
                </div>
                <hr className="my-6 border-muted" />
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  8. International Operations
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your personal data may be handled by team members at any of our global service centers. All locations 
                  adhere to this privacy policy and maintain the same security standards through binding non-disclosure 
                  agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  9. Legal Disclosures
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may disclose your information when required to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Comply with legal obligations or court orders</li>
                  <li>Cooperate with law enforcement investigations</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Prevent fraud or abuse of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  10. Policy Updates
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this privacy policy periodically to reflect changes in our practices or legal requirements. 
                  When we make significant changes, we will:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Notify you via email</li>
                  <li>Post an update in your account dashboard</li>
                  <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  11. Consumer Data Protection
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We comply with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>PCI DSS (Payment Card Industry Data Security Standards)</li>
                </ul>
              </section>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}


