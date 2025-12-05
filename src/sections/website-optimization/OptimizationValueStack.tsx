"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Check, Search, Target, Zap, FileText, BarChart3, Phone, Gift } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";

const deliverables = [
  {
    icon: Search,
    title: "Technical SEO Audit",
    description: "Complete crawl of your site to identify every technical issue hurting rankings",
    value: "$2,500",
  },
  {
    icon: Target,
    title: "Conversion Analysis",
    description: "Heatmaps, session recordings, and funnel analysis to find where visitors drop off",
    value: "$1,500",
  },
  {
    icon: Zap,
    title: "AI Keyword Map",
    description: "Keywords that AI platforms and search engines are recommending for your industry",
    value: "$1,000",
  },
  {
    icon: FileText,
    title: "UX Review",
    description: "Page-by-page breakdown of usability issues killing your conversions",
    value: "$1,500",
  },
  {
    icon: BarChart3,
    title: "Speed Audit",
    description: "Core Web Vitals analysis with specific fixes to hit 90+ performance scores",
    value: "$500",
  },
  {
    icon: FileText,
    title: "90-Day Roadmap",
    description: "Prioritized action plan with quick wins first, biggest impact items highlighted",
    value: "$2,000",
  },
  {
    icon: Phone,
    title: "Strategy Walkthrough",
    description: "60-minute call to review findings and answer every question",
    value: "$500",
  },
];

const totalValue = deliverables.reduce((sum, d) => sum + parseInt(d.value.replace(/[^0-9]/g, "")), 0);

export function OptimizationValueStack() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <GridPattern className="opacity-20" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Gift className="w-4 h-4" />
            What You Get
          </span>
          
          <h2 className="section-heading text-foreground ...1">
            Everything You Need to{" "}
            <span className="gradient-text">Fix Your Website</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            This isn't a generic checklist. It's a custom-built optimization plan 
            based on YOUR data, YOUR industry, and YOUR conversion goals.
          </p>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {deliverables.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <motion.div
                  className="glass-card-elevated p-4 flex items-center gap-4"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-muted-foreground line-through text-sm">{item.value}</span>
                    <div className="flex items-center gap-1 text-success">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">Included</span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          
          {/* Value summary */}
          <FadeIn delay={0.4}>
            <motion.div
              className="glass-card-premium p-8 text-center border-primary/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4">
                <span className="text-muted-foreground">Total Value:</span>
                <span className="text-3xl font-bold text-muted-foreground line-through ml-2">${totalValue.toLocaleString()}</span>
              </div>
              
              <div className="mb-6">
                <span className="text-muted-foreground">Your Investment:</span>
                <span className="text-5xl font-bold text-primary ml-4">$2,500</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                One-time fee. No recurring costs. Just a complete roadmap to more conversions.
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
                <Check className="w-4 h-4" />
                30-Day Money-Back Guarantee
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
