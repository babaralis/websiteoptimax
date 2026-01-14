import { ReactNode } from "react";
import { WebDesignV3Header } from "@/components/webdesignv3/WebDesignV3Header";
import { WebDesignV3Footer } from "@/components/webdesignv3/WebDesignV3Footer";
import { WebDesignV3ScrollToTop } from "@/components/webdesignv3/WebDesignV3ScrollToTop";
import { PageTransition } from "@/components/animations/PageTransition";
import Script from "next/script";

interface WebDesignV3LayoutProps {
  children: ReactNode;
}

export default function WebDesignV3Layout({ children }: WebDesignV3LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <WebDesignV3Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <WebDesignV3Footer />
      <WebDesignV3ScrollToTop />
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
                $.src = "https://v2.zopim.com/?46s4nS77ONjbb1saytlDvaxrZFQJpC1o";
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
