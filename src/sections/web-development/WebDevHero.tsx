"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Star } from "lucide-react";
import Link from "next/link";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import { CountUp } from "@/components/animations/CountUp";
import webdevHeroImage from "@/assets/webdevelopment/banner.jpg";
import Image from "next/image";

const platforms = ["React", "Next.js", "WordPress", "HubSpot", "Shopify"];

const ratings = [
  { platform: "Google", rating: "4.9", stars: 5 },
  { platform: "Clutch", rating: "5.0", stars: 5 },
  { platform: "Trustpilot", rating: "4.8", stars: 5 },
];

export function WebDevHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <AbstractShapes variant="hero" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            {/* Platform tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {platforms.map((platform) => (
                <span 
                  key={platform}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Web Design & Development for{" "}
              <span className="gradient-text-glow">B2B Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Your website is your highest-ROI asset. It's where first impressions become 
              lasting partnerships. Let's build something that converts visitors into 
              qualified pipeline.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild className="shadow-glow-md">
                <Link href="/portfolio" className="gap-2">
                  Explore Our Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            {/* Hero Image */}
            <div className="relative">
              <motion.div
                className="glass-card-premium p-1 rounded-2xl overflow-hidden shadow-glow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={webdevHeroImage}
                  alt="Web development workspace with code and modern interfaces"
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </motion.div>
              
              {/* Floating stats badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card-elevated px-4 py-3 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-2xl font-bold text-primary"><CountUp value={127} suffix="+" duration={2} /></p>
                <p className="text-xs text-muted-foreground">Brands Transformed</p>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card-elevated px-4 py-2 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-semibold">Award-Winning Team</span>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
        
        {/* Ratings bar */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">Recognized for excellence by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-8">
              {ratings.map((item) => (
                <div key={item.platform} className="glass-card-elevated px-6 py-4 rounded-xl">
                  <p className="font-semibold text-foreground">{item.platform}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-lg font-bold text-primary">{item.rating}</span>
                    <div className="flex">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
