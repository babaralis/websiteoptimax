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

export function WebDevSuccess() {
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
                <Image src="/assets/images/webdevelopment/what-makes-a-high-converting-b2b-website.png" alt="Web development success" width={600} height={500} />
                {/* <div className="relative aspect-[4/3] bg-gradient-to-br from-background via-muted/30 to-background rounded-xl border border-border/50 overflow-hidden">
                  
                  <div className="absolute top-0 left-0 right-0 h-8 bg-muted/50 border-b border-border/50 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-warning/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-success/50" />
                  </div>
                  
                  <div className="absolute top-12 left-4 right-4 bottom-4 grid grid-cols-3 gap-2">
                    <div className="col-span-2 space-y-2">
                      <div className="h-4 bg-primary/30 rounded animate-pulse" />
                      <div className="h-3 bg-muted-foreground/20 rounded w-3/4" />
                      <div className="h-3 bg-muted-foreground/20 rounded w-1/2" />
                      <div className="h-8 bg-primary/20 rounded w-24 mt-4" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-secondary/20 rounded" />
                      <div className="h-16 bg-secondary/20 rounded" />
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute top-14 -right-2 glass-card px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-primary font-medium">SEO</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-16 -left-2 glass-card px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-secondary font-medium">CRM</span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 right-4 glass-card px-2 py-1 rounded text-xs"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-success font-medium">Analytics</span>
                  </motion.div>
                </div> */}
                
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
