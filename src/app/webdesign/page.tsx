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
      
      // When script loads, find and show the iframe popup only
      script.onload = () => {
        setTimeout(() => {
          console.log('PromoAmp script loaded, searching for iframe...');

          // ONLY check for iframes - don't touch other elements
          const iframes = document.querySelectorAll('iframe');
          iframes.forEach((iframe) => {
            if (iframe.src.includes('promoamp')) {
              console.log('PromoAmp iframe found:', iframe);
              
              // Check if mobile or desktop
              const isMobile = window.innerWidth <= 768;
              
              // Create a backdrop overlay
              const backdrop = document.createElement('div');
              backdrop.id = 'promoamp-backdrop';
              backdrop.style.position = 'fixed';
              backdrop.style.top = '0';
              backdrop.style.left = '0';
              backdrop.style.width = '100vw';
              backdrop.style.height = '100vh';
              backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
              backdrop.style.zIndex = '999998';
              backdrop.style.display = 'flex';
              backdrop.style.alignItems = 'center';
              backdrop.style.justifyContent = 'center';
              
              // Create a container for the popup
              const popupContainer = document.createElement('div');
              popupContainer.id = 'promoamp-popup-container';
              popupContainer.style.position = 'relative';
              popupContainer.style.zIndex = '999999';
              popupContainer.style.backgroundColor = 'transparent';
              popupContainer.style.overflow = 'visible';
              
              // Set responsive size
              if (isMobile) {
                popupContainer.style.width = '90%';
                popupContainer.style.maxWidth = '400px';
                popupContainer.style.height = 'auto';
                popupContainer.style.maxHeight = '100vh';
              } else {
                popupContainer.style.width = '800px';
                popupContainer.style.maxWidth = '90vw';
                popupContainer.style.height = '600px';
                popupContainer.style.maxHeight = '90vh';
              }
              
              // Style the iframe
              iframe.style.width = '100%';
              iframe.style.height = '100%';
              iframe.style.minHeight = isMobile ? '400px' : '600px';
              iframe.style.border = 'none';
              iframe.style.display = 'block';
              
              // Move iframe to our container
              const iframeParent = iframe.parentElement;
              if (iframeParent) {
                // Hide the original container
                iframeParent.style.display = 'none';
              }
              
              popupContainer.appendChild(iframe.cloneNode(true));
              
              // Create close button
              const closeButton = document.createElement('button');
              closeButton.className = 'promoamp-close-btn';
              closeButton.innerHTML = '✕';
              closeButton.style.position = 'absolute';
              closeButton.style.top = '0px';
              closeButton.style.right = isMobile ?'0px':'129px';
              closeButton.style.width = isMobile ? '35px' : '40px';
              closeButton.style.height = isMobile ? '35px' : '40px';
              closeButton.style.borderRadius = '50%';
              closeButton.style.border = 'none';
              closeButton.style.backgroundColor = '#ff4757';
              closeButton.style.color = 'white';
              closeButton.style.fontSize = isMobile ? '20px' : '24px';
              closeButton.style.fontWeight = 'bold';
              closeButton.style.cursor = 'pointer';
              closeButton.style.zIndex = '9999999';
              closeButton.style.display = 'flex';
              closeButton.style.alignItems = 'center';
              closeButton.style.justifyContent = 'center';
              closeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
              closeButton.style.transition = 'transform 0.2s';
              
              closeButton.onmouseover = () => {
                closeButton.style.transform = 'scale(1.1)';
                closeButton.style.backgroundColor = '#ee5a6f';
              };
              closeButton.onmouseout = () => {
                closeButton.style.transform = 'scale(1)';
                closeButton.style.backgroundColor = '#ff4757';
              };
              
              closeButton.onclick = () => {
                backdrop.remove();
                document.body.style.overflow = 'auto';
                document.documentElement.style.overflow = 'auto';
                console.log('PromoAmp popup closed');
              };
              
              popupContainer.appendChild(closeButton);
              backdrop.appendChild(popupContainer);
              document.body.appendChild(backdrop);
              
              // Disable background scrolling
              document.body.style.overflow = 'hidden';
              document.documentElement.style.overflow = 'hidden';
              console.log('Popup visible, background scrolling disabled');
            }
          });
        }, 1000);
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

