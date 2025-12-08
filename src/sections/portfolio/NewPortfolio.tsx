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
    title: "Xefag",
    category: "Ecommerce & Retail",
    description:
      "Healthcare technology company needed HIPAA-compliant website with patient portal integration.",
    result: "+45% reduction in support calls",
    image: "/assets/images/portfolio/ecomerce-retail/1.webp",
  },
  {
    id: 2,
    title: "VIBEX MG 3",
    category: "Ecommerce & Retail",
    description:
      "VIBEX needed a professional landing page showcasing the MG 3 innovative massager, emphasizing tension relief and comfort.",
    result: "+55% average session time",
    image: "/assets/images/portfolio/ecomerce-retail/2.webp",
  },
  {
    id: 3,
    title: "BULL Power Bank",
    category: "Ecommerce & Retail",
    description:
      "BULL needed a premium product page design showcasing their 90000mAh Power Bank, highlighting its high capacity and 3-in-1 charging capability.",
    result: "+68% increase in pre-orders",
    image: "/assets/images/portfolio/ecomerce-retail/3.webp",
  },
  {
    id: 4,
    title: "SOLÉNE",
    category: "Ecommerce & Retail",
    description:
      "SOLÉNE needed a high-end, dynamic fashion e-commerce site emphasizing self-expression and promoting trend-forward pieces daily.",
    result: "+180% growth in organic traffic",
    image: "/assets/images/portfolio/ecomerce-retail/4.webp",
  },
  {
    id: 5,
    title: "Nitro",
    category: "Ecommerce & Retail",
    description:
      "Nitro needed a sleek dark-themed e-commerce site for their cool drinks, showcasing key features like nitrogen infusion and variety of flavors.",
    result: "+27% conversion rate on mobile",
    image: "/assets/images/portfolio/ecomerce-retail/5.webp",
  },
  {
    id: 6,
    title: "TEKRON Chair",
    category: "Ecommerce & Retail",
    description:
      "TEKRON required a bold, modern landing page for their Aluminum Folding Chair, emphasizing its experience, portability, and unique design features.",
    result: "+92% increase in brand awareness",
    image: "/assets/images/portfolio/ecomerce-retail/6.webp",
  },
  {
    id: 7,
    title: "CHIC MODE",
    category: "Ecommerce & Retail",
    description:
      "CHIC MODE needed an edgy website where fashion meets functional eyewear, focusing on a curated collection with superior quality and UV protection.",
    result: "+70% improvement in customer retention",
    image: "/assets/images/portfolio/ecomerce-retail/7.webp",
  },
  {
    id: 8,
    title: "Productivity Extender",
    category: "Ecommerce & Retail",
    description:
      "The client needed a minimalist, high-impact landing page to launch an essential companion device for extending Apple Watch battery life.",
    result: "$1.2M raised in initial funding",
    image: "/assets/images/portfolio/ecomerce-retail/8.webp",
  },
  {
    id: 9,
    title: "ORVÉLIA",
    category: "Ecommerce & Retail",
    description:
      "ORVÉLIA required a sophisticated skincare site showcasing their future formula, emphasizing radical transparency and advanced, clean ingredients.",
    result: "+85% jump in average order value",
    image: "/assets/images/portfolio/ecomerce-retail/9.webp",
  },
  {
    id: 10,
    title: "Audira Q20",
    category: "Ecommerce & Retail",
    description:
      "Audira required an immersive product page for their Q20 Hybrid ANC Headphones, highlighting pure audio delivery and deep, redefined comfort.",
    result: "+115% boost in average retail rating",
    image: "/assets/images/portfolio/ecomerce-retail/10.webp",
  },
  {
  id: 11,
    title: "Art Course",
    category: "Education & Learning",
    description:
      "The project involved creating an interactive platform to help users learn, explore, and test their knowledge of art through quizzes and modules.",
    result: "9/10 average user satisfaction rating",
    image: "/assets/images/portfolio/education-learning/1.webp",
  },
  {
    id: 12,
    title: "LEARNME",
    category: "Education & Learning",
    description:
      "LEARNME required a futuristic e-learning platform to elevate management skills with cutting-edge courses and comprehensive training modules.",
    result: "1.2K total number of users completed the training",
    image: "/assets/images/portfolio/education-learning/2.webp",
  },
  {
    id: 13,
    title: "eduwerks",
    category: "Education & Learning",
    description:
      "eduwerks needed a dynamic learning platform focused on unlocking the future of education with abstract visuals and clear pricing structures.",
    result: "98% completion rate for premium courses",
    image: "/assets/images/portfolio/education-learning/3.webp",
  },
  {
    id: 14,
    title: "D.Flow UIUX Course",
    category: "Education & Learning",
    description:
      "D.Flow required a compelling landing page to market their live class for aspiring UIUX Designers, emphasizing creativity and skill development.",
    result: "+15% year-over-year revenue growth",
    image: "/assets/images/portfolio/education-learning/4.webp",
  },
  {
    id: 15,
    title: "SAIA",
    category: "Education & Learning",
    description:
      "SAIA required a compelling community platform to turn medical internships into a solidarity journey for intern doctors and students in France.",
    result: "9,500 total community members joined",
    image: "/assets/images/portfolio/education-learning/5.webp",
  },
  {
    id: 16,
    title: "EX Course",
    category: "Education & Learning",
    description:
      "EX Course needed a modern, engaging e-learning platform emphasizing proven success and offering comprehensive instruction across design fields.",
    result: "92% of students secured a job after graduation",
    image: "/assets/images/portfolio/education-learning/6.webp",
  },
  {
    id: 17,
    title: "Edunex",
    category: "Education & Learning",
    description:
      "Edunex needed a modern e-learning platform focused on bridging the knowledge gap by connecting students with industry professionals and expert instructors.",
    result: "+140K total students enrolled",
    image: "/assets/images/portfolio/education-learning/7.webp",
  },
  {
    id: 18,
    title: "EduCore",
    category: "Education & Learning",
    description:
      "EduCore needed a sleek, dark-themed landing page to help users launch and market their courses with compelling visuals and pricing plans.",
    result: "+7.5K courses launched within the first year",
    image: "/assets/images/portfolio/education-learning/8.webp",
  },
  {
      id: 19,
    title: "Modular Education Platform",
    category: "Education & Learning",
    description:
      "The project involved designing a fully modular online learning environment, utilizing bright, distinct cards to categorize courses and highlight key metrics and features.",
    result: "$15M company delta valuation achieved",
    image: "/assets/images/portfolio/education-learning/9.webp",
  },
  {
    id: 20,
    title: "TUTOR Platform",
    category: "Education & Learning",
    description:
      "The project involved designing an engaging and personalized tutoring platform connecting students with expert instructors across a variety of academic subjects.",
    result: "90% student satisfaction in exam preparation",
    image: "/assets/images/portfolio/education-learning/10.webp",
  },
  {
    id: 21,
    title: "The Modern Way To Live",
    category: "Finance & Fintech",
    description:
      "The client needed a sharp, dark-themed finance platform that made managing money easily and offering innovative features like a referral bonus and easy access.",
    result: "$50 referral bonus distributed",
    image: "/assets/images/portfolio/finance-fintech/1.webp",
  },
  {
      id: 22,
    title: "PsBank FaceCards",
    category: "Finance & Fintech",
    description:
      "PsBank needed a dark-mode landing page to promote their FaceCards feature, allowing users to create personalized bank cards based on their facial features.",
    result: "+18% increase in new customer acquisition",
    image: "/assets/images/portfolio/finance-fintech/2.webp",
  },
  {
        id: 23,
    title: "CashPilot",
    category: "Finance & Fintech",
    description:
      "The project involved designing a financial planning app that integrates personal financial data to project affordability and help users manage long-term goals.",
    result: "4.8/5 average rating in the App Store",
    image: "/assets/images/portfolio/finance-fintech/3.webp",
  },
  {
    id: 24,
    title: "Bank.io",
    category: "Finance & Fintech",
    description:
      "Bank.io needed a vibrant banking website showcasing its full-service approach, highlighting features like credit card rewards and easy savings accounts.",
    result: "$2.5M growth in square checking accounts",
    image: "/assets/images/portfolio/finance-fintech/4.webp",
  },
  {
    id: 25,
    title: "Cryptic",
    category: "Finance & Fintech",
    description:
      "Cryptic needed a dark-themed platform to revolutionize transactions with secure blockchain solutions, empowering seamless crypto-powered virtual cards and trading.",
    result: "+210% growth in daily active users",
    image: "/assets/images/portfolio/finance-fintech/5.webp",
  },
  {
    id: 26,
    title: "HealthAI Dashboard",
    category: "Finance & Fintech",
    description:
      "The project involved designing a sophisticated health dashboard to visualize user vitals, track fitness goals, and provide personalized insights for proactive well-being.",
    result: "+30% improvement in user goal achievement",
    image: "/assets/images/portfolio/finance-fintech/6.webp",
  },
  {
    id: 27,
    title: "Next Era of Digital Finance",
    category: "Finance & Fintech",
    description:
      "The client needed a sophisticated DeFi platform to redefine digital finance, offering secure blockchain interactions and seamless wallet management for modern users.",
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

   {
    id: 31,
    title: "MediCare Solutions",
    category: "Food & Beverage",
    description:
      "Healthcare technology company needed HIPAA-compliant website with patient portal integration. Designed secure, accessible platform with clear navigation.",
    result: "+312% signups",
    image: "/assets/images/portfolio/food-beverage/1.webp",
  },
  {
    id: 32,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/2.webp",
  },
  {
    id: 33,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/3.webp",
  },
  {
    id: 34,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/4.webp",
  },
  {
    id: 35,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/5.webp",
  },
  {
    id: 36,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/6.webp",
  },
  {
    id: 37,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/7.webp",
  },
  {
    id: 38,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/8.webp",
  },
  {
    id: 39,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/9.webp",
  },
  {
    id: 40,
    title: "EduTech Enterprise",
    category: "Food & Beverage",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/food-beverage/10.webp",
  },
   {
    id: 41,
    title: "MediCare Solutions",
    category: "Green & Renewable Energy",
    description:
      "Healthcare technology company needed HIPAA-compliant website with patient portal integration. Designed secure, accessible platform with clear navigation.",
    result: "+312% signups",
    image: "/assets/images/portfolio/green-renewable-energy/1.webp",
  },
  {
    id: 42,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/2.webp",
  },
  {
    id: 43,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/3.webp",
  },
  {
    id: 44,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/4.webp",
  },
  {
    id: 45,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/5.webp",
  },
  {
    id: 46,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/6.webp",
  },
  {
    id: 47,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/7.webp",
  },
  {
    id: 48,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/8.webp",
  },
  {
    id: 49,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/9.webp",
  },
  {
    id: 50,
    title: "EduTech Enterprise",
    category: "Green & Renewable Energy",
    description:
      "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
    result: "+278% demos",
    image: "/assets/images/portfolio/green-renewable-energy/10.webp",
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
