import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Explicit ladder so `quality` props are honoured instead of warned about.
    qualities: [70, 75, 76, 78, 80, 82, 90],
    // AVIF first (≈30% smaller than WebP on photographic interiors), WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Matches the breakpoints the layout actually uses — avoids Next generating
    // sizes nothing on the site ever requests.
    deviceSizes: [420, 640, 828, 1080, 1280, 1600, 1920, 2560],
    imageSizes: [180, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  // Long-lived immutable caching for fonts and generated imagery.
  async headers() {
    return [
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },

  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
