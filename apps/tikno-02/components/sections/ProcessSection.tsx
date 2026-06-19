'use client';

const steps = [
  {
    number: '01',
    title: 'Assessment',
    desc: 'Kami menganalisis sistem mutu perusahaan Anda saat ini dan mengidentifikasi kesenjangan terhadap standar ISO 9001:2015.',
    tag: 'Diagnosis',
  },
  {
    number: '02',
    title: 'Dokumentasi',
    desc: 'Tim kami menyusun seluruh dokumen QMS yang diperlukan, disesuaikan dengan kebutuhan spesifik perusahaan Anda.',
    tag: 'Persiapan',
  },
  {
    number: '03',
    title: 'Implementasi',
    desc: 'Kami mendampingi penerapan sistem mutu di seluruh area operasional dengan pelatihan dan bimbingan langsung.',
    tag: 'Eksekusi',
  },
  {
    number: '04',
    title: 'Audit & Sertifikasi',
    desc: 'Audit internal, persiapan menghadapi auditor eksternal, dan pendampingan penuh hingga sertifikat ISO diraih.',
    tag: 'Sertifikasi',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-4">
            Proses
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            Cara <span className="text-gradient">Kami Bekerja</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Metodologi terstruktur yang telah teruji untuk memastikan sertifikasi ISO 9001:2015
            berjalan lancar dan efisien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="glass rounded-xl p-6 h-full glass-hover">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-gradient">{step.number}</span>
                  <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {step.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
