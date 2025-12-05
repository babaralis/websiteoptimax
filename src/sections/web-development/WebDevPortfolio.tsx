"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { ArrowRight, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TechFlow SaaS Platform",
    category: "Enterprise SaaS",
    result: "+340% trial signups",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/Portfolio-Thumb-GCFD-HomeDnM-725x544.png",
    award: true,
    description: "Complete platform redesign that tripled enterprise trial conversions",
  },
  {
    title: "GrowthLabs Agency",
    category: "B2B Services",
    result: "26% more qualified leads",
    image: "https://www.orbitmedia.com/wp-content/uploads/2022/09/Portfolio-Thumb-Horton-HomeDnM-725x544.png",
    award: false,
    description: "Lead generation engine that books 50+ discovery calls monthly",
  },
  {
    title: "CloudSecure Enterprise",
    category: "Cybersecurity",
    result: "42% higher conversions",
    image: "https://www.orbitmedia.com/wp-content/uploads/2024/08/Portfolio-Thumb-Access-Corp-2desktops@1x-725x544.jpg",
    award: true,
    description: "Enterprise security platform with AI-powered threat dashboard",
  },
  {
    title: "DataSync B2B",
    category: "Data Integration",
    result: "118% engagement increase",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/04/Portfolio-Thumb-Byline-Bank-Home-updated@1x-725x544.webp",
    award: true,
    description: "Integration platform redesign with streamlined onboarding flow",
  },
  {
    title: "Propel Finance",
    category: "FinTech",
    result: "68% shorter sales cycle",
    image: "https://www.orbitmedia.com/wp-content/uploads/2016/07/Portfolio-Thumb-Budderfly-HomeDnM@1x-725x544.jpg",
    award: false,
    description: "Financial services platform with automated qualification system",
  },
  {
    title: "Nexus Consulting",
    category: "Professional Services",
    result: "3.2x pipeline growth",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/Portfolio-Thumb-Gordon-Foods-2desktops-725x544.png",
    award: false,
    description: "Consulting firm site with case study showcase and booking system",
  },
];

export function WebDevPortfolio() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Recent Work
          </span>
          
          <h2 className="section-heading text-foreground ...">
            B2B Websites That <span className="gradient-text">Drive Results</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is measured by business impact, not just aesthetics. 
            Here's what strategic web development looks like in action.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <FadeIn key={project.title}>
              <motion.div
                className="glass-card-elevated overflow-hidden group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Award badge */}
                  {project.award && (
                    <div className="absolute top-3 right-3">
                      <div className="glass-card px-2 py-1 rounded-full flex items-center gap-1">
                        <Award className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium">Award Winner</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Result badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-xs font-semibold">{project.result}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">{project.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </StaggerChildren>
        
        <FadeIn delay={0.4} className="text-center mt-12">
          <Button variant="hero" size="lg" asChild className="shadow-glow-sm">
            <Link href="/portfolio" className="gap-2">
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
