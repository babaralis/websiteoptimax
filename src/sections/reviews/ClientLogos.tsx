"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

// Import client logos
import cloudsyncLogo from "@/assets/logos/cloudsync.png";
import datavaultLogo from "@/assets/logos/datavault.png";
import scaleopsLogo from "@/assets/logos/scaleops.png";
import talentbridgeLogo from "@/assets/logos/talentbridge.png";
import financeflowLogo from "@/assets/logos/financeflow.png";
import meridianLogo from "@/assets/logos/meridian.png";

const B2B_CLIENTS = [
  { name: "CloudSync", logo: cloudsyncLogo },
  { name: "DataVault", logo: datavaultLogo },
  { name: "ScaleOps", logo: scaleopsLogo },
  { name: "TalentBridge", logo: talentbridgeLogo },
  { name: "FinanceFlow", logo: financeflowLogo },
  // { name: "Meridian", logo: meridianLogo },
];

export function ClientLogos() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <FadeIn className="text-center mb-12">
          <p className="text-muted-foreground text-lg">
            Trusted by B2B and SaaS leaders worldwide
          </p>
        </FadeIn>
        
        <FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
            {B2B_CLIENTS.map((client, index) => (
              <motion.div 
                key={client.name}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="px-6 py-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="40px"
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <span className="text-lg font-display font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
