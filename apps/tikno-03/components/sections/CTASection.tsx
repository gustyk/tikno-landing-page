'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingElement } from '@/components/ui/FloatingElement';
import { CrayonUnderline } from '@/components/ui/CrayonUnderline';
import { Sparkle } from '@/components/ui/Sparkle';
import { Phone, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="kontak" className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-primary-600 overflow-hidden">
      <FloatingElement className="absolute top-10 left-10 opacity-20" duration={4}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/love.png" alt="" className="w-16 h-16 invert" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-10 right-10 opacity-20" duration={5} delay={1}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/bee-1.png" alt="" className="w-14 h-14 invert" />
      </FloatingElement>

      <Sparkle color="#FFE66D" size={18} className="absolute top-16 left-1/4 z-10" delay={0} />
      <Sparkle color="#FFFFFF" size={14} className="absolute top-24 right-1/4 z-10" delay={0.5} />
      <Sparkle color="#FFE66D" size={16} className="absolute bottom-32 left-1/3 z-10" delay={1} />
      <Sparkle color="#FFFFFF" size={12} className="absolute bottom-20 right-1/3 z-10" delay={0.3} />

      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
        <FadeIn>
          <div className="relative inline-block">
            <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/bawa.webp" alt="Anak-anak" className="w-48 h-auto mx-auto mb-8 drop-shadow-2xl animate-float-slow" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-3">
            Belajar Ceria, Tumbuh dengan<br />Iman dan Akhlak Mulia
          </h2>
        </FadeIn>
        <div className="flex justify-center mb-6">
          <CrayonUnderline color="#FFFFFF" variant="scribble" width="200px" />
        </div>
        <FadeIn delay={0.15}>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Daftarkan putra-putri Anda di KB TK IT Al-Ibrah Gresik dan saksikan perkembangan luar biasa mereka.</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="http://forms.gle/ZkN3QVZ2jorjwj8s6" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-heading font-bold hover:bg-cream transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Daftar Sekarang <ArrowRight className="w-4 h-4 animate-wiggle" />
            </a>
            <a href="https://wa.me/6285714212598" className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-3.5 rounded-full font-heading font-bold hover:bg-white/30 transition-all border-2 border-white/30 hover:border-white">
              <Phone className="w-4 h-4" /> 0857 1421 2598
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}