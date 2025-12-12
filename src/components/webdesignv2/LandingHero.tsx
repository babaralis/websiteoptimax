'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Star, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { GridPattern } from "@/components/graphics/GridPattern";
import { submitContactEmail } from "@/lib/email";
import { contactLead } from "@/lib/lead";
import { event as trackEvent } from "@/lib/analytics";
import { useState } from "react";
import Image from "next/image";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function LandingHero() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const emailData = {
        name: data.fullName,
        email: data.email,
        company: data.phone || 'Not provided',
        website: '',
        budget: 'Not specified',
        timeline: 'Not specified',
        message: `Phone: ${data.phone || 'Not provided'}\n\nProject Description:\n${data.description || 'No description provided'}`,
        title: "FREE Quote Request (LandingHero v2)",
        phone: data.phone || 'Not provided',
      };

      await contactLead(emailData);
      
      trackEvent({
        action: "form_submit",
        category: "Contact",
        label: "Landing Hero v2 Quote Form",
      });

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      trackEvent({
        action: "form_success",
        category: "Contact",
        label: "Landing Hero v2 Quote Completed",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours with your custom quote.",
      });

      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 5000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-28 overflow-hidden mobile-hero-section">
      <GridPattern className="opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
      <div className="container relative z-10 mobile-hero-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mobile-hero-grid">
          <FadeIn className="text-center lg:text-left mobile-hero-content">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Your Website, Reimagined as a{" "}
              <span className="gradient-text">Revenue Engine</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              We design and develop websites that go beyond aesthetics. Built to support your sales team, capture qualified leads, and drive measurable growth, our websites are engineered for performance. With strategy at the core, we turn your digital presence into the hardest-working asset in your entire sales stack.
            </p>
            <div className="mobile-hero-button">
              <button 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-14 rounded-xl px-10 text-lg animate-pulse-glow shadow-glow-lg gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && (window as any).$zopim) {
                    (window as any).$zopim.livechat.window.show();
                  } else {
                    console.log('Zopim not loaded yet');
                    // Fallback: scroll to form
                    const form = document.getElementById('quote-form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
              >
                Start Your Website Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8">
              <Image src="/assets/images/webdesign/Web design-v2/trust-logo.svg" alt="Trustpilot Logo" width={100} height={100} />
              <Image src="/assets/images/webdesign/Web design-v2/googlereview-logo.webp" alt="Google Logo" width={100} height={100} />
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-4">
              <p className="text-muted-foreground text-lg">We're rated <span className="gradient-text">4.8/5</span> from <span className="gradient-text">100+</span> customer reviews.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="mobile-hero-form">
            <motion.div 
              id="quote-form"
              className="glass-card-premium p-8 shadow-[0_0_3px_6px_rgba(255,71,114,0.5)] border border-[#ff4772]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-2">
                    Your quote request has been submitted successfully.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you within 24 hours with your custom quote and FREE landing page offer!
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-display font-bold text-center mb-2">
                    Request a <span className="gradient-text-glow">FREE Quote</span>
                  </h2>
                  <p className="text-muted-foreground text-center text-sm mb-6">
                    + Get a FREE Landing Page with your project
                  </p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Full Name*" 
                                className="bg-muted/50 border-border/50 h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="Email Address*" 
                                className="bg-muted/50 border-border/50 h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder=" Phone No" 
                                className="bg-muted/50 border-border/50 h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea 
                                placeholder="To Help Us Understand Better, Enter A Brief Description About Your Project."
                                className="bg-muted/50 border-border/50 min-h-[100px] resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <p className="text-xs text-muted-foreground">
                        By entering your phone number, you agree to receive text messages per our terms of use and privacy policy
                      </p>
                      <a type="submit"
                        onClick={form.handleSubmit(onSubmit)}
                        href="#" 
                        className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-12 rounded-lg px-8 text-base shadow-glow-sm gap-2"
                      >
                        Get A FREE Landing Page
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </form>
                  </Form>
                </>
              )}
            </motion.div>
          </FadeIn>
        </div>
      </div>
      </section>
  );
}
