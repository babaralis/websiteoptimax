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

              window.addEventListener("load", () => {
                const waitForZopim = setInterval(() => {
                  if (window.$zopim) {
                    clearInterval(waitForZopim);
              
                    $zopim(() => {
                      $zopim.livechat.setOnUnreadMsgs((count) => {
                        if (count >= 1) {
                          $zopim.livechat.window.show();
                        }
                      });
                    });
                  }
                }, 100);
              });
            `,
          }}
        />
    </div>
  );
}

