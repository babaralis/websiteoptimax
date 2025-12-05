"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { event as trackEvent, hasConsent } from "@/lib/analytics";

const DEPTH_THRESHOLDS = [25, 50, 75, 100];

export function useScrollDepth() {
  const pathname = usePathname();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset tracked depths on route change
    trackedDepths.current = new Set();

    if (!hasConsent()) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight <= 0) return;
      
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      DEPTH_THRESHOLDS.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedDepths.current.has(threshold)) {
          trackedDepths.current.add(threshold);
          trackEvent({
            action: "scroll_depth",
            category: "Engagement",
            label: `${threshold}% - ${pathname}`,
            value: threshold,
          });
        }
      });
    };

    // Throttle scroll handler
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [pathname]);
}
