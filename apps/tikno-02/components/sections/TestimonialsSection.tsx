'use client';

const testimonials = [
  {
    quote:
      'Tim ISOConsult sangat profesional. Mereka mendampingi kami dari awal hingga sertifikasi. Proses yang sebelumnya terasa rumit menjadi sangat terstruktur.',
    name: 'Budi Santoso',
    role: 'Direktur Operasi, PT Maju Jaya',
    result: '100%',
    resultLabel: 'Sertifikasi Lulus',
  },
  {
    quote:
      'Dokumentasi QMS yang disusun sangat lengkap dan mudah diimplementasikan. Auditor eksternal pun terkesan dengan sistem yang kami bangun.',
    name: 'Sari Dewi',
    role: 'Quality Manager, CV Sukses Abadi',
    result: '3 Bulan',
    resultLabel: 'Proses Sertifikasi',
  },
  {
    quote:
      'Setelah sertifikasi ISO 9001, kepercayaan klien meningkat signifikan. Order naik 40% dalam 6 bulan. Investasi yang sangat worth it.',
    name: 'Ahmad Rizki',
    role: 'CEO, Perusahaan Manufaktur',
    result: '40%',
    resultLabel: 'Peningkatan Order',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-4">
            Testimonial
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            Dipercaya oleh{' '}
            <span className="text-gradient">500+ Klien</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-xl p-6 flex flex-col justify-between glass-hover">
              <div>
                <div className="text-3xl text-blue-500/30 mb-4">"</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.quote}</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-3 pt-4 border-t border-white/5">
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gradient">{t.result}</div>
                    <div className="text-xs text-gray-600">{t.resultLabel}</div>
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
