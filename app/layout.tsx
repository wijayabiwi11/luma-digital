import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Luma Digital",
  description: "Solusi teknologi inovatif untuk era digital",
  generator: 'Next.js',
  icons: {
    icon: '/placeholder.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  )
}
