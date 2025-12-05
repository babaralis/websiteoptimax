import { FadeIn } from "@/components/animations/FadeIn";
import { GridPattern, RadialGlow } from "@/components/graphics/GridPattern";

export function AboutHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <GridPattern variant="dots" className="opacity-30" />
      <RadialGlow color="primary" position="top-right" intensity="medium" />
      <RadialGlow color="secondary" position="bottom-left" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            About Website Optimax
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            We Build B2B Websites That{" "}
            <span className="gradient-text">Actually Convert</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our mission is simple: help B2B and SaaS companies stop losing pipeline on websites 
            that don't work and start generating qualified leads that close.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
