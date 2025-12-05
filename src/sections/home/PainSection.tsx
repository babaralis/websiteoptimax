"use client";

import { AlertTriangle, TrendingDown, Clock, Smartphone, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { PAIN_POINTS, CONSEQUENCES } from "@/lib/constants";
import { RadialGlow } from "@/components/graphics/GridPattern";

const iconMap = {
  AlertTriangle,
  TrendingDown,
  Clock,
  Smartphone,
};

export function PainSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background effects */}
      <RadialGlow color="primary" position="top-right" intensity="low" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card/50 to-card/30" />
      
      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </motion.span>
            <h2 className="section-heading text-foreground">
              Is Your Website <span className="text-primary">Costing You</span> Enterprise Deals?
            </h2>
            <p className="section-subheading mx-auto">
              In B2B, your website is often the first impression. A weak digital presence 
              means losing deals before your sales team even gets a chance.
            </p>
          </div>
        </FadeIn>

        {/* Pain Points Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PAIN_POINTS.map((pain, index) => {
            const Icon = iconMap[pain.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className="glass-card-elevated p-6 card-hover group relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center flex-shrink-0 icon-glow group-hover:animate-glow-pulse">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pain.title}
                      </h3>
                      <p className="text-muted-foreground">{pain.description}</p>
                    </div>
                  </div>
                  
                  {/* Subtle bottom border glow on hover */}
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-destructive/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Consequences - Enhanced */}
        <FadeIn delay={0.2}>
          <div className="glass-card-premium p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-destructive/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  The Real Cost of a Weak Digital Presence
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONSEQUENCES.map((consequence, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10 hover:border-destructive/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 animate-pulse" />
                    <span className="text-muted-foreground">{consequence}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
