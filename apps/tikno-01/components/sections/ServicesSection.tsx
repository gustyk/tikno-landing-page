'use client';

import { FadeIn } from '@/components/ui/FadeIn';

const services = [
  {
    num: '01',
    name: 'Desain UI/UX',
    desc: 'Pembuatan antarmuka yang intuitif dan menarik secara visual untuk meningkatkan pengalaman pengguna dan konversi bisnis Anda.',
  },
  {
    num: '02',
    name: 'Pengembangan Web',
    desc: 'Pembangunan landing page dengan teknologi modern yang responsif, cepat, dan kompatibel di semua perangkat.',
  },
  {
    num: '03',
    name: 'Optimasi Performa',
    desc: 'Optimasi kecepatan loading, Core Web Vitals, dan performa teknis untuk pengalaman pengguna yang mulus.',
  },
  {
    num: '04',
    name: 'Integrasi CMS',
    desc: 'Integrasi sistem manajemen konten sehingga Anda dapat mengupdate konten landing page secara mandiri.',
  },
  {
    num: '05',
    name: 'SEO & Analitik',
    desc: 'Optimasi mesin pencari dan integrasi analitik untuk melacak performa serta mengoptimalkan konversi.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Layanan
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <div className="flex flex-col sm:flex-row items-baseline gap-4 sm:gap-8 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0">
              <span className="font-black text-[#0C0C0C] shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {s.num}
              </span>
              <div className="flex-1">
                <h3 className="font-medium uppercase mb-2 text-[#0C0C0C]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {s.name}
                </h3>
                <p className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
