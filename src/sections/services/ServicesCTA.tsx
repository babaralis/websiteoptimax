import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

const GUARANTEES = [
  { icon: Shield, text: "90-Day Conversion Guarantee" },
  { icon: Clock, text: "On-Time Delivery Promise" },
  { icon: Sparkles, text: "Satisfaction Guaranteed" },
];

export function ServicesCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      
      <div className="container relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading text-foreground ...1">
            Ready to Stop Losing Customers to a{" "}
            <span className="gradient-text">Bad Website?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every day you wait is another day of lost revenue. Let's fix that—together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">
                Get Your Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {GUARANTEES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
