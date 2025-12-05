"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function AIHeroSection() {
  return (
    <section id="ai-hero" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8 badge-glow"
          >
            <Bot className="w-4 h-4" />
            <span>AI Service Platform</span>
          </motion.div>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Intelligent AI Services That Work 24/7.
                <br />
                <span className="text-primary">Learn. Adapt. Deliver Results.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions that automate workflows, enhance customer
                experiences, and drive measurable results around the clock.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary-custom">
                  <Link href="/contact">
                    Get Started with AI Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline-custom text-white border-primary hover:bg-primary hover:text-white">
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

