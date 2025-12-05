"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export function AIHeroSection() {
  return (
    <section id="ai-hero" className="relative py-24 lg:py-32 overflow-hidden">
      <AbstractShapes variant="hero" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-5xl text-center">
            <FadeIn>
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary badge-glow"
                whileHover={{ scale: 1.05 }}
              >
                <Bot className="w-4 h-4" />
                <span>AI Service Platform</span>
              </motion.span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Intelligent AI Services That Work 24/7.
                <br />
                <span className="gradient-text-glow">Learn. Adapt. Deliver Results.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions that automate workflows, enhance customer
                experiences, and drive measurable results around the clock.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild className="shadow-glow-md">
                  <Link href="/contact" className="gap-2">
                    Get Started with AI Services
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link href="#ai-features">Explore Our Solutions</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

