"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Briefcase, Headphones, Users, Heart, DollarSign, Truck, User } from "lucide-react";

const networkNodes = [
  { icon: Briefcase, label: "Sales Operation AI Agent", position: "left-top", borderColor: "border-red-500", bgColor: "bg-pink-500" },
  { icon: Headphones, label: "Customer Service AI Agent", position: "left-middle", borderColor: "border-yellow-500", bgColor: "bg-blue-500" },
  { icon: Users, label: "Human Resources AI Agent", position: "left-bottom", borderColor: "border-green-500", bgColor: "bg-teal-500" },
  { icon: User, label: "Cameron Brooks", position: "center", borderColor: "border-purple-500", bgColor: "bg-green-500" },
  { icon: Heart, label: "Healthcare AI Agent", position: "right-top", borderColor: "border-yellow-500", bgColor: "bg-yellow-500" },
  { icon: DollarSign, label: "Finance & Banking AI Agent", position: "right-middle", borderColor: "border-teal-500", bgColor: "bg-secondary" },
  { icon: Truck, label: "Transportation AI Agent", position: "right-bottom", borderColor: "border-red-500", bgColor: "bg-pink-500" },
];

const mobileNodes = [
  { initials: "ET", label: "Email Triage AI Agent", position: "top", borderColor: "border-pink-500", bgColor: "bg-pink-500" },
  { initials: "OM", label: "Order Management AI Agent", position: "bottom-left", borderColor: "border-yellow-500", bgColor: "bg-yellow-500" },
  { initials: "SO", label: "Sales Operation AI Agent", position: "bottom-right", borderColor: "border-purple-500", bgColor: "bg-purple-500" },
];

export function AINetworkSection() {
  return (
    <section id="ai-network" className="section bg-background pt-0">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-heading text-foreground">
              Autonomous Doesn't Mean <span className="text-primary">Isolated</span>
            </h2>
            <p className="section-subheading mx-auto">
              Your AI agents share signals, escalate across channels, and optimize workflows together. Think
              of it as a mesh network of AI, tailored to your business.
            </p>
          </div>
        </FadeIn>

        <div className="w-full">
          {/* Desktop Network Diagram */}
          <div className="hidden md:block network-diagram">
            <div className="network-container relative w-full h-[37.5rem]">
              {/* SVG Connection Lines */}
              <svg
                className="network-connections-svg absolute inset-0 w-full h-full"
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Lines from center to all nodes */}
                <line
                  x1="500"
                  y1="275"
                  x2="160"
                  y2="50"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="50"
                  y2="300"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="230"
                  y2="510"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="840"
                  y2="50"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="950"
                  y2="300"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="765"
                  y2="510"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                {/* Connections between nodes */}
                <line
                  x1="160"
                  y1="50"
                  x2="50"
                  y2="300"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="50"
                  y1="300"
                  x2="230"
                  y2="510"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="840"
                  y1="50"
                  x2="950"
                  y2="300"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="950"
                  y1="300"
                  x2="765"
                  y2="510"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
              </svg>

              {/* Network Nodes */}
              {networkNodes.map((node, index) => {
                const positions: Record<string, string> = {
                  "left-top": "absolute top-1 left-[18rem]",
                  "left-middle": "absolute top-1/2 left-[11rem] -translate-y-1/2",
                  "left-bottom": "absolute bottom-10 left-[22rem]",
                  center: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "right-top": "absolute top-1 right-[18rem]",
                  "right-middle": "absolute top-1/2 right-[11rem] -translate-y-1/2",
                  "right-bottom": "absolute bottom-10 right-[22rem]",
                };

                return (
                  <div key={index} className={`network-node ${positions[node.position]}`}>
                    <div className={`node-avatar w-16 h-16 rounded-full ${node.borderColor} border-2 flex items-center justify-center bg-card`}>
                      <div className={`avatar-inner w-12 h-12 rounded-full ${node.bgColor} flex items-center justify-center text-white`}>
                        <node.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="node-label text-xs text-center text-foreground mt-2 max-w-[7.5rem] font-medium">
                      {node.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Network Diagram */}
          <div className="md:hidden network-diagram-mobile">
            <div className="network-container-mobile relative w-full h-[25rem]">
              <svg
                className="network-connections-mobile absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="50"
                  y1="15"
                  x2="20"
                  y2="85"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
                <line
                  x1="50"
                  y1="15"
                  x2="80"
                  y2="85"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
                <line
                  x1="20"
                  y1="85"
                  x2="80"
                  y2="85"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
              </svg>

              {mobileNodes.map((node, index) => {
                const positions: Record<string, string> = {
                  top: "absolute top-8 left-1/2 -translate-x-1/2",
                  "bottom-left": "absolute bottom-8 left-1/4 -translate-x-1/2",
                  "bottom-right": "absolute bottom-8 right-1/4 translate-x-1/2",
                };

                return (
                  <div key={index} className={`network-node-mobile ${positions[node.position]}`}>
                    <div className={`node-avatar-mobile w-12 h-12 rounded-full ${node.borderColor} border-2 flex items-center justify-center bg-card`}>
                      <div className={`avatar-inner-mobile w-8 h-8 rounded-full ${node.bgColor} flex items-center justify-center text-white text-xs font-bold`}>
                        {node.initials}
                      </div>
                    </div>
                    <div className="node-label-mobile text-xs text-center text-foreground mt-2 max-w-[6.25rem] font-medium">
                      {node.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

