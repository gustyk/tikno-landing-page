'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingElement } from '@/components/ui/FloatingElement';
import { CrayonUnderline } from '@/components/ui/CrayonUnderline';
import { DoodleBackground } from '@/components/ui/DoodleBackground';
import { Sparkle } from '@/components/ui/Sparkle';
import { Trophy, Medal, Award } from 'lucide-react';

const achievements = [
  {
    name: 'Mika',
    title: 'Medali Perunggu Kejuaraan Sepatu Roda Provinsi Jawa Timur 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/482003275_18351262909194022_506585677089690761_n-768x768.webp',
    icon: <Medal className="w-5 h-5" />,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    name: 'Khaira',
    title: 'Medali Perak di Olimpiade Omni Sains Indonesia 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/482839520_18352682947194022_9129164313526421739_n-768x768.webp',
    icon: <Trophy className="w-5 h-5" />,
    color: 'bg-gray-100 text-gray-600',
  },
  {
    name: 'Aliya',
    title: 'Medali Perunggu Olimpiade Omni Sains Indonesia 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/483085484_18352804450194022_7870406409100805984_n-768x768.webp',
    icon: <Medal className="w-5 h-5" />,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    name: 'Qiana',
    title: 'Medali Perak Olimpiade Omni Sains Indonesia 2025',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/prestasi3-768x768.webp',
    icon: <Trophy className="w-5 h-5" />,
    color: 'bg-gray-100 text-gray-600',
  },
  {
    name: 'Galen',
    title: 'Juara Harapan 1 Lomba Sains TK B Tingkat Nasional',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/prestasi2-768x768.jpg',
    icon: <Award className="w-5 h-5" />,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    name: 'Ilsa Safarina Adnin',
    title: 'Medali Emas Olimpiade Omni Sains Indonesia 2 (OSI 2) 2025-2026',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-16-at-14.06.24-768x960.jpeg',
    icon: <Trophy className="w-5 h-5" />,
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export function AchievementsSection() {
  return (
    <section id="prestasi" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <DoodleBackground className="opacity-80" />

      <FloatingElement className="absolute top-10 left-10 opacity-10" duration={5}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/love.png" alt="" className="w-16 h-16" />
      </FloatingElement>

      <Sparkle color="#FFE66D" size={14} className="absolute top-24 right-20 z-10" delay={0} />
      <Sparkle color="#F39F5F" size={16} className="absolute bottom-32 left-10 z-10" delay={0.5} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block bg-sun/30 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-heading animate-float-slow">
              Prestasi Siswa & Ustadzah
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight mb-3">
              Menginspirasi, Mengukir<br /><span className="text-primary">Capaian Gemilang</span>
            </h2>
          </FadeIn>
          <div className="flex justify-center">
            <CrayonUnderline color="#FFE66D" variant="zigzag" width="200px" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <FadeIn key={a.name} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-3 right-3 ${a.color} p-2 rounded-full group-hover:animate-wiggle`}>
                    {a.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-dark mb-1">{a.name}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{a.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}