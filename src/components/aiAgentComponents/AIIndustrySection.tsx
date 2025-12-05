"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Headphones, Phone, MessageCircle } from "lucide-react";

const industryAgents = [
  {
    icon: Headphones,
    bgColor: "bg-yellow-500/20",
    title: "Healthcare AI Agent",
    features: [
      "Manages patient inquiries and appointment scheduling.",
      "Provides instant medical info from approved knowledge bases.",
      "Reduces staff workload while improving patient experience.",
    ],
    messages: [
      { type: "ai", name: "Sophie", text: "Hi! I'm here to assist you. Please tell me what went wrong so I can help.", time: "02:00 PM" },
      { type: "user", text: "Your delivery team arrived late and damaged the package. I'm quite upset.", time: "02:10 PM" },
    ],
  },
  {
    icon: Phone,
    bgColor: "bg-green-500/20",
    title: "Customer Service AI Agent",
    features: [
      "Resolves FAQs instantly across multiple channels.",
      "Escalates complex issues with full context.",
      "Reduces ticket volume and boosts satisfaction.",
    ],
    messages: [
      { type: "ai", name: "Amelia", text: "Hi! Just checking in — would you like a summary of your last support call?", time: "" },
      { type: "user", text: "Yes please. I need a copy of the conversation for my records.", time: "05:16 PM" },
    ],
  },
  {
    icon: MessageCircle,
    bgColor: "bg-yellow-500/20",
    title: "AI Agent for Education",
    features: [
      "Answers student questions and provides learning resources.",
      "Assists with scheduling and exam reminders.",
      "Supports teachers with grading and feedback automation.",
    ],
    messages: [
      { type: "ai", name: "Ava", text: "Thanks for reaching out earlier. Were you satisfied with the support you received?", time: "10:39 PM" },
      { type: "user", text: "Yes, the issue was resolved quickly. Great support team!", time: "10:10 PM" },
    ],
  },
];

export function AIIndustrySection() {
  return (
    <section id="ai-industry" className="section bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-heading text-foreground">
              AI Agents Built for <span className="text-primary">Every Business Need</span>
            </h2>
            <p className="section-subheading mx-auto">
              Our agents don't just reply, they adapt to your industry and workflow. Whether in healthcare,
              customer service, or education, our AI agents integrate seamlessly into your operations to
              deliver speed, scale, and efficiency.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industryAgents.map((agent, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="industry-agent-card glass-card overflow-hidden h-full">
                <div className={`agent-visual-wrapper ${agent.bgColor} p-4`}>
                  <div className="agent-phone-mockup">
                    <div className="agent-phone-screen bg-card rounded-lg p-3">
                      <div className="agent-phone-header flex items-center justify-between mb-3 pb-2 border-b border-border">
                        <div className="agent-phone-title flex items-center gap-2">
                          <agent.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs font-medium text-foreground">
                            {agent.title.includes("Healthcare") ? "Customer Support Agent" : 
                             agent.title.includes("Customer Service") ? "Call Log Assistant" : 
                             "Feedback Facilitator"}
                          </span>
                        </div>
                        <div className="agent-status text-xs text-green-500 font-medium">Online</div>
                      </div>
                      <div className="agent-phone-chat space-y-2">
                        <div className="agent-chat-status text-xs text-center text-muted-foreground mb-2">
                          Connected to AI Agent
                        </div>
                        {agent.messages.map((msg, msgIndex) => (
                          <div
                            key={msgIndex}
                            className={`agent-message flex gap-2 ${
                              msg.type === "user" ? "justify-end" : "justify-start"
                            }`}
                          >
                            {msg.type === "ai" && (
                              <div className="agent-msg-avatar w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                                {msg.name?.[0] || "A"}
                              </div>
                            )}
                            <div className={`agent-msg-content ${msg.type === "user" ? "items-end" : "items-start"} flex flex-col max-w-[80%]`}>
                              {msg.type === "ai" && (
                                <div className="agent-msg-name text-xs font-medium text-foreground mb-1">
                                  {msg.name}
                                </div>
                              )}
                              <div className={`agent-msg-text text-xs p-2 rounded-lg ${
                                msg.type === "user"
                                  ? "bg-primary text-white"
                                  : "bg-muted text-foreground"
                              }`}>
                                {msg.text}
                              </div>
                              {msg.time && (
                                <div className="agent-msg-time text-xs text-muted-foreground mt-1">
                                  {msg.time}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agent-content p-6">
                  <h4 className="agent-card-title text-xl font-bold mb-4 text-foreground">{agent.title}</h4>
                  <ul className="agent-features space-y-3">
                    {agent.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

