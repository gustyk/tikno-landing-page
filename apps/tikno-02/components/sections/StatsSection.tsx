'use client';

const stats = [
  { value: '500+', label: 'Klien Tersertifikasi' },
  { value: '15+', label: 'Tahun Pengalaman' },
  { value: '10', label: 'Auditor Bersertifikat' },
  { value: '98%', label: 'Tingkat Kepuasan' },
];

export function StatsSection() {
  return (
    <section className="relative -mt-24 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
