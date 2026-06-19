const links = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
  { label: 'Harga', href: '#pricing' },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 lg:h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#1B2A4A] flex items-center justify-center">
            <span className="text-white font-serif text-sm font-bold leading-none">Q</span>
          </div>
          <span className="font-serif text-lg text-[#1B2A4A]">
            QMS<span className="text-[#C9A84C]">Consult</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:inline-flex text-[13px] font-medium text-stone-600 hover:text-stone-900 transition-colors">
            Hubungi Kami
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-md text-[13px] font-semibold bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 transition-colors tracking-wide uppercase"
          >
            Konsultasi Gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
