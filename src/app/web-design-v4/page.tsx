import { LandingHero } from "@/components/webdesignv4/LandingHero";
import { LandingLogoSlider } from "@/components/webdesignv4/LandingLogoSlider";
import { LandingAbout } from "@/components/webdesignv4/LandingAbout";
import { WebDesignV4Portfolio } from "@/components/webdesignv4/WebDesignV4Portfolio";
import { CustomPlanCTA } from "@/components/webdesignv4/CustomPlanCTA";
import { WebDesign4Testimonial } from "@/components/webdesignv4/WebDesign4Testimonial";
import { LandingPricing } from "@/components/webdesignv4/LandingPricing";


export default function WebDesignV4Page() {
  return (
    <>
      <LandingHero />
      <LandingLogoSlider />
      <LandingAbout />
      <WebDesignV4Portfolio />
      <WebDesign4Testimonial />
      <LandingPricing />
      <CustomPlanCTA />
    </>
  );
}
