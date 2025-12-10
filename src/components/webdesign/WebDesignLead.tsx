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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      <AbstractShapes variant="section" />
      <RadialGlow color="primary" position="center" intensity="medium" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <FadeIn>
          <div className="glass-card-premium p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            
            <div className="relative z-10 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left: Copy */}
              <div className="text-center lg:text-left">
                <motion.span 
                  className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  Limited Availability
                </motion.span>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
                  Stop Losing Leads to a{" "}
                  <span className="gradient-text-glow">Weak Website</span>
                </h2>
                
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                  Your competitors are already converting more visitors than you. 
                  Every day without a high-performing website is revenue left on the table.
                </p>
                
                {/* Guarantees */}
                <div className="space-y-2 sm:space-y-3">
                  {guarantees.map((guarantee) => (
                    <div key={guarantee} className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right: Quick form */}
              <div className="glass-card-elevated p-6 sm:p-8 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
                  Get Started in 60 Seconds
                </h3>
                
                <form
                  className="space-y-3 sm:space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="bg-background/50 text-sm sm:text-base"
                  />
                  
                  <Button 
                    type="button" 
                    variant="hero" 
                    size="lg"
                    className="w-full text-sm sm:text-base shadow-glow-md"
                  >
                    Book My Strategy Call
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                  </Button>
                </form>
                
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>We never share your information</span>
                </div>
                
                {/* Urgency */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/30 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
                    <span className="text-muted-foreground">
                      Only <strong className="text-foreground">3 spots</strong> available this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA row */}
            <motion.div
              className="relative z-10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-sm sm:text-base text-muted-foreground text-center sm:text-left">Prefer to talk first?</span>
              <Button variant="heroOutline" size="sm" className="sm:size-default">
                <Link 
                  href="#" 
                  className="flex items-center gap-2 text-sm sm:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== 'undefined' && (window as any).$zopim) {
                      (window as any).$zopim.livechat.window.toggle();
                    }
                  }}
                >
                  Schedule a Call Directly
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
