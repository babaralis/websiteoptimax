import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { RadialGlow } from "@/components/graphics/GridPattern";
import { CountUp } from "@/components/animations/CountUp";
import { parseStatValue } from "@/lib/utils";

const B2B_STATS = [
  { value: "340%", label: "Avg. Lead Increase" },
  { value: "$47M", label: "Pipeline Generated" },
  { value: "127+", label: "B2B Clients Served" },
  { value: "68%", label: "Shorter Sales Cycles" },
];

export function ResultsMetrics() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <RadialGlow color="secondary" position="top" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            The B2B Numbers <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Across all our B2B and SaaS projects, here's the impact we've delivered.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {B2B_STATS.map((stat) => {
            const parsed = parseStatValue(stat.value);
            return (
              <FadeIn key={stat.label}>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-transparent border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                    <CountUp
                      value={parsed.value}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                      decimals={parsed.decimals}
                      duration={2.5}
                    />
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </FadeIn>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}