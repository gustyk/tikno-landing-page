const plans = [
  {
    name: 'Starter',
    desc: 'Untuk usaha kecil yang baru memulai',
    price: 'Rp 15 Juta',
    period: 'paket',
    features: ['Gap Analysis', 'Dokumentasi Dasar QMS', '1x Internal Audit', 'Konsultasi Online'],
    highlight: false,
  },
  {
    name: 'Professional',
    desc: 'Pilihan terbaik untuk kebanyakan perusahaan',
    price: 'Rp 35 Juta',
    period: 'paket',
    features: [
      'Gap Analysis Mendalam',
      'Dokumentasi QMS Lengkap',
      '3x Internal Audit',
      'Pelatihan Karyawan',
      'Pendampingan Onsite',
      'Persiapan Audit Sertifikasi',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    desc: 'Untuk korporasi multi-site',
    price: 'Kustom',
    period: '',
    features: [
      'Multi-site Coverage',
      'Integrated Management System',
      'Unlimited Audit',
      'Dedicated Consultant',
      '24/7 Support',
      'Surveillance Tahunan',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-4">
            Investasi
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2A4A] mb-4">
            Pilih Paket yang Tepat
          </h2>
          <p className="text-stone-500 text-[15px] max-w-xl mx-auto">
            Harga transparan tanpa biaya tersembunyi. Konsultasi awal selalu gratis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-lg p-7 flex flex-col ${
                p.highlight
                  ? 'bg-[#1B2A4A] text-white ring-2 ring-[#C9A84C]'
                  : 'bg-white ring-1 ring-stone-200'
              }`}
            >
              <h3 className={`font-serif text-xl mb-1 ${p.highlight ? 'text-white' : 'text-[#1B2A4A]'}`}>
                {p.name}
              </h3>
              <p className={`text-sm mb-6 ${p.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                {p.desc}
              </p>
              <div className="mb-6">
                <span className="font-serif text-3xl">{p.price}</span>
                {p.period && (
                  <span className={`text-sm ml-1 ${p.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                    /{p.period}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-2.5 ${p.highlight ? 'text-stone-300' : 'text-stone-600'}`}>
                    <span className="mt-0.5 text-[#C9A84C]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-md text-sm font-semibold transition-colors ${
                  p.highlight
                    ? 'bg-white text-[#1B2A4A] hover:bg-stone-100'
                    : 'bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90'
                }`}
              >
                {p.name === 'Enterprise' ? 'Hubungi Kami' : 'Pilih Paket'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
