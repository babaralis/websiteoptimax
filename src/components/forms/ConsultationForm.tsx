"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { event as trackEvent } from "@/lib/analytics";
import { submitContactEmail } from "@/lib/email";

export function ConsultationForm() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name: formData.name,
      email: formData.email,
      company: formData.phone, // Using phone field as company for compatibility
      website: '',
      budget: 'Not specified',
      timeline: 'Not specified',
      message: `Phone: ${formData.phone}\n\nProject Details:\n${formData.project}`,
      title: "Consultation Form (Floating)",
    };

    try {
      await submitContactEmail(data);
      
      trackEvent({
        action: "form_submit",
        category: "Contact",
        label: "Consultation Form (Floating)",
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      trackEvent({
        action: "form_success",
        category: "Contact",
        label: "Consultation Form Completed",
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          project: "",
        });
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
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
            className="text-lg md:text-xl text-primary-foreground font-semibold tracking-[0.1em] md:tracking-[0.12em] capitalize whitespace-nowrap"
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

              {/* Success Message */}
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                /* Form */
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
                    disabled={isLoading}
                    className="w-full shadow-glow-md text-sm sm:text-base"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
