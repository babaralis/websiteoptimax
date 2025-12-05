import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RadialGlow } from "@/components/graphics/GridPattern";

const CASE_STUDY = {
  client: "CloudSync Platform",
  industry: "B2B SaaS",
  challenge: "CloudSync had solid traffic from content marketing but abysmal trial-to-paid conversions. Their product was excellent, but the website failed to communicate value to enterprise buyers. Sales cycles were dragging on for months.",
  solution: "We rebuilt their entire buyer journey: new positioning for enterprise decision-makers, redesigned pricing page with ROI calculator, case study-driven social proof, and a streamlined demo booking flow that pre-qualified leads.",
  results: [
    { label: "Trial-to-Paid", before: "3.2%", after: "14.1%", icon: TrendingUp },
    { label: "Enterprise Demos", before: "45/mo", after: "187/mo", icon: Users },
    { label: "Pipeline Value", before: "$890K", after: "$3.2M", icon: DollarSign },
    { label: "Sales Cycle", before: "94 days", after: "31 days", icon: Clock },
  ],
  testimonial: {
    quote: "Website Optimax didn't just redesign our website—they transformed how we sell. Our enterprise pipeline tripled and sales cycles dropped by two-thirds. This is what ROI looks like.",
    author: "James Morrison",
    role: "VP Sales, CloudSync Platform",
  },
};

export function CaseStudySection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <RadialGlow color="primary" position="center" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Featured B2B Case Study</Badge>
          <h2 className="section-heading text-foreground ...">
            How We Helped CloudSync{" "}
            <span className="gradient-text">4x Their Pipeline</span>
          </h2>
        </FadeIn>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="h-full border-destructive/30 bg-destructive/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-destructive">The B2B Challenge</h3>
                  <p className="text-muted-foreground">{CASE_STUDY.challenge}</p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn>
              <Card className="h-full border-success/30 bg-success/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-success">Our Strategic Solution</h3>
                  <p className="text-muted-foreground">{CASE_STUDY.solution}</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
          
          {/* Results Grid */}
          <FadeIn>
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  {CASE_STUDY.results.map(({ label, before, after, icon: Icon }) => (
                    <div key={label} className="p-6 text-center">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground mb-2">{label}</p>
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-muted-foreground line-through">{before}</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span className="text-2xl font-bold text-success">{after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          
          {/* Testimonial */}
          <FadeIn>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <blockquote className="text-xl md:text-2xl font-display italic mb-6 text-foreground">
                  "{CASE_STUDY.testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{CASE_STUDY.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{CASE_STUDY.testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn className="text-center">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">
                Get B2B Results Like This
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
