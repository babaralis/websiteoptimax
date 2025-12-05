"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, Award, TrendingUp } from "lucide-react";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

const trustBadges = [
  { icon: Shield, label: "30-Day Money Back" },
  { icon: Award, label: "127+ B2B Clients" },
  { icon: TrendingUp, label: "Avg. 14x ROI" },
];

export function PricingHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <AbstractShapes variant="hero" />
      
      <div className="container relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            Transparent Pricing
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Investment Plans for{" "}
            <span className="gradient-text-glow">B2B Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Choose the package that fits your growth stage. Every plan includes our 
            proven conversion architecture and dedicated support.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="glass-card px-4 py-2 flex items-center gap-2"
              >
                <badge.icon className="w-4 h-4 text-success" />
                <span className="text-sm text-muted-foreground">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
