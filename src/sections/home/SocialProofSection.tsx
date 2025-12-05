"use client";

import { Star, Quote, Award, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { RadialGlow } from "@/components/graphics/GridPattern";
import Image from "next/image";

// Import testimonial photos
import ceoMale1 from "@/assets/testimonials/ceo-male-1.jpg";
import marketingFemale1 from "@/assets/testimonials/marketing-female-1.jpg";
import cooFemale1 from "@/assets/testimonials/coo-female-1.jpg";
import vpMale1 from "@/assets/testimonials/vp-male-1.jpg";

const TESTIMONIALS = [
  {
    quote: "Orbitline transformed our digital presence. Lead quality improved 340% and our sales cycle shortened by 3 weeks.",
    author: "Sarah Mitchell",
    role: "VP Marketing, TechFlow SaaS",
    image: marketingFemale1,
    rating: 5,
    metric: "+340% Lead Quality",
  },
  {
    quote: "They didn't just build a website—they built a revenue engine. Best investment we've made in 5 years.",
    author: "Michael Chen",
    role: "CEO, GrowthLabs",
    image: ceoMale1,
    rating: 5,
    metric: "$2.3M Pipeline Generated",
  },
  {
    quote: "Finally, a team that understands B2B. Our website now books 50+ qualified demos per month.",
    author: "Emma Rodriguez",
    role: "CMO, ScaleUp Agency",
    image: cooFemale1,
    rating: 5,
    metric: "50+ Demos/Month",
  },
];

export function SocialProofSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card/60 to-card/30" />
      <RadialGlow color="primary" position="top-left" intensity="low" />
      <RadialGlow color="secondary" position="bottom-right" intensity="low" />
      
      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Building2 className="w-4 h-4" />
              Client Success
            </motion.span>
            <h2 className="section-heading text-foreground">
              Trusted by <span className="gradient-text">B2B Leaders</span>
            </h2>
            <p className="section-subheading mx-auto">
              See what SaaS founders, B2B marketers, and service leaders say about 
              partnering with Orbitline Digital Studio.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="glass-card-premium p-8 h-full flex flex-col group relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Metric Badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-success/20 to-success/10 text-success text-sm font-semibold w-fit mb-6 border border-success/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-4 h-4" />
                    {testimonial.metric}
                  </motion.div>
                  
                  {/* Quote */}
                  <div className="relative flex-1 mb-6">
                    <Quote className="absolute -top-2 -left-2 w-10 h-10 text-primary/20" />
                    <p className="text-foreground text-lg leading-relaxed pl-8 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="relative w-12 h-12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="48px"
                        className="rounded-full object-cover ring-2 ring-primary/20"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        
        {/* Trust indicators */}
        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            <div className="glass-card px-6 py-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[ceoMale1, marketingFemale1, cooFemale1, vpMale1].map((img, i) => (
                  <div key={i} className="relative w-8 h-8">
                    <Image
                      src={img}
                      alt="Client"
                      fill
                      sizes="32px"
                      className="rounded-full object-cover border-2 border-background"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">127+ B2B Clients</span>
            </div>
            <div className="glass-card px-6 py-3 flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-sm text-muted-foreground">4.9/5 Average Rating</span>
            </div>
            <div className="glass-card px-6 py-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm text-muted-foreground">98% Client Retention</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
