'use client';

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Check, Phone, MessageSquare, Star } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "BASIC WEBSITE PACKAGE",
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
      "Facebook Page Design",
      "Twitter Page Design",
      "YouTube Page Design",
      "Mobile Responsive will be Additional $99*",
      "CMS will be Additional $149*",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee *",
      "NO MONTHLY OR ANY YEARLY FEE *",
    ],
  },
  {
    name: "PROFESSIONAL",
    originalPrice: "$1,390",
    price: "$695",
    popular: true,
    features: [
      "Up to 5 Unique Pages Website",
      "Admin Panel Integration",
      "5+ Stock Photos & Banner Designs",
      "FREE Social Media Integration",
      "FREE Favicon Design",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Website Initial Concepts in 48 Hours",
      "Complete Design & Deployment",
      "Custom, Interactive & Dynamic Web Design",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "Value Added Services",
      "CMS will be additional $149 *",
      "Mobile Responsive will be additional $199 *",
    ],
  },
  {
    name: "ELITE",
    originalPrice: "$1,990",
    price: "$995",
    popular: false,
    features: [
      "Up to 10 Unique Pages Website",
      "Custom Made, Interactive & Dynamic Design",
      "Customized WordPress or PHP Development",
      "Interactive Sliding Banners",
      "Up to 10 Custom Made Banner Designs",
      "10 Stock Images",
      "Unlimited Revisions",
      "Online Signup Area (For Newsletters, Offers etc.)",
      "Search Bar",
      "Live Feeds of Social Networks integration (Optional)",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "CMS will be additional $149 *",
      "Mobile Responsive will be additional $199 *",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
];

const premiumPackages = [
  {
    name: "SILVER",
    originalPrice: "$6,990",
    price: "$1,595",
    features: [
      "Up to 15 Unique Pages Website",
      "Custom Made, Interactive, Dynamic & High-End Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
      "15 Stock Images",
      "Unlimited Revisions",
      "Content Management System",
      "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
      "Online Payment Integration (Optional)",
      "Multi Lingual (Optional)",
      "Custom Dynamic Forms (Optional)",
      "Signup Area (For Newsletters, Offers etc.)",
      "Search Bar",
      "Live Feeds of Social Networks integration (Optional)",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
  {
    name: "BUSINESS",
    originalPrice: "$6,990",
    price: "$2,495",
    features: [
      "25 Pages Website",
      "Custom Made, Interactive, Dynamic & High-End Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Cross-platform (Desktop, iPhone, Android, etc.) responsive compatibility",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
      "15 Stock Images",
      "Unlimited Revisions",
      "Content Management System",
      "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
      "Online Payment Integration (Optional)",
      "Multi Lingual (Optional)",
      "Custom Dynamic Forms (Optional)",
      "Signup Area (For Newsletters, Offers etc.)",
      "Search Bar",
      "Live Feeds of Social Networks integration (Optional)",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
  {
    name: "PLATINUM",
    originalPrice: "$8,990",
    price: "$4,495",
    features: [
      "Unlimited Pages Website",
      "Custom Made, Interactive, Dynamic & High-End Design",
      "Customized WordPress or PHP Development",
      "Fully Mobile Responsive",
      "Cross-platform (Desktop, iPhone, Android, etc.) responsive compatibility",
      "30-60 Sec Business Specific Explainer Video",
      "Parallax Scrolling",
      "Security plugins",
      "Downloadable items (eBooks, PDFs, Podcast, Videos)",
      "Interactive Sliding Banners",
      "Up to 15 Custom Made Banner Designs",
      "15 Stock Images",
      "Unlimited Revisions",
      "Content Management System",
      "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
      "Online Payment Integration (Optional)",
      "Multi Lingual (Optional)",
      "Custom Dynamic Forms (Optional)",
      "Signup Area (For Newsletters, Offers etc.)",
      "Search Bar",
      "Live Feeds of Social Networks integration (Optional)",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Industry specified Team of Expert Designers and Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
  },
];

export function LandingPricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 relative overflow-hidden pt-0">
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
                className={`glass-card-elevated p-6 flex flex-col relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
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
                
                <ul className="space-y-3 mb-6 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
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

            {/* <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageSquare className="w-4 h-4" />
              Live Chat
            </a> */}
            
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
          <h3 className="text-4xl font-display font-bold">Premium <span className="gradient-text">Packages</span>
          </h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-6">
          {premiumPackages.map((pkg, index) => (
            <FadeIn key={pkg.name} delay={index * 0.1}>
              <motion.div
                className="glass-card p-6 flex flex-col"
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
                
                <ul className="space-y-3 mb-6 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
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
