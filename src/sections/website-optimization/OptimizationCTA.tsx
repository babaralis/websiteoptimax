"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { RadialGlow } from "@/components/graphics/GridPattern";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export function OptimizationCTA() {
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
                Limited Availability
              </motion.span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Stop Leaving{" "}
                <span className="gradient-text-glow">Money on the Table?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
                Your competitors are already optimizing. Every day you wait is another day 
                of lost conversions and wasted ad spend.
              </p>
              
              <p className="text-foreground font-semibold mb-8">
                Book your free optimization call now and get a preview of what's possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="hero" size="xl" asChild className="shadow-glow-md">
                  <Link href="/contact" className="gap-2">
                    Get Your Optimization Plan
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Urgency indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Only 5 spots available this month</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30-min strategy call</span>
                </div>
              </div>
              
              {/* Final reassurance */}
              <motion.div
                className="mt-10 pt-8 border-t border-border/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">Zero pressure. Zero obligation.</span>{" "}
                  Just a conversation about your website and what's possible.
                </p>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
