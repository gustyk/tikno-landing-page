'use client';

const regions = [
  { name: 'Jabodetabek', status: 'operational', nodes: '12+', label: 'Kantor & Mitra' },
  { name: 'Jawa Barat', status: 'operational', nodes: '8+', label: 'Tim Lapangan' },
  { name: 'Jawa Timur', status: 'operational', nodes: '6+', label: 'Kantor Cabang' },
  { name: 'Sumatera', status: 'operational', nodes: '5+', label: 'Mitra Daerah' },
  { name: 'Kalimantan', status: 'operational', nodes: '3+', label: 'Layanan Jarak Jauh' },
  { name: 'Sulawesi & Timur', status: 'operational', nodes: '4+', label: 'Layanan Online' },
];

const statusBadge: Record<string, string> = {
  operational: 'bg-green-500/10 text-green-400',
};

export function CoverageSection() {
  return (
    <section id="coverage" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-4">
              Cakupan
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">
              Melayani{' '}
              <span className="text-gradient">Seluruh</span>
              <br />
              Indonesia.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Layanan konsultasi ISO 9001:2015 menjangkau seluruh wilayah Indonesia.
              Didukung tim profesional dan mitra di berbagai kota.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: '34', label: 'Provinsi' },
                { value: '100%', label: 'Cakupan Nasional' },
                { value: '24 Jam', label: 'Respon Cepat' },
                { value: 'Online', label: 'Konsultasi Jarak Jauh' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-6">Region Coverage</h3>
            <div className="space-y-3">
              {regions.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
                    <span className="text-white text-sm font-medium">{r.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">{r.nodes} {r.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusBadge[r.status]}`}>
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
