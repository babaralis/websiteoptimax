"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Check, Zap, Search, Layout, BarChart3, Smartphone, Users } from "lucide-react";
import Image from "next/image";
import { GridPattern } from "@/components/graphics/GridPattern";

const successFactors = [
  { icon: Zap, text: "Lightning-fast load times that keep visitors engaged" },
  { icon: Search, text: "SEO-optimized for search and AI visibility" },
  { icon: Layout, text: "Brand-aligned design that builds instant trust" },
  { icon: Users, text: "Intuitive UX that guides visitors to action" },
  { icon: Smartphone, text: "Flawless on every device and screen size" },
  { icon: BarChart3, text: "Built-in analytics for continuous improvement" },
];

export function WebDesignDevSuccess() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GridPattern className="opacity-30" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              What Makes It Work
            </span>
            
            <h2 className="section-heading text-foreground ...1">
              What Makes a <span className="gradient-text">High-Converting</span> B2B Website?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Beautiful design is essential—but it's just the starting point. A website that 
              actually drives revenue needs strategic architecture, compelling copy, and 
              technical excellence working in perfect harmony.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {successFactors.map((factor, index) => (
                <motion.div
                  key={factor.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <factor.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{factor.text}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <motion.div
                className="glass-card-premium p-8 rounded-2xl"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Website mockup illustration */}
                <Image src="/assets/images/webdesign/what-makes-a-high-converting-b2b-website.jpg" alt="Web development success" width={600} height={500} />
                
              </motion.div>
              
              {/* Stats callout */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass-card-elevated px-5 py-3 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-2xl font-bold text-primary">340%</p>
                <p className="text-xs text-muted-foreground">Avg. Lead Increase</p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
