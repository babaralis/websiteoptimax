import { ReactNode } from "react";
import { WebDesignV4Header } from "@/components/webdesignv4/WebDesignV4Header";
import { WebDesignV4Footer } from "@/components/webdesignv4/WebDesignV4Footer";
import { WebDesignV4ScrollToTop } from "@/components/webdesignv4/WebDesignV4ScrollToTop";
import { PageTransition } from "@/components/animations/PageTransition";
import Script from "next/script";

interface WebDesignV4LayoutProps {
  children: ReactNode;
}

export default function WebDesignV4Layout({ children }: WebDesignV4LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <WebDesignV4Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <WebDesignV4Footer />
      <WebDesignV4ScrollToTop />
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
