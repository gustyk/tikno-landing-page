export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end pb-20 pt-32 lg:pt-0 bg-[#1B2A4A] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&q=80"
          alt="Gedung perkantoran"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-stone-300 text-xs font-medium mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Menerima klien di seluruh Indonesia
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] text-white mb-6">
            Wujudkan Sertifikasi
            <br />
            ISO 9001:2015
          </h1>

          <p className="text-base lg:text-lg text-stone-300 leading-relaxed mb-10 max-w-lg">
            Pendampingan profesional dari analisis awal hingga perusahaan Anda resmi
            bersertifikat. Proses transparan, dokumentasi lengkap, hasil terjamin.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[#1B2A4A] hover:bg-stone-100 transition-colors"
            >
              Jadwalkan Konsultasi
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-sm font-semibold border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-px mt-20 bg-white/10 rounded-lg overflow-hidden max-w-2xl">
          {[
            { n: '500+', l: 'Klien Tersertifikasi' },
            { n: '15 Tahun', l: 'Pengalaman' },
            { n: '98%', l: 'Tingkat Kelulusan' },
          ].map((s) => (
            <div key={s.l} className="bg-[#1B2A4A]/80 backdrop-blur-sm px-6 py-5 text-center">
              <div className="font-serif text-2xl text-white mb-1">{s.n}</div>
              <div className="text-[11px] text-stone-400 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
