import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // Agrega el dominio aquí
  },
};

export default nextConfig;

