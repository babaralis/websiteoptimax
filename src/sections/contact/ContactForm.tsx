"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
import { event as trackEvent } from "@/lib/analytics";
import { submitContactEmail } from "@/lib/email";
import { contactLead } from "@/lib/lead";

const BUDGET_OPTIONS = [
  { value: "1k-2k", label: "$999 - $2999" },
  { value: "2k-5k", label: "$3000 - $6999" },
  { value: "5k-10k", label: "$7000 - $14999" },
  { value: "10k+", label: "$15000+" },
];

const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-2months", label: "1-2 months" },
  { value: "3-6months", label: "3-6 months" },
  { value: "flexible", label: "Flexible / Planning phase" },
];

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      website: formData.get('website') as string,
      budget: formData.get('budget') as string,
      timeline: formData.get('timeline') as string,
      message: formData.get('message') as string,
      phone: formData.get('phone') as string || '',
      title: "Contact Request",
    };
    await contactLead(data);
  
    trackEvent({
      action: "form_submit",
      category: "Contact",
      label: "B2B Contact Form",
    });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Fire Google Ads conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17795363418/oY1jCKi3rdQbENrkvqVC',
        'value': 1.0,
        'currency': 'USD'
      });
    }
    
    trackEvent({
      action: "form_success",
      category: "Contact",
      label: "B2B Contact Form Completed",
    });
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <FadeIn>
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Thank You for Reaching Out!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We've received your message and will get back to you within 24 hours. 
              In the meantime, feel free to book a call directly.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
              </a>
            </Button>
          </CardContent>
        </Card>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-background/50"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                  required
                  className="bg-background/50"
                />
              </div>
             
              <div className="space-y-2">
                <Label htmlFor="website">Current Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="Enter your website URL"
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name"> Phone No (Optional) *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="bg-background/50 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select name="budget">
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            

              <div className="space-y-2">
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select name="timeline">
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMELINE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
           
            
            <div className="space-y-2">
              <Label htmlFor="message">Tell Us About Your B2B Goals *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="What are your main pipeline goals? What challenges are you facing with your current website?"
                rows={5}
                required
                className="bg-background/50 resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
