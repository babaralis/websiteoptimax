"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 4,
    title: "ScaleOps Solutions",
    category: "B2B Tech",
    description:
      "DevOps platform wanted to position as market leader and increase enterprise demos. Created compelling hero section with video testimonials and feature comparisons.",
    result: "+187% demos",
    image: "/assets/images/portfolio/4.jpg",
  },
  {
    id: 5,
    title: "TalentBridge HR",
    category: "HR SaaS",
    description:
      "HR software company needed to differentiate in a crowded market and attract mid-market buyers. Implemented interactive product tours and pricing transparency.",
    result: "+420% MQLs",
    image: "/assets/images/portfolio/5.jpg",
  },
  {
    id: 6,
    title: "FinanceFlow",
    category: "FinTech B2B",
    description:
      "Financial services platform required compliance-focused design that still converted. Balanced regulatory requirements with modern UX and trust signals.",
    result: "+89% conversions",
    image: "/assets/images/portfolio/6.jpg",
  },
  {
    id: 7,
    title: "TechVenture Capital",
    category: "Investment Services",
    description:
      "VC firm needed a modern website to attract portfolio companies and limited partners. Created sophisticated design with portfolio showcase and team expertise.",
    result: "+156% inquiries",
    image: "/assets/images/portfolio/7.jpg",
  },
  {
    id: 8,
    title: "SupplyChain Pro",
    category: "Logistics SaaS",
    description:
      "Supply chain management platform required intuitive dashboard design for complex workflows. Built user-friendly interface with real-time tracking capabilities.",
    result: "+245% adoption",
    image: "/assets/images/portfolio/8.jpg",
  },
  {
    id: 9,
    title: "MediCare Solutions",
    category: "Healthcare B2B",
    description:
      "Healthcare technology company needed HIPAA-compliant website with patient portal integration. Designed secure, accessible platform with clear navigation.",
    result: "+312% signups",
    image: "/assets/images/portfolio/9.jpg",
  },
  {
    id: 10,
    title: "EduTech Enterprise",
    category: "EdTech B2B",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/10.jpg",
  },
  {
    id: 11,
    title: "LegalTech Platform",
    category: "Legal SaaS",
    description:
      "Legal software company needed to simplify complex product for law firms. Redesigned with clear use cases, client testimonials, and integration showcase.",
    result: "+195% trials",
    image: "/assets/images/portfolio/11.jpg",
  },
  {
    id: 12,
    title: "RealEstate Pro",
    category: "PropTech B2B",
    description:
      "Real estate technology platform required modern website to attract commercial property managers. Built with property showcase and ROI calculator.",
    result: "+223% leads",
    image: "/assets/images/portfolio/12.jpg",
  },
  {
    id: 13,
    title: "MarketingHub",
    category: "MarTech SaaS",
    description:
      "Marketing automation platform needed to stand out in competitive market. Created compelling landing pages with A/B testing capabilities and analytics dashboard.",
    result: "+167% conversions",
    image: "/assets/images/portfolio/13.jpg",
  },
  {
    id: 14,
    title: "SalesForce Pro",
    category: "Sales SaaS",
    description:
      "Sales enablement platform wanted to increase enterprise deals. Designed with comprehensive product tours, integration guides, and customer success stories.",
    result: "+289% enterprise deals",
    image: "/assets/images/portfolio/14.jpg",
  },
  {
    id: 15,
    title: "AnalyticsIQ",
    category: "Data Analytics",
    description:
      "Business intelligence platform needed to showcase data visualization capabilities. Built interactive dashboard previews and use case scenarios.",
    result: "+234% signups",
    image: "/assets/images/portfolio/15.jpg",
  },
  {
    id: 16,
    title: "CyberShield Enterprise",
    category: "Cybersecurity",
    description:
      "Cybersecurity company required trust-building website with security certifications. Created comprehensive solution pages with threat intelligence showcase.",
    result: "+412% inquiries",
    image: "/assets/images/portfolio/16.jpg",
  },
  {
    id: 17,
    title: "CloudInfra Solutions",
    category: "Cloud Services",
    description:
      "Cloud infrastructure provider needed to explain complex services simply. Designed with interactive architecture diagrams and pricing transparency.",
    result: "+356% consultations",
    image: "/assets/images/portfolio/17.jpg",
  },
  {
    id: 18,
    title: "AIWorks Platform",
    category: "AI/ML SaaS",
    description:
      "AI platform wanted to demonstrate capabilities to enterprise buyers. Built with interactive demos, case studies, and ROI calculators.",
    result: "+445% demos",
    image: "/assets/images/portfolio/18.jpg",
  },
  {
    id: 19,
    title: "ComplianceGuard",
    category: "RegTech",
    description:
      "Regulatory technology company needed compliance-focused design. Created comprehensive resource center with compliance checklists and industry guides.",
    result: "+278% downloads",
    image: "/assets/images/portfolio/19.jpg",
  },
  {
    id: 20,
    title: "WorkflowMax",
    category: "Workflow SaaS",
    description:
      "Workflow automation platform required intuitive process builder showcase. Designed with visual workflow examples and integration marketplace.",
    result: "+312% trials",
    image: "/assets/images/portfolio/20.jpg",
  },
  {
    id: 21,
    title: "CustomerSuccess Hub",
    category: "CSM SaaS",
    description:
      "Customer success platform needed to demonstrate value to SaaS companies. Built with customer health score examples and success metrics dashboard.",
    result: "+189% signups",
    image: "/assets/images/portfolio/21.jpg",
  },
  {
    id: 22,
    title: "API Gateway Pro",
    category: "Developer Tools",
    description:
      "API management platform wanted to attract developer audience. Created comprehensive documentation, code examples, and developer resources.",
    result: "+523% API keys",
    image: "/assets/images/portfolio/22.jpg",
  },
  {
    id: 23,
    title: "PaymentGateway Plus",
    category: "FinTech Payments",
    description:
      "Payment processing platform required trust-building design with security badges. Built with transparent pricing, integration guides, and merchant testimonials.",
    result: "+267% signups",
    image: "/assets/images/portfolio/23.jpg",
  },
  {
    id: 24,
    title: "ContentStudio",
    category: "Content Marketing",
    description:
      "Content marketing platform needed to showcase content creation tools. Designed with content templates, workflow examples, and collaboration features.",
    result: "+334% activations",
    image: "/assets/images/portfolio/24.jpg",
  },
  {
    id: 25,
    title: "ProjectManager Pro",
    category: "Project Management",
    description:
      "Project management platform wanted to demonstrate collaboration features. Built with interactive project views, timeline examples, and team dashboards.",
    result: "+298% teams",
    image: "/assets/images/portfolio/25.jpg",
  },
  {
    id: 26,
    title: "EcommerceSuite",
    category: "E-commerce B2B",
    description:
      "B2B e-commerce platform required marketplace design for wholesale buyers. Created with product catalog, bulk ordering, and account management features.",
    result: "+456% orders",
    image: "/assets/images/portfolio/26.jpg",
  },
  {
    id: 27,
    title: "SupportDesk Enterprise",
    category: "Customer Support",
    description:
      "Customer support platform needed to showcase ticketing system and automation. Designed with help center examples and integration showcase.",
    result: "+378% tickets",
    image: "/assets/images/portfolio/27.jpg",
  },
  {
    id: 28,
    title: "BusinessIntelligence Pro",
    category: "BI & Analytics",
    description:
      "Business intelligence platform wanted to demonstrate reporting capabilities. Built with interactive report examples, dashboard previews, and data visualization showcase.",
    result: "+289% reports",
    image: "/assets/images/portfolio/28.jpg",
  },
  {
    id: 1,
    title: "CloudSync Platform",
    category: "B2B SaaS",
    description:
      "Enterprise data integration platform needed to convert more free trial users to paid subscriptions. Redesigned with conversion-focused UX and clear value propositions.",
    result: "+340% trial-to-paid",
    image: "/assets/images/portfolio/1.jpg",
  },
  {
    id: 2,
    title: "Meridian Consulting",
    category: "B2B Services",
    description:
      "Management consulting firm struggling to generate qualified leads from their outdated website. Complete redesign with case studies and thought leadership content.",
    result: "+$2.3M pipeline",
    image: "/assets/images/portfolio/2.jpg",
  },
  {
    id: 3,
    title: "DataVault Pro",
    category: "Enterprise SaaS",
    description:
      "Data security company needed a website that could close deals without sales calls. Built self-service portal with interactive demos and ROI calculators.",
    result: "68% shorter cycle",
    image: "/assets/images/portfolio/3.jpg",
  },
];

type NewPortfolioProps = {
  /** How many cards to show. If not provided, shows all 28. */
  limit?: number;
};

export function NewPortfolio({ limit }: NewPortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  // ✅ Apply limit here
  const itemsToShow =
    typeof limit === "number" ? PORTFOLIO_ITEMS.slice(0, limit) : PORTFOLIO_ITEMS;

  const handleCardClick = (item: PortfolioItem) => setSelectedImage(item);
  const handleClose = () => setSelectedImage(null);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <GridPattern variant="lines" className="opacity-20" />

      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="section-heading text-foreground ...">
            Featured <span className="gradient-text">B2B Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project represents a transformation in how B2B companies attract and convert buyers.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemsToShow.map((project) => (
            <FadeIn key={project.id}>
              <Card
                className={cn(
                  "group overflow-hidden transition-all duration-300",
                  "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10",
                  "border-border/50 hover:border-primary/30",
                  "bg-card/50 backdrop-blur-sm cursor-pointer"
                )}
                onClick={() => handleCardClick(project)}
              >
                <div className="relative w-full max-h-[31.25rem] bg-gradient-to-br from-muted to-muted/50 overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />

                  <Badge className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm text-foreground">
                    {project.category}
                  </Badge>

                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-success font-semibold">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm">{project.result}</span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </StaggerChildren>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) handleClose();
        }}
      >
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 gap-0">
          {selectedImage && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedImage.title}</DialogTitle>
                <DialogDescription>{selectedImage.description}</DialogDescription>
              </DialogHeader>

              <div className="relative w-full h-full flex flex-col">
                {/* Image */}
                <div className="relative flex-1 overflow-hidden bg-muted">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="95vw"
                    priority
                  />
                </div>

                {/* Info */}
                <div className="border-t bg-background p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{selectedImage.category}</Badge>
                        <div className="flex items-center gap-2 text-success font-semibold">
                          <TrendingUp className="h-4 w-4" />
                          <span>{selectedImage.result}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedImage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
