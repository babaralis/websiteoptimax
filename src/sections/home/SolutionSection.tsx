"use client";

import { Target, Zap, Smartphone, BarChart3, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { SOLUTIONS } from "@/lib/constants";
import { RadialGlow } from "@/components/graphics/GridPattern";

const iconMap = {
  Target,
  Zap,
  Smartphone,
  BarChart3,
};

export function SolutionSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <RadialGlow color="secondary" position="right" intensity="low" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 border border-secondary/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-32 w-48 h-48 border border-secondary/5 rounded-full hidden lg:block"
      />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <FadeIn direction="right">
            <div>
              <motion.span 
                className="inline-flex items-center gap-2 text-secondary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-4 h-4" />
                The Website Optimax Approach
              </motion.span>
              <h2 className="section-heading text-foreground">
                Digital Experiences Built for <span className="text-secondary">B2B Growth</span>
              </h2>
              <p className="section-subheading mb-8">
                We don't just design websites—we engineer lead generation systems. 
                Every pixel, every word, every interaction is optimized to convert 
                your ideal customers.
              </p>
              
              {/* Stats highlight card */}
              <motion.div 
                className="glass-card-premium p-6 flex items-center gap-6 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent" />
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-1">340%</div>
                    <div className="text-sm text-muted-foreground">
                      Average increase in qualified leads<br />within the first 90 days
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right - Solution Cards */}
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SOLUTIONS.map((solution, index) => {
              const Icon = iconMap[solution.icon as keyof typeof iconMap];
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="glass-card-elevated p-6 h-full group relative overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon with glow */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mb-4 icon-glow group-hover:shadow-glow-sm transition-shadow">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
