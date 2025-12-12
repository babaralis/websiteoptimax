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
  
  // Content Security Policy headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.zdassets.com https://*.zdassets.com https://*.zendesk.com https://www.googletagmanager.com https://js.clickrank.ai https://v2.zopim.com",
              "connect-src 'self' https://*.zendesk.com https://*.zdassets.com wss://*.zendesk.com https://www.googletagmanager.com https://ipapi.co https://payment.websiteoptimax.com https://*.websiteoptimax.com",
              "img-src 'self' data: blob: https://*.zdassets.com https://*.zendesk.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://*.zdassets.com https://*.zendesk.com",
              "font-src 'self' data: https://*.zdassets.com https://*.zendesk.com",
              "frame-src 'self' https://*.zendesk.com https://*.zdassets.com https://payment.websiteoptimax.com",
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://payment.websiteoptimax.com"
            ].join("; ")
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*"
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization, User-Agent"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;

