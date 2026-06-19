'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { FloatingElement } from '@/components/ui/FloatingElement';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    name: 'Kelompok Bermain Junior',
    age: 'Usia 2-3 Tahun',
    desc: 'Belajar sambil bermain, menumbuhkan rasa ingin tahu, dan membangun kecintaan pada ilmu sejak dini.',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/08/program3-768x768.webp',
    color: 'from-accent-400 to-primary-400',
    link: 'https://kbtkit-alibrahgresik.sch.id/kb-junior/',
  },
  {
    name: 'Kelompok Bermain Senior',
    age: 'Usia 3-4 Tahun',
    desc: 'Menumbuhkan kemandirian dan kreativitas anak melalui kegiatan tematik yang menyenangkan.',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/08/program6-768x768.webp',
    color: 'from-sky-400 to-leaf-400',
    link: 'https://kbtkit-alibrahgresik.sch.id/kb-senior/',
  },
  {
    name: 'Taman Kanak-Kanak',
    age: 'Usia 4-6 Tahun',
    desc: 'Pembelajaran mendalam yang menumbuhkan kreativitas, kepercayaan diri, dan kemandirian.',
    img: 'https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2025/08/program-8-768x768.webp',
    color: 'from-sun-400 to-primary-400',
    link: 'https://kbtkit-alibrahgresik.sch.id/tk/',
  },
];

export function ProgramsSection() {
  return (
    <section id="program" className="relative py-20 md:py-28 bg-gradient-to-b from-cream to-white overflow-hidden">
      <FloatingElement className="absolute top-16 left-8 opacity-15" duration={5}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/parasuit-1.png" alt="" className="w-16 h-16" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-16 right-8 opacity-15" duration={6} delay={1}>
        <img src="https://kbtkit-alibrahgresik.sch.id/wp-content/uploads/2024/05/hand.png" alt="" className="w-14 h-14" />
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block bg-sky/20 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-heading">
              Jenjang Pendidikan
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight mb-4">
              Menumbuhkan Potensi Lewat
              <br />
              <span className="text-primary">Program Unggulan</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-dark/60 max-w-xl mx-auto">
              Kami hadirkan program terbaik untuk mencetak generasi yang cerdas dan berakhlak mulia.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <FadeIn key={program.name} delay={i * 0.1}>
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className={`relative h-56 bg-gradient-to-br ${program.color} overflow-hidden`}>
                  <img
                    src={program.img}
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-dark px-3 py-1 rounded-full text-xs font-semibold font-heading">
                      {program.age}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2 group-hover:text-primary transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-dark/60 text-sm leading-relaxed mb-4">
                    {program.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm font-heading group-hover:gap-2 transition-all">
                    Selengkapnya <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Curriculum features */}
        <FadeIn delay={0.3}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🎓', title: 'Kurikulum Merdeka', desc: 'Belajar sesuai minat dan kemampuan anak' },
              { icon: '🏫', title: 'Jaringan JSIT', desc: 'Tergabung dalam jaringan sekolah Islam nasional' },
              { icon: '🧩', title: 'Metode Montessori', desc: 'Belajar alami dan menyenangkan' },
            ].map((f) => (
              <div key={f.title} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-dark text-sm">{f.title}</h4>
                  <p className="text-dark/60 text-xs">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
