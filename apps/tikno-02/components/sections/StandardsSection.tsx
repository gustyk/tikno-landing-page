'use client';

const standards = [
  { name: 'ISO 9001:2015', category: 'QMS', desc: 'Quality Management System' },
  { name: 'ISO 14001:2015', category: 'EMS', desc: 'Environmental Management' },
  { name: 'ISO 45001:2018', category: 'OH&S', desc: 'Occupational Health & Safety' },
  { name: 'ISO 22000:2018', category: 'FSMS', desc: 'Food Safety Management' },
  { name: 'ISO 27001:2022', category: 'ISMS', desc: 'Information Security' },
  { name: 'ISO 37001:2016', category: 'ABMS', desc: 'Anti-Bribery Management' },
];

const integrations = [
  { name: 'Kemenperin', category: 'Pemerintah' },
  { name: 'KAN', category: 'Akreditasi' },
  { name: 'BNSP', category: 'Sertifikasi' },
  { name: 'KADIN', category: 'Asosiasi' },
];

export function StandardsSection() {
  return (
    <section id="standards" className="py-24 sm:py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-4">
            Standar & Integrasi
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            Multi-<span className="text-gradient">Standar</span> Terintegrasi
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tidak hanya ISO 9001. Kami juga membantu integrasi dengan standar lain untuk
            sistem manajemen yang lebih komprehensif.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold text-white mb-6">Standar yang Didukung</h3>
            <div className="grid grid-cols-2 gap-4">
              {standards.map((s) => (
                <div key={s.name} className="glass rounded-xl p-4 glass-hover">
                  <div className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full inline-block mb-2">
                    {s.category}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{s.name}</h4>
                  <p className="text-gray-500 text-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Terkoneksi dengan</h3>
            <div className="grid grid-cols-2 gap-4">
              {integrations.map((i) => (
                <div
                  key={i.name}
                  className="glass rounded-xl p-4 text-center glass-hover flex flex-col items-center justify-center min-h-[100px]"
                >
                  <div className="font-semibold text-white text-sm mb-1">{i.name}</div>
                  <div className="text-xs text-gray-500">{i.category}</div>
                </div>
              ))}
              {['100+', 'OAuth', 'Webhooks'].map((label) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 text-center glass-hover flex flex-col items-center justify-center min-h-[100px]"
                >
                  <div className="text-xl font-bold text-gradient mb-1">
                    {label === '100+' ? label : '✓'}
                  </div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 mt-4">
              Lihat semua standar →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
