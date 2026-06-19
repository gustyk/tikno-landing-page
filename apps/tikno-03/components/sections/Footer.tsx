'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import { CrayonDivider } from '@/components/ui/CrayonDivider';

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <CrayonDivider color="#F39F5F" bgColor="#2D2D2D" variant="scribble" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <FadeIn>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2026/05/logoiconbaru.png" alt="Al-Ibrah" className="w-10 h-10" />
                <span className="font-heading font-bold text-lg">KB TK IT Al-Ibrah</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">Membina Generasi Kreatif Berakhlak Mulia.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <h4 className="font-heading font-bold mb-4">Jenjang Pendidikan</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="https://kbtkit-alibrahgresik.sch.id/kb-junior/" className="hover:text-primary transition-colors">KB Junior</a></li>
                <li><a href="https://kbtkit-alibrahgresik.sch.id/kb-senior/" className="hover:text-primary transition-colors">KB Senior</a></li>
                <li><a href="https://kbtkit-alibrahgresik.sch.id/tk/" className="hover:text-primary transition-colors">TK A</a></li>
                <li><a href="https://kbtkit-alibrahgresik.sch.id/tk-b/" className="hover:text-primary transition-colors">TK B</a></li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <h4 className="font-heading font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="https://kbtkit-alibrahgresik.sch.id/tentang-kami/" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                <li><a href="https://kbtkit-alibrahgresik.sch.id/prestasi/" className="hover:text-primary transition-colors">Prestasi</a></li>
                <li><a href="https://kbtkit-alibrahgresik.sch.id/berita/" className="hover:text-primary transition-colors">Berita</a></li>
                <li><a href="https://kbtkit-alibrahgresik.sch.id/kontak/" className="hover:text-primary transition-colors">Kontak</a></li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <h4 className="font-heading font-bold mb-4">Kontak</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <a href="https://maps.app.goo.gl/Lj8xu1yQhkvoDFuh6" className="hover:text-primary transition-colors">Jl. Arif Rahman Hakim No.20-22 Gresik, Jawa Timur</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="https://wa.me/6285714212598" className="hover:text-primary transition-colors">0857 1421 2598</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:info@kbtkit-alibrahgresik.sch.id" className="hover:text-primary transition-colors">info@kbtkit-alibrahgresik.sch.id</a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="https://www.instagram.com/kbtkit_alibrah/" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} KB TK IT Al-Ibrah Gresik. All rights reserved.</p>
          <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/12/logo-jsit-alibrah-gresik-footer.webp" alt="JSIT" className="h-8 opacity-60" />
        </div>
      </div>
    </footer>
  );
}