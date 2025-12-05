"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GridPattern } from "@/components/graphics/GridPattern";

export function OptimizationGuarantee() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <GridPattern className="opacity-20" />
      
      <div className="container relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card-premium p-10 lg:p-14 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-success/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10 grid lg:grid-cols-[1fr,auto] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-success/20 flex items-center justify-center">
                      <Shield className="w-7 h-7 text-success" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                        The 90-Day Guarantee
                      </h2>
                      <p className="text-success font-medium">Zero Risk. Real Results.</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    <span className="text-foreground font-semibold">
                      If we don't improve your key conversion metric within 90 days, 
                      we work for free until we do.
                    </span>
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    No fine print. No excuses. We're so confident in our process that we're 
                    willing to put our time on the line. You get results or you get our 
                    continued work at no additional cost.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-muted-foreground">Measurable improvement in conversion rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-muted-foreground">Or we keep working until you see results</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-muted-foreground">30-day money-back if not satisfied</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center lg:text-left">
                  <Button variant="hero" size="xl" asChild className="shadow-glow-md">
                    <Link href="/contact" className="gap-2">
                      Claim Your Guarantee
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    Limited to 5 clients/month
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
