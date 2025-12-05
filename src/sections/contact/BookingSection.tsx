import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const BOOKING_BENEFITS = [
  {
    icon: Clock,
    title: "30-Minute B2B Strategy Session",
    description: "Focused conversation about your pipeline goals and challenges",
  },
  {
    icon: Video,
    title: "Live Website Audit",
    description: "We'll review your current site and identify conversion quick wins",
  },
  {
    icon: Calendar,
    title: "Custom Action Plan",
    description: "Walk away with concrete next steps to improve your B2B pipeline",
  },
];

export function BookingSection() {
  return (
    <FadeIn delay={0.2}>
      <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/20">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Prefer to Talk?</h3>
              <p className="text-sm text-muted-foreground">Book a free B2B strategy call</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            {BOOKING_BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-secondary/20 mt-0.5">
                  <benefit.icon className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{benefit.title}</p>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="hero" size="lg" className="w-full" asChild>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book Your Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            No sales pitch. Just actionable B2B advice.
          </p>
        </CardContent>
      </Card>
      
      {/* Contact Info */}
      <Card className="border-border/50 bg-card/30 mt-6 backdrop-blur-sm">
        <CardContent className="p-6">
          <h4 className="font-display font-semibold mb-4">Other Ways to Reach Us</h4>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Email:</span>{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Response Time:</span>{" "}
              Within 24 hours
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Location:</span>{" "}
              Remote-first, serving B2B clients worldwide
            </p>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
