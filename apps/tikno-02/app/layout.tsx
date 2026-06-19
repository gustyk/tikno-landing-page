import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'QMSConsult — Konsultan ISO 9001:2015',
  description:
    'Konsultan ISO 9001:2015 profesional. Pendampingan implementasi Quality Management System hingga sertifikasi untuk perusahaan di seluruh Indonesia.',
  openGraph: {
    title: 'QMSConsult — Konsultan ISO 9001:2015',
    description: 'Konsultan ISO 9001:2015 profesional untuk sertifikasi QMS perusahaan Anda.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
