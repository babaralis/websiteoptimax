"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { RadialGlow } from "@/components/graphics/GridPattern";

const caseStudies = [
  {
    company: "TechFlow SaaS",
    logo: "https://www.orbitmedia.com/wp-content/uploads/2024/11/logo-700x400-PressGaney-e1733250025790-467x234.png",
    metric: "+521%",
    label: "Organic Traffic Value",
    description: "From invisible to industry leader in 6 months",
  },
  {
    company: "CloudSecure",
    logo: "https://www.orbitmedia.com/wp-content/uploads/2024/11/logo-700x400-Access-467x234.png",
    metric: "+42%",
    label: "Conversion Rate",
    description: "Same traffic, 42% more qualified leads",
  },
  {
    company: "GrowthLabs",
    logo: "https://www.orbitmedia.com/wp-content/uploads/2024/11/logo-700x400-FirstBusinessBank-467x234.png",
    metric: "+37%",
    label: "Page 1 Rankings",
    description: "Dominating search for high-intent keywords",
  },
];

export function OptimizationCaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 relative overflow-hidden">
      <RadialGlow color="secondary" position="center" intensity="low" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-success text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-success/10 border border-success/20">
            <TrendingUp className="w-4 h-4" />
            Proof Over Promises
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Real Results From <span className="gradient-text">Real Companies</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We let the numbers speak. Here's what happens when you stop guessing 
            and start optimizing with data.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.company}>
              <motion.div
                className="glass-card-premium p-8 text-center h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Logo placeholder */}
                <div className="h-16 flex items-center justify-center mb-6">
                  <img 
                    src={study.logo} 
                    alt={study.company}
                    className="max-h-12 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
                
                <motion.p 
                  className="text-5xl font-bold text-success mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {study.metric}
                </motion.p>
                
                <p className="text-foreground font-semibold mb-2">{study.label}</p>
                <p className="text-sm text-muted-foreground">{study.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </StaggerChildren>
        
        <FadeIn delay={0.4} className="text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium animated-underline"
          >
            See all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
