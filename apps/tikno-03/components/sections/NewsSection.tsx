'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: '30 Siswa Hafidz Juz 30 Program Tahfidz Al Quran',
    date: '4 Mei 2026',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2026/05/Revisi-Fix-Billboard-Hafidz-Juz-30_295x495m-scaled.png',
    link: 'https://kbtkit-alibrahgresik.sch.id/30-siswa-hafidz-juz-30-program-tahfidz-al-quran/',
  },
  {
    title: 'Sentra Berbasis Montessori: Membentuk Kemandirian dan Kreativitas',
    date: '19 September 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/10/montesorri1.webp',
    link: 'https://kbtkit-alibrahgresik.sch.id/sentra-berbasis-montessori-membentuk-kemandirian-dan-kreativitas-anak-usia-dini/',
  },
  {
    title: 'Membiasakan Anak Cinta Al-Qur\'an Sejak Usia TK',
    date: '19 September 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/Membiasakan-Anak-Cinta-Al-Quran-Sejak-Usia-TK.webp',
    link: 'https://kbtkit-alibrahgresik.sch.id/membiasakan-anak-cinta-al-quran-sejak-usia-tk/',
  },
  {
    title: 'Pentingnya Pendidikan Islami Sejak Usia Dini',
    date: '17 September 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/Pentingnya-Pendidikan-Islami-Sejak-Usia-Dini.webp',
    link: 'https://kbtkit-alibrahgresik.sch.id/pentingnya-pendidikan-islami-sejak-usia-dini/',
  },
  {
    title: 'TK Unggulan untuk Anak Sholeh Sholehah di Gresik',
    date: '17 September 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/TK-Unggulan-untuk-Anak-Sholeh-Sholehah-di-Gresik.webp',
    link: 'https://kbtkit-alibrahgresik.sch.id/tk-unggulan-untuk-anak-sholeh-sholehah-di-gresik/',
  },
  {
    title: 'Sekolah TK dengan Program Tahfidz di Gresik',
    date: '17 September 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/Sekolah-TK-dengan-Program-Tahfidz-di-Gresik.webp',
    link: 'https://kbtkit-alibrahgresik.sch.id/sekolah-tk-dengan-program-tahfidz-di-gresik-menghafal-quran-sejak-usia-dini/',
  },
];

export function NewsSection() {
  return (
    <section id="berita" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block bg-leaf/20 text-leaf-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-heading">
              Berita & Inspirasi
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight mb-4">
              Kabar dan Cerita
              <br />
              <span className="text-primary">Kami</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-dark/50 text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-dark text-sm leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-xs font-heading group-hover:gap-2 transition-all">
                    Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
