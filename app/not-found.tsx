import Link from 'next/link'
import { ppEditorialNewUltralightItalic, inter } from "./fonts"

export default function NotFound() {
  return (
    <div className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <div className="text-center">
        <h2 className={`${ppEditorialNewUltralightItalic.className} text-6xl font-light italic text-white/80 mb-8`}>
          404
        </h2>
        <p className={`${inter.className} text-white/50 mb-8`}>
          Halaman yang Anda cari tidak ditemukan
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
} 