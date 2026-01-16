'use client';

import { useEffect } from "react";
import { LandingHero } from "@/components/webdesignv2/LandingHero";
import { LandingLogoSlider } from "@/components/webdesignv2/LandingLogoSlider";
import { LandingAbout } from "@/components/webdesignv2/LandingAbout";
import { NewPortfolio } from "@/sections/portfolio/NewPortfolio";
import { CustomPlanCTA } from "@/components/webdesignv2/CustomPlanCTA";
import { WebDesign2Testimonial } from "@/components/webdesignv2/WebDesign2Testimonial";
import { LandingPricing } from "@/components/webdesignv2/LandingPricing";


export default function WebDesignV2Page() {
  useEffect(() => {
    // Add script after 20 seconds
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://www.promoamp.com/embed.js';
      
      // When script loads, try to make widget visible and trigger it
      script.onload = () => {
        setTimeout(() => {
          // Find all PromoAmp related elements
          const promoElements = document.querySelectorAll('[id*="promoamp"], [class*="promoamp"]');
          console.log('PromoAmp elements found:', promoElements.length);
          
          promoElements.forEach((el, index) => {
            console.log(`Element ${index}:`, el);
            // Make sure they're visible
            if (el instanceof HTMLElement) {
              el.style.display = 'block';
              el.style.visibility = 'visible';
              el.style.opacity = '1';
              el.style.zIndex = '999999';
              el.style.pointerEvents = 'auto';
              
              // Try to click it to open the widget
              if (index === 0) {
                setTimeout(() => {
                  console.log('Clicking PromoAmp element to open widget');
                  el.click();
                }, 1000);
              }
            }
          });

          // Also check for iframes
          const iframes = document.querySelectorAll('iframe');
          iframes.forEach((iframe) => {
            if (iframe.src.includes('promoamp')) {
              console.log('PromoAmp iframe found:', iframe);
              if (iframe.parentElement) {
                iframe.parentElement.style.display = 'block';
                iframe.parentElement.style.visibility = 'visible';
                iframe.parentElement.style.opacity = '1';
                iframe.parentElement.style.zIndex = '999999';
                iframe.parentElement.style.position = 'fixed';
                  iframe.parentElement.style.top = '50%';
                iframe.parentElement.style.left = '50%';
                iframe.parentElement.style.transform = 'translate(-50%, -50%)';
                iframe.parentElement.style.right = 'auto';
                iframe.parentElement.style.bottom = 'auto';
              }
            }
          });
        }, 1000); // Wait 2 seconds after script loads
      };
      
      document.body.appendChild(script);
    }, 10000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LandingHero />
      <LandingLogoSlider />
      <LandingAbout />
      <NewPortfolio />
      <WebDesign2Testimonial />
      <LandingPricing />
      <CustomPlanCTA />
      
      {/* PromoAmp widget */}
      <a 
        id="promoamp-widget" 
        href="https://www.promoamp.com/c/lo-y5fbe2-46bcqd"
      >
        Get FREE AI Chatbot For Your Website
      </a>  
    </>
  );
}

