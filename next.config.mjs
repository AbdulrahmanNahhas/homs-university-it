import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  output: 'export',
  reactStrictMode: true,
  basePath: '/homs-university-it',

  // GitHub Pages is a static host and can't run the Next.js image optimization server
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);