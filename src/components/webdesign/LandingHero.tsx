"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import { CountUp } from "@/components/animations/CountUp";

const platforms = ["React", "Next.js", "WordPress", "HubSpot", "Shopify"];

const benefits = [
  "Free strategy consultation",
  "Custom growth roadmap",
  "No obligation quote",
];

export function LandingHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <AbstractShapes variant="hero" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <FadeIn>
            {/* Platform tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground"
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-display font-bold leading-tight md:text-5xl lg:text-6xl">
              Get a Website That{" "}
              <span className="gradient-text-glow">Converts Visitors</span>{" "}
              Into Revenue
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Stop losing leads to a weak website. We build high-converting B2B
              websites that turn traffic into qualified pipeline—averaging{" "}
              <strong className="text-foreground">340% more leads</strong> for
              our clients.
            </p>

            {/* Benefits list */}
            <div className="mb-8 flex flex-wrap gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">
                  <CountUp value={127} suffix="+" duration={2} />
                </p>
                <p className="text-sm text-muted-foreground">
                  Brands Transformed
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-secondary">
                  <CountUp value={340} suffix="%" duration={2} />
                </p>
                <p className="text-sm text-muted-foreground">
                  Avg. Lead Increase
                </p>
              </div>

              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  5.0 on Clutch
                </span>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: FORM CARD (FRONTEND ONLY) */}
          <FadeIn direction="left" delay={0.2}>
            <motion.div
              className="glass-card-premium rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-display font-bold">
                  Get Your Free Strategy Call
                </h2>
                <p className="text-muted-foreground">
                  Discover how we can help grow your business
                </p>
              </div>

              {/* Simple static form – no submit logic */}
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  placeholder="Your Name *"
                  className="bg-background/50"
                />
                <Input
                  type="email"
                  placeholder="Work Email *"
                  className="bg-background/50"
                />
                <Input
                  placeholder="Company Name *"
                  className="bg-background/50"
                />
                <Input
                  placeholder="Current Website URL (optional)"
                  className="bg-background/50"
                />

                <Button
                  type="button"
                  variant="hero"
                  size="xl"
                  className="w-full shadow-glow-md"
                >
                  Get My Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-6 border-t border-border/30 pt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-success" />
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
