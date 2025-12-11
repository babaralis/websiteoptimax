import { LandingHero } from "@/components/webdesignv2/LandingHero";
import { LandingLogoSlider } from "@/components/webdesignv2/LandingLogoSlider";
import { LandingAbout } from "@/components/webdesignv2/LandingAbout";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";
import { CustomPlanCTA } from "@/components/webdesignv2/CustomPlanCTA";
import { WebDesign2Testimonial } from "@/components/webdesignv2/WebDesign2Testimonial";
import { LandingPricing } from "@/components/webdesignv2/LandingPricing";


export default function WebDesignV2Page() {
  return (
    <>
      <LandingHero />
      <LandingLogoSlider />
      <LandingAbout />
      <NewPortfolio />
      <WebDesign2Testimonial />
      <LandingPricing />
      <CustomPlanCTA />
    </>
  );
}
