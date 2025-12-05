import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Import testimonial photos
import ceoMale1 from "@/assets/testimonials/ceo-male-1.jpg";
import marketingFemale1 from "@/assets/testimonials/marketing-female-1.jpg";
import vpMale1 from "@/assets/testimonials/vp-male-1.jpg";
import cooFemale1 from "@/assets/testimonials/coo-female-1.jpg";

const PRICING_TESTIMONIALS = [
  {
    quote: "Website Optimax transformed our B2B website from a digital brochure into a pipeline machine. Our enterprise leads tripled in 90 days.",
    author: "Sarah Mitchell",
    role: "CMO, CloudSync Platform",
    rating: 5,
    metric: "+340% leads",
    image: marketingFemale1,
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
];

export function PricingTestimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/30">
      <div className="container relative">
        <FadeIn className="text-center mb-12">
          <h2 className="section-heading text-foreground ...2">
            Trusted by{" "}
            <span className="gradient-text-glow">B2B Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about their investment
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {PRICING_TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col h-full min-h-[17.5rem]">
                      <Quote className="h-8 w-8 text-primary/30 mb-4 flex-shrink-0" />
                      
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
