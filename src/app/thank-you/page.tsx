"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";

export default function ThankYouPage() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-hidden">
      {/* Background with same styling as hero section */}
      <div className="absolute inset-0 bg-background overflow-hidden">
        <AbstractShapes variant="hero" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Header with Logo */}
      <header className="absolute top-0 left-0 z-30 w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="inline-block mb-4">
            <Image src="/assets/images/logos/logo.svg" alt="Website Optimax" width={150} height={100} />
          </Link>
        </div>
      </header>

      {/* Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-4">
        <div className="text-center md:max-w-[75rem] md:w-[90%] md:mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Thank You, How Would You Like To Proceed?
          </h2>
          <div className="md:max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="/assets/images/brief/chat.jpg"
                  alt="Live Chat Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Live Chat Support</h3>
                <p className="text-white/80 mb-6">
                  Let's talk! Share your design requirements with one of our designers to get a perfect logo that you envisioned for.
                </p>
                <Button className="w-full bg-[#ff4772] hover:bg-[#ff4772]/90" asChild>
                  <Link href="/contact">Chat With Us</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="/assets/images/brief/last2-step.jpg"
                  alt="Pricing Packages"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Pricing Packages</h3>
                <p className="text-white/80 mb-6">
                  Checkout our budget friendly packages & pricing plans tailor made for startups & growing businesses of all sizes.
                </p>
                <Button className="w-full bg-[#ff4772] hover:bg-[#ff4772]/90" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="/assets/images/brief/portfolio.jpg"
                  alt="Creative Portfolio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Creative Portfolio</h3>
                <p className="text-white/80 mb-6">
                  Checkout our amazing logo projects that we have designed for our recent customers to give their brand an identity.
                </p>
                <Button className="w-full bg-[#ff4772] hover:bg-[#ff4772]/90" asChild>
                  <Link href="/portfolio">Visit Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

