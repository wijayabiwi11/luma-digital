/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['vercel.app']
  },
  // Mengaktifkan strict mode untuk production
  reactStrictMode: true,
  // Output sebagai standalone untuk Vercel
  output: 'standalone',
  // Konfigurasi development indicator yang benar
  devIndicators: {
    position: "bottom-right",
  },
}

export default nextConfig
