"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GridPattern, RadialGlow } from "@/components/graphics/GridPattern";
import { motion } from "framer-motion";
import portfolioHeroImage from "@/assets/hero/portfolio-hero.jpg";
import Image from "next/image";

export function PortfolioHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <GridPattern variant="dots" className="opacity-30" />
      <RadialGlow color="secondary" position="top-right" intensity="medium" />
      <RadialGlow color="primary" position="bottom-left" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
            B2B Case Studies
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Measurable Results for{" "}
            <span className="gradient-text">B2B & SaaS Brands</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how we've helped B2B companies increase pipeline, shorten sales cycles, 
            and generate millions in new revenue through strategic web design.
          </p>
          
          <Button variant="hero" size="xl" asChild className="shadow-glow-md">
            <Link href="/contact">
              Get Results Like These
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow-lg max-w-4xl mx-auto">
              <Image
                src={portfolioHeroImage}
                alt="Portfolio showcase of B2B website projects with metrics and results"
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
