"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import optimizationHeroImage from "@/assets/weboptimization/banner.jpg";
import Image from "next/image";

export function OptimizationHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <AbstractShapes variant="hero" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4" />
              Website Optimization Program
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Get More Leads From Traffic{" "}
              <span className="gradient-text-glow">You Already Have</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Your website gets visitors. But how many become customers?
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our optimization program finds the hidden conversion killers in your site 
              and fixes them—so you get more leads without spending another dollar on ads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild className="shadow-glow-md">
                <Link href="/contact" className="gap-2">
                  Get Your Optimization Plan
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#case-studies">See Results First</a>
              </Button>
            </div>
            
            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span className="text-muted-foreground">Avg. <span className="text-foreground font-semibold">47% conversion lift</span> in 90 days</span>
              </div>
            </motion.div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <motion.div
                className="glass-card-premium p-1 rounded-2xl overflow-hidden shadow-glow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={optimizationHeroImage}
                  alt="Website optimization analytics dashboard showing performance metrics"
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </motion.div>
              
              {/* Floating result badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card-elevated px-4 py-3 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-2xl font-bold text-success">+521%</p>
                <p className="text-xs text-muted-foreground">Traffic Value Increase</p>
              </motion.div>
              
              {/* Conversion lift badge */}
              <motion.div
                className="absolute -top-4 -left-4 glass-card-elevated px-4 py-3 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-2xl font-bold text-primary">+47%</p>
                <p className="text-xs text-muted-foreground">Avg. Conversion Lift</p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
