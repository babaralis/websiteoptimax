import { LandingHero } from "@/components/webdesignv3/LandingHero";
import { LandingLogoSlider } from "@/components/webdesignv3/LandingLogoSlider";
import { LandingAbout } from "@/components/webdesignv3/LandingAbout";
import { WebDesignV3Portfolio } from "@/components/webdesignv3/WebDesignV3Portfolio";
import { CustomPlanCTA } from "@/components/webdesignv3/CustomPlanCTA";
import { WebDesign3Testimonial } from "@/components/webdesignv3/WebDesign3Testimonial";
import { LandingPricing } from "@/components/webdesignv3/LandingPricing";


export default function WebDesignV3Page() {
  return (
    <>
      <LandingHero />
      <LandingLogoSlider />
      <LandingAbout />
      <WebDesignV3Portfolio />
      <WebDesign3Testimonial />
      <LandingPricing />
      <CustomPlanCTA />
    </>
  );
}
