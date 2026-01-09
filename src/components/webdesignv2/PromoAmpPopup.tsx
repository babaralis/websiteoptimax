"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

declare global {
  interface Window {
    promoamp?: {
      init?: () => void;
      render?: () => void;
      [key: string]: any;
    };
  }
}

// Cookie utility functions
function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const PROMOAMP_COOKIE_NAME = "promoamp_popup_shown";

export function PromoAmpPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load PromoAmp script early
    if (!scriptLoadedRef.current) {
      const existingScript = document.querySelector('script[src="https://www.promoamp.com/embed.js"]');
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.promoamp.com/embed.js";
        script.async = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
        };
        document.body.appendChild(script);
      } else {
        scriptLoadedRef.current = true;
      }
    }
  }, []);

  useEffect(() => {
    // Check if popup was shown in last 24 hours
    const cookieValue = getCookie(PROMOAMP_COOKIE_NAME);
    
    if (cookieValue) {
      // Cookie exists, don't show popup
      return;
    }

    // Show popup after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Set cookie for 24 hours
      setCookie(PROMOAMP_COOKIE_NAME, "true", 1);
      
      // Wait for popup to render, then ensure PromoAmp widget loads
      setTimeout(() => {
        const widgetElement = document.getElementById("promoamp-widget");
        if (widgetElement) {
          // PromoAmp script should automatically detect and transform the element
          // Force a re-check by dispatching events
          if (window.promoamp) {
            // Try different initialization methods
            if (typeof window.promoamp.init === 'function') {
              window.promoamp.init();
            }
            if (typeof window.promoamp.render === 'function') {
              window.promoamp.render();
            }
          }
          
          // Also trigger DOMContentLoaded to ensure script processes the element
          const event = new Event('DOMContentLoaded', { bubbles: true });
          document.dispatchEvent(event);
          
          // Additional check after a delay to ensure widget renders
          setTimeout(() => {
            if (!widgetElement.innerHTML || widgetElement.innerHTML.trim() === widgetElement.textContent?.trim()) {
              // Widget might not have loaded, try reloading script
              const script = document.createElement("script");
              script.src = "https://www.promoamp.com/embed.js";
              script.async = true;
              document.body.appendChild(script);
            }
          }, 500);
        }
      }, 500);
    }, 20000); // 20 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Set cookie when popup is closed
    setCookie(PROMOAMP_COOKIE_NAME, "true", 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Popup - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl relative overflow-hidden border border-gray-200">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* PromoAmp Widget Container */}
                <div className="relative w-full">
                  <a
                    id="promoamp-widget"
                    href="https://www.promoamp.com/c/lo-y5fbe2-46bcqd"
                    className="block w-full"
                  >
                    Get FREE AI Chatbot For Your Website
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

