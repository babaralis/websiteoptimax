"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { PROCESS_STEPS } from "@/lib/constants";
import { RadialGlow, GridPattern } from "@/components/graphics/GridPattern";

export function ProcessSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <GridPattern variant="dots" className="opacity-30" />
      <RadialGlow color="mixed" position="center" intensity="low" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Workflow className="w-4 h-4" />
              Our Process
            </motion.span>
            <h2 className="section-heading text-foreground">
              From Concept to <span className="gradient-text">Conversions</span> in 4 Steps
            </h2>
            <p className="section-subheading mx-auto">
              A proven process that delivers results without the headaches.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Connector Line - Simple straight pink line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-primary"/>
                )}
                
                <div className="glass-card-elevated p-6 h-full group relative overflow-hidden">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div 
                      className="step-number w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground">
                      {step.duration}
                    </div>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        
        {/* Divider */}
        <div className="divider-gradient mt-20" />
      </div>
    </section>
  );
}
