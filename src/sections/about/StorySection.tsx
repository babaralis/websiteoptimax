import { FadeIn } from "@/components/animations/FadeIn";
import { GridPattern, RadialGlow } from "@/components/graphics/GridPattern";

export function StorySection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <GridPattern variant="lines" className="opacity-20" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Born From Frustration With{" "}
              <span className="text-gradient">B2B Websites That Don't Sell</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We started Orbitline after watching too many B2B companies pour money into 
                beautiful websites that failed to generate a single qualified lead.
              </p>
              <p>
                The problem wasn't the design—it was the strategy. Most agencies focus on 
                making things look pretty. They don't understand complex B2B buyer journeys, 
                multiple stakeholders, or the content that enterprise buyers actually need.
              </p>
              <p>
                Every element we create is engineered to guide B2B buyers toward one goal: 
                becoming a qualified opportunity. No fluff, no vanity metrics—just results 
                you can measure in pipeline and revenue.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <RadialGlow color="mixed" position="center" intensity="medium" />
              <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                      150+
                    </div>
                    <p className="text-sm text-muted-foreground">B2B Projects Delivered</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                      $47M+
                    </div>
                    <p className="text-sm text-muted-foreground">Pipeline Generated</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                      3.4x
                    </div>
                    <p className="text-sm text-muted-foreground">Avg. Lead Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                      98%
                    </div>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
