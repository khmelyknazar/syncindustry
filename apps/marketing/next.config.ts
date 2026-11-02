import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Design-system and other workspace packages ship untranspiled TS —
  // Next.js transpiles them as part of this app's build rather than
  // each package pre-compiling to JS, which keeps monorepo iteration
  // fast (no build step between editing a token and seeing it applied).
  transpilePackages: ["@axioma/design-system", "@axioma/utils"],
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        // Старий URL кейсу містив назву внутрішнього інструменту.
        source: "/work/document-automation-n8n",
        destination: "/work/document-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
