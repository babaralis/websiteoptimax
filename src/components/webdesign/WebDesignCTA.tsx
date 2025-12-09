"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Clock, Users } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface InfoPoint {
  icon: LucideIcon | null;
  text: string;
  iconColor: string;
  customIcon?: React.ReactNode;
}

const infoPoints: InfoPoint[] = [
  {
    icon: Clock,
    text: "30-min consultation",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    text: "127+ B2B brands served",
    iconColor: "text-secondary",
  },
  {
    icon: null,
    text: "Response within 24 hours",
    iconColor: "",
    customIcon: (
      <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
    ),
  },
];

export function WebDesignCTA() {
  return (
    <section className="relative overflow-hidden py-16 bg-primary/5">
      <div className="container relative z-10">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Heading and Description */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground">
                Book a free strategy call and get a custom roadmap in 30 minutes.
              </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="shadow-glow-sm">
                <Link href="/contact" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Book Free Call
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link href="/portfolio" className="gap-2">
                  See Results First
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Info Points */}
          <motion.div
            className="mt-8 pt-8 border-t border-border/30 flex flex-wrap justify-center lg:justify-start gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {infoPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  {point.customIcon ? (
                    point.customIcon
                  ) : IconComponent ? (
                    <IconComponent className={`w-4 h-4 ${point.iconColor}`} />
                  ) : null}
                  <span>{point.text}</span>
                </div>
              );
            })}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
