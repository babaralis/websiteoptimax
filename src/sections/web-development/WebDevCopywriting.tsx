"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { FileText, Search, Users, MessageSquare, Target, ArrowRight } from "lucide-react";
import { RadialGlow } from "@/components/graphics/GridPattern";
import Image from "next/image";

export function WebDevCopywriting() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <RadialGlow color="primary" position="left" intensity="low" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <FileText className="w-4 h-4" />
              Conversion Copywriting
            </span>
            
            <h2 className="section-heading text-foreground ...1">
              Words That <span className="gradient-text">Convert Visitors</span> Into Customers
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Your copy is your silent salesperson. It needs to understand your buyers' pain, 
              speak their language, and compel action—all while building the trust that 
              complex B2B decisions require.
            </p>
            
            {/* Research section */}
            <div className="glass-card-elevated p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Research-Driven Foundation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">In-depth SEO and keyword research to understand search intent</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Stakeholder interviews to uncover your unique value proposition</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Buyer persona development based on real customer insights</span>
                </li>
              </ul>
            </div>
            
            {/* Storytelling section */}
            <div className="glass-card-elevated p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-secondary" />
                Conversion-Oriented Storytelling
              </h3>
              <p className="text-muted-foreground text-sm">
                Clean messages that answer problems. Crisp storytelling that drives conversions. 
                Copy that sounds like you—only sharper, more persuasive, and optimized for results.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <motion.div
                className="glass-card-premium p-1 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Copy mockup */}
                <Image src="/assets/images/webdevelopment/words-that-convert-visitors-into-customers.png" alt="Web development copywriting" width={600} height={500} />
                {/* <div className="aspect-[4/5] bg-gradient-to-br from-background via-muted/20 to-background rounded-xl p-6 overflow-hidden relative">
                  
                  <div className="space-y-6">
                    
                    <div className="space-y-2">
                      <motion.div 
                        className="h-6 bg-primary/30 rounded w-4/5"
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                      <motion.div 
                        className="h-4 bg-muted-foreground/20 rounded"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      />
                      <motion.div 
                        className="h-4 bg-muted-foreground/20 rounded w-3/4"
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div 
                          key={i}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                        >
                          <div className="w-4 h-4 rounded-full bg-destructive/20 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-destructive/60" />
                          </div>
                          <div className="h-3 bg-muted-foreground/20 rounded flex-1" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <motion.div 
                        className="h-5 bg-secondary/30 rounded w-2/3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                      />
                      <motion.div 
                        className="h-3 bg-muted-foreground/20 rounded"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1 }}
                      />
                      <motion.div 
                        className="h-3 bg-muted-foreground/20 rounded w-5/6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                      />
                    </div>
                    
                    <motion.div 
                      className="h-10 bg-primary/40 rounded-lg w-1/2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 }}
                    />
                  </div>
                  
                  <motion.div
                    className="absolute top-8 -right-2 glass-card px-2 py-1 rounded text-xs text-primary font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                  >
                    Hook
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-32 -right-2 glass-card px-2 py-1 rounded text-xs text-destructive font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                  >
                    Pain
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-20 -right-2 glass-card px-2 py-1 rounded text-xs text-secondary font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6 }}
                  >
                    Solution
                  </motion.div>
                </div> */}

              </motion.div>
              
              {/* Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass-card-elevated px-5 py-3 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-2xl font-bold text-secondary">2.3x</p>
                <p className="text-xs text-muted-foreground">Avg. Conversion Lift</p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
