import { ReactNode } from "react";
import { WebDesignV2Header } from "@/components/webdesignv2/WebDesignV2Header";
import { WebDesignV2Footer } from "@/components/webdesignv2/WebDesignV2Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import Script from "next/script";

interface WebDesignV2LayoutProps {
  children: ReactNode;
}

export default function WebDesignV2Layout({ children }: WebDesignV2LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <WebDesignV2Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <WebDesignV2Footer />
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
    </div>
  );
}

