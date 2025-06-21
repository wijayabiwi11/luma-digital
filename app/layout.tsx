import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Luma Digital",
  description: "Solusi teknologi inovatif untuk era digital",
  generator: 'Next.js',
  viewport: 'width=device-width, initial-scale=1',
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
