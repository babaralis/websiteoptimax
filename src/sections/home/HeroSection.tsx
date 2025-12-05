"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Award, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { STATS } from "@/lib/constants";
import { event as trackEvent } from "@/lib/analytics";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import { BriefForm } from "@/sections/brief/BriefForm";
import homeHeroImage from "@/assets/hero/home-hero.jpg";
import Image from "next/image";

export function HeroSection() {
  const [showBriefForm, setShowBriefForm] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const handleGetStarted = () => {
    if (companyName.trim()) {
      setShowBriefForm(true);
      trackEvent({
        action: "cta_click",
        category: "Engagement",
        label: "Hero - Get Started",
      });
    }
  };

  // Disable body scroll when form is open
  useEffect(() => {
    if (showBriefForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showBriefForm]);

  return (
    <>
      {showBriefForm && (
        <BriefForm
          initialCompanyName={companyName}
        />
      )}
    <section className="relative h-[210vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background Effects */}
      <AbstractShapes variant="hero" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8 badge-glow"
          >
            <Award className="w-4 h-4" />
            <span>Award-Winning B2B Digital Agency</span>
          </motion.div>
          
          {/* Headline with enhanced typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6"
          >
            Websites That Turn{" "}
            <span className="gradient-text-glow">B2B Traffic</span>{" "}
            Into Revenue
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
          >
            We design and build high-performance websites for B2B, SaaS, and service companies. 
            No templates. No fluff. Just conversion-focused digital experiences that generate 
            qualified leads and accelerate your sales pipeline.
          </motion.p>
         

          {/* Input Field with Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-lg mx-auto mb-16 flex items-center gap-0 homebannerform"
          >
            <div className="relative flex items-center rounded-l-[0.75rem] rounded-r-none border-2 border-r-0 border-primary/50 bg-background overflow-hidden flex-1 h-14">
              <div className="flex items-center flex-1 h-full pl-4 pr-0">
                <Pencil className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Enter Your Business Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base h-full flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && companyName.trim()) {
                      handleGetStarted();
                    }
                  }}
                />
              </div>
            </div>

            {/* <Button
              variant="default"
              size="lg"
              className="rounded-l-none rounded-r-[0.75rem] h-14 px-8 text-base font-semibold whitespace-nowrap border-0 bg-[#ff4772] hover:bg-[#ff4772]/90 text-white relative z-10"
              onClick={handleGetStarted}
            >
              Get Started
            </Button> */}

            <Button 
                variant="default" 
                size="xl" 
                className="animate-pulse-glow shadow-glow-lg rounded-l-none rounded-r-[0.75rem] h-14 px-8 text-base font-semibold whitespace-nowrap border-0 bg-[#ff4772] hover:bg-[#ff4772]/90 text-white relative z-10"
                onClick={handleGetStarted}
              >Get Started
              </Button>

          </motion.div>
          
          {/* Stats with glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {STATS.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass-card p-4 md:p-6 text-center card-hover group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow-lg">
              <Image
                src={homeHeroImage}
                alt="B2B website design and development mockup showing modern interfaces"
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 mb-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm"
          >
            <span>Trusted by industry leaders:</span>
            <div className="flex items-center gap-8 opacity-60">
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/3.svg"
                  alt="TechFlow"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/6.svg"
                  alt="GrowthLabs"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/7.svg"
                  alt="CloudSecure"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/8.svg"
                  alt="ScaleUp"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll Indicator */}
      <Link href="#portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 glass">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
      </Link>
    </section>
    </>
  );
}
