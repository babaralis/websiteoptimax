'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Check, Phone, MessageSquare, Star } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Basic",
    originalPrice: "$398",
    price: "$199",
    popular: false,
    features: [
      "01 Page Website",
      "2 Stock Photos",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "Up to 3 Revisions",
      "48 to 72 hours TAT",
    ],
  },
  {
    name: "Professional",
    originalPrice: "$1,390",
    price: "$695",
    popular: true,
    features: [
      "Up to 5 Unique Pages",
      "Admin Panel Integration",
      "5+ Stock Photos & Banners",
      "FREE Social Media Integration",
      "FREE Favicon Design",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Cross Browser Compatible",
    ],
  },
  {
    name: "Elite",
    originalPrice: "$1,990",
    price: "$995",
    popular: false,
    features: [
      "Up to 10 Unique Pages",
      "Customized WordPress/PHP",
      "Interactive Sliding Banners",
      "10 Custom Banner Designs",
      "10 Stock Images",
      "Unlimited Revisions",
      "Fully Mobile Responsive",
      "Priority Support",
    ],
  },
];

const premiumPackages = [
  {
    name: "Silver",
    originalPrice: "$3,190",
    price: "$1,595",
    features: [
      "Up to 15 Unique Pages",
      "Custom Interactive Design",
      "WordPress/PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "15 Custom Banner Designs",
      "15 Stock Images",
    ],
  },
  {
    name: "Business",
    originalPrice: "$4,990",
    price: "$2,495",
    features: [
      "25 Pages Website",
      "Custom Interactive Design",
      "WordPress/PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "15 Custom Banner Designs",
      "15 Stock Images",
    ],
  },
  {
    name: "Platinum",
    originalPrice: "$8,990",
    price: "$4,495",
    features: [
      "30-60 Sec Explainer Video",
      "Custom Interactive Design",
      "WordPress/PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "Premium Support",
      "Dedicated Manager",
    ],
  },
];

export function LandingPricing() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden pt-0">
      <div className="container">
        <FadeIn className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-secondary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            Pricing & Packages
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Get More for Less with Our{" "}
            <span className="gradient-text">Value-Packed Plans</span>
          </h2>
        </FadeIn>
        
        {/* Standard Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg, index) => (
            <FadeIn key={pkg.name} delay={index * 0.1}>
              <motion.div
                className={`glass-card-elevated p-6 h-full flex flex-col relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-muted-foreground line-through text-sm">{pkg.originalPrice}</span>
                    <span className="text-3xl font-bold gradient-text">{pkg.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 flex-grow mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "hero" : "heroOutline"} 
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">Order Now</Link>
                </Button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        
        {/* Contact Bar */}
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageSquare className="w-4 h-4" />
              Live Chat
            </a>
            <a href="tel:+19178311779" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (917) 831-1779
            </a>
            <span className="text-muted-foreground/50">|</span>
            <span>Add on: $500 for expedited services</span>
          </div>
        </FadeIn>
        
        {/* Premium Packages */}
        <FadeIn className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold">Premium Packages</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-6">
          {premiumPackages.map((pkg, index) => (
            <FadeIn key={pkg.name} delay={index * 0.1}>
              <motion.div
                className="glass-card p-6 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-muted-foreground line-through text-sm">{pkg.originalPrice}</span>
                    <span className="text-3xl font-bold gradient-text">{pkg.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 flex-grow mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="heroOutline" className="w-full" asChild>
                  <Link href="/contact">Order Now</Link>
                </Button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
