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
  // Mengoptimalkan asset statis
  assetPrefix: process.env.NODE_ENV === 'production' ? '/_next' : '',
  // Mengizinkan video dan gambar besar
  experimental: {
    largePageDataBytes: 128 * 100000, // 12.8MB
  },
  // Mengoptimalkan loading
  optimizeFonts: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

export default nextConfig
