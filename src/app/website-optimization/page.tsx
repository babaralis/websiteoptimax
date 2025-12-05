"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { OptimizationHero } from "@/sections/website-optimization/OptimizationHero";
import { OptimizationProblem } from "@/sections/website-optimization/OptimizationProblem";
import { OptimizationCaseStudies } from "@/sections/website-optimization/OptimizationCaseStudies";
import { OptimizationValueStack } from "@/sections/website-optimization/OptimizationValueStack";
import { OptimizationProcess } from "@/sections/website-optimization/OptimizationProcess";
import { OptimizationGuarantee } from "@/sections/website-optimization/OptimizationGuarantee";
import { OptimizationQualification } from "@/sections/website-optimization/OptimizationQualification";
import { OptimizationCTA } from "@/sections/website-optimization/OptimizationCTA";

export default function WebsiteOptimizationPage() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Trigger multiple scroll/resize events to ensure animations detect viewport changes
    const triggerEvents = () => {
      window.dispatchEvent(new Event('scroll'));
      window.dispatchEvent(new Event('resize'));
    };
    
    // Multiple triggers at different intervals to catch all cases
    const timers = [
      setTimeout(triggerEvents, 50),
      setTimeout(triggerEvents, 200),
      setTimeout(triggerEvents, 400),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [pathname]);

  return (
    <>
      <OptimizationHero />
      <OptimizationProblem />
      <OptimizationCaseStudies />
      <OptimizationValueStack />
      <OptimizationProcess />
      <OptimizationGuarantee />
      <OptimizationQualification />
      <OptimizationCTA />
    </>
  );
}

