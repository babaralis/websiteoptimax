import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Linkedin, Twitter } from "lucide-react";
import { RadialGlow } from "@/components/graphics/GridPattern";
import Image from "next/image";

import alexPhoto from "@/assets/team/alex-rivera.jpg";
import sarahPhoto from "@/assets/team/sarah-chen.jpg";
import marcusPhoto from "@/assets/team/marcus-johnson.jpg";
import elenaPhoto from "@/assets/team/elena-kozlov.jpg";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & B2B Strategist",
    bio: "Former growth lead at 3 B2B startups. Obsessed with buyer psychology and building websites that shorten sales cycles.",
    photo: alexPhoto,
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    bio: "10+ years crafting B2B interfaces that convert. Believes enterprise-grade design and high performance aren't mutually exclusive.",
    photo: sarahPhoto,
  },
  {
    name: "Marcus Johnson",
    role: "Technical Director",
    bio: "Full-stack engineer who's built SaaS platforms handling millions of users. Makes sure your site is fast, secure, and scalable.",
    photo: marcusPhoto,
  },
  {
    name: "Elena Kozlov",
    role: "Conversion Specialist",
    bio: "Data-driven optimizer who's run 500+ B2B A/B tests. Turns buyer behavior into actionable insights that drive pipeline.",
    photo: elenaPhoto,
  },
];

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <RadialGlow color="primary" position="top-left" intensity="low" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            The Team
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet the B2B Specialists Behind{" "}
            <span className="gradient-text">Your Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A small, senior team of B2B specialists who've helped companies 
            generate millions in pipeline through high-converting websites.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-sm">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all relative">
                  <Image
                    src={member.photo}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority={true}
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary text-center mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
