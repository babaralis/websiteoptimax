"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { ArrowUpRight, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
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
    id: 1,
    title: "MediCare Solutions",
    category: "Ecommerce & Retail",
    description:
      "Healthcare technology company needed HIPAA-compliant website with patient portal integration. Designed secure, accessible platform with clear navigation.",
    result: "+312% signups",
    image: "/assets/images/portfolio/ecomerce-retail/1.webp",
  },
  {
    id: 2,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/2.webp",
  },
  {
    id: 3,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/3.webp",
  },
  {
    id: 4,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/4.webp",
  },
  {
    id: 5,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/5.webp",
  },
  {
    id: 6,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/6.webp",
  },
  {
    id: 7,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/7.webp",
  },
  {
    id: 8,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/8.webp",
  },
  {
    id: 9,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/9.webp",
  },
  {
    id: 10,
    title: "EduTech Enterprise",
    category: "Ecommerce & Retail",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/ecomerce-retail/10.webp",
  },
  {
  id: 11,
    title: "CloudSync Platform",
    category: "Education & Learning",
    description:
      "Enterprise data integration platform needed to convert more free trial users to paid subscriptions. Redesigned with conversion-focused UX and clear value propositions.",
    result: "+340% trial-to-paid",
    image: "/assets/images/portfolio/education-learning/1.webp",
  },
  {
    id: 12,
    title: "Meridian Consulting",
    category: "Education & Learning",
    description:
      "Management consulting firm struggling to generate qualified leads from their outdated website. Complete redesign with case studies and thought leadership content.",
    result: "+$2.3M pipeline",
    image: "/assets/images/portfolio/education-learning/2.webp",
  },
  {
    id: 13,
    title: "DataVault Pro",
    category: "Education & Learning",
    description:
      "Data security company needed a website that could close deals without sales calls. Built self-service portal with interactive demos and ROI calculators.",
    result: "68% shorter cycle",
    image: "/assets/images/portfolio/education-learning/3.webp",
  },
  {
    id: 14,
    title: "ScaleOps Solutions",
    category: "Education & Learning",
    description:
      "DevOps platform wanted to position as market leader and increase enterprise demos. Created compelling hero section with video testimonials and feature comparisons.",
    result: "+187% demos",
    image: "/assets/images/portfolio/education-learning/4.webp",
  },
  {
    id: 15,
    title: "TalentBridge HR",
    category: "Education & Learning",
    description:
      "HR software company needed to differentiate in a crowded market and attract mid-market buyers. Implemented interactive product tours and pricing transparency.",
    result: "+420% MQLs",
    image: "/assets/images/portfolio/education-learning/5.webp",
  },
  {
    id: 16,
    title: "FinanceFlow",
    category: "Education & Learning",
    description:
      "Financial services platform required compliance-focused design that still converted. Balanced regulatory requirements with modern UX and trust signals.",
    result: "+89% conversions",
    image: "/assets/images/portfolio/education-learning/6.webp",
  },
  {
    id: 17,
    title: "TechVenture Capital",
    category: "Education & Learning",
    description:
      "VC firm needed a modern website to attract portfolio companies and limited partners. Created sophisticated design with portfolio showcase and team expertise.",
    result: "+156% inquiries",
    image: "/assets/images/portfolio/education-learning/7.webp",
  },
  {
    id: 18,
    title: "SupplyChain Pro",
    category: "Education & Learning",
    description:
      "Supply chain management platform required intuitive dashboard design for complex workflows. Built user-friendly interface with real-time tracking capabilities.",
    result: "+245% adoption",
    image: "/assets/images/portfolio/education-learning/8.webp",
  },
  {
      id: 19,
    title: "MediCare Solutions",
    category: "Education & Learning",
    description:
      "Healthcare technology company needed HIPAA-compliant website with patient portal integration. Designed secure, accessible platform with clear navigation.",
    result: "+312% signups",
    image: "/assets/images/portfolio/education-learning/9.webp",
  },
  {
    id: 20,
    title: "EduTech Enterprise",
    category: "Education & Learning",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/education-learning/10.webp",
  },
  {
    id: 21,
    title: "CloudSync Platform",
    category: "Finance & Fintech",
    description:
      "Enterprise data integration platform needed to convert more free trial users to paid subscriptions. Redesigned with conversion-focused UX and clear value propositions.",
    result: "+340% trial-to-paid",
    image: "/assets/images/portfolio/finance-fintech/1.webp",
  },
  {
      id: 22,
    title: "Meridian Consulting",
    category: "Finance & Fintech",
    description:
      "Management consulting firm struggling to generate qualified leads from their outdated website. Complete redesign with case studies and thought leadership content.",
    result: "+$2.3M pipeline",
    image: "/assets/images/portfolio/finance-fintech/2.webp",
  },
  {
        id: 23,
    title: "DataVault Pro",
    category: "Finance & Fintech",
    description:
      "Data security company needed a website that could close deals without sales calls. Built self-service portal with interactive demos and ROI calculators.",
    result: "68% shorter cycle",
    image: "/assets/images/portfolio/finance-fintech/3.webp",
  },
  {
    id: 24,
    title: "ScaleOps Solutions",
    category: "Finance & Fintech",
    description:
      "DevOps platform wanted to position as market leader and increase enterprise demos. Created compelling hero section with video testimonials and feature comparisons.",
    result: "+187% demos",
    image: "/assets/images/portfolio/finance-fintech/4.webp",
  },
  {
    id: 25,
    title: "TalentBridge HR",
    category: "Finance & Fintech",
    description:
      "HR software company needed to differentiate in a crowded market and attract mid-market buyers. Implemented interactive product tours and pricing transparency.",
    result: "+420% MQLs",
    image: "/assets/images/portfolio/finance-fintech/5.webp",
  },
  {
    id: 26,
    title: "FinanceFlow",
    category: "Finance & Fintech",
    description:
      "Financial services platform required compliance-focused design that still converted. Balanced regulatory requirements with modern UX and trust signals.",
    result: "+89% conversions",
    image: "/assets/images/portfolio/finance-fintech/6.webp",
  },
  {
    id: 27,
    title: "TechVenture Capital",
    category: "Finance & Fintech",
    description:
      "VC firm needed a modern website to attract portfolio companies and limited partners. Created sophisticated design with portfolio showcase and team expertise.",
    result: "+156% inquiries",
    image: "/assets/images/portfolio/finance-fintech/7.webp",
  },
  {
    id: 28,
    title: "SupplyChain Pro",
    category: "Finance & Fintech",
    description:
      "Supply chain management platform required intuitive dashboard design for complex workflows. Built user-friendly interface with real-time tracking capabilities.",
    result: "+245% adoption",
    image: "/assets/images/portfolio/finance-fintech/8.webp",
  },
  {
        id: 29,
    title: "MediCare Solutions",
    category: "Finance & Fintech",
    description:
      "Healthcare technology company needed HIPAA-compliant website with patient portal integration. Designed secure, accessible platform with clear navigation.",
    result: "+312% signups",
    image: "/assets/images/portfolio/finance-fintech/9.webp",
  },
  {
  id: 30,
    title: "EduTech Enterprise",
    category: "Finance & Fintech",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/finance-fintech/10.webp",
  },
];
type NewPortfolioProps = {
  limit?: number;
};
const getAllCategories = (): string[] => {
  const categories = Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.category)));
  return categories;
};
const createTabs = (): string[] => {
  const categories = getAllCategories();
  // Remove special tabs from categories to avoid duplicates
  const specialTabs = ["Ecommerce & Retail", "Education & Learning", "Finance & Fintech"];
  const filteredCategories = categories.filter(cat => !specialTabs.includes(cat));
  // Create tabs: "All" first, then special tabs in order, then other categories
  const tabs = ["All", "Ecommerce & Retail", "Education & Learning", "Finance & Fintech", ...filteredCategories.slice(0, 8)];
  return tabs;
};
const TABS = createTabs();
const VISIBLE_TABS = 10;
const ALL_TAB_LIMIT = 38;
const CATEGORY_TAB_LIMIT = 38;
export function NewPortfolio({ limit }: NewPortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [sliderOffset, setSliderOffset] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const getFilteredItems = (): PortfolioItem[] => {
    let filtered: PortfolioItem[];
    if (activeTab === "All") {
      filtered = PORTFOLIO_ITEMS;
    } else {
      filtered = PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);
    }
    const tabLimit = activeTab === "All" ? ALL_TAB_LIMIT : CATEGORY_TAB_LIMIT;
    return filtered.slice(0, tabLimit);
  };
  const itemsToShow = getFilteredItems();
  const maxOffset = Math.max(0, TABS.length - VISIBLE_TABS);
  const handlePrev = () => {
    setSliderOffset((prev) => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setSliderOffset((prev) => Math.min(maxOffset, prev + 1));
  };
  useEffect(() => {
    const activeIndex = TABS.indexOf(activeTab);
    if (activeIndex !== -1) {
      const visibleStart = sliderOffset;
      const visibleEnd = sliderOffset + VISIBLE_TABS - 1;  
      if (activeIndex < visibleStart) {
        setSliderOffset(activeIndex);
      } else if (activeIndex > visibleEnd) {
        setSliderOffset(Math.max(0, activeIndex - VISIBLE_TABS + 1));
      }
    }
  }, [activeTab]);
  const handleCardClick = (item: PortfolioItem) => setSelectedImage(item);
  const handleClose = () => setSelectedImage(null);
  const canScrollPrev = sliderOffset > 0;
  const canScrollNext = sliderOffset < maxOffset;
  const translateX = -(sliderOffset * (100 / VISIBLE_TABS));
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
        <FadeIn className="mb-12">
          <div className="relative flex items-center">
            {canScrollPrev && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous tabs"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            <div
              ref={tabsContainerRef}
              className="overflow-hidden flex-1 mx-12 relative"
            >
              {/* Left Fade Gradient - appears when can scroll left */}
              {canScrollPrev && (
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
              )}
              
              {/* Right Fade Gradient - appears when can scroll right */}
              {canScrollNext && (
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
              )}

              <motion.div
                className="flex gap-2 relative z-0"
                animate={{
                  x: `${translateX}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}  
              >
                {TABS.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "px-6 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      )}    
                    >
                      {tab}
                    </button>
                  );
                })}
              </motion.div>
            </div>
            {canScrollNext && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next tabs"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </FadeIn>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
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
        </motion.div>
        </AnimatePresence>
      </div>
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
