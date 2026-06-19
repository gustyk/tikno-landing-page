const columns = [
  {
    title: 'Layanan',
    links: ['Gap Analysis', 'Dokumentasi QMS', 'Implementasi', 'Internal Audit', 'Sertifikasi', 'Surveillance'],
  },
  {
    title: 'Perusahaan',
    links: ['Tentang Kami', 'Tim Ahli', 'Portofolio', 'Blog', 'Karir'],
  },
  {
    title: 'Sumber Daya',
    links: ['FAQ', 'Studi Kasus', 'Unduhan', 'Webinar', 'Newsletter'],
  },
  {
    title: 'Kontak',
    links: ['Jakarta', 'Surabaya', 'Bandung', 'info@qmsconsult.id', '+62 21 5555 0123'],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-stone-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
              <span className="font-serif text-[10px] font-bold">Q</span>
            </div>
            <span className="text-xs text-stone-500">
              © {new Date().getFullYear()} QMSConsult. Hak cipta dilindungi.
            </span>
          </div>
          <div className="flex gap-6">
            {['LinkedIn', 'Instagram', 'YouTube'].map((s) => (
              <a key={s} href="#" className="text-xs text-stone-500 hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
