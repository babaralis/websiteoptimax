"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Palette, Eye, Sparkles, Layers } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";
import Image from "next/image";

export function WebDevDesign() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <GridPattern className="opacity-20" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                className="glass-card-premium p-1 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Design showcase mockup */}

                <Image src="/assets/images/webdevelopment/design-that-brings-your-brand-to-life.png" alt="Web development design" width={600} height={500} />
                
                {/* <div className="aspect-square bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-xl p-6 relative overflow-hidden">
                  
                  <motion.div
                    className="absolute top-8 left-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 blur-sm"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-12 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-3xl border border-border/30 backdrop-blur-sm"
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                        whileHover={{ rotate: 10 }}
                      >
                        <Palette className="w-10 h-10 text-primary-foreground" />
                      </motion.div>
                      <p className="text-sm font-medium text-foreground">Brand Expression</p>
                      <p className="text-xs text-muted-foreground">Designed for Impact</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {["primary", "secondary", "success", "muted"].map((color, i) => (
                      <motion.div
                        key={color}
                        className={`w-4 h-4 rounded-full bg-${color}`}
                        style={{
                          backgroundColor: 
                            color === "primary" ? "hsl(var(--primary))" :
                            color === "secondary" ? "hsl(var(--secondary))" :
                            color === "success" ? "hsl(var(--success))" :
                            "hsl(var(--muted-foreground))"
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div> */}

              </motion.div>
              
              {/* Testimonial */}
              <motion.div
                className="absolute -bottom-8 -right-4 glass-card-elevated p-4 rounded-xl max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-muted-foreground italic mb-2">
                  "They didn't just put our brand on the site—they reimagined it for the web."
                </p>
                <p className="text-xs font-medium text-foreground">— Sarah Mitchell, TechFlow</p>
              </motion.div>
            </div>
          </FadeIn>
          
          <FadeIn className="order-1 lg:order-2" delay={0.2}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Palette className="w-4 h-4" />
              Visual Design
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Design That Brings Your{" "}
              <span className="gradient-text">Brand to Life</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Bold and modern, or confidently classic? Technical or approachable? 
              Whatever defines your brand, we don't just transplant it to the web—we 
              reimagine it for digital engagement.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visual Hierarchy</h4>
                  <p className="text-sm text-muted-foreground">
                    Strategic use of color, typography, and spacing to guide attention where it matters most.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Depth & Dimension</h4>
                  <p className="text-sm text-muted-foreground">
                    Modern design language with subtle shadows, gradients, and motion that feels alive.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Conversion-Focused</h4>
                  <p className="text-sm text-muted-foreground">
                    Every visual element is designed to build trust and compel action.
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
