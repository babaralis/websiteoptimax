import { FadeIn } from "@/components/animations/FadeIn";
import { MessageSquare, Calendar } from "lucide-react";
import { GridPattern, RadialGlow } from "@/components/graphics/GridPattern";

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      <GridPattern variant="dots" className="opacity-30" />
      <RadialGlow color="primary" position="top-right" intensity="medium" />
      <RadialGlow color="secondary" position="bottom-left" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Let's Talk B2B Growth</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ready to{" "}
            <span className="gradient-text">Transform</span>{" "}
            Your B2B Pipeline?
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a free strategy call or send us a message. We'll analyze your 
            current website and show you exactly how to increase qualified leads.
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span>No obligation consultation</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
