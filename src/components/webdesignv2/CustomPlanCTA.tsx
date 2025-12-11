"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export function CustomPlanCTA() {
  return (
    <section className="py-12 relative overflow-hidden bg-card/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/15 to-primary/20" />
      <div className="hidden lg:block absolute left-0 bottom-0 w-[21%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/webdesign/cta-left.webp"
            alt="Design mockups"
            fill
            className="object-contain object-left-bottom"
            sizes="25vw"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0 w-[21%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/webdesign/cta-right.webp"
            alt="Design mockups"
            fill
            className="object-contain object-right-bottom"
            sizes="25vw"
          />
        </div>
      </div>
      <div className="container relative z-10">
        <div className="p-8 md:p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Get A Custom Plan Tailored To Your Business Goals
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Not sure where to begin? Let our experts help you shape the perfect digital strategy. Whether you're looking for a new website, a rebrand, Amazon marketing, or book publishing support — we'll assess your needs and craft a custom proposal that aligns with your goals, timeline, and budget.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-14 rounded-xl px-10 text-lg animate-pulse-glow shadow-glow-lg gap-2" href="/contact">Get Your Growth Strategy<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
            {/* <Button variant="hero" size="lg" asChild className="">
              <Link href="/contact" className="gap-2">
                <Phone className="w-4 h-4" />
                Claim Your Free Proposal Now
              </Link>
            </Button> */}
            {/* <Button variant="heroOutline" size="lg" asChild>
              <Link 
                href="#" 
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && (window as any).$zopim) {
                    (window as any).$zopim.livechat.window.toggle();
                  }
                }}
              >
                <MessageSquare className="w-4 h-4" />
                Live Chat
              </Link>
            </Button> */}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="tel:+16468142689" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (646) 814-2689
            </a>
            <span className="text-muted-foreground/50">|</span>
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
