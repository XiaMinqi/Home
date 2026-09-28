import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sites keeps its Worker build; GitHub Pages gets a standalone static export.
  ...(process.env.GITHUB_PAGES === "true"
    ? { output: "export", basePath: "/Home" }
    : {}),
};

export default nextConfig;
