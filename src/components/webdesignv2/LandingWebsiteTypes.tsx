'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Layout, Briefcase, ShoppingBag } from "lucide-react";

const websiteTypes = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Attract and convert potential customers with high-converting landing pages designed for specific campaigns or products.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Showcase your brand with a professional, user-friendly website that reflects your business's values and goals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    description: "Create an online store that provides a smooth shopping experience, secure transactions, and drives conversions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
];

export function LandingWebsiteTypes() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-surface/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.03)_25%,hsl(var(--primary)/0.03)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.03)_75%)] bg-[size:60px_60px]" />
      </div>
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Custom-Built Designs For{" "}
            <span className="gradient-text">Every Business Type</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Orbitline, we create high-performance websites tailored to your industry, audience, and brand goals. Whether you're a startup, a product-based brand, or a personal creator—we've got you covered.
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          {websiteTypes.map((type, index) => (
            <FadeIn key={type.title} delay={index * 0.1}>
              <motion.div
                className="glass-card-premium overflow-hidden h-full group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center">
                      <type.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {type.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
