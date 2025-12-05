interface GridPatternProps {
  className?: string;
  variant?: "dots" | "lines" | "cross";
}

export function GridPattern({ className = "", variant = "lines" }: GridPatternProps) {
  if (variant === "dots") {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    );
  }

  if (variant === "cross") {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cross-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0v60M0 30h60" stroke="currentColor" strokeWidth="1" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cross-pattern)" />
        </svg>
      </div>
    );
  }

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--border) / 0.3) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--border) / 0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

export function RadialGlow({ 
  color = "primary", 
  position = "center",
  intensity = "medium",
  className = "" 
}: { 
  color?: "primary" | "secondary" | "mixed";
  position?: "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
  intensity?: "low" | "medium" | "high";
  className?: string;
}) {
  const positionClasses = {
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    "left": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    "right": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  };

  const intensityOpacity = {
    low: "opacity-20",
    medium: "opacity-40",
    high: "opacity-60",
  };

  const colorGradient = {
    primary: "from-primary to-transparent",
    secondary: "from-secondary to-transparent",
    mixed: "from-primary via-secondary/50 to-transparent",
  };

  return (
    <div 
      className={`absolute w-[600px] h-[600px] rounded-full bg-gradient-radial ${colorGradient[color]} blur-3xl ${positionClasses[position]} ${intensityOpacity[intensity]} ${className}`}
    />
  );
}
