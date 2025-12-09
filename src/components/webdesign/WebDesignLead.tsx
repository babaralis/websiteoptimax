"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Shield, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { RadialGlow } from "@/components/graphics/GridPattern";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

const guarantees = [
  "No obligation consultation",
  "Custom growth roadmap included",
  "Response within 24 hours",
  "100% satisfaction guarantee",
];

export function WebDesignLead() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <AbstractShapes variant="section" />
      <RadialGlow color="primary" position="center" intensity="medium" />
      
      <div className="container relative z-10">
        <FadeIn>
          <div className="glass-card-premium p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Copy */}
              <div>
                <motion.span 
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-4 h-4" />
                  Limited Availability
                </motion.span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Stop Losing Leads to a{" "}
                  <span className="gradient-text-glow">Weak Website</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Your competitors are already converting more visitors than you. 
                  Every day without a high-performing website is revenue left on the table.
                </p>
                
                {/* Guarantees */}
                <div className="space-y-3">
                  {guarantees.map((guarantee) => (
                    <div key={guarantee} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right: Quick form */}
              <div className="glass-card-elevated p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Get Started in 60 Seconds
                </h3>
                
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="bg-background/50"
                  />
                  
                  <Button 
                    type="button" 
                    variant="hero" 
                    size="xl" 
                    className="w-full shadow-glow-md"
                  >
                    Book My Strategy Call
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </form>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>We never share your information</span>
                </div>
                
                {/* Urgency */}
                <div className="mt-4 pt-4 border-t border-border/30 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-destructive" />
                    <span className="text-muted-foreground">
                      Only <strong className="text-foreground">3 spots</strong> available this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA row */}
            <motion.div
              className="relative z-10 mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-muted-foreground">Prefer to talk first?</span>
              <Button variant="heroOutline" asChild>
                <Link href="/contact" className="gap-2">
                  Schedule a Call Directly
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
