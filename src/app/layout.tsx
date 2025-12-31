import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";
import { Layout } from "@/components/layout/Layout";
import { CookieConsent } from "@/components/CookieConsent";
import { ConditionalScrollToTop } from "@/components/ConditionalScrollToTop";
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
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
        
        {/* Apple-specific meta tags for better iOS/Safari compatibility */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Website Optimax" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for faster loading on all devices including Apple */}
        <link rel="preconnect" href="https://payment.websiteoptimax.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://v2.zopim.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://js.clickrank.ai" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://static.zdassets.com" />
        <link rel="dns-prefetch" href="https://ipapi.co" />

        {/* Google Ads (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17795363418" 
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17795363418');
          `}
        </Script>

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

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1210367194365034');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1210367194365034&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Zendesk Zopim Chat - Optimized for all devices including Apple */}
        <Script
          id="zopim-live-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Ensure compatibility with Safari and iOS
                if (typeof window !== 'undefined') {
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
                    
                    // Ensure proper loading on iOS Safari
                    if (e && e.parentNode) {
                      e.parentNode.insertBefore($, e);
                    } else {
                      d.head.appendChild($);
                    }
                  })(document, "script");

                  // Configure Zopim for better mobile experience (iOS/Android)
                  if (window.$zopim) {
                    $zopim(function() {
                      $zopim.livechat.setOnUnreadMsgs(function(count) {
                        if (count >= 1) {
                          setTimeout(function() {
                            $zopim.livechat.window.show();
                          }, 30000); // 30 second delay
                        }
                      });
                      
                      // Mobile-optimized settings
                      $zopim.livechat.button.setOffsetVerticalMobile(60);
                      $zopim.livechat.window.setSize('compact');
                    });
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Providers>
          <Layout>{children}</Layout>
          <Toaster />
          <Sonner />
          {/* <CookieConsent /> */}
          <ConditionalScrollToTop />
        </Providers>
        
      </body>
    </html>
  );
}

