import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tikno-01 | Landing Page',
  description: 'Tikno landing page showcase - made with Next.js',
  openGraph: {
    title: 'Tikno-01',
    description: 'Tikno landing page showcase',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
