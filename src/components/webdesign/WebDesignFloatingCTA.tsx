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
    // Find the hero section - try multiple selectors
    const findHeroSection = () => {
      // Try to find by common hero section patterns
      const selectors = [
        'section[class*="pt-20"]',
        'section[class*="pt-28"]',
        'section[class*="py-20"]',
        'section[class*="py-28"]',
        'section:first-of-type',
      ];
      
      for (const selector of selectors) {
        const section = document.querySelector(selector);
        if (section) {
          return section as HTMLElement;
        }
      }
      return null;
    };

    const heroSection = findHeroSection();
    if (heroSection) {
      heroRef.current = heroSection;
    }

    const handleScroll = () => {
      if (isDismissed) return;

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        
        // Show CTA when scrolled past hero section (when hero bottom is above viewport)
        // Using a threshold to show it slightly before hero completely exits
        const shouldShow = rect.bottom < window.innerHeight - 100;
        setIsVisible(shouldShow);
      } else {
        // Fallback: show after 400px scroll
        setIsVisible(window.scrollY > 400);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const heroSection = findHeroSection();
      if (heroSection) {
        heroRef.current = heroSection;
      }
      handleScroll();
    }, 100);

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 z-0 rounded-2xl" />
              
              {/* Close button - Mobile */}
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 md:hidden p-2 rounded-full hover:bg-muted/50 active:bg-muted/70 transition-colors z-50 pointer-events-auto touch-manipulation"
                aria-label="Close"
                type="button"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: Text Content */}
                <div className="flex-1 text-center sm:text-left pr-8 md:pr-0">
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
                  {/* Close button - Desktop */}
                  <button
                    onClick={handleDismiss}
                    className="hidden sm:block p-2 rounded-full hover:bg-muted/50 active:bg-muted/70 transition-colors z-50 pointer-events-auto"
                    aria-label="Close"
                    type="button"
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
