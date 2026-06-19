'use client';

const plans = [
  {
    name: 'Basic',
    price: 'Rp 15',
    period: 'juta/paket',
    desc: 'Untuk UKM yang baru memulai sertifikasi ISO',
    features: ['Gap Analysis', 'Dokumentasi Dasar QMS', '1x Internal Audit', 'Pendampingan Online'],
    popular: false,
  },
  {
    name: 'Professional',
    price: 'Rp 35',
    period: 'juta/paket',
    desc: 'Untuk perusahaan menengah dengan kebutuhan lengkap',
    features: [
      'Gap Analysis Mendalam',
      'Dokumentasi QMS Lengkap',
      '3x Internal Audit',
      'Pelatihan Karyawan',
      'Pendampingan Onsite',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'hubungi kami',
    desc: 'Untuk korporasi dengan multi-site/sistem terintegrasi',
    features: [
      'Multi-site Coverage',
      'Integrated Management System',
      'Unlimited Audit',
      '24/7 Dedicated Support',
      'Pre-Audit Mock Assessment',
      'Surveillance Support',
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-blue-400 font-semibold tracking-widest uppercase mb-4">
            Harga
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            Investasi <span className="text-gradient">Terjangkau</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Harga transparan tanpa biaya tersembunyi. Dapatkan sertifikasi ISO 9001:2015
            dengan nilai terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass rounded-xl p-6 flex flex-col ${
                plan.popular ? 'border-blue-500/40 scale-105 glow' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full inline-block self-center mb-4">
                  Paling Laris
                </div>
              )}
              <h3 className="font-semibold text-white text-lg mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-500 glow-sm'
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Hubungi Kami' : 'Pilih Paket'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
