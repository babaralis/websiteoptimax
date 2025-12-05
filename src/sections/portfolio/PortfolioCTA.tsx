import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GridPattern, RadialGlow } from "@/components/graphics/GridPattern";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export function PortfolioCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GridPattern variant="cross" className="opacity-30" />
      <RadialGlow color="mixed" position="center" intensity="medium" />
      <AbstractShapes variant="accent" className="opacity-20" />
      
      <div className="container relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Your B2B Brand Could Be{" "}
            <span className="text-gradient">Next</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every great B2B transformation started with a strategy call. Let's discuss how we can 
            turn your website into a pipeline-generating machine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/reviews">Read Client Reviews</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
