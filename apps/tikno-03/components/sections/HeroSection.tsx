'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingElement } from '@/components/ui/FloatingElement';
import { CrayonUnderline } from '@/components/ui/CrayonUnderline';
import { Sparkle } from '@/components/ui/Sparkle';
import { ChevronLeft, ChevronRight, Phone, Menu, X } from 'lucide-react';

const slides = [
  {
    title: 'Belajar Menyenangkan,\nAkhlak Jadi Landasan',
    desc: 'Di Al Ibrah, anak belajar bukan sekadar membaca dan berhitung tetapi juga membentuk karakter sejak dini. Nilai-nilai Islam ditanamkan dengan cinta dan keteladanan.',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/08/web5.webp',
    bg: 'from-primary-100 to-sun-100',
  },
  {
    title: 'Ruang Penuh Warna,\nAnak Penuh Ide',
    desc: 'Kami percaya setiap anak adalah pembelajar alami. Kegiatan tematik, seni, sains, dan motorik kami kemas secara kreatif agar tumbuh kembang optimal.',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/bawa.webp',
    bg: 'from-accent-100 to-primary-100',
  },
  {
    title: 'Adab Dulu,\nIlmu Kemudian',
    desc: 'Tahfidz harian, praktik ibadah, serta bimbingan akhlak menjadi bagian dari rutinitas. Karena generasi yang hebat lahir dari hati yang mulia.',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/bawa.webp',
    bg: 'from-sky-100 to-leaf-100',
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].bg}`}
        />
      </AnimatePresence>

      {/* Sparkles */}
      <Sparkle color="#F39F5F" size={18} className="absolute top-32 left-[15%] z-10" delay={0} />
      <Sparkle color="#FF6B9D" size={14} className="absolute top-24 right-[20%] z-10" delay={0.6} />
      <Sparkle color="#4ECDC4" size={16} className="absolute bottom-48 left-[25%] z-10" delay={1.2} />
      <Sparkle color="#FFE66D" size={20} className="absolute bottom-36 right-[15%] z-10" delay={0.3} />
      <Sparkle color="#95E06C" size={12} className="absolute top-1/2 right-[10%] z-10" delay={0.9} />

      <FloatingElement className="absolute top-20 left-8 opacity-20" duration={4}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/love.png" alt="" className="w-12 h-12" />
      </FloatingElement>
      <FloatingElement className="absolute top-40 right-12 opacity-20" duration={5} delay={1}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/bee-1.png" alt="" className="w-14 h-14" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-16 opacity-20" duration={6} delay={2}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/parasuit-1.png" alt="" className="w-16 h-16" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-32 right-8 opacity-20" duration={4.5} delay={0.5}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/pencil-3-1.png" alt="" className="w-12 h-12" />
      </FloatingElement>

      <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 lg:px-16 pt-6">
        <FadeIn delay={0}>
          <a href="/" className="flex items-center gap-2 group">
            <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2026/05/logoiconbaru.png" alt="Al-Ibrah Logo" className="w-12 h-12 md:w-14 md:h-14 group-hover:animate-wiggle transition-transform" />
          </a>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="hidden lg:flex items-center gap-8 font-heading font-semibold text-dark">
            <a href="#tentang" className="hover:text-primary transition-colors hover:animate-scribble">Tentang Kami</a>
            <a href="#program" className="hover:text-primary transition-colors">Program</a>
            <a href="#prestasi" className="hover:text-primary transition-colors">Prestasi</a>
            <a href="#berita" className="hover:text-primary transition-colors">Berita</a>
            <a href="#kontak" className="hover:text-primary transition-colors">Kontak</a>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/6285714212598" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-primary-600 transition-colors hover:animate-wiggle">
              <Phone className="w-4 h-4" />Konsultasi
            </a>
            <a href="http://forms.gle/ZkN3QVZ2jorjwj8s6" className="bg-accent text-white px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-accent-600 transition-colors">
              Daftar Sekarang
            </a>
          </div>
        </FadeIn>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg bg-white/50">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-20 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm shadow-lg mx-4 rounded-2xl p-6 lg:hidden">
            <div className="flex flex-col gap-4 font-heading font-semibold text-dark">
              <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Tentang Kami</a>
              <a href="#program" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Program</a>
              <a href="#prestasi" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Prestasi</a>
              <a href="#berita" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Berita</a>
              <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Kontak</a>
              <div className="flex gap-3 pt-2">
                <a href="https://wa.me/6285714212598" className="flex-1 text-center bg-primary text-white px-4 py-2.5 rounded-full font-semibold text-sm">Konsultasi</a>
                <a href="http://forms.gle/ZkN3QVZ2jorjwj8s6" className="flex-1 text-center bg-accent text-white px-4 py-2.5 rounded-full font-semibold text-sm">Daftar</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 md:pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                <span className="inline-block bg-primary/20 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-heading animate-float">KB TK IT Al-Ibrah Gresik</span>
                <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-dark leading-tight mb-4 whitespace-pre-line">{slides[current].title}</h1>
                <CrayonUnderline color="#F39F5F" variant="scribble" width="200px" className="mb-6" />
                <p className="text-dark/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">{slides[current].desc}</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://wa.me/6285714212598" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-heading font-semibold hover:bg-primary-600 transition-colors shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5">
                    <Phone className="w-4 h-4" />Konsultasi Sekarang
                  </a>
                  <a href="#program" className="inline-flex items-center gap-2 bg-white text-dark px-6 py-3 rounded-full font-heading font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200 hover:border-primary">
                    Lihat Program
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, scale: 0.9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.5 }} className="relative animate-scribble">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-color-shift" />
                <img src={slides[current].img} alt="Anak-anak belajar" className="relative w-[300px] sm:w-[380px] md:w-[450px] lg:w-[500px] h-auto object-contain drop-shadow-2xl" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md hover:scale-110">
            <ChevronLeft className="w-5 h-5 text-dark" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all ${i === current ? 'bg-primary w-8 h-3 animate-pulse' : 'bg-dark/20 w-3 h-3 hover:bg-dark/40'}`} />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md hover:scale-110">
            <ChevronRight className="w-5 h-5 text-dark" />
          </button>
        </div>
      </div>
    </section>
  );
}