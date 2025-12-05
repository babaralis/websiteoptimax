"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import Image from "next/image";

interface BriefFormData {
  companyName: string;
  slogan: string;
  industry: string;
  website: string;
  email: string;
  phone: string;
}

export function BriefForm({
  initialCompanyName = "",
  onClose,
}: {
  initialCompanyName?: string;
  onClose?: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BriefFormData>({
    companyName: initialCompanyName,
    slogan: "",
    industry: "",
    website: "",
    email: "",
    phone: "",
  });

  const totalSteps = 7;

  const updateFormData = (field: keyof BriefFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName.trim() !== "";
      case 2:
        return true; // Optional
      case 3:
        return true; // Optional
      case 4:
        return true; // Optional
      case 5:
        return formData.email.trim() !== "";
      case 6:
        return true; // Optional
      case 7:
        return true;
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (canProceed()) {
      setDirection(1);
      nextStep();
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Company Name
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => updateFormData("companyName", e.target.value)}
                required
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canProceed()) {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Slogan
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="text"
                placeholder="Slogan (optional)"
                value={formData.slogan}
                onChange={(e) => updateFormData("slogan", e.target.value)}
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Select Industry
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Select
                value={formData.industry}
                onValueChange={(value) => updateFormData("industry", value)}
              >
                <SelectTrigger className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white w-full min-w-full">
                  <SelectValue placeholder="Select Industry (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Website Steps
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Select
                value={formData.website}
                onValueChange={(value) => updateFormData("website", value)}
              >
                <SelectTrigger className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white w-full min-w-full">
                  <SelectValue placeholder="Select Website (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-website">New Website</SelectItem>
                  <SelectItem value="redesign">Website Redesign</SelectItem>
                  <SelectItem value="ecommerce">E-commerce Website</SelectItem>
                  <SelectItem value="landing-page">Landing Page</SelectItem>
                  <SelectItem value="web-app">Web Application</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Email Address
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                required
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canProceed()) {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Phone Number (Optional)
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Thank You, How Would You Like To Proceed?
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/assets/images/brief/chat.jpg"
                    alt="Live Chat Support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Live Chat Support</h3>
                  <p className="text-white/80 mb-6">
                    Let's talk! Share your design requirements with one of our designers to get a perfect logo that you envisioned for.
                  </p>
                  <Button className="w-full bg-[#ff4772] hover:bg-[#ff4772]/90">
                    Chat With Us
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/assets/images/brief/last2-step.jpg"
                    alt="Pricing Packages"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Pricing Packages</h3>
                  <p className="text-white/80 mb-6">
                    Checkout our budget friendly packages & pricing plans tailor made for startups & growing businesses of all sizes.
                  </p>
                  <Button className="w-full bg-[#ff4772] hover:bg-[#ff4772]/90">
                    View Pricing
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/assets/images/brief/portfolio.jpg"
                    alt="Creative Portfolio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Creative Portfolio</h3>
                  <p className="text-white/80 mb-6">
                    Checkout our amazing logo projects that we have designed for our recent customers to give their brand an identity.
                  </p>
                  <Button className="w-full bg-[#ff4772] hover:bg-[#ff4772]/90">
                    Visit Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden">
      {/* Background with same styling as hero section */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        <AbstractShapes variant="hero" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Header with Logo */}
      <header className="relative z-30 w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="text-2xl font-display font-bold text-white">
            Orbitline Digital Studio
          </div>
        </div>
      </header>

      {/* Navigation Arrows - Far Left and Right (Hidden on step 7) */}
      {currentStep > 1 && currentStep < totalSteps && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      )}

      {currentStep < totalSteps && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={!canProceed()}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      )}

      {/* Content - Centered */}
      <div className="relative z-10 w-[80%] mx-auto px-4 flex-1 flex items-center justify-center">

        {/* Step Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots - Bottom of Window (Hidden on step 7) */}
      {currentStep < totalSteps && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index + 1 > currentStep ? 1 : -1);
                setCurrentStep(index + 1);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index + 1 === currentStep
                  ? "bg-white w-3 h-3"
                  : "bg-white/40 w-2 h-2"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

