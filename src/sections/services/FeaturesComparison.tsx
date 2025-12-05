import { FadeIn } from "@/components/animations/FadeIn";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPARISON_FEATURES = [
  { feature: "Custom Design", starter: true, growth: true, enterprise: true },
  { feature: "Mobile Responsive", starter: true, growth: true, enterprise: true },
  { feature: "SEO Optimization", starter: "Basic", growth: "Advanced", enterprise: "Enterprise" },
  { feature: "Contact Form", starter: true, growth: true, enterprise: true },
  { feature: "CRM Integration", starter: false, growth: true, enterprise: true },
  { feature: "Analytics Setup", starter: "Basic", growth: "Advanced", enterprise: "Full Suite" },
  { feature: "A/B Testing", starter: false, growth: false, enterprise: true },
  { feature: "Revisions", starter: "2 rounds", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "Support Duration", starter: "30 days", growth: "90 days", enterprise: "12 months" },
  { feature: "Strategy Sessions", starter: "1 session", growth: "3 sessions", enterprise: "Monthly" },
  { feature: "Copywriting", starter: false, growth: "Included", enterprise: "Included" },
  { feature: "Page Count", starter: "1-5 pages", growth: "5-15 pages", enterprise: "Unlimited" },
  { feature: "E-commerce", starter: false, growth: false, enterprise: true },
  { feature: "Custom Functionality", starter: false, growth: "Limited", enterprise: "Full" },
  { feature: "Dedicated Manager", starter: false, growth: false, enterprise: true },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-success mx-auto" />;
  }
  if (value === false) {
    return <Minus className="h-5 w-5 text-muted-foreground/50 mx-auto" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export function FeaturesComparison() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="section-heading text-foreground ...">
            Compare <span className="gradient-text">All Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly what you get with each package. No surprises, no asterisks.
          </p>
        </FadeIn>
        
        <FadeIn>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Growth</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((item, index) => (
                  <tr 
                    key={item.feature} 
                    className={cn(
                      "border-b border-border/50 transition-colors hover:bg-muted/50",
                      index % 2 === 0 && "bg-muted/20"
                    )}
                  >
                    <td className="py-4 px-4 text-muted-foreground">{item.feature}</td>
                    <td className="py-4 px-4 text-center">
                      <FeatureValue value={item.starter} />
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <FeatureValue value={item.growth} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <FeatureValue value={item.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
