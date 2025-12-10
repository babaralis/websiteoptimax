"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import { CountUp } from "@/components/animations/CountUp";
import { event as trackEvent } from "@/lib/analytics";
import { submitContactEmail } from "@/lib/email";
const platforms = ["React", "Next.js", "WordPress", "HubSpot", "Shopify"];
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Free strategy consultation",
  "Custom growth roadmap",
  "No obligation quote",
];

export function LandingHero() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      website: formData.get('website') as string || '',
      budget: 'Not specified',
      timeline: 'Not specified',
      message: 'Free consultation request from landing page',
      title: "Strategy Call",
    };
    
    try {
      await submitContactEmail(data);
      
      trackEvent({
        action: "form_submit",
        category: "Contact",
        label: "Landing Hero Form",
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      trackEvent({
        action: "form_success",
        category: "Contact",
        label: "Landing Hero Form Completed",
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28">
      <AbstractShapes variant="hero" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <FadeIn>
            {/* Platform tags */}
            <div className="mb-4 sm:mb-6 flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-border/50 bg-muted/50 px-2.5 py-1 text-xs sm:text-sm font-medium text-muted-foreground"
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* Heading */}
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Get a Website That{" "}
              <span className="gradient-text-glow">Converts Visitors</span>{" "}
              Into Revenue
            </h1>

            {/* Subheading */}
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground">
              Stop losing leads to a weak website. We build high-converting B2B
              websites that turn traffic into qualified pipeline—averaging{" "}
              <strong className="text-foreground">340% more leads</strong> for
              our clients.
            </p>

            {/* Benefits list */}
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  <CountUp value={127} suffix="+" duration={2} />
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Brands Transformed
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-bold text-secondary">
                  <CountUp value={340} suffix="%" duration={2} />
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Avg. Lead Increase
                </p>
              </div>

              <div className="flex items-center gap-1 w-full sm:w-auto">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs sm:text-sm text-muted-foreground">
                  5.0 on Clutch
                </span>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: FORM CARD (FRONTEND ONLY) */}
          <FadeIn direction="left" delay={0.2}>
            <motion.div
              className="glass-card-premium rounded-xl sm:rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-4 sm:mb-6 text-center">
                <h2 className="mb-2 text-xl sm:text-2xl font-display font-bold">
                  Get Your Free Strategy Call
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Discover how we can help grow your business
                </p>
              </div>

              {/* Functional form with email submission */}
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
                <form
                  className="space-y-3 sm:space-y-4"
                  onSubmit={handleSubmit}
                >
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="bg-background/50 text-sm sm:text-base"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Work Email *"
                    required
                    className="bg-background/50 text-sm sm:text-base"
                  />
                  <Input
                    name="company"
                    placeholder="Company Name *"
                    required
                    className="bg-background/50 text-sm sm:text-base"
                  />
                  <Input
                    name="website"
                    type="url"
                    placeholder="Current Website URL (optional)"
                    className="bg-background/50 text-sm sm:text-base"
                  />

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isLoading}
                    className="w-full text-sm sm:text-base shadow-glow-md"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        Get My Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              <div className="mt-4 sm:mt-6 border-t border-border/30 pt-3 sm:pt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-success" />
                  <span>Only 3 spots left this month</span>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
