'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Building2, ShoppingCart, Landmark, Utensils, Cpu, Truck, Home, Dumbbell } from "lucide-react";

const industries = [
  { name: "Construction", icon: Building2, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop" },
  { name: "E-Commerce", icon: ShoppingCart, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop" },
  { name: "Fintech", icon: Landmark, image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop" },
  { name: "Food", icon: Utensils, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop" },
  { name: "Technology", icon: Cpu, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop" },
  { name: "Transport", icon: Truck, image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop" },
  { name: "Real Estate", icon: Home, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop" },
  { name: "Fitness", icon: Dumbbell, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop" },
];

export function LandingIndustries() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've built high-performing websites across diverse industries, each tailored to unique business needs.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <FadeIn key={industry.name} delay={index * 0.05}>
              <motion.div
                className="glass-card overflow-hidden cursor-pointer group"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-28 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4 text-center -mt-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mx-auto mb-2 border border-border/30">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {industry.name}
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
