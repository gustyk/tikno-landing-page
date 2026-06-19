export function About() {
  return (
    <section id="about" className="section-padding bg-[#F8F6F1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-4">
              Tentang Kami
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-[#1B2A4A] mb-6">
              Mitra Terpercaya
              <br />
              dalam Sertifikasi QMS
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-[15px]">
              <p>
                Sejak 2009, kami telah membantu ratusan perusahaan di berbagai industri
                meraih dan mempertahankan sertifikasi ISO 9001:2015. Tim auditor
                bersertifikat kami memahami tantangan nyata di lapangan.
              </p>
              <p>
                Kami tidak hanya menyusun dokumen — kami memastikan sistem mutu benar-benar
                dijalankan dan memberikan nilai tambah bagi bisnis Anda.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Tim sedang bekerja"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-5 max-w-[220px]">
              <div className="font-serif text-3xl text-[#1B2A4A] mb-1">15+</div>
              <div className="text-xs text-stone-500 leading-relaxed">
                Tahun pengalaman menangani sertifikasi QMS untuk berbagai skala industri
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
