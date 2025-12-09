import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import Script from "next/script";
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
  title: "Website Optimax | B2B Web Design & Digital Marketing",
  description: "Award-winning web design and digital marketing for B2B, SaaS, and service brands. 340% average lead increase. Book your free strategy session.",
  keywords: ["B2B web design", "SaaS website development", "digital marketing agency", "lead generation", "conversion optimization"],
  robots: "noindex, nofollow",
  icons: {
    icon: "/assets/images/favicon.svg",
    shortcut: "/assets/images/favicon.svg",
    apple: "/assets/images/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Website Optimax | B2B Web Design & Digital Marketing",
    description: "Award-winning web design and digital marketing for B2B, SaaS, and service brands. 340% average lead increase.",
    siteName: "Website Optimax",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Optimax | B2B Web Design & Digital Marketing",
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
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Providers>
          <Layout>{children}</Layout>
          <Toaster />
          <Sonner />
          <CookieConsent />
          <ScrollToTop />
        </Providers>
        <Script
          id="zopim-live-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$zopim || (function(d, s) {
                var z = $zopim = function(c){ z._.push(c) },
                $ = z.s = d.createElement(s),
                e = d.getElementsByTagName(s)[0];

                z.set = function(o){ z.set._.push(o) };
                z._ = [];
                z.set._ = [];

                $.async = true;
                $.setAttribute("charset", "utf-8");
                $.src = "https://v2.zopim.com/?6a6T9BZl3SsAEZGSlYnFPv3jrDOvIhpw";
                z.t = +new Date;
                $.type = "text/javascript";
                e.parentNode.insertBefore($, e);
              })(document, "script");
            `,
          }}
        />
        
      </body>
    </html>
  );
}

