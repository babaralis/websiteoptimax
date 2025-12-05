import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";
import Image from "next/image";

// Import testimonial photos
import ceoMale1 from "@/assets/testimonials/ceo-male-1.jpg";
import marketingFemale1 from "@/assets/testimonials/marketing-female-1.jpg";
import vpMale1 from "@/assets/testimonials/vp-male-1.jpg";
import cooFemale1 from "@/assets/testimonials/coo-female-1.jpg";

const B2B_TESTIMONIALS = [
  {
    quote: "Website Optimax transformed our B2B website from a digital brochure into a pipeline machine. Our enterprise leads tripled in 90 days.",
    author: "Sarah Mitchell",
    role: "CMO, CloudSync Platform",
    rating: 5,
    metric: "+340% leads",
    image: marketingFemale1,
  },
  {
    quote: "Finally, an agency that understands B2B. They focused on our buyer journey, not just making things pretty.",
    author: "Michael Chen",
    role: "VP Marketing, DataVault Pro",
    rating: 5,
    metric: "$2.3M pipeline",
    image: ceoMale1,
  },
  {
    quote: "The ROI was undeniable. We made back our investment in the first month. Our sales team is closing more deals than ever.",
    author: "Jennifer Wu",
    role: "CEO, ScaleOps Solutions",
    rating: 5,
    metric: "14x ROI",
    image: cooFemale1,
  },
  {
    quote: "They rebuilt our entire SaaS funnel and our demo-to-close rate doubled. Worth every penny.",
    author: "David Park",
    role: "Founder, TalentBridge HR",
    rating: 5,
    metric: "+200% close rate",
    image: vpMale1,
  },
  {
    quote: "Our cost per qualified lead dropped by 60% while lead quality actually improved. That's rare in B2B.",
    author: "Marcus Johnson",
    role: "Marketing Director, FinanceFlow",
    rating: 5,
    metric: "-60% CPL",
    image: ceoMale1,
  },
  {
    quote: "Website Optimax gets B2B sales cycles. They built a site that educates and qualifies prospects before they even talk to sales.",
    author: "Amanda Foster",
    role: "VP Sales, Meridian Consulting",
    rating: 5,
    metric: "68% shorter cycle",
    image: marketingFemale1,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GridPattern variant="lines" className="opacity-20" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Real Reviews from{" "}
            <span className="gradient-text">B2B Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every testimonial represents a real B2B transformation. Real companies, real pipeline, real revenue.
          </p>
        </FadeIn>
        
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {B2B_TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={index}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  
                  <blockquote className="text-foreground mb-6 flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          sizes="48px"
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-success">{testimonial.metric}</span>
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
