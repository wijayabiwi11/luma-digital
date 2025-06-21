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
  // Mengaktifkan strict mode untuk production
  reactStrictMode: true,
  // Output sebagai standalone untuk Vercel
  output: 'standalone',
  // Konfigurasi development indicator yang benar
  devIndicators: {
    position: "bottom-right",
  },
  // Mengoptimalkan loading
  optimizeFonts: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Konfigurasi routing
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // Konfigurasi build
  swcMinify: true,
  // Konfigurasi pages
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Konfigurasi rewrites
  async rewrites() {
    return [
      {
        source: '/404',
        destination: '/_not-found',
      },
    ]
  },
}

export default nextConfig
