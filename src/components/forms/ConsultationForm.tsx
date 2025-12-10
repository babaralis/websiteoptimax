"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - no backend submission
    console.log("Form submitted:", formData);
    // You can add toast notification here if needed
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
      {/* Main Container - Slides in/out */}
      <motion.div
        initial={false}
        animate={{ 
          x: isOpen ? 0 : "calc(100% - 50px)", // Show only vertical tab when closed (50px for mobile, 60px for desktop)
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="flex items-center pointer-events-auto"
      >
        {/* Vertical Tab - Always visible on right edge, joined with form */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-primary-foreground backdrop-blur-lg border-l border-primary/30 px-2 md:px-3 py-4 md:py-4 flex items-center justify-center hover:bg-primary/90 transition-colors rounded-l-lg md:rounded-l-xl flex-shrink-0 shadow-lg shadow-primary/25"
          style={{ width: '50px' }}
          aria-label="Toggle consultation form"
        >
          <span 
            className="text-base text-primary-foreground font-semibold tracking-wider capatalize whitespace-nowrap"
            style={{ 
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              fontFamily: 'Playfair Display, Georgia, serif'
            }}
          >
            Claim your 20% Discount Now
          </span>
        </button>

        {/* Form Panel - Slides in when open */}
        <div className="w-full max-w-sm sm:max-w-md flex">
          {/* Form Container - Border radius on left side, no radius on right */}
          <div className="flex-1 glass-card-premium rounded-l-lg md:rounded-l-2xl rounded-r-none p-4 sm:p-6 md:p-8 relative overflow-hidden">
            {/* Background gradient - with rounded corners fix */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-l-lg md:rounded-l-2xl rounded-r-none" />

            {/* Form Content */}
            <div className="relative z-10">
              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 sm:mb-6 text-foreground">
                Book a{" "}
                <span className="gradient-text-glow">Free</span> Consultation
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Your Name Here"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-primary/30 focus-visible:border-primary focus-visible:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50 border-primary/30 focus-visible:border-primary focus-visible:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-primary/30 focus-visible:border-primary focus-visible:ring-primary/20 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="project"
                    placeholder="Describe Your Project Need"
                    value={formData.project}
                    onChange={handleChange}
                    rows={4}
                    className="bg-background/50 border-primary/30 focus-visible:border-primary focus-visible:ring-primary/20 resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full shadow-glow-md text-sm sm:text-base"
                >
                  Submit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
