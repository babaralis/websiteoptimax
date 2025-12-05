"use client";

import { FadeIn } from "@/components/animations/FadeIn";

const benefits = [
  {
    title: "1. Customer Support AI Agent",
    description: "Highlight efficiency, cost savings, and service quality improvements.",
    stats: [
      { number: "35%", label: "Reduces Support Costs" },
      { number: "60%", label: "Resolve Issues Faster" },
    ],
  },
  {
    title: "2. Lead Capture AI Agent",
    description: "Emphasize conversion, qualification speed, and lead pipeline growth.",
    stats: [
      { number: "52%", label: "Increase Lead Conversions" },
      { number: "3x", label: "Faster Quality Leads" },
    ],
  },
  {
    title: "3. Sales AI Agent",
    description: "Focus on revenue acceleration, efficiency, and buyer experience.",
    stats: [
      { number: "40%", label: "Increase Sales Productivity" },
      { number: "3.5x", label: "ROI Deliver Within a Year" },
    ],
  },
];

export function AIBenefitsSection() {
  return (
    <section id="ai-benefits" className="section bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading text-foreground">
              Our AI Services Come With <span className="text-primary">Tremendous Benefits</span>
            </h2>
            <p className="section-subheading mx-auto">
              Deploy AI services to streamline operations and amplify your business's efficiency. These
              services optimize processes, reduce delays, and enhance output, ensuring you gain a competitive
              edge with speed and precision.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="benefit-card glass-card p-6 h-full">
                <h4 className="benefit-title text-xl font-bold mb-3 text-foreground">{benefit.title}</h4>
                <p className="benefit-description text-muted-foreground mb-6">{benefit.description}</p>
                <div className="benefit-stats grid grid-cols-2 gap-4">
                  {benefit.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="stat-box bg-primary/10 rounded-lg p-4 text-center">
                      <div className="stat-number text-3xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="stat-label text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

