"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, ArrowRight, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailFormSchema, EmailFormData } from "@/lib/validations";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export function WebDesignPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  useEffect(() => {
    // Check karo - kya popup already show ho chuka hai is session mein?
    const alreadyShown = sessionStorage.getItem("webDesignPopupShown");

    if (!alreadyShown) {
      // Agar nahi dikhaya, to 5 seconds baad popup dikhao
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Flag set kar do ki ab show ho chuka hai
        sessionStorage.setItem("webDesignPopupShown", "true");
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const onSubmit = async (data: EmailFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "You're In!",
      description: "Check your inbox for your free website audit guide.",
    });

    form.reset();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Popup close hone par bhi flag set kar do
    sessionStorage.setItem("webDesignPopupShown", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Popup - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg"
            >
              <div className="glass-card-premium p-8 rounded-2xl relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Gift className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Headline */}
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-3">
                    Wait! Don't Leave{" "}
                    <span className="gradient-text">Empty-Handed</span>
                  </h2>

                  <p className="text-muted-foreground text-center mb-6">
                    Get our <strong className="text-foreground">free B2B Website Audit Checklist</strong> — 
                    the same framework we use to generate 80% more leads for our clients.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {[
                      "10-point conversion audit checklist",
                      "AI optimization tips for 2025",
                      "Real examples from 100+ brands",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your work email"
                                className="bg-background/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full shadow-glow-sm"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Get My Free Checklist"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </form>
                  </Form>

                  {/* No spam note */}
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    No spam. Unsubscribe anytime. We respect your inbox.
                  </p>

                  {/* Skip link */}
                  <button
                    onClick={handleClose}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-4 mx-auto block"
                  >
                    No thanks, I don't want more leads
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
