'use client';

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const logos = [
  { name: "Google", rating: "4.9/5" },
  { name: "Trustpilot", rating: "4.8/5" },
  { name: "Clutch", rating: "5.0/5" },
  { name: "DesignRush", rating: "Top Agency" },
  { name: "GoodFirms", rating: "Verified" },
  { name: "Expertise", rating: "Best of 2024" },
];

export function LandingLogoSlider() {
  return (
    <section className="py-8 lg:py-12 relative overflow-hidden border-y border-border/30 bg-surface/30">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Rated <span className="text-foreground font-semibold">4.8/5</span> from 18,467+ customer reviews
        </p>
        
        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center gap-3 shrink-0 px-6 py-3 rounded-xl bg-card/50 border border-border/30"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-semibold text-foreground whitespace-nowrap">{logo.name}</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{logo.rating}</span>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
