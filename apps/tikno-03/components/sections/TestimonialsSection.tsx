'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'Setelah bersekolah di KB TK IT Al Ibroh, anak kami menjadi lebih mandiri, bertanggung jawab, dan semakin gemar murojaah di rumah. Kami yakin hal ini berkat bimbingan ustadzah yang menumbuhkan kecintaan anak kami pada Al-Quran.',
    name: 'Moch Hasbi Maulana Habibie',
    role: 'Wali Murid',
  },
  {
    text: 'Harapan kami, semoga KB TK IT Al-Ibrah Gresik terus memberikan pendidikan dan fasilitas terbaik agar anak kami dapat belajar dengan gembira serta berprestasi di bidang akademik dan nonakademik.',
    name: 'Fara Mahira',
    role: 'Wali Murid',
  },
  {
    text: 'Selama tiga tahun bersekolah di sini, perkembangan Habibie sangat baik. Ia kini lebih mandiri, berani, dan siap melangkah ke jenjang berikutnya tanpa harus selalu didampingi orang tua.',
    name: 'Elvano Habibie Bagus',
    role: 'Wali Murid',
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-primary-50 overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10">
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/quote.png" alt="" className="w-24 h-24" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="inline-block bg-accent/10 text-accent-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-heading">
              Testimoni
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight">
              Saat Orang Tua Bicara
              <br />
              <span className="text-primary">dengan Hati</span>
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>
              <p className="text-dark/70 text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div>
                <p className="font-heading font-bold text-dark">{testimonials[current].name}</p>
                <p className="text-primary text-sm font-medium">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors shadow-md text-dark"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-primary w-6' : 'bg-dark/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors shadow-md text-dark"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
