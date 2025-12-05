import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { GridPattern, RadialGlow } from "@/components/graphics/GridPattern";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export function ReviewsCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GridPattern variant="cross" className="opacity-30" />
      <RadialGlow color="mixed" position="center" intensity="medium" />
      <AbstractShapes variant="accent" className="opacity-20" />
      
      <div className="container relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          
          <h2 className="section-heading text-foreground ...1">
            Ready to Join Our{" "}
            <span className="gradient-text">B2B Success Stories?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every testimonial on this page started with a single strategy call. 
            Let's make your B2B brand the next success story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/portfolio">View Our B2B Portfolio</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
