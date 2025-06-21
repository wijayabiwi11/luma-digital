"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              Luma
              <br />
              Digital
            </h1>
            <div
              className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                  Luma Digital adalah perusahaan teknologi yang berfokus pada pengembangan solusi software inovatif. 
                  Kami menggabungkan keahlian dalam pengembangan web, mobile, dan enterprise solutions untuk 
                  membantu bisnis Anda berkembang di era digital.
                </p>
                <p>
                  Dengan tim ahli yang berpengalaman dalam berbagai teknologi modern seperti AI, cloud computing, 
                  dan blockchain, kami siap membantu mewujudkan visi digital Anda menjadi kenyataan.
                </p>
                <p>Lihat beberapa proyek unggulan kami di bawah ini.</p>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
            <Link
              href="/"
              className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/placeholder-logo.svg"
                alt="Luma Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}
