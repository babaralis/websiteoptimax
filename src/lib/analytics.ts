// Google Analytics Measurement ID - Replace with your actual ID
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const COOKIE_CONSENT_KEY = "cookie-consent";

// Check if user has accepted cookies
export const hasConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
};

// Initialize Google Analytics
export const initGA = (): void => {
  if (!hasConsent() || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") return;

  // Check if already loaded
  if (document.getElementById("ga-script")) return;

  // Load gtag.js
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
  });

  // Make gtag available globally
  window.gtag = gtag;
};

// Track page views
export const pageview = (url: string): void => {
  if (!hasConsent() || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  if (!hasConsent() || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Extend Window interface
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
