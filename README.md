# Tikno Showcase

Monorepo untuk showcase landing page Tikno menggunakan Next.js.

## Struktur

```
tikno-showcase/
├── apps/              # Aplikasi Next.js untuk setiap landing page
│   ├── tikno-01/
│   ├── tikno-02/
│   └── ...
├── packages/          # Shared packages
│   ├── ui/           # Komponen UI bersama
│   ├── config/       # Konfigurasi bersama
│   └── utils/        # Utility functions
├── package.json
├── turbo.json
└── tsconfig.json
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Run specific landing page
pnpm --filter tikno-01 dev

# Run all landing pages
pnpm dev

# Build all
pnpm build
```

## Menambah Landing Page Baru

1. Copy folder `apps/tikno-01` menjadi `apps/tikno-XX`
2. Update `name` di `package.json` dalam folder tersebut
3. Sesuaikan konten landing page
4. Jalankan `pnpm install` untuk mendaftarkan workspace baru

## Shared Packages

- **@tikno/ui**: Komponen UI yang dapat digunakan ulang
- **@tikno/config**: Konfigurasi TypeScript, Tailwind, dan lainnya
- **@tikno/utils**: Helper functions dan utilities
