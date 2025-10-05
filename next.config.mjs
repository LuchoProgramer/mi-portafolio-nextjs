/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Paquetes externos para server components (nueva sintaxis)
  serverExternalPackages: ['firebase-admin'],
  
  // Variables de entorno públicas
  env: {
    CUSTOM_KEY: 'my-value',
  },
};

export default nextConfig;