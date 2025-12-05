import { FadeIn } from "@/components/animations/FadeIn";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/graphics/GridPattern";

const features = [
  {
    category: "Website Design & Development",
    items: [
      { name: "Custom Website Pages", starter: "5-8", scale: "10-20", enterprise: "Unlimited" },
      { name: "Mobile-First Design", starter: true, scale: true, enterprise: true },
      { name: "Custom Illustrations", starter: false, scale: true, enterprise: true },
      { name: "Advanced Animations", starter: false, scale: true, enterprise: true },
      { name: "Multi-Language Support", starter: false, scale: false, enterprise: true },
    ],
  },
  {
    category: "Conversion & Lead Generation",
    items: [
      { name: "Lead Capture Forms", starter: true, scale: true, enterprise: true },
      { name: "CRM Integration", starter: true, scale: true, enterprise: true },
      { name: "Conversion Architecture", starter: "Basic", scale: "Advanced", enterprise: "Custom" },
      { name: "A/B Testing Framework", starter: false, scale: true, enterprise: true },
      { name: "Marketing Automation", starter: false, scale: true, enterprise: true },
    ],
  },
  {
    category: "SEO & Analytics",
    items: [
      { name: "SEO Foundation", starter: true, scale: true, enterprise: true },
      { name: "Content Strategy", starter: false, scale: true, enterprise: true },
      { name: "Advanced Analytics", starter: false, scale: true, enterprise: true },
      { name: "Custom BI Dashboard", starter: false, scale: false, enterprise: true },
    ],
  },
  {
    category: "Support & Optimization",
    items: [
      { name: "Post-Launch Support", starter: "60 days", scale: "90 days", enterprise: "12 months" },
      { name: "Dedicated Success Manager", starter: false, scale: true, enterprise: true },
      { name: "Quarterly Strategy Reviews", starter: false, scale: false, enterprise: true },
      { name: "Priority Support", starter: false, scale: true, enterprise: true },
    ],
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-success mx-auto" />
    ) : (
      <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
    );
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export function PricingComparison() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden pt-0">
      <GridPattern variant="dots" className="opacity-20" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="section-heading text-foreground ...">
            Compare <span className="gradient-text">All Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly what's included in each package
          </p>
        </FadeIn>
        
        <FadeIn>
          <div className="glass-card-premium rounded-2xl overflow-hidden max-w-5xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-border/50 bg-muted/30">
              <div className="text-sm font-semibold text-muted-foreground">Features</div>
              <div className="text-center">
                <p className="font-bold text-foreground">Growth Starter</p>
                <p className="text-sm text-primary font-semibold">$15,000</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground">Scale Package</p>
                <p className="text-sm text-primary font-semibold">$35,000</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground">Enterprise</p>
                <p className="text-sm text-primary font-semibold">$75,000+</p>
              </div>
            </div>
            
            {/* Feature categories */}
            {features.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category header */}
                <div className="px-6 py-4 bg-muted/20">
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                
                {/* Features */}
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name}
                    className={cn(
                      "grid grid-cols-4 gap-4 px-6 py-4 items-center",
                      itemIndex < category.items.length - 1 && "border-b border-border/30"
                    )}
                  >
                    <div className="text-sm text-muted-foreground">{item.name}</div>
                    <div className="text-center">
                      <FeatureValue value={item.starter} />
                    </div>
                    <div className="text-center">
                      <FeatureValue value={item.scale} />
                    </div>
                    <div className="text-center">
                      <FeatureValue value={item.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
