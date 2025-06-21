# Luma Digital

Website perusahaan Luma Digital yang menampilkan layanan dan portofolio proyek teknologi.

## Teknologi yang Digunakan

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI Components

## Struktur Proyek

```
dynamic-frame-layout/
├── app/                  # Next.js app router
├── components/           # React components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
│   ├── videos/          # Video showcase
│   └── frames/          # Frame assets
└── styles/              # Global styles
```

## Cara Menjalankan Proyek

1. Install dependencies:
```bash
pnpm install
```

2. Siapkan asset video:
- Letakkan video showcase di folder `public/videos/` dengan nama file:
  - web-development.mp4
  - mobile-app.mp4
  - ai-solution.mp4
  - cloud-computing.mp4
  - blockchain.mp4
  - cybersecurity.mp4
  - iot.mp4
  - data-analytics.mp4
  - enterprise-solutions.mp4

3. Siapkan frame assets:
- Letakkan frame assets di folder `public/frames/frame[1-9]/` dengan struktur:
  - corner.png
  - horizontal.png
  - vertical.png

4. Jalankan development server:
```bash
pnpm dev
```

5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Kustomisasi

### Mengubah Konten
- Edit teks di `app/page.tsx`
- Edit video showcase di `components/DynamicFrameLayout.tsx`

### Mengubah Tampilan
- Edit styles di `app/globals.css`
- Edit tema di `components/theme-provider.tsx`
- Edit komponen UI di `components/ui/`

## Fitur

- Layout grid dinamis dengan 9 frame video
- Animasi hover yang smooth
- Responsif untuk mobile dan desktop
- Tema gelap modern
- Komponen UI yang dapat dikustomisasi

## Lisensi

© 2024 Luma Digital. All rights reserved. 