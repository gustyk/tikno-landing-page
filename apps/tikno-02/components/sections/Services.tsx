const services = [
  {
    num: '01',
    title: 'Gap Analysis',
    desc: 'Evaluasi menyeluruh terhadap kondisi sistem mutu Anda saat ini dan kesenjangan terhadap persyaratan ISO 9001:2015.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    num: '02',
    title: 'Dokumentasi QMS',
    desc: 'Penyusunan Quality Manual, SOP, prosedur terkait, dan formulir pendukung yang disesuaikan kebutuhan perusahaan.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    num: '03',
    title: 'Implementasi & Pelatihan',
    desc: 'Pendampingan penerapan di seluruh unit kerja beserta pelatihan untuk memastikan pemahaman merata.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
  {
    num: '04',
    title: 'Internal Audit',
    desc: 'Pelaksanaan audit internal oleh auditor independen bersertifikat untuk mengukur kesiapan Anda.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
  },
  {
    num: '05',
    title: 'Sertifikasi',
    desc: 'Pendampingan penuh saat audit eksternal oleh badan sertifikasi hingga perusahaan dinyatakan lulus.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    num: '06',
    title: 'Surveillance & Maintenance',
    desc: 'Dukungan berkelanjutan untuk menjaga sertifikasi tetap berlaku dan peningkatan berkelanjutan.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-4">
            Layanan Kami
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2A4A] mb-4">
            Solusi Lengkap ISO 9001:2015
          </h2>
          <p className="text-stone-500 text-[15px] max-w-xl mx-auto">
            Dari diagnosa awal hingga sertifikasi diraih, setiap langkah ditangani
            oleh tim profesional berpengalaman.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`grid lg:grid-cols-[1fr,1.2fr] gap-6 lg:gap-10 items-center ${
                i % 2 === 1 ? 'lg:grid-cols-[1.2fr,1fr]' : ''
              }`}
            >
              {i % 2 === 0 ? (
                <>
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-stone-100">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="py-2">
                    <span className="text-[11px] text-[#C9A84C] font-semibold tracking-widest">{s.num}</span>
                    <h3 className="font-serif text-2xl text-[#1B2A4A] mt-1 mb-3">{s.title}</h3>
                    <p className="text-stone-500 text-[15px] leading-relaxed">{s.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="py-2 order-2 lg:order-1">
                    <span className="text-[11px] text-[#C9A84C] font-semibold tracking-widest">{s.num}</span>
                    <h3 className="font-serif text-2xl text-[#1B2A4A] mt-1 mb-3">{s.title}</h3>
                    <p className="text-stone-500 text-[15px] leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-stone-100 order-1 lg:order-2">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
