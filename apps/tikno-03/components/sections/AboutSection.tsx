'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingElement } from '@/components/ui/FloatingElement';
import { CrayonUnderline } from '@/components/ui/CrayonUnderline';
import { CrayonBorder } from '@/components/ui/CrayonBorder';
import { DoodleBackground } from '@/components/ui/DoodleBackground';
import { Sparkle } from '@/components/ui/Sparkle';

export function AboutSection() {
  return (
    <section id="tentang" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <DoodleBackground className="opacity-100" />

      <FloatingElement className="absolute top-10 right-10 opacity-15" duration={6}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/love.png" alt="" className="w-20 h-20" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-10 left-10 opacity-15" duration={5} delay={1}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/bee-1.png" alt="" className="w-16 h-16" />
      </FloatingElement>

      <Sparkle color="#F39F5F" size={16} className="absolute top-20 right-1/4 z-10" delay={0} />
      <Sparkle color="#4ECDC4" size={12} className="absolute bottom-32 left-1/3 z-10" delay={0.7} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <FadeIn>
              <CrayonBorder color="#F39F5F" variant="rough" className="p-3">
                <div className="relative rounded-3xl overflow-hidden">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                  <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/frame-1.png" alt="Dekorasi" className="absolute -top-4 -left-4 w-20 h-20 z-10 animate-float" />
                  <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/08/Hidayatul-Ilmia-S.Pd-.webp" alt="Kepala Sekolah" className="relative w-full rounded-3xl shadow-xl" />
                </div>
              </CrayonBorder>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.1}>
              <span className="inline-block bg-primary/10 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-heading animate-float">Tentang Kami</span>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight mb-3">
                Selamat Datang di<br /><span className="text-primary">KB TK IT Al-Ibrah</span>
              </h2>
            </FadeIn>
            <CrayonUnderline color="#F39F5F" variant="loop" width="220px" className="mb-6" />
            <FadeIn delay={0.2}>
              <p className="text-dark/70 leading-relaxed mb-6">
                Di KB-TK Al-Ibrah Gresik, setiap anak dibimbing dengan cinta dan nilai-nilai Islami. Kami menghadirkan lingkungan belajar yang kreatif, menyenangkan, dan penuh inspirasi, agar anak tumbuh menjadi pribadi yang cerdas, mandiri, serta berakhlak mulia.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <CrayonBorder color="#FF6B9D" variant="rough" className="p-4 mb-6">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-5">
                  <p className="text-dark/80 italic font-medium">&ldquo;Kami hadirkan program terbaik untuk mencetak generasi yang cerdas dan berakhlak.&rdquo;</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center animate-wiggle">
                      <span className="text-primary font-bold text-sm">HI</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-dark text-sm">Hidayatul Ilmia, S.Pd</p>
                      <p className="text-dark/60 text-xs">Kepala KB - TK Islam Terpadu Al Ibrah</p>
                    </div>
                  </div>
                </div>
              </CrayonBorder>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-3 gap-4">
                {[{ num: '500+', label: 'Alumni' }, { num: '15+', label: 'Tahun Pengalaman' }, { num: '3', label: 'Jenjang Pendidikan' }].map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                    <p className="font-heading font-bold text-2xl text-primary">{stat.num}</p>
                    <p className="text-dark/60 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}