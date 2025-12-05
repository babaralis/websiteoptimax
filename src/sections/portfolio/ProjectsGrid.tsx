import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";
import Image from "next/image";

const B2B_PROJECTS = [
  {
    title: "CloudSync Platform",
    category: "B2B SaaS",
    description: "Enterprise data integration platform needed to convert more free trial users to paid subscriptions.",
    result: "+340% trial-to-paid",
    image: "/assets/images/portfolio/1.jpg",
  },
  {
    title: "Meridian Consulting",
    category: "B2B Services",
    description: "Management consulting firm struggling to generate qualified leads from their outdated website.",
    result: "+$2.3M pipeline",
    image: "/assets/images/portfolio/2.jpg",
  },
  {
    title: "DataVault Pro",
    category: "Enterprise SaaS",
    description: "Data security company needed a website that could close deals without sales calls.",
    result: "68% shorter cycle",
    image: "/assets/images/portfolio/3.jpg",
  },
  {
    title: "ScaleOps Solutions",
    category: "B2B Tech",
    description: "DevOps platform wanted to position as market leader and increase enterprise demos.",
    result: "+187% demos",
    image: "/assets/images/portfolio/4.jpg",
  },
  {
    title: "TalentBridge HR",
    category: "HR SaaS",
    description: "HR software company needed to differentiate in a crowded market and attract mid-market buyers.",
    result: "+420% MQLs",
    image: "/assets/images/portfolio/5.jpg",
  },
  {
    title: "FinanceFlow",
    category: "FinTech B2B",
    description: "Financial services platform required compliance-focused design that still converted.",
    result: "+89% conversions",
    image: "/assets/images/portfolio/6.jpg",
  },
];

export function ProjectsGrid() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GridPattern variant="lines" className="opacity-20" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">B2B Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project represents a transformation in how B2B companies attract and convert buyers.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {B2B_PROJECTS.map((project) => (
            <FadeIn key={project.title}>
              <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="relative aspect-[4/3] min-h-[400px] bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full"
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
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-success font-semibold">
                    <TrendingUp className="h-4 w-4" />
                    <span>{project.result}</span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
