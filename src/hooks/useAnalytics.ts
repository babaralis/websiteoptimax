"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initGA, pageview, hasConsent } from "@/lib/analytics";
import { useScrollDepth } from "./useScrollDepth";

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize GA on mount if consent exists
  useEffect(() => {
    if (hasConsent()) {
      initGA();
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (hasConsent()) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
      pageview(url);
    }
  }, [pathname, searchParams]);

  // Track scroll depth
  useScrollDepth();
}
