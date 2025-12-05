import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GOOD_FIT = [
  "You're serious about growing your business online",
  "You understand that great design is an investment, not an expense",
  "You're ready to launch within the next 30-60 days",
  "You value results over flashy trends",
  "You're open to data-driven recommendations",
  "You want a long-term partner, not just a vendor",
];

const NOT_A_FIT = [
  "You're looking for the cheapest option available",
  "You need your site done yesterday (we don't rush quality)",
  "You want to micromanage every pixel",
  "You're not ready to invest in your digital presence",
  "You expect guaranteed overnight results",
  "You're looking for a template-based solution",
];

export function QualificationSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Are We the <span className="gradient-text">Right Fit?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're selective about who we work with. Not because we're snobby—but because 
            the best results come from the best partnerships.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn>
            <Card className="h-full border-success/30 bg-success/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                  <span>We're a Great Fit If...</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {GOOD_FIT.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
          
          <FadeIn>
            <Card className="h-full border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <XCircle className="h-6 w-6 text-destructive" />
                  <span>We're NOT a Fit If...</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {NOT_A_FIT.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </StaggerChildren>
        
        <FadeIn className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Think we're a match? Let's find out.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
