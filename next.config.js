const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Transpile packages if needed
  transpilePackages: [],
  // Explicitly set the output file tracing root to fix workspace detection
  outputFileTracingRoot: path.join(__dirname),
  
  // Security headers configuration
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.zdassets.com https://*.zendesk.com https://*.zdassets.com https://www.googletagmanager.com https://js.clickrank.ai https://v2.zopim.com; connect-src 'self' https://*.zendesk.com wss://*.zendesk.com https://ipapi.co https://www.googletagmanager.com https://payment.websiteoptimax.com;"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;

