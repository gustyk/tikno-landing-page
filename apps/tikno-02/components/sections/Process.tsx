const steps = [
  {
    num: '01',
    title: 'Konsultasi Awal',
    desc: 'Kami memahami kondisi bisnis Anda, kebutuhan sertifikasi, dan merancang langkah strategis.',
  },
  {
    num: '02',
    title: 'Gap Analysis',
    desc: 'Identifikasi kesenjangan antara sistem saat ini dan persyaratan ISO 9001:2015.',
  },
  {
    num: '03',
    title: 'Dokumentasi',
    desc: 'Penyusunan seluruh dokumen QMS: manual, prosedur, instruksi kerja, dan formulir.',
  },
  {
    num: '04',
    title: 'Implementasi',
    desc: 'Penerapan di lapangan beserta pelatihan karyawan di setiap unit kerja.',
  },
  {
    num: '05',
    title: 'Audit Internal',
    desc: 'Simulasi audit oleh tim kami untuk memastikan kesiapan sebelum audit sertifikasi.',
  },
  {
    num: '06',
    title: 'Sertifikasi',
    desc: 'Pendampingan saat audit eksternal hingga sertifikat ISO 9001:2015 diterbitkan.',
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-4">
            Proses Kerja
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2A4A] mb-4">
            Langkah Menuju Sertifikasi
          </h2>
          <p className="text-stone-500 text-[15px] max-w-xl mx-auto">
            Metodologi terstruktur yang telah terbukti membawa ratusan perusahaan
            meraih sertifikasi ISO 9001:2015.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#F8F6F1] p-7 lg:p-8 group hover:bg-white transition-colors">
              <span className="font-serif text-3xl text-[#C9A84C]/40 group-hover:text-[#C9A84C] transition-colors">
                {s.num}
              </span>
              <h3 className="font-serif text-xl text-[#1B2A4A] mt-3 mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
