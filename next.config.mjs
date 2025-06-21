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
  assetPrefix: '',
  // Mengizinkan video dan gambar besar
  experimental: {
    largePageDataBytes: 128 * 100000, // 12.8MB
  },
  // Mengoptimalkan loading
  optimizeFonts: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Konfigurasi untuk asset statis
  distDir: '.next',
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
  // Konfigurasi webpack untuk video
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media',
          outputPath: 'static/media',
          name: '[name].[hash].[ext]',
        },
      },
    })
    return config
  },
}

export default nextConfig
