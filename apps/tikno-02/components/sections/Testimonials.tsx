const testimonials = [
  {
    quote:
      'Proses sertifikasi yang kami khawatirkan selama ini ternyata sangat terstruktur dengan pendampingan QMSConsult. Hasilnya? Lulus audit eksternal di tahap pertama.',
    name: 'Dewi Kartika',
    role: 'Quality Manager',
    company: 'PT Manufaktur Sejahtera',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
  {
    quote:
      'Dokumentasi yang disusun sangat rapi dan relevan dengan operasional kami. Tim mereka benar-benar memahami kebutuhan industri manufaktur.',
    name: 'Rizky Pratama',
    role: 'Direktur Operasional',
    company: 'CV Teknik Maju',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    quote:
      'Setelah bersertifikat ISO 9001, kepercayaan mitra bisnis meningkat signifikan. Kontrak baru yang kami dapatkan naik 35% dalam setahun.',
    name: 'Sari Nurhaliza',
    role: 'CEO',
    company: 'PT Berkah Logam',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80',
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-4">
            Testimoni
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2A4A]">
            Kata Mereka yang Sudah Bekerja Sama
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#F8F6F1] rounded-lg p-7 flex flex-col">
              <div className="font-serif text-4xl text-[#C9A84C]/30 mb-2 leading-none">&ldquo;</div>
              <p className="text-stone-600 text-[15px] leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-stone-200">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-[#1B2A4A]">{t.name}</div>
                  <div className="text-xs text-stone-500">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
