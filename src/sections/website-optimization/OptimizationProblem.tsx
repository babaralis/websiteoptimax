"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { AlertTriangle, DollarSign, Clock, TrendingDown, X } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";

const problems = [
  {
    icon: TrendingDown,
    title: "Traffic but no leads",
    description: "You're paying for visitors who leave without converting. Every bounce is money down the drain.",
  },
  {
    icon: Clock,
    title: "Slow, outdated site",
    description: "Your competitors load in 2 seconds. Yours takes 5. Google notices. So do your prospects.",
  },
  {
    icon: DollarSign,
    title: "Wasted ad spend",
    description: "Pouring budget into ads that send traffic to pages that don't convert? That's not marketing—it's burning cash.",
  },
  {
    icon: AlertTriangle,
    title: "Invisible to AI",
    description: "ChatGPT and Gemini are the new search. If your site isn't optimized for AI, you're invisible to tomorrow's buyers.",
  },
];

const consequences = [
  "Competitors capturing YOUR market share",
  "Sales team complaining about lead quality",
  "Marketing budget with no measurable ROI",
  "Falling rankings while you watch",
];

export function OptimizationProblem() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <GridPattern className="opacity-20" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-destructive text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20">
            <AlertTriangle className="w-4 h-4" />
            The Hidden Problem
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Your Website Is <span className="text-destructive">Leaking Money</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Most B2B websites convert at 1-2%. That means 98% of your traffic leaves 
            without taking action. On a $10k/month ad budget, that's $9,800 wasted. Every. Single. Month.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <FadeIn key={problem.title} delay={index * 0.1}>
              <motion.div
                className="glass-card-elevated p-6 h-full border-destructive/10"
                whileHover={{ y: -4, borderColor: "hsl(var(--destructive) / 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        
        {/* Consequences callout */}
        <FadeIn delay={0.4}>
          <div className="glass-card-premium p-8 max-w-3xl mx-auto border-destructive/20">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              And every month you wait, it gets worse:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {consequences.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
