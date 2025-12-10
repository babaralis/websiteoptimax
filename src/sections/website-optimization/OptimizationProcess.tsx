"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Clock, FileSearch, Wrench, TrendingUp } from "lucide-react";
import { RadialGlow } from "@/components/graphics/GridPattern";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Deep Dive Analysis",
    duration: "Week 1",
    description: "We audit every page, analyze your traffic data, review competitors, and identify exactly where you're losing conversions.",
    deliverable: "Complete diagnostic report",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Strategic Roadmap",
    duration: "Week 2",
    description: "We prioritize fixes by impact and effort. Quick wins first, then systematic improvements for compounding gains.",
    deliverable: "90-day action plan",
  },
  {
    number: "03",
    icon: Clock,
    title: "Implementation Support",
    duration: "Week 3-4",
    description: "We walk your team through every recommendation. Or hand it to our dev team for done-for-you execution.",
    deliverable: "Strategy call + ongoing access",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Measure & Iterate",
    duration: "Ongoing",
    description: "Track improvements in real-time. We provide a measurement framework so you know exactly what's working.",
    deliverable: "Results dashboard",
  },
];

export function OptimizationProcess() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <RadialGlow color="secondary" position="left" intensity="low" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-secondary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <Clock className="w-4 h-4" />
            The Process
          </span>
          
          <h2 className="section-heading text-foreground ...1">
            Results in <span className="gradient-text">30-60 Days</span>, Not 6 Months
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Most agencies take months to deliver. We prioritize quick wins so you see 
            measurable improvement within the first month.
          </p>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative grid gap-4">
            {/* Connecting line */}
            <div className="absolute left-[2.4375rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-success hidden" />
            
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <motion.div
                  className="relative flex flex-col md:flex-row gap-4 md:gap-6 mb-8 last:mb-0"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step number - Above on mobile, left on desktop */}
                  <div className="relative z-10 flex-shrink-0 flex justify-center md:justify-start">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-border/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <step.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="glass-card-elevated p-6 flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-primary">{step.number}</span>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      <span className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Deliverable:</span>
                      <span className="text-secondary font-medium">{step.deliverable}</span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
