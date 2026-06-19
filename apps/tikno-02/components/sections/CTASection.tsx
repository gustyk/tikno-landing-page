'use client';

export function CTASection() {
  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl sm:text-6xl tracking-tight mb-6">
            Siap <span className="text-gradient">Mendapatkan</span>
            <br />
            Sertifikasi ISO 9001:2015?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Konsultasi gratis dengan tim kami. Kami akan membantu Anda memahami proses,
            biaya, dan langkah-langkah menuju sertifikasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all glow"
            >
              Konsultasi Gratis Sekarang
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 rounded-xl text-base font-semibold border border-white/20 text-white hover:bg-white/5 transition-all"
            >
              Jadwalkan Demo
            </a>
          </div>
          <p className="text-xs text-gray-600 mt-6">Gratis • Tanpa Komitmen • Respons Cepat</p>
        </div>
      </div>
    </section>
  );
}
