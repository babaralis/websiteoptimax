"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import { RadialGlow } from "@/components/graphics/GridPattern";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export function WebDevCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <AbstractShapes variant="section" />
      <RadialGlow color="primary" position="center" intensity="medium" />
      
      <div className="container relative z-10">
        <FadeIn>
          <div className="glass-card-premium p-12 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            
            <div className="relative z-10">
              <motion.span 
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="w-4 h-4" />
                Start Your Project
              </motion.span>
              
              <h2 className="section-heading text-foreground ...1">
                Ready to Build a Website That{" "}
                <span className="gradient-text-glow">Actually Converts?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your digital presence into a lead-generating 
                machine. Book a free strategy call and get a custom roadmap for your B2B growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild className="shadow-glow-md">
                  <Link href="/contact" className="gap-2">
                    Book Strategy Call
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link href="/portfolio" className="gap-2">
                    <MessageSquare className="h-5 w-5" />
                    See Our Work
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <motion.div
                className="mt-10 pt-8 border-t border-border/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span>Free 30-min consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span>No obligation quote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
