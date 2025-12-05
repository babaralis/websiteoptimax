"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { HelpCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { RadialGlow } from "@/components/graphics/GridPattern";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aiFAQs = [
  {
    question: "What are AI Agents?",
    answer: "AI Agents are intelligent automated systems that can perform tasks, make decisions, and interact with users or other systems autonomously. They use artificial intelligence to understand context, learn from interactions, and execute complex workflows without constant human intervention.",
  },
  {
    question: "What kind of tasks can AI Agents handle?",
    answer: "AI Agents can handle a wide range of tasks including customer support inquiries, appointment scheduling, data analysis, lead qualification, order processing, content generation, and workflow automation. They adapt to your specific business needs and industry requirements.",
  },
  {
    question: "Can I customize my AI Agent?",
    answer: "Yes, absolutely! Our AI Agents are fully customizable. You can configure their knowledge base, response style, workflows, integrations, and behavior to match your brand voice and business processes. They learn and adapt to your specific requirements over time.",
  },
  {
    question: "Can AI Agents be used in multiple languages?",
    answer: "Yes, our AI Agents support multiple languages and can communicate with users in their preferred language. They can automatically detect the language being used and respond accordingly, making them ideal for global businesses serving diverse customer bases.",
  },
  {
    question: "How does the AI Agent ensure data accuracy?",
    answer: "Our AI Agents use advanced validation techniques, cross-reference data from multiple sources, and continuously learn from corrections. They're trained on your specific knowledge base and can escalate to human agents when uncertain, ensuring high accuracy and reliability in all interactions.",
  },
  {
    question: "How do AI Agents work?",
    answer: "AI Agents work by processing natural language inputs, understanding context and intent, accessing relevant knowledge bases, and generating appropriate responses or actions. They use machine learning to improve over time and can integrate with your existing systems and workflows seamlessly.",
  },
  {
    question: "How do AI Agents interact with users?",
    answer: "AI Agents interact with users through various channels including chat interfaces, voice systems, email, and messaging platforms. They provide instant, 24/7 responses, understand natural language, and can handle complex conversations while maintaining context throughout the interaction.",
  },
  {
    question: "How does an AI Agent integrate with forms?",
    answer: "AI Agents can integrate with forms by automatically filling fields based on user conversations, validating input data, providing real-time assistance during form completion, and submitting information to your CRM or database systems. They can also extract data from completed forms for further processing.",
  },
  {
    question: "How secure do AI Agents handle the data?",
    answer: "AI Agents handle data with enterprise-grade security. All data is encrypted in transit and at rest, access is controlled through authentication and authorization, and we comply with industry standards like GDPR and SOC 2. Your data remains confidential and is never shared with third parties.",
  },
  {
    question: "How do AI Agents improve customer service?",
    answer: "AI Agents improve customer service by providing instant responses 24/7, reducing wait times, handling multiple inquiries simultaneously, ensuring consistent service quality, and freeing up human agents to focus on complex issues. They can resolve up to 80% of common queries automatically.",
  },
];

export function AIFAQSection() {
  return (
    <section id="faqs" className="section relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card/50 to-card/30" />
      <RadialGlow color="primary" position="top-right" intensity="low" />
      
      <div className="container-wide relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </motion.span>
            <h2 className="section-heading text-foreground">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subheading mx-auto">
              Explore a curated selection of logo designs, brand identities and website layouts crafted by
              Website Optimax for startups, agencies, ecommerce brands and service businesses.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {aiFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-card-elevated px-6 border-white/10 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow-sm transition-all overflow-hidden"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <MessageCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 pl-11">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </FadeIn>
        
        {/* Contact CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium animated-underline"
              whileHover={{ x: 5 }}
            >
              Get in touch with us
              <MessageCircle className="w-4 h-4" />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

