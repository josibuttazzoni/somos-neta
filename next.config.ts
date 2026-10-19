import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Dirección principal única: www. Los query params (gclid, utm_*) se conservan.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "somosneta.com.ar" }],
        destination: "https://www.somosneta.com.ar/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
