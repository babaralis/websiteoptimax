"use client";

import { useEffect } from "react";

export function PromoAmpWidget() {
  useEffect(() => {
    // Wait 20 seconds before loading the PromoAmp widget
    const timer = setTimeout(() => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://www.promoamp.com/embed.js"]');
      
      if (!existingScript) {
        // Create the anchor element
        const anchor = document.createElement("a");
        anchor.id = "promoamp-widget";
        anchor.href = "https://www.promoamp.com/c/lo-y5fbe2-46bcqd";
        anchor.textContent = "Get FREE AI Chatbot For Your Website";
        
        // Append anchor to body
        document.body.appendChild(anchor);
        
        // Create and load the script
        const script = document.createElement("script");
        script.src = "https://www.promoamp.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }, 20000); // 20 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null; // This component doesn't render anything visible
}

