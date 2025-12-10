import { LandingHero } from "@/components/webdesignv2/LandingHero";
import { LandingLogoSlider } from "@/components/webdesignv2/LandingLogoSlider";
import { LandingAbout } from "@/components/webdesignv2/LandingAbout";
import { LandingGuarantees } from "@/components/webdesignv2/LandingGuarantees";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";
import { LandingIndustries } from "@/components/webdesignv2/LandingIndustries";
import { CustomPlanCTA } from "@/components/webdesignv2/CustomPlanCTA";
import { WebDesign2Testimonial } from "@/components/webdesignv2/WebDesign2Testimonial";
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
      <CustomPlanCTA />
      <WebDesign2Testimonial />
      <LandingPricing />
      <LandingWebsiteTypes />
      <LandingFinalCTA />
    </>
  );
}
