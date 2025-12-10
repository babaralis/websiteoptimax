import { LandingHero } from "@/components/webdesignv2/LandingHero";
import { LandingLogoSlider } from "@/components/webdesignv2/LandingLogoSlider";
import { LandingAbout } from "@/components/webdesignv2/LandingAbout";
import { LandingGuarantees } from "@/components/webdesignv2/LandingGuarantees";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";
import { LandingIndustries } from "@/components/webdesignv2/LandingIndustries";
import { TestimonialsSection } from "@/sections/reviews/TestimonialsSection";
import { LandingPricing } from "@/components/webdesignv2/LandingPricing";
import { LandingWebsiteTypes } from "@/components/webdesignv2/LandingWebsiteTypes";
import { LandingFinalCTA } from "@/components/webdesignv2/LandingFinalCTA";


export default function WebDesignV2Page() {
  return (
    <>
      <LandingHero />
      <LandingLogoSlider />
      <LandingAbout />
      <LandingGuarantees />
      <NewPortfolio />
      <LandingIndustries />
      <TestimonialsSection />
      <LandingPricing />
      <LandingWebsiteTypes />
      <LandingFinalCTA />
    </>
  );
}
