import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'KB TK IT Al-Ibrah Gresik | Sekolah Islam Terpadu',
  description: 'KB TK IT Al-Ibrah Gresik - Belajar Menyenangkan, Akhlak Jadi Landasan. Pendidikan Islam terpadu untuk usia dini dengan Kurikulum Merdeka, Montessori, dan Tahfidz Al-Quran.',
  openGraph: {
    title: 'KB TK IT Al-Ibrah Gresik',
    description: 'Pendidikan Islam terpadu untuk usia dini',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-cream">{children}</body>
    </html>
  );
}
