"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, TrendingUp, ShoppingCart, ArrowRight, Bot } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: MessageSquare,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
    title: "WhatsApp AI Agent",
    description: "Responds instantly using your live knowledge base, so your team isn't stuck replying to repetitive queries. Identifies upgrade or cross-sell opportunities from ticket patterns. Reduces human ticket volume and increases qualified conversions through automated conversations.",
    phoneColor: "bg-green-500/20",
  },
  {
    icon: Calendar,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    title: "Calendly AI Agent",
    description: "Embeds Calendly booking links directly into AI conversations. Triggers after product inquiries, support needs, or sales interest. Syncs with CRMs to confirm meetings instantly and reduce friction.",
    phoneColor: "bg-purple-500/20",
  },
  {
    icon: TrendingUp,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    title: "HubSpot AI Agent",
    description: "Captures and syncs lead data from chats directly into HubSpot. Automates follow-ups with workflows for sales and support teams. Provides real-time insights to boost conversions and customer retention.",
    phoneColor: "bg-yellow-500/20",
  },
  {
    icon: ShoppingCart,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    title: "Shopify AI Agent",
    description: "Handles product, order, refund, and shipping queries instantly by pulling live data from your store. Detects customer drop-offs and friction points in the purchase journey. Increases checkout completion rates and improves retention through faster, smarter post-sale support.",
    phoneColor: "bg-blue-500/20",
  },
];

export function AIServicesSection() {
  return (
    <section id="ai-features" className="section bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading text-foreground">
              AI That's <span className="text-primary">Actually Operational</span>
            </h2>
            <p className="section-subheading mx-auto">
              Our AI services plug directly into your business, no-code, real-time, and trained on your
              systems. From handling customer support to qualifying leads or syncing bookings, our AI agents
              act like full-time staff across multiple platforms.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="ai-service-card glass-card p-6 h-full flex flex-col transition-all hover:border-primary hover:shadow-glow-sm">
                <div className={`service-icon-wrapper w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                <div className={`service-phone-mockup mb-4 ${service.phoneColor} rounded-lg p-3`}>
                  <div className="phone-screen bg-card rounded-lg p-3">
                    <div className="phone-content">
                      <div className="phone-header flex items-center gap-2 mb-2 pb-2 border-b border-border">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Bot className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-foreground">AI Assistant</span>
                      </div>
                      <div className="phone-messages space-y-2">
                        <div className="phone-message text-xs bg-primary/10 text-foreground p-2 rounded-lg">
                          Hello! How can I help?
                        </div>
                        <div className="phone-message user-msg text-xs bg-muted text-muted-foreground p-2 rounded-lg ml-auto max-w-[80%]">
                          I need support
                        </div>
                        <div className="phone-message text-xs bg-primary/10 text-foreground p-2 rounded-lg">
                          I'm here to assist you...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="text-lg font-bold mb-2 text-foreground">{service.title}</h5>
                <p className="service-description text-sm text-muted-foreground mb-4 flex-grow">
                  {service.description}
                </p>
                <Button asChild className="btn-primary-custom w-full mt-2">
                  <Link href="/contact">
                    Request Access
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


