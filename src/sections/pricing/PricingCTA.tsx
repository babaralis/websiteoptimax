"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import { RadialGlow } from "@/components/graphics/GridPattern";

export function PricingCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <RadialGlow color="primary" position="top-left" intensity="medium" />
      <RadialGlow color="secondary" position="bottom-right" intensity="low" />
      
      <div className="container relative">
        <FadeIn>
          <div className="glass-card-premium p-8 md:p-12 lg:p-16 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            
            <div className="relative z-10">
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-success/10 text-success border border-success/20"
                whileHover={{ scale: 1.05 }}
              >
                Free Strategy Session
              </motion.span>
              
              <h2 className="section-heading text-foreground ...1 text-foreground">
                Ready to Invest in{" "}
                <span className="gradient-text-glow">Real Growth?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Book a free 30-minute strategy call. We'll analyze your current site, 
                identify quick wins, and show you exactly how we can help—even if you 
                don't end up working with us.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild className="shadow-glow-lg">
                  <Link href="/contact" className="gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Strategy Call
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link href="/contact" className="gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Ask a Question
                  </Link>
                </Button>
              </div>
              
              <p className="mt-8 text-sm text-muted-foreground">
                No pressure. No obligation. Just actionable insights.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
