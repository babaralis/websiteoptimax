"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Button } from "@/components/ui/button";
import { Palette, Code, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GridPattern } from "@/components/graphics/GridPattern";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features: string[];
  iconColor: string;
  bgGradient: string;
}

const services: Service[] = [
  {
    icon: Palette,
    title: "Web Design",
    description: "High-converting B2B web design that generates leads and drives revenue. We create visually stunning, conversion-focused websites.",
    href: "/web-design",
    features: [
      "Conversion-optimized layouts",
      "Modern, responsive design",
      "Brand-aligned aesthetics",
      "User experience focus"
    ],
    iconColor: "text-primary",
    bgGradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance websites for B2B brands. Blazing-fast, SEO-optimized builds ready for AI search platforms.",
    href: "/web-development",
    features: [
      "Lightning-fast performance",
      "SEO-optimized code",
      "AI-ready architecture",
      "Scalable solutions"
    ],
    iconColor: "text-secondary",
    bgGradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: TrendingUp,
    title: "Website Optimization",
    description: "Convert more visitors into customers. Get more leads from traffic you already have with data-driven optimization.",
    href: "/website-optimization",
    features: [
      "Conversion rate optimization",
      "A/B testing & analytics",
      "Performance improvements",
      "47% average lift"
    ],
    iconColor: "text-success",
    bgGradient: "from-success/20 to-success/5",
  },
];

export function AllServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <GridPattern className="opacity-30" />
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Our Services
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Complete Digital Solutions for{" "}
            <span className="gradient-text">B2B Growth</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From design to development and optimization—we provide end-to-end digital solutions that drive measurable results.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.href} delay={index * 0.1}>
              <motion.div
                className="glass-card-elevated p-6 h-full flex flex-col group relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-4 group-hover:shadow-glow-sm transition-shadow`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button
                    variant="heroOutline"
                    size="sm"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={service.href} className="gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
              </motion.div>
            </FadeIn>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
