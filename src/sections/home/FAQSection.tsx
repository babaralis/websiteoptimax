"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQS } from "@/lib/constants";
import { RadialGlow } from "@/components/graphics/GridPattern";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="section relative overflow-hidden">
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
              Questions? We've Got <span className="gradient-text">Answers</span>
            </h2>
            <p className="section-subheading mx-auto">
              Everything you need to know before getting started.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((faq, index) => (
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
                        <span className="font-medium text-xl">{faq.question}</span>
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
