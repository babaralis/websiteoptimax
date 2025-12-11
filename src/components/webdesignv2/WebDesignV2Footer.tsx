import { SITE_CONFIG } from "@/lib/constants";

export function WebDesignV2Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      <div className="container-wide py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for B2B growth. Engineered for conversions.
          </p>
        </div>
      </div>
    </footer>
  );
}

