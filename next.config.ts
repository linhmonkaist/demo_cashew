import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? "/demo_cashew" : "",
  assetPrefix: isGithubPages ? "/demo_cashew/" : "",
};

export default nextConfig;
