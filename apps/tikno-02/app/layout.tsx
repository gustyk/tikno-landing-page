import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'ISO 9001:2015 Consulting | Sertifikasi & Implementasi Profesional',
  description:
    'Konsultan ISO 9001:2015 profesional. Kami membantu perusahaan Anda meraih sertifikasi QMS dengan proses yang terstruktur, dokumentasi lengkap, dan pendampingan hingga lulus audit.',
  openGraph: {
    title: 'ISO 9001:2015 Consulting',
    description: 'Konsultan ISO 9001:2015 profesional untuk sertifikasi QMS perusahaan Anda',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased bg-gray-950 text-white">{children}</body>
    </html>
  );
}
