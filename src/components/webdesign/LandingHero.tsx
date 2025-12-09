"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
  import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { STATS } from "@/lib/constants";
import { event as trackEvent } from "@/lib/analytics";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import { BriefForm } from "@/sections/brief/BriefForm";
import Image from "next/image";

export function LandingHero() {
  const [showBriefForm, setShowBriefForm] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const handleGetStarted = () => {
    if (companyName.trim()) {
      setShowBriefForm(true);
      trackEvent({
        action: "cta_click",
        category: "Engagement",
        label: "Hero - Get Started",
      });
    }
  };

  // Disable body scroll when form is open
  useEffect(() => {
    if (showBriefForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showBriefForm]);

  return (
<<<<<<< HEAD
    <>
      {showBriefForm && (
        <BriefForm
          initialCompanyName={companyName}
        />
      )}
    <section className="relative  flex items-center justify-center overflow-hidden md:pt-36 pt-32 pb-10">
      {/* Enhanced Background Effects */}
      <AbstractShapes variant="hero" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10">
        <div className="md:max-w-5xl mx-auto text-center w-full">
          {/* Badge with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8 badge-glow"
          >
            <Award className="w-4 h-4" />
            <span>Award-Winning B2B Digital Agency</span>
          </motion.div>
          
          {/* Headline with enhanced typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6"
          >
            Websites That Turn{" "}
            <span className="gradient-text-glow">B2B Traffic</span>{" "}
            Into Revenue
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
          >
            We design and build high-performance websites for B2B, SaaS, and service companies. No templates.
          </motion.p>
         

          {/* Input Field with Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="md:max-w-lg w-full mx-auto mb-16 md:flex items-center gap-0 homebannerform"
          >
            <div className="relative flex items-center rounded-l-[0.75rem] rounded-r-[0.75rem] md:rounded-r-none border-2 md:border-r-0 border-primary/50 bg-background overflow-hidden flex-1 h-14">
              <div className="flex items-center flex-1 h-full pl-4 pr-0">
                {/* <Pencil className="w-5 h-5 text-primary mr-3 flex-shrink-0" /> */}
                <Image
                  src="/assets/images/pencil.png"
                  alt="Pencil"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-3 flex-shrink-0"
                />
                <Input
                  type="text"
                  placeholder="Enter Your Business Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base h-full w-full flex-1"      
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && companyName.trim()) {
                      handleGetStarted();
                    }
                  }}
                />
=======
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
>>>>>>> 2b3271f6b76e07878b5a10697d75c10e64e5d699
              </div>
            </div>

<<<<<<< HEAD
            {/* <Button
              variant="default"
              size="lg"
              className="rounded-l-none rounded-r-[0.75rem] h-14 px-8 text-base font-semibold whitespace-nowrap border-0 bg-[#ff4772] hover:bg-[#ff4772]/90 text-white relative z-10"
              onClick={handleGetStarted}
            >
              Get Started
            </Button> */}

            <Button 
                variant="default" 
                size="xl" 
                className="mt-4 md:mt-0 animate-pulse-glow shadow-glow-lg md:rounded-l-none rounded-r-[0.75rem] h-14 px-8 w-full text-base font-semibold whitespace-nowrap border-0 bg-[#ff4772] hover:bg-[#ff4772]/90 text-white relative z-10" 
                onClick={handleGetStarted}
              >Get Started
              </Button>

          </motion.div>
          
          {/* Stats with glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {STATS.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass-card p-4 md:p-6 text-center card-hover group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
=======
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

              {/* Simple static form – no submit logic */}
              <form
                className="space-y-3 sm:space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  placeholder="Your Name *"
                  className="bg-background/50 text-sm sm:text-base"
                />
                <Input
                  type="email"
                  placeholder="Work Email *"
                  className="bg-background/50 text-sm sm:text-base"
                />
                <Input
                  placeholder="Company Name *"
                  className="bg-background/50 text-sm sm:text-base"
                />
                <Input
                  placeholder="Current Website URL (optional)"
                  className="bg-background/50 text-sm sm:text-base"
                />

                <Button
                  type="button"
                  variant="hero"
                  size="lg"
                  className="w-full text-sm sm:text-base shadow-glow-md"
                >
                  Get My Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>

              <div className="mt-4 sm:mt-6 border-t border-border/30 pt-3 sm:pt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-success" />
                  <span>Only 3 spots left this month</span>
>>>>>>> 2b3271f6b76e07878b5a10697d75c10e64e5d699
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 md:max-w-5xl w-full mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow-lg">
              <Image
                src="/assets/images/homebanner.jpg"
                alt="B2B website design and development mockup showing modern interfaces"
                className="w-full h-auto object-cover"
                width={1200}
                height={600}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 mb-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm"
          >
            <span>Trusted by industry leaders:</span>
            <div className="flex items-center gap-8 opacity-60">
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/3.svg"
                  alt="TechFlow"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/6.svg"
                  alt="GrowthLabs"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/7.svg"
                  alt="CloudSecure"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-8 w-32">
                <Image
                  src="/assets/images/logos/8.svg"
                  alt="ScaleUp"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </motion.div>
          {/* Scroll Indicator */}
      <Link href="#portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex justify-center items-center"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 glass">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
      </Link>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      
    </section>
    </>
  );
}
