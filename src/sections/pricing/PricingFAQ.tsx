import { FadeIn } from "@/components/animations/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFAQs = [
  {
    question: "What's included in each package?",
    answer: "Every package includes strategy, custom design, development, testing, launch, and post-launch support. The difference is in scope—more pages, advanced features, and longer support periods as you move up. Use the comparison table above to see the full breakdown.",
  },
  {
    question: "What are the payment terms?",
    answer: "We typically structure payments in three milestones: 40% at project kickoff, 30% at design approval, and 30% at launch. For Enterprise projects, we offer flexible payment schedules. We accept wire transfers, ACH, and major credit cards.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Growth Starter projects typically take 4-6 weeks. Scale Package projects run 6-8 weeks. Enterprise transformations vary from 8-16 weeks depending on complexity. All timelines include strategy, design, development, and launch phases.",
  },
  {
    question: "What if I need something between packages?",
    answer: "We can customize any package to fit your specific needs. Book a strategy call and we'll build a custom scope that delivers exactly what you need—nothing more, nothing less.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes! All packages include post-launch support (60-90 days depending on tier). For continued optimization, we offer monthly retainer packages starting at $2,500/month that include performance monitoring, A/B testing, content updates, and continuous improvement.",
  },
  {
    question: "What's the ROI I can expect?",
    answer: "Our clients see an average 14x return on their investment within the first year. Specific results vary by industry and starting point, but most see measurable improvements in lead quality and conversion rates within the first 30 days of launch.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with our work within 30 days of project kickoff, we'll refund your deposit—no questions asked. We've never had a client take us up on this.",
  },
  {
    question: "Can you work with my existing CRM/marketing stack?",
    answer: "Absolutely. We integrate with all major CRMs (HubSpot, Salesforce, Pipedrive, etc.), marketing automation platforms, and analytics tools. Custom enterprise integrations are included in our Scale and Enterprise packages.",
  },
];

export function PricingFAQ() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Pricing <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our pricing and process
          </p>
        </FadeIn>
        
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {pricingFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="glass-card px-6 rounded-xl border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
