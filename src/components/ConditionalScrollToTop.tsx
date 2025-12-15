"use client";

import { usePathname } from "next/navigation";
import { ScrollToTop } from "@/components/ScrollToTop";

export function ConditionalScrollToTop() {
  const pathname = usePathname();
  
  // Don't render ScrollToTop on web-design-v3 and web-design-v4 pages
  if (pathname?.includes("/web-design-v3") || pathname?.includes("/web-design-v4")) {
    return null;
  }
  
  return <ScrollToTop />;
}
