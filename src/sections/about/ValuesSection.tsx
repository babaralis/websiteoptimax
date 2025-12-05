import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Target, Zap, Shield, TrendingUp } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";

const values = [
  {
    icon: Target,
    title: "Pipeline Over Pixels",
    description: "We don't measure success in design awards—we measure it in MQLs, SQLs, and closed revenue. If it doesn't impact your pipeline, we don't do it.",
  },
  {
    icon: Zap,
    title: "Speed Without Sacrifice",
    description: "B2B buyers are impatient. We build lightning-fast experiences that load in under 2 seconds without compromising on enterprise-grade functionality.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No jargon, no hidden fees, no surprises. You'll always know exactly what we're doing, why we're doing it, and how it impacts your numbers.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "Launch is just the beginning. We obsessively test, iterate, and optimize to keep your conversion rates climbing quarter after quarter.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <GridPattern variant="dots" className="opacity-20" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
            Our Principles
          </span>
          <h2 className="section-heading text-foreground ...2">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These aren't buzzwords on a wall—they're the standards we hold 
            ourselves to on every single B2B project.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value) => (
            <StaggerItem key={value.title} className="h-full">
              <div className="flex gap-5 p-6 bg-card/50 border border-border rounded-xl hover:border-primary/30 transition-all duration-300 backdrop-blur-sm h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
