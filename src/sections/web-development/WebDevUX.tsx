"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { MousePointer, Navigation, Target, Users, Sparkles } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";

const uxElements = [
  { label: "Brand", position: "top-12 left-8" },
  { label: "Sitemap", position: "top-12 right-8" },
  { label: "Layout", position: "bottom-20 left-8" },
  { label: "Content", position: "bottom-20 right-8" },
  { label: "Responsive", position: "bottom-4 left-1/2 -translate-x-1/2" },
];

export function WebDevUX() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <GridPattern className="opacity-20" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <motion.div
                className="glass-card-premium p-8 rounded-2xl"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* UX wireframe illustration */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-background via-muted/20 to-background rounded-xl border border-border/50 overflow-hidden">
                  {/* Wireframe elements */}
                  <div className="absolute inset-4">
                    {/* Header */}
                    <div className="h-8 bg-muted/40 rounded flex items-center px-3 gap-2 mb-3">
                      <div className="w-16 h-3 bg-primary/40 rounded" />
                      <div className="flex-1" />
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-2 bg-muted-foreground/30 rounded" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Hero */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="space-y-2">
                        <div className="h-4 bg-foreground/20 rounded w-3/4" />
                        <div className="h-3 bg-muted-foreground/20 rounded" />
                        <div className="h-3 bg-muted-foreground/20 rounded w-2/3" />
                        <div className="h-6 bg-primary/30 rounded w-20 mt-2" />
                      </div>
                      <div className="bg-secondary/10 rounded" />
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-muted/30 rounded p-2">
                          <div className="w-6 h-6 bg-primary/20 rounded mx-auto mb-1" />
                          <div className="h-2 bg-muted-foreground/20 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* UX element labels */}
                  {uxElements.map((el, index) => (
                    <motion.div
                      key={el.label}
                      className={`absolute ${el.position} glass-card px-2 py-1 rounded text-xs font-medium text-primary`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {el.label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Floating cursor indicator */}
              <motion.div
                className="absolute top-1/2 right-8 glass-card-elevated p-2 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MousePointer className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Navigation className="w-4 h-4" />
              User Experience
            </span>
            
            <h2 className="section-heading text-foreground ...1">
              Strategic UX That <span className="gradient-text">Guides Buyers</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              What questions do your visitors need answered? How far down do they scroll? 
              What triggers action? Great UX isn't guesswork—it's data-driven design 
              that guides visitors to conversion.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="glass-card-elevated p-4 flex items-start gap-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Clear Navigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Intuitive paths that lead visitors from awareness to conversion without friction.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-card-elevated p-4 flex items-start gap-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Human Psychology</h4>
                  <p className="text-sm text-muted-foreground">
                    Layouts that leverage behavioral science to increase engagement and trust.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-card-elevated p-4 flex items-start gap-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Conversion Focused</h4>
                  <p className="text-sm text-muted-foreground">
                    Every element optimized to move visitors toward your primary business goals.
                  </p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
