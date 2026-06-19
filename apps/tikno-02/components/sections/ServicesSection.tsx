'use client';

const services = [
  {
    icon: '🔍',
    title: 'Gap Analysis',
    desc: 'Evaluasi kesenjangan sistem mutu perusahaan Anda terhadap persyaratan ISO 9001:2015 secara menyeluruh.',
    stat: '100%',
    statLabel: 'Cakupan Audit',
  },
  {
    icon: '📋',
    title: 'Dokumentasi QMS',
    desc: 'Pembuatan dokumen Quality Management System termasuk Quality Manual, SOP, dan formulir pendukung.',
    stat: '200+',
    statLabel: 'Dokumen Siap',
  },
  {
    icon: '⚙️',
    title: 'Implementasi',
    desc: 'Pendampingan implementasi sistem mutu di seluruh lini operasional perusahaan Anda.',
    stat: '100%',
    statLabel: 'Implementasi Terbimbing',
  },
  {
    icon: '✅',
    title: 'Internal Audit',
    desc: 'Pelaksanaan audit internal untuk memastikan kesiapan perusahaan sebelum audit sertifikasi.',
    stat: '10+',
    statLabel: 'Auditor Berpengalaman',
  },
  {
    icon: '🏆',
    title: 'Sertifikasi',
    desc: 'Pendampingan penuh hingga perusahaan Anda dinyatakan lulus dan meraih sertifikasi ISO 9001:2015.',
    stat: '98%',
    statLabel: 'Tingkat Kelulusan',
  },
  {
    icon: '📈',
    title: 'Surveillance',
    desc: 'Dukungan berkelanjutan untuk surveillance audit dan pemeliharaan sistem mutu.',
    stat: '24/7',
    statLabel: 'Dukungan',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-4">
            Layanan
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            Solusi <span className="text-gradient">Lengkap</span> ISO 9001
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dari awal hingga sertifikasi, kami mendampingi setiap langkah dengan tim auditor
            profesional dan berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-xl p-6 glass-hover group"
            >
              <div className="text-3xl mb-4" role="img" aria-label={s.title}>
                {s.icon}
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gradient">{s.stat}</span>
                <span className="text-xs text-gray-600">{s.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
