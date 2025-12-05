import { FadeIn } from "@/components/animations/FadeIn";
import { Star } from "lucide-react";
import { GridPattern, RadialGlow } from "@/components/graphics/GridPattern";
import { CountUp } from "@/components/animations/CountUp";

export function ReviewsHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <GridPattern variant="dots" className="opacity-30" />
      <RadialGlow color="primary" position="top-right" intensity="medium" />
      <RadialGlow color="secondary" position="bottom-left" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-primary text-primary" />
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            What B2B Leaders{" "}
            <span className="text-gradient">Say About Us</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We let our B2B results do the talking. Here's what founders, CMOs, and 
            VPs of Marketing say about working with Orbitline.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-muted-foreground flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">
                <CountUp value={98} suffix="%" duration={2} />
              </div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">
                <CountUp value={127} suffix="+" duration={2} />
              </div>
              <div className="text-sm">B2B Clients</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">
                <CountUp value={5.0} decimals={1} duration={2} />
              </div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}