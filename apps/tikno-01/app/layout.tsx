import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tikno-01 | Jasa Pembuatan Landing Page',
  description: 'Tikno-01 menawarkan jasa pembuatan landing page profesional dengan desain modern, performa tinggi, dan konversi optimal.',
  openGraph: {
    title: 'Tikno-01 | Jasa Pembuatan Landing Page',
    description: 'Jasa pembuatan landing page profesional dengan desain modern dan performa tinggi.',
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
