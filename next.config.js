const isProd = process.env.NODE_ENV === "production";
const repoName = "cambrafest";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
