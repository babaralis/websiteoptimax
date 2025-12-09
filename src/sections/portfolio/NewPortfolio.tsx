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
  imageMockupName: string;
};
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Commurz",
    category: "Ecommerce & Retail",
    description:
      "E-commerce platform needed modern website design to boost sales and improve user experience.",
    result: "+45% increase in online sales",
    image: "/assets/images/portfolio/ecomerce-retail/1.webp",
    imageMockupName: "Commurz",
  },
  {
    id: 2,
    title: "Amble Sheep",
    category: "Ecommerce & Retail",
    description:
      "Coffee brand needed attractive website to showcase products and increase online sales.",
    result: "+62% growth in average order value",
    image: "/assets/images/portfolio/ecomerce-retail/2.webp",
    imageMockupName: "Amble Sheep",
  },
  {
    id: 3,
    title: "Zare",
    category: "Ecommerce & Retail",
    description:
      "Retail company needed professional online store to expand market reach and increase conversions.",
    result: "+78% increase in customer engagement",
    image: "/assets/images/portfolio/ecomerce-retail/3.webp",
    imageMockupName: "mockup-03.webp",
  },
  {
    id: 4,
    title: "Enerloc",
    category: "Ecommerce & Retail",
    description:
      "Electric toothbrush brand needed modern website to showcase products and boost online sales.",
    result: "+85% improvement in mobile conversions",
    image: "/assets/images/portfolio/ecomerce-retail/4.webp",
    imageMockupName: "mockup-04.webp",
  },
  {
    id: 5,
    title: "Dripora",
    category: "Ecommerce & Retail",
    description:
      "Fashion e-commerce needed sleek website design to enhance brand image and boost sales.",
    result: "+52% increase in repeat customers",
    image: "/assets/images/portfolio/ecomerce-retail/5.webp",
    imageMockupName: "mockup-05.webp",
  },
  {
    id: 6,
    title: "Vera",
    category: "Ecommerce & Retail",
    description:
      "Beauty brand required modern e-commerce platform to showcase products and improve user experience.",
    result: "+71% growth in monthly revenue",
    image: "/assets/images/portfolio/ecomerce-retail/6.webp",
    imageMockupName: "mockup-06.webp",
  },
  {
  id: 11,
    title: "eCoach",
    category: "Education & Learning",
    description:
      "E-learning platform needed interactive website to deliver courses and enhance student learning experience.",
    result: "+89% increase in course enrollments",
    image: "/assets/images/portfolio/education-learning/1.webp",
    imageMockupName: "mockup-07.webp",
  },
  {
    id: 12,
    title: "Moondu",
    category: "Education & Learning",
    description:
      "Online education platform required modern design to attract learners and improve course completion rates.",
    result: "+76% growth in active users",
    image: "/assets/images/portfolio/education-learning/2.webp",
    imageMockupName: "mockup-08.webp",
  },
  {
    id: 13,
    title: "Monac",
    category: "Education & Learning",
    description:
      "Educational institution needed professional website to showcase programs and increase student registrations.",
    result: "+94% improvement in student engagement",
    image: "/assets/images/portfolio/education-learning/3.webp",
    imageMockupName: "mockup-09.webp",
  },
  {
    id: 14,
    title: "Omekaa",
    category: "Education & Learning",
    description:
      "Training platform required engaging website design to promote courses and boost enrollment numbers.",
    result: "+67% increase in course signups",
    image: "/assets/images/portfolio/education-learning/4.webp",
    imageMockupName: "mockup-10.webp",
  },
  {
    id: 15,
    title: "Talento",
    category: "Education & Learning",
    description:
      "Learning management system needed user-friendly interface to improve accessibility and student satisfaction.",
    result: "+83% growth in platform usage",
    image: "/assets/images/portfolio/education-learning/5.webp",
    imageMockupName: "mockup-11.webp",
  },
  {
    id: 16,
    title: "Educaa",
    category: "Education & Learning",
    description:
      "Educational technology platform required modern website to showcase features and attract new users.",
    result: "+91% increase in user retention",
    image: "/assets/images/portfolio/education-learning/6.webp",
    imageMockupName: "mockup-12.webp",
  },

   {
    id: 31,
    title: "Pour",
    category: "Food & Beverage",
    description:
      "Beverage company needed attractive website design to showcase products and increase online orders.",
    result: "+56% increase in online sales",
    image: "/assets/images/portfolio/food-beverage/1.webp",
    imageMockupName: "mockup-13.webp",
  },
  {
    id: 32,
    title: "Penny Juice",
    category: "Food & Beverage",
    description:
      "Juice brand required modern e-commerce website to display products and boost customer engagement.",
    result: "+73% growth in monthly orders",
    image: "/assets/images/portfolio/food-beverage/2.webp",
    imageMockupName: "mockup-14.webp",
  },
  {
    id: 33,
    title: "Coffee Time",
    category: "Food & Beverage",
    description:
      "Coffee shop needed professional website to promote menu items and attract more customers.",
    result: "+64% increase in foot traffic",
    image: "/assets/images/portfolio/food-beverage/3.webp",
    imageMockupName: "mockup-15.webp",
  },
  {
    id: 34,
    title: "P.TRES",
    category: "Food & Beverage",
    description:
      "Coffee brand needed elegant website design to showcase products and boost sales.",
    result: "+81% growth in table bookings",
    image: "/assets/images/portfolio/food-beverage/4.webp",
    imageMockupName: "mockup-16.webp",
  },
  {
    id: 35,
    title: "Altitude",
    category: "Food & Beverage",
    description:
      "Coffee and tea brand needed modern website to showcase products and boost sales.",
    result: "+69% increase in repeat orders",
    image: "/assets/images/portfolio/food-beverage/5.webp",
    imageMockupName: "mockup-17.webp",
  },
  {
    id: 36,
    title: "Fizzon",
    category: "Food & Beverage",
    description:
      "Beverage brand required dynamic website to highlight products and drive customer conversions.",
    result: "+87% improvement in brand awareness",
    image: "/assets/images/portfolio/food-beverage/6.webp",
    imageMockupName: "mockup-18.webp",
  },
  // {
  //   id: 37,
  //   title: "EduTech Enterprise",
  //   category: "Food & Beverage",
  //   description:
  //     "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
  //   result: "+278% demos",
  //   image: "/assets/images/portfolio/food-beverage/7.webp",
  // },
  // {
  //   id: 38,
  //   title: "EduTech Enterprise",
  //   category: "Food & Beverage",
  //   description:
  //     "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
  //   result: "+278% demos",
  //   image: "/assets/images/portfolio/food-beverage/8.webp",
  // },
  // {
  //   id: 39,
  //   title: "EduTech Enterprise",
  //   category: "Food & Beverage",
  //   description:
  //     "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
  //   result: "+278% demos",
  //   image: "/assets/images/portfolio/food-beverage/9.webp",
  // },
  // {
  //   id: 40,
  //   title: "EduTech Enterprise",
  //   category: "Food & Beverage",
  //   description:
  //     "Educational technology platform wanted to showcase learning management system to institutions. Created interactive demos and comprehensive feature pages.",
  //   result: "+278% demos",
  //   image: "/assets/images/portfolio/food-beverage/10.webp",
  // },
   {
    id: 41,
    title: "Sendrim",
    category: "Logistics & Mobility",
    description:
      "Logistics company needed efficient website to manage shipments and improve customer service.",
    result: "+72% increase in shipment tracking",
    image: "/assets/images/portfolio/logistics-mobility/1.webp",
    imageMockupName: "mockup-19.webp",
  },
  {
    id: 42,
    title: "Logistix",
    category: "Logistics & Mobility",
    description:
      "Transportation service required modern platform to streamline operations and enhance user experience.",
    result: "+59% growth in service bookings",
    image: "/assets/images/portfolio/logistics-mobility/2.webp",
    imageMockupName: "mockup-20.webp",
  },
  {
    id: 43,
    title: "Eazy Stock",
    category: "Logistics & Mobility",
    description:
      "Warehouse management needed professional website to showcase services and attract new clients.",
    result: "+84% increase in client inquiries",
    image: "/assets/images/portfolio/logistics-mobility/3.webp",
    imageMockupName: "mockup-21.webp",
  },
  {
    id: 44,
    title: "Abivin",
    category: "Logistics & Mobility",
    description:
      "Supply chain platform required user-friendly design to improve efficiency and customer satisfaction.",
    result: "+66% improvement in delivery times",
    image: "/assets/images/portfolio/logistics-mobility/4.webp",
    imageMockupName: "mockup-22.webp",
  },
  {
    id: 45,
    title: "Uthao",
    category: "Logistics & Mobility",
    description:
      "Moving service needed attractive website to showcase offerings and increase booking requests.",
    result: "+77% growth in online bookings",
    image: "/assets/images/portfolio/logistics-mobility/5.webp",
    imageMockupName: "mockup-23.webp",
  },
  {
    id: 46,
    title: "Moving",
    category: "Logistics & Mobility",
    description:
      "Transportation company required modern website design to promote services and boost sales.",
    result: "+63% increase in customer retention",
    image: "/assets/images/portfolio/logistics-mobility/6.webp",
    imageMockupName: "mockup-24.webp",
    },

  {
    id: 51,
    title: "K.WILLIAM",
    category: "Law",
    description:
      "Law firm needed professional website establishing trust for growing businesses.",
    result: "+68% increase in consultation bookings",
    image: "/assets/images/portfolio/law/1.webp",
    imageMockupName: "mockup-25.webp",
  },
  {
    id: 52,
    title: "TrustWell",
    category: "Law",
    description:
      "Legal firm needed professional website to build credibility and attract potential clients.",
    result: "+74% increase in client consultations",
    image: "/assets/images/portfolio/law/2.webp",
    imageMockupName: "mockup-26.webp",
  },
  {
    id: 53,
    title: "USLAW",
    category: "Law",
    description:
      "Law practice required modern website design to showcase expertise and increase visibility.",
    result: "+61% growth in website traffic",
    image: "/assets/images/portfolio/law/3.webp",
    imageMockupName: "mockup-27.webp",
  },
  {
    id: 54,
    title: "Valuelaw.ca",
    category: "Law",
    description:
      "Legal services needed user-friendly website to provide information and generate leads.",
    result: "+79% increase in lead generation",
    image: "/assets/images/portfolio/law/4.webp",
    imageMockupName: "mockup-28.webp",
  },
  {
    id: 55,
    title: "E-Dikigoros",
    category: "Law",
    description:
      "Law firm required elegant website to establish authority and improve client engagement.",
    result: "+86% improvement in online inquiries",
    image: "/assets/images/portfolio/law/5.webp",
    imageMockupName: "mockup-29.webp",
  },
  {
    id: 56,
    title: "LawGuru",
    category: "Law",
    description:
      "Legal platform needed professional design to showcase services and build trust.",
    result: "+93% increase in case inquiries",
    image: "/assets/images/portfolio/law/6.webp",
    imageMockupName: "mockup-30.webp",
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
  const specialTabs = ["Ecommerce & Retail", "Education & Learning", ];
  const filteredCategories = categories.filter(cat => !specialTabs.includes(cat));
  // Create tabs: "All" first, then special tabs in order, then other categories
  const tabs = ["All", "Ecommerce & Retail", "Education & Learning", ...filteredCategories.slice(0, 8)];
  return tabs;
};
const TABS = createTabs();
const VISIBLE_TABS = 6;
const ALL_TAB_LIMIT = 38;
const CATEGORY_TAB_LIMIT = 38;

// Helper function to get mockup and website image paths
const getImagePaths = (imagePath: string) => {
  // Extract category folder and number from path like "/assets/images/portfolio/ecomerce-retail/1.webp"
  const match = imagePath.match(/\/portfolio\/([^\/]+)\/(\d+)\.webp$/);
  if (!match) {
    // Fallback to original image if pattern doesn't match
    return { mockup: imagePath, website: imagePath };
  }
  
  const [, categoryFolder, number] = match;
  
  // Fix typo: ecomerce-retail -> ecommerce-retail
  const correctedCategory = categoryFolder === "ecomerce-retail" 
    ? "ecommerce-retail" 
    : categoryFolder;
  
  // Format number with leading zero (01, 02, etc.)
  const formattedNumber = number.padStart(2, "0");
  
  // Generate paths for mockup and website
  const mockupPath = `/assets/images/portfolio/${correctedCategory}/mockup-${formattedNumber}.webp`;
  const websitePath = `/assets/images/portfolio/${correctedCategory}/website-${formattedNumber}.webp`;
  
  return { mockup: mockupPath, website: websitePath };
};

// Helper function to get mockup image path for card display
const getMockupImagePath = (imagePath: string) => {
  const { mockup } = getImagePaths(imagePath);
  return mockup;
};

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
                className="flex gap-2 relative z-0 justify-center"
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
                    src={getMockupImagePath(project.image)}
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
                {/* Website Image */}
                <div className="relative flex-1 overflow-y-auto bg-muted flex gap-2 p-2 poppupImage">
                  {(() => {
                    const { website } = getImagePaths(selectedImage.image);
                    return (
                      <div className="relative w-full rounded-lg">
                    <Image
                          src={website}
                          alt={`${selectedImage.title} - Website`}
                          width={1200}
                          height={2000}
                          className="w-full h-auto object-cover rounded-lg"
                          sizes="100vw"
                      priority
                    />
                  </div>
                    );
                  })()}
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
