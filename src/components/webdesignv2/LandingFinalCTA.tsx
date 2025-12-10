'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export function LandingFinalCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" 
          alt="" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <FadeIn>
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop" 
                alt="Expert consultation"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Experts Available Now</p>
                      <p className="text-xs text-muted-foreground">Average response: 2 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
          
          {/* Content Side */}
          <FadeIn delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Uncover What's Holding Your{" "}
                <span className="gradient-text">Website Back</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Not sure where to begin? Let our experts help you shape the perfect digital strategy. Whether you're looking for a new website, a rebrand, or marketing support — we'll assess your needs and craft a custom proposal that aligns with your goals, timeline, and budget.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="hero" size="xl" asChild className="shadow-glow-md">
                  <a href="tel:+19178311779" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </Button>
                
                <Button variant="heroOutline" size="xl" asChild>
                  <Link href="/contact" className="gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-secondary" />
                <span>24/7 Available</span>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
