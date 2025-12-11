'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const logos = Array.from({ length: 14 }, (_, i) => ({
  src: `/assets/images/webdesign/logos/generated-svg-image${i + 1}.svg`,
  alt: `Logo ${i + 1}`,
}));

export function LandingLogoSlider() {
  return (
    <section className="py-8 lg:py-12 relative overflow-hidden border-y border-border/30 bg-surface/30">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-6">
        Trusted by teams at <span className="text-foreground font-semibold">growth-focused</span> brands
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
                key={`${logo.src}-${index}`}
                className="flex items-center justify-center shrink-0 px-8 py-4 rounded-xl bg-card/50 border border-border/30 h-24 w-48 md:h-28 md:w-56"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
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
