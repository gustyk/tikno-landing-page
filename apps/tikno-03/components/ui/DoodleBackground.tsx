export function DoodleBackground({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Circles */}
      <circle cx="50" cy="80" r="15" fill="#F39F5F" opacity="0.08" />
      <circle cx="750" cy="120" r="20" fill="#FF6B9D" opacity="0.08" />
      <circle cx="150" cy="500" r="12" fill="#4ECDC4" opacity="0.08" />
      <circle cx="650" cy="450" r="18" fill="#FFE66D" opacity="0.08" />
      <circle cx="400" cy="50" r="10" fill="#95E06C" opacity="0.08" />

      {/* Stars */}
      <path d="M100,200 l5,-15 l5,15 l15,5 l-15,5 l-5,15 l-5,-15 l-15,-5 z" fill="#FFE66D" opacity="0.1" />
      <path d="M700,300 l4,-12 l4,12 l12,4 l-12,4 l-4,12 l-4,-12 l-12,-4 z" fill="#F39F5F" opacity="0.1" />
      <path d="M300,550 l3,-9 l3,9 l9,3 l-9,3 l-3,9 l-3,-9 l-9,-3 z" fill="#FF6B9D" opacity="0.1" />

      {/* Squiggles */}
      <path d="M60,400 Q80,380 100,400 T140,400" stroke="#4ECDC4" strokeWidth="2" opacity="0.1" fill="none" strokeLinecap="round" />
      <path d="M680,150 Q700,130 720,150 T760,150" stroke="#F39F5F" strokeWidth="2" opacity="0.1" fill="none" strokeLinecap="round" />

      {/* Dots */}
      <circle cx="200" cy="150" r="3" fill="#FF6B9D" opacity="0.12" />
      <circle cx="600" cy="500" r="3" fill="#4ECDC4" opacity="0.12" />
      <circle cx="350" cy="100" r="2" fill="#FFE66D" opacity="0.12" />
      <circle cx="500" cy="350" r="3" fill="#95E06C" opacity="0.12" />
    </svg>
  );
}
