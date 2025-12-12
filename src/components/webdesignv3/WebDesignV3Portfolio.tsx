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
  {
    id: 61,
    title: "PayFlow",
    category: "Finance & Fintech",
    description:
      "Payment processing platform needed modern website to showcase secure transaction solutions and increase merchant signups.",
    result: "+125% increase in merchant registrations",
    image: "/assets/images/portfolio/finance-fintech/1.webp",
    imageMockupName: "mockup-31.webp",
  },
  {
    id: 62,
    title: "CryptoWallet Pro",
    category: "Finance & Fintech",
    description:
      "Cryptocurrency wallet platform required secure and user-friendly website to build trust and attract investors.",
    result: "+98% growth in active users",
    image: "/assets/images/portfolio/finance-fintech/2.webp",
    imageMockupName: "mockup-32.webp",
  },
  {
    id: 63,
    title: "InvestSmart",
    category: "Finance & Fintech",
    description:
      "Investment platform needed professional website to showcase portfolio management tools and attract new investors.",
    result: "+156% increase in investment signups",
    image: "/assets/images/portfolio/finance-fintech/3.webp",
    imageMockupName: "mockup-33.webp",
  },
  {
    id: 64,
    title: "BankLink",
    category: "Finance & Fintech",
    description:
      "Digital banking solution required modern website to demonstrate seamless banking experience and increase customer acquisition.",
    result: "+87% improvement in customer onboarding",
    image: "/assets/images/portfolio/finance-fintech/4.webp",
    imageMockupName: "mockup-34.webp",
  },
  {
    id: 65,
    title: "LoanEase",
    category: "Finance & Fintech",
    description:
      "Loan management platform needed user-friendly website to simplify loan applications and increase conversions.",
    result: "+134% growth in loan applications",
    image: "/assets/images/portfolio/finance-fintech/5.webp",
    imageMockupName: "mockup-35.webp",
  },
  {
    id: 66,
    title: "WealthTracker",
    category: "Finance & Fintech",
    description:
      "Personal finance app required engaging website to showcase budgeting tools and attract new users.",
    result: "+112% increase in app downloads",
    image: "/assets/images/portfolio/finance-fintech/6.webp",
    imageMockupName: "mockup-36.webp",
  },
  {
    id: 71,
    title: "SolarMax Solutions",
    category: "Green & Renewable Energy",
    description:
      "Solar energy company needed modern website to showcase renewable energy solutions and increase customer inquiries.",
    result: "+145% increase in consultation bookings",
    image: "/assets/images/portfolio/green-renewable-energy/1.webp",
    imageMockupName: "mockup-37.webp",
  },
  {
    id: 72,
    title: "WindPower Pro",
    category: "Green & Renewable Energy",
    description:
      "Wind energy platform required professional website to demonstrate sustainable energy solutions and attract investors.",
    result: "+92% growth in investor inquiries",
    image: "/assets/images/portfolio/green-renewable-energy/2.webp",
    imageMockupName: "mockup-38.webp",
  },
  {
    id: 73,
    title: "EcoEnergy Hub",
    category: "Green & Renewable Energy",
    description:
      "Renewable energy marketplace needed engaging website to connect consumers with green energy providers.",
    result: "+178% increase in provider signups",
    image: "/assets/images/portfolio/green-renewable-energy/3.webp",
    imageMockupName: "mockup-39.webp",
  },
  {
    id: 74,
    title: "GreenTech Innovations",
    category: "Green & Renewable Energy",
    description:
      "Clean technology company required modern website to showcase innovative green solutions and increase visibility.",
    result: "+126% growth in partnership inquiries",
    image: "/assets/images/portfolio/green-renewable-energy/4.webp",
    imageMockupName: "mockup-40.webp",
  },
  {
    id: 75,
    title: "RenewableGrid",
    category: "Green & Renewable Energy",
    description:
      "Energy management platform needed user-friendly website to demonstrate smart grid solutions and attract utilities.",
    result: "+103% increase in utility partnerships",
    image: "/assets/images/portfolio/green-renewable-energy/5.webp",
    imageMockupName: "mockup-41.webp",
  },
  {
    id: 76,
    title: "EcoCharge",
    category: "Green & Renewable Energy",
    description:
      "Electric vehicle charging network required modern website to showcase charging infrastructure and increase station bookings.",
    result: "+167% growth in charging station usage",
    image: "/assets/images/portfolio/green-renewable-energy/6.webp",
    imageMockupName: "mockup-42.webp",
  },
  {
    id: 81,
    title: "HealthCare Plus",
    category: "Healthcare & Wellness",
    description:
      "Healthcare platform needed modern website to provide medical information and connect patients with healthcare providers.",
    result: "+138% increase in patient registrations",
    image: "/assets/images/portfolio/healthcare-wellness/1.webp",
    imageMockupName: "mockup-43.webp",
  },
  {
    id: 82,
    title: "WellnessHub",
    category: "Healthcare & Wellness",
    description:
      "Wellness platform required engaging website to showcase fitness programs and health coaching services.",
    result: "+115% growth in membership signups",
    image: "/assets/images/portfolio/healthcare-wellness/2.webp",
    imageMockupName: "mockup-44.webp",
  },
  {
    id: 83,
    title: "MediConnect",
    category: "Healthcare & Wellness",
    description:
      "Telemedicine platform needed user-friendly website to facilitate virtual consultations and improve patient access.",
    result: "+189% increase in virtual appointments",
    image: "/assets/images/portfolio/healthcare-wellness/3.webp",
    imageMockupName: "mockup-45.webp",
  },
  {
    id: 84,
    title: "FitLife App",
    category: "Healthcare & Wellness",
    description:
      "Fitness tracking app required modern website to showcase workout programs and attract health-conscious users.",
    result: "+142% growth in app subscriptions",
    image: "/assets/images/portfolio/healthcare-wellness/4.webp",
    imageMockupName: "mockup-46.webp",
  },
  {
    id: 85,
    title: "MentalWell",
    category: "Healthcare & Wellness",
    description:
      "Mental health platform needed professional website to provide therapy services and support resources.",
    result: "+156% increase in therapy bookings",
    image: "/assets/images/portfolio/healthcare-wellness/5.webp",
    imageMockupName: "mockup-47.webp",
  },
  {
    id: 86,
    title: "HealthTracker Pro",
    category: "Healthcare & Wellness",
    description:
      "Health monitoring platform required engaging website to showcase medical device integration and patient management tools.",
    result: "+128% growth in device activations",
    image: "/assets/images/portfolio/healthcare-wellness/6.webp",
    imageMockupName: "mockup-48.webp",
  },
  {
    id: 91,
    title: "PetCare Plus",
    category: "Pets",
    description:
      "Pet care platform needed modern website to connect pet owners with veterinarians and pet services.",
    result: "+134% increase in service bookings",
    image: "/assets/images/portfolio/pets/1.webp",
    imageMockupName: "mockup-49.webp",
  },
  {
    id: 92,
    title: "PawShop",
    category: "Pets",
    description:
      "Pet supplies e-commerce needed attractive website to showcase products and increase online sales.",
    result: "+167% growth in monthly revenue",
    image: "/assets/images/portfolio/pets/2.webp",
    imageMockupName: "mockup-50.webp",
  },
  {
    id: 93,
    title: "PetVet Online",
    category: "Pets",
    description:
      "Veterinary clinic required professional website to provide pet health information and schedule appointments.",
    result: "+145% increase in appointment bookings",
    image: "/assets/images/portfolio/pets/3.webp",
    imageMockupName: "mockup-51.webp",
  },
  {
    id: 94,
    title: "FurryFriends",
    category: "Pets",
    description:
      "Pet adoption platform needed engaging website to help pets find loving homes and increase adoption rates.",
    result: "+178% growth in successful adoptions",
    image: "/assets/images/portfolio/pets/4.webp",
    imageMockupName: "mockup-52.webp",
  },
  {
    id: 95,
    title: "DogWalk Pro",
    category: "Pets",
    description:
      "Pet walking service required modern website to connect pet owners with professional walkers and increase bookings.",
    result: "+156% increase in walker registrations",
    image: "/assets/images/portfolio/pets/5.webp",
    imageMockupName: "mockup-53.webp",
  },
  {
    id: 96,
    title: "PetGroom Studio",
    category: "Pets",
    description:
      "Pet grooming salon needed attractive website to showcase services and increase customer bookings.",
    result: "+123% growth in grooming appointments",
    image: "/assets/images/portfolio/pets/6.webp",
    imageMockupName: "mockup-54.webp",
  },
  {
    id: 101,
    title: "PropertyPro",
    category: "Real Estate",
    description:
      "Real estate platform needed modern website to showcase property listings and connect buyers with sellers.",
    result: "+189% increase in property inquiries",
    image: "/assets/images/portfolio/real-estate/1.webp",
    imageMockupName: "mockup-55.webp",
  },
  {
    id: 102,
    title: "HomeFinders",
    category: "Real Estate",
    description:
      "Property search platform required user-friendly website to help users find their dream homes and increase engagement.",
    result: "+167% growth in property views",
    image: "/assets/images/portfolio/real-estate/2.webp",
    imageMockupName: "mockup-56.webp",
  },
  {
    id: 103,
    title: "EstateHub",
    category: "Real Estate",
    description:
      "Real estate agency needed professional website to showcase listings and increase client consultations.",
    result: "+145% increase in consultation bookings",
    image: "/assets/images/portfolio/real-estate/3.webp",
    imageMockupName: "mockup-57.webp",
  },
  {
    id: 104,
    title: "RentEasy",
    category: "Real Estate",
    description:
      "Rental platform required modern website to connect tenants with landlords and streamline rental processes.",
    result: "+178% growth in rental applications",
    image: "/assets/images/portfolio/real-estate/4.webp",
    imageMockupName: "mockup-58.webp",
  },
  {
    id: 105,
    title: "LuxuryHomes",
    category: "Real Estate",
    description:
      "Luxury property marketplace needed elegant website to showcase high-end listings and attract affluent buyers.",
    result: "+156% increase in premium inquiries",
    image: "/assets/images/portfolio/real-estate/5.webp",
    imageMockupName: "mockup-59.webp",
  },
  {
    id: 106,
    title: "PropertyManager Pro",
    category: "Real Estate",
    description:
      "Property management platform required comprehensive website to help landlords manage properties and increase efficiency.",
    result: "+134% growth in property management signups",
    image: "/assets/images/portfolio/real-estate/6.webp",
    imageMockupName: "mockup-60.webp",
  },
];

type WebDesignV3PortfolioProps = {
  limit?: number;
};

const getAllCategories = (): string[] => {
  const categories = Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.category)));
  return categories;
};

const createTabs = (): string[] => {
  const categories = getAllCategories();
  const specialTabs = ["Ecommerce & Retail", "Education & Learning", "Finance & Fintech", "Green & Renewable Energy", "Healthcare & Wellness", "Pets", "Real Estate"];
  const filteredCategories = categories.filter(cat => !specialTabs.includes(cat));
  const tabs = ["All", "Ecommerce & Retail", "Education & Learning", "Finance & Fintech", "Green & Renewable Energy", "Healthcare & Wellness", "Pets", "Real Estate", ...filteredCategories.slice(0, 4)];
  return tabs;
};

const TABS = createTabs();
const VISIBLE_TABS = 6;
const ALL_TAB_LIMIT = 38;
const CATEGORY_TAB_LIMIT = 38;

const getImagePaths = (imagePath: string) => {
  const match = imagePath.match(/\/portfolio\/([^\/]+)\/(\d+)\.webp$/);
  if (!match) {
    return { mockup: imagePath, website: imagePath };
  }
  const [, categoryFolder, number] = match;
  const correctedCategory = categoryFolder === "ecomerce-retail" 
    ? "ecommerce-retail" 
    : categoryFolder;
  const formattedNumber = number.padStart(2, "0");
  const mockupPath = `/assets/images/portfolio/${correctedCategory}/mockup-${formattedNumber}.webp`;
  const websitePath = `/assets/images/portfolio/${correctedCategory}/website-${formattedNumber}.webp`;
  return { mockup: mockupPath, website: websitePath };
};

const getMockupImagePath = (imagePath: string) => {
  const { mockup } = getImagePaths(imagePath);
  return mockup;
};

export function WebDesignV3Portfolio({ limit }: WebDesignV3PortfolioProps) {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Ecommerce & Retail");
  const [sliderOffset, setSliderOffset] = useState(0);
  const [mobileSliderOffset, setMobileSliderOffset] = useState(0);
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
  const mobileMaxOffset = Math.max(0, TABS.length - 1);
  
  const handlePrev = () => {
    setSliderOffset((prev) => Math.max(0, prev - 1));
    setMobileSliderOffset((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setSliderOffset((prev) => Math.min(maxOffset, prev + 1));
    setMobileSliderOffset((prev) => Math.min(mobileMaxOffset, prev + 1));
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
      setMobileSliderOffset(activeIndex);
    }
  }, [activeTab]);
  
  const handleCardClick = (item: PortfolioItem) => setSelectedImage(item);
  const handleClose = () => setSelectedImage(null);
  const canScrollPrev = sliderOffset > 0;
  const canScrollNext = sliderOffset < maxOffset;
  const canScrollPrevMobile = mobileSliderOffset > 0;
  const canScrollNextMobile = mobileSliderOffset < mobileMaxOffset;
  const translateX = -(sliderOffset * (50 / VISIBLE_TABS));
  const mobileTranslateX = -(mobileSliderOffset * (100 / TABS.length));
  
  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <GridPattern variant="lines" className="opacity-20" />
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="section-heading text-foreground">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01E6DF] to-[#0149D1]">B2B Projects</span>
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
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background border border-[#01E6DF]/30 shadow-md items-center justify-center hover:bg-[#01E6DF]/10 transition-colors"
                aria-label="Previous tabs"
              >
                <ChevronLeft className="h-5 w-5 text-[#01E6DF]" />
              </button>
            )}
            {canScrollPrevMobile && (
              <button
                onClick={handlePrev}
                className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background border border-[#01E6DF]/30 shadow-md flex items-center justify-center hover:bg-[#01E6DF]/10 transition-colors"
                aria-label="Previous tabs"
              >
                <ChevronLeft className="h-4 w-4 text-[#01E6DF]" />
              </button>
            )}
            <div
              ref={tabsContainerRef}
              className="overflow-x-auto overflow-y-hidden flex-1 md:mx-12 mx-10 relative scrollbar-hide"
              style={{
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {canScrollPrev && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
              )}
              {canScrollNext && (
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
              )}
              <motion.div
                className="hidden md:flex gap-2 relative z-0"
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
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01E6DF] focus-visible:ring-offset-2",
                        isActive
                          ? "bg-[#01E6DF] text-[#0149D1] shadow-lg shadow-[#01E6DF]/20"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      )}    
                    >
                      {tab}
                    </button>
                  );
                })}
              </motion.div>
              <div className="md:hidden overflow-hidden relative z-0">
                <motion.div
                  className="flex relative z-0"
                  animate={{
                    x: `${mobileTranslateX}%`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    width: `${TABS.length * 100}%`,
                  }}
                >
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        data-tab={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01E6DF] focus-visible:ring-offset-2",
                          isActive
                            ? "bg-[#01E6DF] text-[#0149D1] shadow-lg shadow-[#01E6DF]/20"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                        )}
                        style={{
                          width: `${100 / TABS.length}%`,
                        }}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </motion.div>
              </div>
            </div>
            {canScrollNext && (
              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background border border-[#01E6DF]/30 shadow-md items-center justify-center hover:bg-[#01E6DF]/10 transition-colors"
                aria-label="Next tabs"
              >
                <ChevronRight className="h-5 w-5 text-[#01E6DF]" />
              </button>
            )}
            {canScrollNextMobile && (
              <button
                onClick={handleNext}
                className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-background border border-[#01E6DF]/30 shadow-md flex items-center justify-center hover:bg-[#01E6DF]/10 transition-colors"
                aria-label="Next tabs"
              >
                <ChevronRight className="h-4 w-4 text-[#01E6DF]" />
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
                      "hover:-translate-y-2 hover:shadow-xl hover:shadow-[#01E6DF]/10",
                      "border-border/50 hover:border-[#01E6DF]/30",
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
                        <div className="w-10 h-10 rounded-full bg-[#01E6DF] flex items-center justify-center">
                          <ArrowUpRight className="h-5 w-5 text-[#0149D1]" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#01E6DF] transition-colors">
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
                <div className="border-t border-[#01E6DF]/20 bg-background p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-[#01E6DF]/10 text-[#01E6DF] border-[#01E6DF]/20">{selectedImage.category}</Badge>
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
