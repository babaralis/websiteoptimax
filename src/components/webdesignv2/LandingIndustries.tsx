'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Building2, ShoppingCart, Landmark, Utensils, Cpu, Truck, Home, Dumbbell } from "lucide-react";

const industries = [
  { name: "Construction", icon: Building2, image: "/assets/images/webdesign/industries/construction.jpg" },
  { name: "E-Commerce", icon: ShoppingCart, image: "/assets/images/webdesign/industries/e-commerce.jpg" },
  { name: "Fintech", icon: Landmark, image: "/assets/images/webdesign/industries/fintech.jpg" },
  { name: "Food", icon: Utensils, image: "/assets/images/webdesign/industries/food.jpg" },
  { name: "Technology", icon: Cpu, image: "/assets/images/webdesign/industries/technology.jpg" },
  { name: "Transport", icon: Truck, image: "/assets/images/webdesign/industries/transport.jpg" },
  { name: "Real Estate", icon: Home, image: "/assets/images/webdesign/industries/real-estate.jpg" },
  { name: "Fitness", icon: Dumbbell, image: "/assets/images/webdesign/industries/fitness.jpg" },
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
