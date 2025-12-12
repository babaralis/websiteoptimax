"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitEmail ,getCategories} from "@/lib/email";
import {  briefLead} from "@/lib/lead";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface BriefFormData {
  companyName: string;
  slogan: string;
  industry: string;
  website: string;
  email: string;
  phone: string;
}

interface Industry {
  id: number;
  name: string;
  slug?: string;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string>("");
  const router = useRouter();

  const totalSteps = 6;

  const updateFormData = (field: keyof BriefFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Function to send data to CRM API via Next.js API route (avoids CORS issues)
  const sendLeadToCRM = async (payload: BriefFormData) => {
    try {
      console.log('📤 Sending form data:', payload);
  
      const response = await briefLead(payload);
      
      if (response.ok) {
        console.log('✅ Email sent successfully');
        return response;
      }
      
      // Check if backend returned status: false
      throw new Error(`Failed to send email. Status: ${response.status}`);
    } catch (error) {
      console.error('❌ Error sending lead to CRM:', error);
      throw error;
    }
  };

  const nextStep = async () => {
    // If on step 6, send data to API and navigate to thank-you page
    if (currentStep === totalSteps) {
      setIsSubmitting(true);
      setValidationError("");
      try {
        await sendLeadToCRM(formData);
        console.log('✅ Lead sent to CRM successfully');
        // Navigate to thank-you page
        router.push('/thank-you');
      } catch (error) {
        console.error('❌ Error sending lead to CRM:', error);
        setValidationError('Failed to submit. Please try again.');
        setIsSubmitting(false);
      }
    } else if (currentStep < totalSteps) {
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
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "62.5rem" : "-62.5rem",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-62.5rem" : "62.5rem",
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = async () => {
    if (canProceed() && !isSubmitting) {
      setDirection(1);
      await nextStep();
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
          <div className="text-center md:w-[37.5rem] w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Company Name
            </h2>
            <div className="md:max-w-xl mx-auto w-full">
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
          <div className="text-center md:w-[37.5rem] w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Slogan
            </h2>
            <div className="md:max-w-xl mx-auto w-full">
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
          <div className="text-center md:w-[37.5rem] w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Select Industry
            </h2>
            <div className="md:max-w-xl mx-auto w-full">
              <Select
                value={formData.industry}
                onValueChange={(value) => updateFormData("industry", value)}
              >
                <SelectTrigger className="h-12 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white w-full min-w-full">
                  <SelectValue placeholder="Select Industry (optional)" />
                </SelectTrigger>
                <SelectContent side="bottom" position="popper" className="max-h-48">
                  <SelectItem value="accounting-finance">Accounting & Finance</SelectItem>
                  <SelectItem value="adventure-outdoor">Adventure & Outdoor</SelectItem>
                  <SelectItem value="agriculture-farming">Agriculture & Farming</SelectItem>
                  <SelectItem value="art-photography">Art & Photography</SelectItem>
                  <SelectItem value="attorney-legal">Attorney & Legal</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="aviation-marine">Aviation & Marine</SelectItem>
                  <SelectItem value="business-consulting">Business & Consulting</SelectItem>
                  <SelectItem value="children">Children</SelectItem>
                  <SelectItem value="church-religious">Church & Religious</SelectItem>
                  <SelectItem value="cleaning-services">Cleaning Services</SelectItem>
                  <SelectItem value="communications">Communications</SelectItem>
                  <SelectItem value="community-foundations">Community & Foundations</SelectItem>
                  <SelectItem value="computer-networking">Computer & Networking</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="cosmetics-jewelry">Cosmetics & Jewelry</SelectItem>
                  <SelectItem value="dating">Dating</SelectItem>
                  <SelectItem value="dental">Dental</SelectItem>
                  <SelectItem value="design-creative-services">Design & Creative Services</SelectItem>
                  <SelectItem value="eco-friendly-green">Eco-Friendly/Green</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="entertainment-media">Entertainment & Media</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="fashion-apparel">Fashion & Apparel</SelectItem>
                  <SelectItem value="fitness-physical-training">Fitness & Physical Training</SelectItem>
                  <SelectItem value="food-beverages">Food & Beverages</SelectItem>
                  <SelectItem value="furniture-interior">Furniture & Interior</SelectItem>
                  <SelectItem value="games">Games</SelectItem>
                  <SelectItem value="healthcare-physician">Healthcare & Physician</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="mortgage-real-estate">Mortgage & Real Estate</SelectItem>
                  <SelectItem value="nutrition-lifestyle">Nutrition & life style</SelectItem>
                  <SelectItem value="pets-animals">Pets & Animals</SelectItem>
                  <SelectItem value="pharmaceutical-bio-tech">Pharmaceutical & Bio Tech</SelectItem>
                  <SelectItem value="politics">Politics</SelectItem>
                  <SelectItem value="pool-hot-tubs">Pool & Hot Tubs</SelectItem>
                  <SelectItem value="printing-publishing">Printing & Publishing</SelectItem>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="spa-salon">Spa & Salon</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="staffing-recruiting">Staffing & Recruiting</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="travel-hospitality">Travel & Hospitality</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center md:w-[37.5rem] w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Website Type
            </h2>
            <div className="md:max-w-xl mx-auto w-full">
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
          <div className="text-center md:w-[37.5rem] w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Email Address
            </h2>
            <div className="md:max-w-xl mx-auto w-full">
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
          <div className="text-center md:w-[37.5rem] w-[70%] mx-auto">
            {!isSubmitting && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Enter Your Phone Number (Optional)
              </h2>
            )}
            <div className="md:max-w-xl mx-auto w-full">
              {!isSubmitting && (
                <Input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isSubmitting) {
                      handleNext();
                    }
                  }}
                  disabled={isSubmitting}
                />
              )}
              {validationError && (
                <p className="text-red-400 mt-4 text-sm">{validationError}</p>
              )}
              {isSubmitting && (
                <div className="flex flex-col items-center justify-center gap-4 mt-8">
                  <Loader2 className="w-16 h-16 animate-spin" style={{ color: '#ff4772' }} />
                  <p className="text-white/80 text-base font-medium">Submitting your information...</p>
                </div>
              )}
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
      <header className="absolute top-0 left-0 z-30 w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="inline-block mb-4">
            <Image src="/assets/images/logos/logo.svg" alt="Website Optimax" width={150} height={100} />
          </Link>
        </div>
      </header>

      {/* Navigation Arrows - Far Left and Right */}
      {currentStep > 1 && currentStep <= totalSteps && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="absolute left-4 md:left-8 md:top-[55%] top-[58%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      )}

      {currentStep <= totalSteps && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={!canProceed() || isSubmitting}
          className="absolute right-4 md:right-8 md:top-[55%] top-[58%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      )}

      {/* Content - Centered */}
      <div className="relative z-10 md:mx-auto px-4 flex-1 flex items-center justify-center w-full">

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

      {/* Pagination Dots - Bottom of Window */}
      {currentStep <= totalSteps && (
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

