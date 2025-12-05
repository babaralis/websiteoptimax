"use client";

import { motion } from "framer-motion";

interface AbstractShapesProps {
  variant?: "hero" | "section" | "accent";
  className?: string;
}

export function AbstractShapes({ variant = "section", className = "" }: AbstractShapesProps) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Large gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[50rem] h-[50rem] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[37.5rem] h-[37.5rem] rounded-full bg-gradient-radial from-secondary/20 via-secondary/5 to-transparent blur-3xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/20 rounded-2xl rotate-12"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-secondary/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg rotate-45"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="w-full h-full bg-gradient-conic from-primary/10 via-transparent to-secondary/10 blur-3xl" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/5 to-transparent" />
      
      {/* Decorative lines */}
      <svg className="absolute top-0 right-0 w-1/3 h-full opacity-5" viewBox="0 0 100 200" fill="none">
        <path d="M0 0L100 100L0 200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        <path d="M20 0L100 80L20 200" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
      </svg>
    </div>
  );
}

export function GlowOrb({ color = "primary", size = "md", className = "" }: { 
  color?: "primary" | "secondary" | "accent"; 
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };
  
  const colorClasses = {
    primary: "from-primary/30 via-primary/10 to-transparent",
    secondary: "from-secondary/30 via-secondary/10 to-transparent",
    accent: "from-accent/30 via-accent/10 to-transparent",
  };

  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`rounded-full bg-gradient-radial ${sizeClasses[size]} ${colorClasses[color]} blur-3xl ${className}`}
    />
  );
}

export function FloatingCard({ children, className = "", delay = 0 }: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative ${className}`}
    >
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </motion.div>
  );
}
