'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function WebDesignV2Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/assets/images/logos/logo.svg" alt="Website Optimax" width={150} height={100} />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors animated-underline"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors animated-underline"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors animated-underline"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors animated-underline"
          >
            Pricing
          </button>
          <Button
            onClick={() => scrollToSection('quote-form')}
            variant="hero"
            size="lg"
            className="ml-4"
          >
            Get Started
          </Button>
        </nav>
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
      >
        <nav className="container-wide py-4 space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
          >
            Pricing
          </button>
          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild>
            <Link className="btn_primary" href="#" onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined' && (window as any).$zopim) {
                (window as any).$zopim.livechat.window.toggle();
              }
            }}>Get Started</Link>
              {/* <Link href="/contact">Get Started</Link> */}
            </Button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}