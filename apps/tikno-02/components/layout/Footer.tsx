'use client';

const footerSections = {
  Layanan: ['Gap Analysis', 'Dokumentasi QMS', 'Implementasi', 'Internal Audit', 'Sertifikasi'],
  Perusahaan: ['Tentang', 'Tim', 'Klien', 'Karir', 'Kontak'],
  Sumber: ['Blog', 'FAQ', 'Webinar', 'Ebook', 'Studi Kasus'],
  Legal: ['Privasi', 'Syarat & Ketentuan', 'Kebijakan Cookie'],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerSections).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-white">
              I
            </div>
            <span className="text-sm text-gray-400">
              ISO<span className="text-blue-400">Consult</span>
            </span>
          </div>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} ISOConsult. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'YouTube'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
