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
  },
  // Menonaktifkan strict mode untuk menghindari masalah hydration
  reactStrictMode: false,
  // Konfigurasi development indicator yang benar
  devIndicators: {
    position: "bottom-right",
  },
}

export default nextConfig
