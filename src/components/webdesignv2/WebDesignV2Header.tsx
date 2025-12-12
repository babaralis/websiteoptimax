'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import Image from "next/image";

export function WebDesignV2Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "portfolio", "reviews", "pricing"];
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          <Link href="/web-design-v2" className="flex items-center gap-2 group">
            <Image src="/assets/images/logos/logo.svg" alt="Website Optimax" width={150} height={100} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["about", "portfolio", "reviews", "pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={cn(
                  "text-sm font-medium text-muted-foreground hover:text-primary transition-colors animated-underline",
                  activeSection === item && "text-primary animated-underline-active"
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <Button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined" && (window as any).$zopim) {
                  (window as any).$zopim.livechat.window.show();
                } else {
                  scrollToSection("quote-form");
                }
              }}
              variant="hero"
              size="lg"
              className="ml-4"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <nav className="container-wide py-4 space-y-4">
            {["about", "portfolio", "reviews", "pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={cn(
                  "block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2",
                  activeSection === item && "text-primary"
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <Button
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined" && (window as any).$zopim) {
                  (window as any).$zopim.livechat.window.show();
                } else {
                  scrollToSection("quote-form");
                }
                setIsMobileMenuOpen(false);
              }}
              variant="hero"
              size="lg"
              className="w-full"
            >
              Get Started
            </Button>
          </nav>
        </motion.div>
      </header>

      <ConsultationForm />
    </>
  );
}
