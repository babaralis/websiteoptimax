"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Clock, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event as trackEvent } from "@/lib/analytics";
import { RadialGlow, GridPattern } from "@/components/graphics/GridPattern";

const benefits = [
  { icon: Calendar, text: "Free 30-minute strategy session" },
  { icon: CheckCircle, text: "Custom growth roadmap" },
  { icon: Shield, text: "No obligation, no pressure" },
];

export function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <GridPattern variant="cross" className="opacity-50" />
      <RadialGlow color="primary" position="center" intensity="medium" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
      />
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-premium p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
          
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary/30 rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-secondary/30 rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary/30 rounded-br-xl" />
          
          <div className="relative z-10">
            <motion.span 
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 badge-glow"
              animate={{ boxShadow: ["0 0 1.25rem hsl(346 100% 64% / 0.2)", "0 0 2.5rem hsl(346 100% 64% / 0.4)", "0 0 1.25rem hsl(346 100% 64% / 0.2)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Ready to Accelerate Growth?
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Let's Build Your{" "}
              <span className="gradient-text-glow">Revenue Engine</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Book a free strategy session and discover how Website Optimax can transform 
              your digital presence into a predictable source of qualified leads and revenue.
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 text-sm text-muted-foreground glass-card px-4 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <benefit.icon className="w-5 h-5 text-success" />
                  {benefit.text}
                </motion.div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                asChild 
                className="animate-pulse-glow shadow-glow-lg"
                onClick={() => trackEvent({
                  action: "cta_click",
                  category: "Engagement",
                  label: "Home CTA - Strategy Session",
                })}
              >
                <Link href="/contact" className="gap-2">
                  Get Your Growth Strategy
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl" 
                asChild
                onClick={() => trackEvent({
                  action: "cta_click",
                  category: "Engagement",
                  label: "Home CTA - View Services",
                })}
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div> */}
            
            {/* Urgency */}
            <motion.div 
              className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-sm text-muted-foreground">
                Limited availability — We partner with only <span className="text-foreground font-semibold">4 new clients</span> per quarter.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
