"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [headerSize] = useState(1.2)
  const [textSize] = useState(0.8)

  return (
    <div
      className={`min-h-screen bg-[#141414] flex items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-[360px] flex-shrink-0 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-16">
            <Link href="/" className="flex items-center gap-4">
              <h2 className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80`}>
                Luma Digital
              </h2>
            </Link>
            <h1
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              style={{ fontSize: `${4 * headerSize}rem` }}
            >
              Mari
              <br />
              Berbicara
            </h1>
            <div
              className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              style={{ fontSize: `${0.875 * textSize}rem` }}
            >
              <div className="space-y-6">
                <div className="h-px bg-white/10 w-full" />
                <p>
                  Kami siap membantu mewujudkan visi digital Anda. Hubungi kami untuk konsultasi atau informasi lebih lanjut
                  tentang layanan kami.
                </p>
                <div className="space-y-4">
                  <p>
                    <strong className="text-white/70">Email:</strong>
                    <br />
                    lumacreativeteam@gmail.com
                  </p>
                  <p>
                    <strong className="text-white/70">Telepon:</strong>
                    <br />
                    +62 857 0954 8973
                  </p>
                  <p>
                    <strong className="text-white/70">Alamat:</strong>
                    <br />
                    Jl. Belimbing III, No. B8/8
                    <br />
                    Pondok Jagung Timur, Serpong Utara
                    <br />
                    Tangerang Selatan
                  </p>
                </div>
                <div className="h-px bg-white/10 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Contact Form */}
        <div className="w-full md:flex-grow bg-white/5 rounded-3xl p-8 md:p-12">
          <form className="space-y-8">
            <div className="space-y-4">
              <h3 className={`${inter.className} text-xl text-white/90 font-medium`}>Kirim Pesan</h3>
              <p className={`${inter.className} text-sm text-white/50`}>
                Isi form di bawah ini dan kami akan menghubungi Anda secepatnya.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/70">
                    Nama
                  </label>
                  <Input
                    id="name"
                    placeholder="Nama lengkap"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/70">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@perusahaan.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-white/70">
                  Perusahaan
                </label>
                <Input
                  id="company"
                  placeholder="Nama perusahaan"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/70">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan tentang proyek Anda..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[150px]"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full md:w-auto px-8 py-6 bg-white/10 hover:bg-white/15 text-white border-0"
            >
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 