export function CTA() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A84C] font-semibold mb-4">
              Mulai Sekarang
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2A4A] mb-5">
              Siap Mewujudkan
              <br />
              Sertifikasi ISO Anda?
            </h2>
            <p className="text-stone-500 text-[15px] leading-relaxed mb-8">
              Jadwalkan konsultasi gratis dengan tim kami. Kami akan membantu Anda
              memahami kebutuhan, estimasi biaya, dan langkah awal menuju sertifikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-sm font-semibold bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 transition-colors"
              >
                Jadwalkan Konsultasi Gratis
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-sm font-semibold border border-stone-300 text-stone-700 hover:bg-stone-50 transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Diskusi bisnis"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="text-emerald-600 text-lg">📞</span>
                </div>
                <div>
                  <div className="text-[11px] text-stone-500 uppercase tracking-wider">Hubungi Langsung</div>
                  <div className="text-sm font-semibold text-[#1B2A4A]">+62 21 5555 0123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
