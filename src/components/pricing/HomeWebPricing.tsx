"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Plan = {
  name: string;
  price: string;
  description?: string;
  features: string[];
  popular?: boolean;
  cta: string;
  amount: number;
  category: string;
  currency_code: string;
};

type TabId = "html" | "cms" | "ecom" | "portal";

type PricingTab = {
  id: TabId;
  label: string;
  subLabel: string;
  plans: Plan[];
};

const pricingTabs: PricingTab[] = [
  // ---------- HTML WEBSITE ----------
  {
    id: "html",
    label: "HTML Website",
    subLabel: "",
    plans: [
      {
        name: "Single Page",
        price: "$299",
        features: [
          "1 Page Static Website",
          "W3C Certified HTML",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "JQuery Slider Banners",
          "Products/Services Section",
          "Portfolio/Gallery Section",
          "Contact Us Section",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Web Page Banner Design",
          "Royalty Free Stock Image",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 299,
        category: "HTML Website",
        currency_code: "USD",
      },
      {
        name: "5 Pages",
        price: "$499",
        features: [
          "5 Pages Static Website",
          "W3C Certified HTML",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "Home Page Layout",
          "Company Profile Page",
          "Product/Service Page",
          "Portfolio/Gallery Page",
          "Contact Us Page",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "5 Web Page Banners Design",
          "5 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        popular: true,
        cta: "Order Now",
        amount: 499,
        category: "HTML Website",
        currency_code: "USD",
      },
      {
        name: "8 Pages",
        price: "$699",
        features: [
          "8 Pages Static Website",
          "W3C Certified HTML",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "Home Page Layout",
          "Company Profile Page",
          "Main Product/Service Page",
          "Products/Services Inner Pages",
          "Portfolio/Gallery Page",
          "Contact Us Page",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "8 Web Page Banners Design",
          "8 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 699,
        category: "HTML Website",
        currency_code: "USD",
      },
      {
        name: "12 Pages",
        price: "$899",
        features: [
          "12 Pages Static Website",
          "W3C Certified HTML",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "Home Page Layout",
          "Company Profile Page",
          "Main Product/Service Page",
          "Products/Services Inner Pages",
          "Portfolio/Gallery Page",
          "Contact Us Page",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "12 Web Page Banners Design",
          "12 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 899,
        category: "HTML Website",
        currency_code: "USD",
      },
    ],
  },

  // ---------- CMS WEBSITE ----------
  {
    id: "cms",
    label: "CMS Website",
    subLabel: "",
    plans: [
      {
        name: "Single Page CMS Website",
        price: "$399",
        features: [
          "1 Page Custom Website",
          "CMS Admin Panel",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "Company Profile Section",
          "Products/Services Section",
          "Portfolio/Gallery Section",
          "Contact Us Section",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Royalty Free Stock Image",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 399,
        category: "CMS Website",
        currency_code: "USD",
      },
      {
        name: "5 Pages CMS Website",
        price: "$799",
        popular: true,
        features: [
          "5 Pages Custom Website",
          "CMS Admin Panel",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "Home Page Layout",
          "Company Profile Page",
          "Product/Service Page",
          "Portfolio/Gallery Page",
          "Contact Us Page",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "5 Web Page Banners Design",
          "5 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 799,
        category: "CMS Website",
        currency_code: "USD",
      },
      {
        name: "8 Pages CMS Website",
        price: "$999",
        features: [
          "8 Pages Custom Website",
          "CMS Admin Panel",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "Home Page Layout",
          "Company Profile Page",
          "Main Product/Service Page",
          "Products/Services Inner Pages",
          "Portfolio/Gallery Page",
          "Contact Us Page",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "8 Web Page Banners Design",
          "8 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 999,
        category: "CMS Website",
        currency_code: "USD",
      },
      {
        name: "12 Pages CMS Website",
        price: "$1299",
        features: [
          "12 Pages Custom Website",
          "CMS Admin Panel",
          "JQuery Slider Banner",
          "Mobile Responsive Layout",
          "Home Page Layout",
          "Company Profile Page",
          "Main Product/Service Page",
          "Products/Services Inner Pages",
          "Portfolio/Gallery Page",
          "Contact Us Page",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "12 Web Page Banners Design",
          "12 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
          "3 Month LiveChat Support Agent",
        ],
        cta: "Order Now",
        amount: 1299,
        category: "CMS Website",
        currency_code: "USD",
      },
    ],
  },

  // ---------- E-COM WEBSITE ----------
  {
    id: "ecom",
    label: "E-Com Website",
    subLabel: "",
    plans: [
      {
        name: "Basic E-Com Website",
        price: "$1499",
        features: [
          "Upto 10 Products & Categories",
          "Product Attributes & Features",
          "General Product Search",
          "Shopping Cart Integration",
          "Single Payment Module",
          "CMS Admin Panel",
          "Order Management System",
          "Newsletter Subscription",
          "MySQL Database Creation",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Mobile Responsive Layout",
          "JQuery Slider Banners",
          "8 Web Page Banners Design",
          "8 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 1499,
        category: "E-Commerce Website",
        currency_code: "USD",
      },
      {
        name: "Extended E-Com Website",
        price: "$2499",
        popular: true,
        features: [
          "Upto 25 Products & Categories",
          "Product Attributes & Features",
          "Product Search",
          "Product Filtration",
          "Shopping Cart Integration",
          "Upto 2 Payment Modules",
          "CMS Admin Panel",
          "Order Management System",
          "Newsletter Subscription",
          "Website Blog Section",
          "MySQL Database Creation",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Mobile Responsive Layout",
          "JQuery Slider Banner",
          "12 Web Page Banners Design",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 2499,
        category: "E-Commerce Website",
        currency_code: "USD",
      },
      {
        name: "Professional E-Com Website",
        price: "$3999",
        features: [
          "Upto 50 Products & Categories",
          "Product Attributes & Features",
          "Product Search & Filtration",
          "Product Reviews & Rating",
          "Product Favorites & Wishlist",
          "Spreadsheet Products Import",
          "Shopping Cart Integration",
          "Promo Code/Coupon Feature",
          "Upto 3 Payment Modules",
          "CMS Admin Panel",
          "Order Management System",
          "Inventory Management",
          "Order Shipment & Tracking",
          "User Signup & Login",
          "Personalized User Dashboard",
          "Newsletter Subscription",
          "Website Blog Section",
          "MySQL Database Creation",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Mobile Responsive Layout",
          "JQuery Slider Banner",
          "12 Web Page Banners Design",
          "12 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 3999,
        category: "E-Commerce Website",
        currency_code: "USD",
      },
      {
        name: "Enterprise E-Com Website",
        price: "$5999",
        features: [
          "Upto 100 Products & Categories",
          "Product Attributes & Features",
          "Product Search & Filtration",
          "Product Reviews & Rating",
          "Product Favorites & Wishlist",
          "Spreadsheet Products Import",
          "Shopping Cart Integration",
          "Promo Code/Coupon Feature",
          "Multiple Payment Modules",
          "CMS Admin Panel",
          "Order Management System",
          "Inventory Management",
          "Sales Reporting Feature",
          "Order Shipment & Tracking",
          "User Signup & Login",
          "Personalized User Dashboard",
          "Newsletter Subscription",
          "Website Blog Section",
          "MySQL Database Creation",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Mobile Responsive Layout",
          "JQuery Slider Banner",
          "12 Web Page Banners Design",
          "12 Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
        ],
        cta: "Order Now",
        amount: 5999,
        category: "E-Commerce Website",
        currency_code: "USD",
      },
    ],
  },

  // ---------- MARKETPLACE PORTAL ----------
  {
    id: "portal",
    label: "Marketplace Portal",
    subLabel: "",
    plans: [
      {
        name: "Product Based Marketplace",
        price: "Portal",
        features: [
          "Unlimited Sellers",
          "Unlimited Selling Products",
          "Unlimited Categories/Industries",
          "Products Attributes & Features",
          "Products Search & Filtration",
          "Product Reviews & Rating",
          "Seller Reviews & Rating",
          "Seller Login & Dashboard",
          "Clients Login & Dashboard",
          "Shopping Cart Integration",
          "Promo Code/Coupon Feature",
          "Multiple Payment Options",
          "Seller Inventory Management",
          "Order Shipment & Tracking",
          "Newsletter Subscription",
          "Admin Control Panel",
          "Paid Advertising & Ads Placement",
          "Website Blog Section",
          "MySQL Database Creation",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Mobile Responsive Layout",
          "JQuery Slider Banners",
          "Web Page Banners Design",
          "Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
          "3 Month LiveChat Agent",
        ],
        cta: "Discuss Now",
        amount: 0,
        category: "Marketplace Portal",
        currency_code: "USD",
      },
      {
        name: "Service Based Marketplace",
        price: "Portal",
        popular: true,
        features: [
          "Unlimited Providers",
          "Unlimited Service Offerings",
          "Unlimited Categories/Industries",
          "Services Attributes & Features",
          "Services Search & Filtration",
          "Service Reviews & Rating",
          "Provider Reviews & Rating",
          "Provider Login & Dashboard",
          "Clients Login & Dashboard",
          "Checkout Integration",
          "Promo Code/Coupon Feature",
          "Multiple Payment Options",
          "Order Status & Progress",
          "Newsletter Subscription",
          "Website Blog Section",
          "Admin Control Panel",
          "Paid Advertising & Ads Placement",
          "MySQL Database Creation",
          "Lead Inquiry Form",
          "Website Favicon Design",
          "Mobile Responsive Layout",
          "JQuery Slider Banners",
          "Web Page Banners Design",
          "Royalty Free Stock Images",
          "Advance UI/UX Effects",
          "Social Media Integrations",
          "3 Month LiveChat Agent",
        ],
        cta: "Discuss Now",
        amount: 0,
        category: "Marketplace Portal",
        currency_code: "USD",
      },
      {
        name: "Networking Based Marketplace",
        price: "Portal",
        features: [
          "Unlimited Users",
          "Multiple User Profiles & Pages",
          "Unlimited Groups/Communities",
          "Users Login & Dashboard",
          "1-on-1 Chats & Messages",
          "Multiple Chat rooms",
          "User Connections & Invitations",
          "Users Networking Circle",
          "User Profile Banners & Pictures",
          "Users Posts & Interactions",
          "Users Status Online/Offline",
          "Posts/Media Sharing & Tagging",
          "User Privacy Settings",
          "MySQL Database Creation",
          "Website Favicon Design",
          "Admin Control Panel",
          "Paid Advertising & Ads Placement",
          "Mobile Responsive Layout",
          "Advance UI/UX Effects",
          "i.e. Job Portals",
          "i.e. Social Networking Sites",
        ],
        cta: "Discuss Now",
        amount: 0,
        category: "Marketplace Portal",
        currency_code: "USD",
      },
    ],
  },
];

export function HomeWebPricing({className}: {className?: string}) {
  const baseCrmUrl = "https://payment.websiteoptimax.com/payment/paynow";
  const [activeTab, setActiveTab] = useState<TabId>("html");
  const currentTab = pricingTabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container">
        {/* Heading */}
        <FadeIn className="text-center mb-10 lg:mb-14">
          <h2 className="section-heading text-foreground ...">
            Web Design &{" "}
            <span className="gradient-text">Development Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We create websites that not just fit your expectations, needs, and
            demands, but are budget-friendly too. Our pricing plans are
            customized for every business stage.
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn className="flex flex-wrap justify-center gap-4 mb-10 lg:mb-12">
          {pricingTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "inline-flex items-center rounded-lg border px-6 py-2.5 text-sm font-medium transition-all",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-transparent border-primary/40 text-primary hover:bg-primary/10"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </FadeIn>

        {/* Active tab subtitle */}
        <FadeIn className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {currentTab.subLabel}
          </p>
        </FadeIn>

        {/* Pricing grid */}
        {currentTab.plans.length <= 3 ? (
          <div className="flex justify-center">
            <div className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
              {currentTab.plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                // className="h-full"
              >
                <Card
                  className={cn(
                    " relative overflow-hidden transition-all duration-300",
                    plan.popular
                      ? "border-primary shadow-glow-lg bg-gradient-to-b from-primary/5 to-transparent"
                      : "border-border/60 hover:border-primary/40 bg-card/60"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-2 text-center">
                      <span className="text-xs font-semibold text-white flex items-center justify-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader
                    className={cn(
                      "text-center pb-0 pt-6",
                      plan.popular && "pt-14" 
                    )}
                  >
                    <h3 className="text-base font-semibold tracking-wide text-foreground mb-1 uppercase">
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                        {plan.price}
                      </span>
                    </div>
                    {plan.description && (
                      <p className="text-xs text-muted-foreground">
                        {plan.description}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="pt-6">
                    <p className="text-xs font-semibold text-foreground mb-3">
                      Features:
                    </p>
                    <ul className="space-y-2.5 mb-7">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.03 }}
                          className="flex items-start gap-2.5"
                        >
                          <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {plan.cta === "Discuss Now" ? (
                      <Button
                        variant={plan.popular ? "hero" : "outline"}
                        size="lg"
                        className="w-full text-sm font-semibold gap-2"
                        onClick={() => {
                          if (typeof window !== 'undefined' && (window as any).$zopim) {
                            (window as any).$zopim.livechat.window.toggle();
                          }
                        }}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Link href={`${baseCrmUrl}?item=${plan.name}&amount=${plan.amount}&category=${plan.category}&currency_code=${plan.currency_code}`}>
                        <Button
                          variant={plan.popular ? "hero" : "outline"}
                          size="lg"
                          className="w-full text-sm font-semibold gap-2"
                        >
                          {plan.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-4">
            {currentTab.plans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card
                    className={cn(
                      "relative overflow-hidden transition-all duration-300",
                      plan.popular
                        ? "border-primary shadow-glow-lg bg-gradient-to-b from-primary/5 to-transparent"
                        : "border-border/60 hover:border-primary/40 bg-card/60"
                    )}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-2 text-center">
                        <span className="text-xs font-semibold text-white flex items-center justify-center gap-1">
                          <Sparkles className="w-4 h-4" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader
                      className={cn(
                        "text-center pb-0 pt-6",
                        plan.popular && "pt-14"
                      )}
                    >
                      <h3 className="text-base font-semibold tracking-wide text-foreground mb-1 uppercase">
                        {plan.name}
                      </h3>
                      <div className="mb-3">
                        <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                          {plan.price}
                        </span>
                      </div>
                      {plan.description && (
                        <p className="text-xs text-muted-foreground">
                          {plan.description}
                        </p>
                      )}
                    </CardHeader>

                    <CardContent className="pt-6">
                      <p className="text-xs font-semibold text-foreground mb-3">
                        Features:
                      </p>
                      <ul className="space-y-2.5 mb-7">
                        {plan.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03 }}
                            className="flex items-start gap-2.5"
                          >
                            <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {plan.cta === "Discuss Now" ? (
                        <Button
                          variant={plan.popular ? "hero" : "outline"}
                          size="lg"
                          className="w-full text-sm font-semibold gap-2"
                          onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).$zopim) {
                              (window as any).$zopim.livechat.window.toggle();
                            }
                          }}
                        >
                          {plan.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Link href={`${baseCrmUrl}?item=${plan.name}&amount=${plan.amount}&category=${plan.category}&currency_code=${plan.currency_code}`}>
                          <Button
                            variant={plan.popular ? "hero" : "outline"}
                            size="lg"
                            className="w-full text-sm font-semibold gap-2"
                          >
                            {plan.cta}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Money-back guarantee */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-success/15 flex items-center justify-center">
                <Check className="w-5 h-5 text-success" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm text-foreground">
                  30-Day Money-Back Guarantee
                </p>
                <p className="text-xs text-muted-foreground">
                  Not satisfied? Full refund, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
