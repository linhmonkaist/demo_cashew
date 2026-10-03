import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? "/demo_cashew" : "",
  assetPrefix: isGithubPages ? "/demo_cashew/" : "",
  // output: "export",
};

export default nextConfig;
