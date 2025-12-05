import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { RadialGlow } from "@/components/graphics/GridPattern";

const B2B_OBJECTIONS = [
  {
    objection: "We've worked with agencies before and they didn't understand B2B.",
    result: "Unlike generalist agencies, we exclusively serve B2B and SaaS. We understand complex sales cycles, multiple stakeholders, and the need for content that educates while it converts.",
  },
  {
    objection: "Our website already looks professional.",
    result: "Looking professional and generating pipeline are different things. We've helped dozens of 'nice-looking' B2B sites 3x their conversions through strategic optimization.",
  },
  {
    objection: "Our sales cycles are too long for quick ROI.",
    result: "That's exactly why your website matters more. B2B buyers do 70% of their research online before talking to sales. A better website shortens cycles—our average client sees 68% reduction.",
  },
  {
    objection: "We don't have budget for a full rebuild.",
    result: "We offer optimization programs starting at a fraction of a rebuild cost. One client saw 47% lift in 30 days from targeted improvements. Sometimes you don't need a new house—just better windows.",
  },
];

export function ObjectionsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <RadialGlow color="secondary" position="top-right" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="section-heading text-foreground ...">
            Common B2B Concerns,{" "}
            <span className="gradient-text">Real Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand B2B decision-making. Here's how we address the most common concerns.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {B2B_OBJECTIONS.map((item, index) => (
            <FadeIn key={index}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-3 italic">
                        &ldquo;{item.objection}&rdquo;
                      </p>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground">{item.result}</p>
                      </div>
                    </div>
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
