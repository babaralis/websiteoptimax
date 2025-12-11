"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "@/components/animations/PageTransition";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isWebDesignV2 = pathname?.startsWith("/web-design-v2");
  const isWebDesignV3 = pathname?.startsWith("/web-design-v3");
  const shouldHideHeaderFooter = isWebDesignV2 || isWebDesignV3;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!shouldHideHeaderFooter && <Header />}
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}
