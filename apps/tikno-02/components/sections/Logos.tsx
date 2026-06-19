const clients = [
  'PT Astra Internasional',
  'Bank Mandiri',
  'Pertamina',
  'Telkom Indonesia',
  'PT Unilever',
  'PT Indofood',
];

export function Logos() {
  return (
    <section className="py-14 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium mb-8">
          Dipercaya oleh perusahaan terkemuka
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <span key={c} className="text-stone-300 text-sm font-medium tracking-wide">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
