"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Building2 } from "lucide-react";
import Link from "next/link";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export function ServicesHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <AbstractShapes variant="hero" />
      
      <div className="container relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 badge-glow"
            whileHover={{ scale: 1.05 }}
          >
            <Layers className="w-4 h-4" />
            B2B Digital Services
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Strategic Digital Solutions for{" "}
            <span className="gradient-text-glow">B2B Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From lead generation websites to full digital transformations. 
            Choose the partnership level that matches your growth stage and 
            watch your pipeline multiply.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild className="shadow-glow-md">
              <Link href="/pricing" className="gap-2">
                View Pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/contact">Book Strategy Session</Link>
            </Button>
          </div>
          
          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-3 text-muted-foreground text-sm"
          >
            <Building2 className="w-4 h-4" />
            <span>Trusted by 127+ B2B and SaaS companies worldwide</span>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
