"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Growth Starter",
    price: "$15,000",
    description: "For startups and SMBs ready to establish a strong digital foundation",
    features: [
      "5-8 page custom website",
      "Mobile-first responsive design",
      "SEO foundation & analytics",
      "Lead capture system",
      "CRM integration",
      "60-day optimization support",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Scale Package",
    price: "$35,000",
    description: "For growth-stage companies ready to dominate their market",
    features: [
      "10-20 page custom website",
      "Advanced conversion architecture",
      "Full SEO & content strategy",
      "Marketing automation setup",
      "A/B testing framework",
      "90-day optimization program",
      "Dedicated success manager",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise Transform",
    price: "$75,000+",
    description: "Full digital transformation for market leaders",
    features: [
      "Unlimited pages & features",
      "Custom application development",
      "Multi-market/language support",
      "Advanced analytics & BI",
      "Enterprise integrations",
      "12-month growth partnership",
      "Quarterly strategy reviews",
    ],
    popular: false,
    cta: "Contact Us",
  },
];

export function PricingTiers() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Choose Your <span className="text-gradient">Growth Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans include strategy, design, development, and launch. No hidden fees.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className={cn(
                  "h-full relative overflow-hidden transition-all duration-300",
                  plan.popular 
                    ? "border-primary shadow-glow-lg bg-gradient-to-b from-primary/5 to-transparent" 
                    : "border-border/50 hover:border-primary/30 bg-card/50"
                )}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-2 text-center">
                      <span className="text-sm font-semibold text-white flex items-center justify-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className={cn("text-center pb-0", plan.popular && "pt-14")}>
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      size="lg" 
                      className="w-full" 
                      asChild
                    >
                      <Link href="/contact" className="gap-2">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        
        {/* Money-back guarantee */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-success" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">30-Day Money-Back Guarantee</p>
                <p className="text-sm text-muted-foreground">Not satisfied? Full refund, no questions asked.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
