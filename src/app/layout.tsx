import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import Script from "next/script";
import "@/index.css";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

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
};

export const viewport: Viewport = {
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

              {/* Google Tag Manager - Loads 10 seconds after page load */}
      <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(){
            function loadGTM() {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P37P6FLQ');
            }
            
            if(document.readyState==='complete'){
              setTimeout(loadGTM,10000);
            } else {
              window.addEventListener('load',function(){
                setTimeout(loadGTM,10000);
              });
            }
          })();`}
        </Script>

        {/* ClickRank AI SEO Script */}
        <Script id="clickrank-ai" strategy="afterInteractive">
          {`
            (function () {
              var clickRankAi = document.createElement("script");
              clickRankAi.src = "https://js.clickrank.ai/seo/f2471eb6-5b04-474d-ad2b-47cf003ec8bb/script?" + new Date().getTime();
              clickRankAi.async = true;
              document.head.appendChild(clickRankAi);
            })();
          `}
        </Script>

        <Script
          id="zopim-live-chat"
          strategy="beforeInteractive"
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

              $zopim(function() {
                $zopim.livechat.setOnUnreadMsgs(function(count) {
                  if (count >= 1) {
                    $zopim.livechat.window.show();
                  }
                });
              });
            `,
          }}
        />
      </head>
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

