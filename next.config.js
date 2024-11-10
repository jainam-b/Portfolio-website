const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Add an external image domain
  images: {
    domains: ["res.cloudinary.com"], // Replace "example.com" with your image domain(s)
  },

  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
