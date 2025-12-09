"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Brain, FileSearch, Palette, Code, LineChart, RefreshCw } from "lucide-react";
import { RadialGlow } from "@/components/graphics/GridPattern";
import Image from "next/image";

const aiFeatures = [
  {
    icon: Brain,
    title: "Strategy & Research",
    description: "AI-enhanced analysis of your market, competitors, and buyer intent to inform every strategic decision.",
  },
  {
    icon: FileSearch,
    title: "Content Development",
    description: "Our writers leverage AI to optimize content for both human readers and AI platforms like ChatGPT and Claude.",
  },
  {
    icon: Palette,
    title: "Design & Structure",
    description: "Clear, accessible layouts that help AI crawlers understand and recommend your brand to searchers.",
  },
  {
    icon: Code,
    title: "Technical Optimization",
    description: "Structured data, semantic HTML, and fast performance that AI systems love to index and cite.",
  },
  {
    icon: LineChart,
    title: "Post-Launch Measurement",
    description: "Comprehensive tracking of organic performance, AI referral traffic, and engagement metrics.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Optimization",
    description: "Continuous evolution of your content strategy based on AI algorithm updates and performance data.",
  },
];

export function WebDevAI() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <RadialGlow color="secondary" position="center" intensity="low" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-secondary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <Brain className="w-4 h-4" />
            Future-Ready Development
          </span>
          
          <h2 className="section-heading text-foreground ...1">
            AI-Optimized for <span className="gradient-text">Maximum Visibility</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            With ChatGPT, Gemini, and Claude reshaping how B2B buyers discover solutions, 
            your website needs to speak both human and machine. We build for both.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <FadeIn key={feature.title}>
              <motion.div
                className="glass-card-elevated p-6 h-full"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </StaggerChildren>
        
        {/* Testimonial */}
        <FadeIn delay={0.4}>
          <div className="mt-16 max-w-3xl mx-auto">
            <motion.div
              className="glass-card-premium p-8 text-center relative"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="text-5xl text-primary">"</span>
              </div>
              <blockquote className="text-lg md:text-xl text-foreground font-medium mb-4 pt-4">
                Website Optimax understands that modern B2B buyers research differently. Our AI-optimized 
                site now appears in ChatGPT recommendations, which accounts for 23% of our new leads.
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <Image
                  src="/assets/images/testi.webp"
                  alt="David Park"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground">David Park</p>
                  <p className="text-sm text-muted-foreground">VP Digital, CloudSecure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
