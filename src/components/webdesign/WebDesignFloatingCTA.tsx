"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, X } from "lucide-react";
import Link from "next/link";

export function WebDesignFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the hero section
    const heroSection = document.querySelector('section[class*="py-20"], section[class*="py-28"]');
    if (heroSection) {
      heroRef.current = heroSection as HTMLElement;
    }

    const handleScroll = () => {
      if (isDismissed) return;

      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show CTA when scrolled past hero section
        setIsVisible(window.scrollY > heroBottom - 100);
      } else {
        // Fallback: show after 600px scroll
        setIsVisible(window.scrollY > 600);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 md:pb-6"
        >
          <div className="container mx-auto">
            <div className="glass-card-premium rounded-2xl p-4 md:p-6 shadow-2xl border border-border/50 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted/50 transition-colors z-10 md:hidden"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: Text Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg md:text-xl font-display font-bold mb-1">
                    Ready to Transform Your Website?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Get a free strategy call and custom growth roadmap
                  </p>
                </div>

                {/* Right: CTA Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Button
                    variant="heroOutline"
                    size="lg"
                    asChild
                    className="hidden sm:flex"
                  >
                    <Link href="/portfolio" className="gap-2">
                      See Results
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    asChild
                    className="shadow-glow-sm"
                  >
                    <Link href="/contact" className="gap-2">
                      <Phone className="w-4 h-4" />
                      Book Free Call
                    </Link>
                  </Button>
                  <button
                    onClick={handleDismiss}
                    className="hidden sm:block p-2 rounded-full hover:bg-muted/50 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
