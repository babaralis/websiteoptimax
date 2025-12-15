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
import { contactLead } from "@/lib/lead";

export function WebDesignV3ConsultationForm() {
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
      company: formData.phone,
      website: '',
      budget: 'Not specified',
      timeline: 'Not specified',
      message: `Phone: ${formData.phone}\n\nProject Details:\n${formData.project}`,
      title: "Consultation Form (Floating v3)",
      phone: formData.phone,
    };

    try {
      await contactLead(data);
      
      trackEvent({
        action: "form_submit",
        category: "Contact",
        label: "Consultation Form (Floating v3)",
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      trackEvent({
        action: "form_success",
        category: "Contact",
        label: "Consultation Form Completed v3",
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

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
      <motion.div
        initial={false}
        animate={{ 
          x: isOpen ? 0 : "calc(100% - 50px)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="flex items-center pointer-events-auto"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#01E6DF] text-black backdrop-blur-lg border-l border-[#01E6DF]/30 px-2 md:px-3 py-4 md:py-4 flex items-center justify-center hover:bg-[#01E4DB] transition-colors rounded-l-lg md:rounded-l-xl flex-shrink-0 shadow-lg shadow-[#01E6DF]/25"
          style={{ width: '50px' }}
          aria-label="Toggle consultation form"
        >
          <span 
            className="text-lg md:text-xl text-black font-semibold tracking-[0.1em] md:tracking-[0.12em] capitalize whitespace-nowrap"
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
        <div className="w-full max-w-[21rem] sm:max-w-[21rem] flex">
          <div className="flex-1 glass-card-premium rounded-l-lg md:rounded-l-2xl rounded-r-none p-4 sm:p-6 md:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 sm:mb-6 text-foreground">
                Book a{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01E6DF] to-[#0149D1]">Free</span> Consultation
              </h2>
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
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Your Name Here"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-[#01E6DF]/30 focus-visible:border-[#01E6DF] focus-visible:ring-[#01E6DF]/20 text-sm sm:text-base"
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
                      className="bg-background/50 border-[#01E6DF]/30 focus-visible:border-[#01E6DF] focus-visible:ring-[#01E6DF]/20 text-sm sm:text-base"
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
                      className="bg-background/50 border-[#01E6DF]/30 focus-visible:border-[#01E6DF] focus-visible:ring-[#01E6DF]/20 text-sm sm:text-base"
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
                      className="bg-background/50 border-[#01E6DF]/30 focus-visible:border-[#01E6DF] focus-visible:ring-[#01E6DF]/20 resize-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isLoading}
                    className="w-full shadow-[#01E6DF]/25 bg-[#01E6DF] text-black hover:bg-[#01E4DB] hover:shadow-[#01E4DB]/30 text-sm sm:text-base"
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
