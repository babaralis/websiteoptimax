"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Check, X, Target } from "lucide-react";
import { RadialGlow } from "@/components/graphics/GridPattern";

const goodFit = [
  "B2B or SaaS company with existing website traffic",
  "Monthly ad spend of $5k+ or significant organic traffic",
  "Ready to implement changes (in-house or through us)",
  "Focused on lead quality, not just vanity metrics",
  "Patient enough to let data-driven changes compound",
];

const badFit = [
  "Brand new websites with no traffic data to analyze",
  "Looking for overnight miracles or shortcuts",
  "Not willing to make recommended changes",
  "Focused only on rankings, not conversions",
  "Need a complete website rebuild (we offer that separately)",
];

export function OptimizationQualification() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <RadialGlow color="primary" position="right" intensity="low" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Target className="w-4 h-4" />
            Is This Right For You?
          </span>
          
          <h2 className="section-heading text-foreground ...1">
            This Program Is <span className="gradient-text">Not For Everyone</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We're selective about who we work with because our guarantee depends on 
            working with the right companies. Here's how to know if we're a fit.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good fit */}
          <FadeIn>
            <motion.div
              className="glass-card-premium p-8 h-full border-success/20"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">You're a Good Fit If...</h3>
              </div>
              
              <div className="space-y-4">
                {goodFit.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
          
          {/* Bad fit */}
          <FadeIn delay={0.2}>
            <motion.div
              className="glass-card-elevated p-8 h-full border-muted-foreground/20"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <X className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Not a Fit If...</h3>
              </div>
              
              <div className="space-y-4">
                {badFit.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>
        
        {/* Web dev CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <div className="glass-card-elevated p-6 max-w-xl mx-auto">
            <p className="text-muted-foreground">
              Need a complete website rebuild instead?{" "}
              <a href="/web-development" className="text-primary hover:text-primary/80 font-medium animated-underline">
                Check out our Web Development services →
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
