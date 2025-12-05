import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { RadialGlow } from "@/components/graphics/GridPattern";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export function AboutCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden pt-0">
      <div className="container relative">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border p-8 md:p-12 lg:p-16">
            <RadialGlow color="primary" position="top-right" intensity="medium" />
            <RadialGlow color="secondary" position="bottom-left" intensity="low" />
            <AbstractShapes variant="accent" className="opacity-10" />
            
            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="section-heading text-foreground ...2">
                Ready to Work With a Team That{" "}
                <span className="gradient-text">Gets B2B Results?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's talk about your pipeline goals and see if we're the right fit. 
                No pressure, no obligation—just a conversation about what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link href="/portfolio">See Our B2B Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
