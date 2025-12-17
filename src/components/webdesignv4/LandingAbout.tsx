'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Users,
    stat: "70+",
    label: "Specialists",
  },
  {
    icon: Target,
    stat: "Strategy",
    label: "Data-Driven",
  },
  {
    icon: Zap,
    stat: "High",
    label: "Performance",
  },
  {
    icon: TrendingUp,
    stat: "Revenue",
    label: "Focused",
  },
];

export function LandingAbout() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-surface/50">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      
      <div className="container relative z-10 mobile-about-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[#84CC16] text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/20">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] to-[#84CC16]">WebsiteOptimax</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              At WebsiteOptimax, we engineer digital assets that align with your brand, support your sales process, and drive measurable growth. Backed by 70+ specialists in strategy, design, development, and marketing, we create websites that captivate your prospects, guide them through your funnel, and operate as high-performance revenue engines.
            </p>
            
            <div className="relative mb-8 rounded-2xl overflow-hidden">
              <img 
                src="/assets/images/webdesign/why1.jpg" 
                alt="Our team at work"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-foreground font-medium">Our expert team delivering results</p>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="shadow-[#84CC16]/25 bg-[#84CC16] text-black hover:bg-[#a3e635] hover:shadow-[#A3E635]/30">
              <Link 
                href="#" 
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && (window as any).$zopim) {
                    (window as any).$zopim.livechat.window.toggle();
                  }
                }}
              >
                Start Your Website Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="glass-card-elevated shadow-[0_0_0_0.0625rem_hsl(var(--border)_/_0.15),_0_0.625rem_0.9375rem_-0.1875rem_hsl(0_0%_0%_/_0.2),_0_0.25rem_0.375rem_-0.25rem_hsl(0_0%_0%_/_0.1),_0_1.5625rem_3.125rem_-0.75rem_hsl(83.74deg_80.53%_44.31%_/_13%),_inset_0_0.0625rem_0_0_hsl(var(--foreground)_/_0.08)] p-6 text-center"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#14B8A6]/20 to-[#84CC16]/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-[#84CC16]" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
