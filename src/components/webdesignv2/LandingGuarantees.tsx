'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { RefreshCw, Rocket, DollarSign, Headphones } from "lucide-react";

const guarantees = [
  {
    icon: RefreshCw,
    title: "Results or Redesign Guarantee",
    description: "If your website doesn't deliver results, we'll redesign it for free.",
    image: "/assets/images/webdesign/guarantee1.jpg",
  },
  {
    icon: Rocket,
    title: "10-Day Launch Guarantee",
    description: "Get your website live in 10 business days or less.",
    image: "/assets/images/webdesign/guarantee2.jpg",
  },
  {
    icon: DollarSign,
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprise costs or charges.",
    image: "/assets/images/webdesign/guarantee3.jpg",
  },
  {
    icon: Headphones,
    title: "30 Days Free Support",
    description: "Complimentary support for 30 days after launch.",
    image: "/assets/images/webdesign/guarantee4.jpg",
  },
];

export function LandingGuarantees() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="container relative z-10">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Guarantees</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We stand behind our work with iron-clad guarantees that protect your investment.
          </p>
        </FadeIn>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <FadeIn key={guarantee.title} delay={index * 0.1}>
              <motion.div
                className="glass-card-elevated overflow-hidden h-full"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={guarantee.image} 
                    alt={guarantee.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/90 to-secondary/90 flex items-center justify-center">
                      <guarantee.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
