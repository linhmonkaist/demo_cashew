import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const basePath = isGithubPages ? "/demo_cashew" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPages ? "/demo_cashew/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
