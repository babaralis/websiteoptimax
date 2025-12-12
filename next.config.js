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
};

module.exports = nextConfig;

