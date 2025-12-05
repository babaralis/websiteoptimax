"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, Variants, useInView } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

const getVariants = (direction: FadeInProps["direction"]): Variants => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction || "up"],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if element is already in viewport on mount
    if (ref.current) {
      const element = ref.current as HTMLElement;
      const checkVisibility = () => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.top < windowHeight + 200 && rect.bottom > -200;
        if (isVisible) {
          setShouldAnimate(true);
        }
      };
      
      // Check immediately
      checkVisibility();
      
      // Also check after a small delay to catch any layout shifts
      const timer = setTimeout(checkVisibility, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate || isInView ? "visible" : "hidden"}
      variants={getVariants(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
