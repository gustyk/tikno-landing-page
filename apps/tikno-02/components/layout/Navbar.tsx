'use client';

const navLinks = [
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
  { label: 'Cakupan', href: '#coverage' },
  { label: 'Standar', href: '#standards' },
  { label: 'Harga', href: '#pricing' },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-sm font-bold text-white">
              I
            </div>
            <span className="font-semibold text-lg tracking-tight">
              ISO<span className="text-blue-400">Consult</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex text-sm text-gray-400 hover:text-white transition-colors"
            >
              Masuk
            </a>
            <a
              href="#cta"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors glow-sm"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
