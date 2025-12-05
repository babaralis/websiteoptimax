import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import "@/index.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbitline Digital Studio | B2B Web Design & Digital Marketing",
  description: "Award-winning web design and digital marketing for B2B, SaaS, and service brands. 340% average lead increase. Book your free strategy session.",
  keywords: ["B2B web design", "SaaS website development", "digital marketing agency", "lead generation", "conversion optimization"],
  openGraph: {
    type: "website",
    title: "Orbitline Digital Studio | B2B Web Design & Digital Marketing",
    description: "Award-winning web design and digital marketing for B2B, SaaS, and service brands. 340% average lead increase.",
    siteName: "Orbitline Digital Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbitline Digital Studio | B2B Web Design & Digital Marketing",
    description: "Award-winning web design and digital marketing for B2B, SaaS, and service brands.",
  },
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Providers>
          <Layout>{children}</Layout>
          <Toaster />
          <Sonner />
          <CookieConsent />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

