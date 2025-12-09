"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/button";
import { Search, Palette, Code, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GridPattern } from "@/components/graphics/GridPattern";
import { LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description: "We dive deep into your business, audience, and competitors to build a data-driven strategy.",
    duration: "Week 1-2",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & UX",
    description: "Convert-focused designs that capture your brand and guide visitors to action.",
    duration: "Week 3-4",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Blazing-fast, SEO-optimized build that's ready for AI search platforms.",
    duration: "Week 5-7",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimize",
    description: "Go live with confidence, then continuously improve based on real data.",
    duration: "Week 8+",
  },
];

export function WebDesignVision() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <GridPattern className="opacity-30" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-secondary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            Our Process
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            From Vision to <span className="gradient-text">Revenue</span> in 8 Weeks
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that's delivered 340% average lead increases for over 127 B2B brands.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <motion.div
                className="glass-card-elevated p-6 h-full relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">{step.number}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                
                <div className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs inline-block">
                  {step.duration}
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border/50" />
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
        
        {/* CTA */}
        <FadeIn className="text-center">
          <Button variant="hero" size="xl" asChild className="shadow-glow-md">
            <Link href="/contact" className="gap-2">
              Start Your Project Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
