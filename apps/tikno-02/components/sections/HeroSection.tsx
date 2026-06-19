'use client';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Konsultan ISO 9001:2015 Terpercaya
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6">
            Sertifikasi ISO
            <br />
            <span className="text-gradient">Tanpa Ribet</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Kami membantu perusahaan Anda meraih sertifikasi ISO 9001:2015 dengan proses
            yang terstruktur, dokumentasi lengkap, dan pendampingan hingga lulus audit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cta"
              className="inline-flex items-center px-8 py-3 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 glow"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#process"
              className="inline-flex items-center px-8 py-3 rounded-xl text-base font-semibold border border-white/20 text-white hover:bg-white/5 transition-all duration-200"
            >
              Pelajari Proses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
