"use client";

import { useState, useRef } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Play, CheckCircle2 } from "lucide-react";
import { GridPattern } from "@/components/graphics/GridPattern";
import Image from "next/image";

import ceoMale1 from "@/assets/testimonials/ceo-male-1.jpg";
import marketingFemale1 from "@/assets/testimonials/marketing-female-1.jpg";
import vpMale1 from "@/assets/testimonials/vp-male-1.jpg";
import cooFemale1 from "@/assets/testimonials/coo-female-1.jpg";

interface Testimonial {
  id: number;
  quote?: string;
  author: string;
  role: string;
  rating: number;
  metric?: string;
  image: any;
  video?: string;
  source?: string;
  date?: string;
  introText?: string;
  column: number;
  type: 'text' | 'video';
}

const B2B_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Website Optimax transformed our B2B website from a digital brochure into a pipeline machine. Our enterprise leads tripled in 90 days.",
    author: "Sarah Mitchell",
    role: "CMO, CloudSync Platform",
    rating: 5,
    metric: "+340% leads",
    image: marketingFemale1,
    source: "Trustpilot",
    date: "Sep 16, 2025",
    column: 1,
    type: 'text',
  },
  {
    id: 2,
    author: "Rhonda",
    role: "Trustpilot Video",
    rating: 5,
    image: cooFemale1,
    video: "/assets/images/webdesign/videotesti1.mp4",
    source: "Trustpilot Video",
    date: "2025",
    column: 1,
    type: 'video',
  },
  {
    id: 3,
    quote: "They rebuilt our entire SaaS funnel and our demo-to-close rate doubled. Worth every penny.",
    author: "David Park",
    role: "Founder, TalentBridge HR",
    rating: 5,
    metric: "+200% close rate",
    image: vpMale1,
    source: "Trustpilot",
    date: "Mar 10, 2025",
    column: 1,
    type: 'text',
  },
  {
    id: 4,
    author: "Franklin",
    role: "Trustpilot Video",
    rating: 5,
    image: vpMale1,
    video: "/assets/images/webdesign/videotesti2.mp4",
    source: "Trustpilot Video",
    date: "2025",
    column: 2,
    type: 'video',
  },
  {
    id: 5,
    quote: "Finally, an agency that understands B2B. They focused on our buyer journey, not just making things pretty.",
    author: "Michael Chen",
    role: "VP Marketing, DataVault Pro",
    rating: 5,
    metric: "$2.3M pipeline",
    image: ceoMale1,
    source: "Trustpilot",
    date: "Updated Feb 14, 2025",
    column: 2,
    type: 'text',
  },
  {
    id: 6,
    author: "Sarah",
    role: "Trustpilot Video",
    rating: 5,
    image: marketingFemale1,
    video: "/assets/images/webdesign/videotesti3.mp4",
    source: "Trustpilot Video",
    date: "2025",
    column: 2,
    type: 'video',
  },
  {
    id: 7,
    quote: "The ROI was undeniable. We made back our investment in the first month. Our sales team is closing more deals than ever.",
    author: "Jennifer Wu",
    role: "CEO, ScaleOps Solutions",
    rating: 5,
    metric: "14x ROI",
    image: cooFemale1,
    source: "Trustpilot",
    date: "Mar 10, 2025",
    column: 3,
    type: 'text',
  },
  {
    id: 8,
    author: "Guage",
    role: "Trustpilot Video",
    rating: 5,
    image: ceoMale1,
    video: "/assets/images/webdesign/videotesti4.mp4",
    source: "Trustpilot Video",
    date: "2025",
    column: 3,
    type: 'video',
  },
  {
    id: 9,
    quote: "Our cost per qualified lead dropped by 60% while lead quality actually improved. That's rare in B2B.",
    author: "Marcus Johnson",
    role: "Marketing Director, FinanceFlow",
    rating: 5,
    metric: "-60% CPL",
    image: '/assets/images/testi/man1.webp',
    source: "Trustpilot",
    date: "2025",
    column: 3,
    type: 'text',
  },
  {
    id: 10,
    author: "Michael",
    role: "Trustpilot Video",
    rating: 5,
    image: ceoMale1,
    video: "/assets/images/webdesign/videotesti5.mp4",
    source: "Trustpilot Video",
    date: "2025",
    column: 1,
    type: 'video',
  },
  {
    id: 11,
    quote: "Website Optimax gets B2B sales cycles. They built a site that educates and qualifies prospects before they even talk to sales.",
    author: "Amanda Foster",
    role: "VP Sales, Meridian Consulting",
    rating: 5,
    metric: "68% shorter cycle",
    image: '/assets/images/testi/woman1.webp',
    source: "Trustpilot",
    date: "Mar 10, 2025",
    column: 2,
    type: 'text',
  },
  {
    id: 12,
    author: "Michael",
    role: "Trustpilot Video",
    rating: 5,
    image: vpMale1,
    video: "/assets/images/webdesign/videotesti6.mp4",
    source: "Trustpilot Video",
    date: "2025",
    column: 3,
    type: 'video',
  },
];

function VideoPlayer({ videoSrc, author }: { videoSrc: string; author: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-[550px] rounded-lg overflow-hidden bg-black/20 group">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls
        playsInline
      />
      
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group-hover:bg-black/40 transition-colors z-10"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors">
            <Play className="w-8 h-8 text-[#14B8A6] ml-1" fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );
}

function TextTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#14B8A6]/10 border-border/50 hover:border-[#14B8A6]/30 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col h-full">
        <blockquote className="text-foreground mb-4 flex-1 text-sm leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
        
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#84CC16] text-[#84CC16]" />
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                sizes="48px"
                className="rounded-full object-cover border-2 border-[#14B8A6]/20"
              />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.source} {testimonial.date && `· ${testimonial.date}`}
              </p>
            </div>
          </div>
          {testimonial.metric && (
            <div className="text-right">
              <span className="text-xs font-semibold text-success">{testimonial.metric}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2 pt-3 border-t border-border/30">
          <CheckCircle2 className="w-4 h-4 text-success" />
          <span className="text-xs text-success font-medium">Trustpilot Verified review</span>
        </div>
      </CardContent>
    </Card>
  );
}

function VideoTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#14B8A6]/10 border-border/50 hover:border-[#14B8A6]/30 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <VideoPlayer videoSrc={testimonial.video!} author={testimonial.author} />
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#84CC16] text-[#84CC16]" />
          ))}
        </div>
        
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border/30">
          <CheckCircle2 className="w-4 h-4 text-success" />
          <span className="text-xs text-success font-medium">Trustpilot Verified review</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function WebDesign4Testimonial() {
  const column1 = B2B_TESTIMONIALS.filter(t => t.column === 1);
  const column2 = B2B_TESTIMONIALS.filter(t => t.column === 2);
  const column3 = B2B_TESTIMONIALS.filter(t => t.column === 3);

  return (
    <section id="reviews" className="py-24 lg:py-32 pt-0 relative overflow-hidden">
      <GridPattern variant="lines" className="opacity-20" />
      
      <div className="container relative">
        <FadeIn className="text-center mb-16">
          <h2 className="section-heading text-foreground">
            Real Reviews from{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] to-[#84CC16]">B2B Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every testimonial represents a real B2B transformation. Real companies, real pipeline, real revenue.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <StaggerChildren className="flex flex-col gap-6 lg:gap-8">
            {column1.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 0.1}>
                {testimonial.type === 'text' ? (
                  <TextTestimonialCard testimonial={testimonial} />
                ) : (
                  <VideoTestimonialCard testimonial={testimonial} />
                )}
              </FadeIn>
            ))}
          </StaggerChildren>
          
          <StaggerChildren className="flex flex-col gap-6 lg:gap-8">
            {column2.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 0.1}>
                {testimonial.type === 'text' ? (
                  <TextTestimonialCard testimonial={testimonial} />
                ) : (
                  <VideoTestimonialCard testimonial={testimonial} />
                )}
              </FadeIn>
            ))}
          </StaggerChildren>
          
          <StaggerChildren className="flex flex-col gap-6 lg:gap-8">
            {column3.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 0.1}>
                {testimonial.type === 'text' ? (
                  <TextTestimonialCard testimonial={testimonial} />
                ) : (
                  <VideoTestimonialCard testimonial={testimonial} />
                )}
              </FadeIn>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
