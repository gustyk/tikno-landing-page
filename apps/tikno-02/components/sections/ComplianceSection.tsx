'use client';

const features = [
  {
    icon: '🛡️',
    title: 'Dokumen Terjamin',
    desc: 'Seluruh dokumentasi QMS disusun sesuai standar dan telah terverifikasi oleh tim legal kami.',
  },
  {
    icon: '🔒',
    title: 'Data Terenkripsi',
    desc: 'Data perusahaan Anda diamankan dengan enkripsi tingkat tinggi, baik saat penyimpanan maupun transmisi.',
  },
  {
    icon: '📜',
    title: 'Audit Trail Lengkap',
    desc: 'Setiap proses terdokumentasi dan dapat diaudit kapan saja untuk menjamin transparansi.',
  },
  {
    icon: '👁️',
    title: 'Hak Akses Terbatas',
    desc: 'Prinsip least privilege diterapkan untuk memastikan keamanan data klien.',
  },
];

const badges = ['KAN', 'BNSP', 'ISO 27001', 'GDPR', 'HIPAA', 'Sertifikat Elektronik'];

export function ComplianceSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-4">
              Kepatuhan
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">
              Profesional,{' '}
              <span className="text-gradient">Terkendali</span>
              , Terpercaya.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Kami menjalankan setiap proyek dengan standar kepatuhan tertinggi.
              Data Anda aman, proses terjamin, dan hasil terukur.
            </p>

            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1.5 rounded-full glass text-gray-400"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass rounded-xl p-5 glass-hover">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
