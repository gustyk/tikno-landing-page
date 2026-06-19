'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { Magnet } from '@/components/ui/Magnet';
import { ContactButton } from '@/components/ui/ContactButton';

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      <FadeIn delay={0} y={-20} className="absolute inset-0">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">Tentang</a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Layanan</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Proyek</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Kontak</a>
        </nav>
      </FadeIn>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Tikno-01"
              className="w-full"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 pt-24">
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Tikno-01
            </h1>
          </div>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            Jasa pembuatan landing page profesional untuk bisnis Anda
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
