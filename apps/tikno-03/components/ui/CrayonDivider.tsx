export function CrayonDivider({
  color = '#F39F5F',
  bgColor = '#FFF8EE',
  variant = 'zigzag',
  className = '',
}: {
  color?: string;
  bgColor?: string;
  variant?: 'zigzag' | 'wavy' | 'scribble';
  className?: string;
}) {
  const paths = {
    zigzag: 'M0,20 Q20,5 40,20 T80,20 T120,20 T160,20 T200,20 T240,20 T280,20 T320,20 T360,20 T400,20 T440,20 T480,20 T520,20 T560,20 T600,20 T640,20 T680,20 T720,20 T760,20 T800,20 T840,20 T880,20 T920,20 T960,20 T1000,20 T1040,20 T1080,20 T1120,20 T1160,20 T1200,20',
    wavy: 'M0,20 C40,5 80,35 120,20 C160,5 200,35 240,20 C280,5 320,35 360,20 C400,5 440,35 480,20 C520,5 560,35 600,20 C640,5 680,35 720,20 C760,5 800,35 840,20 C880,5 920,35 960,20 C1000,5 1040,35 1080,20 C1120,5 1160,35 1200,20',
    scribble: 'M0,18 Q30,8 60,20 T120,16 T180,22 T240,14 T300,20 T360,16 T420,24 T480,12 T540,20 T600,18 T660,24 T720,14 T780,20 T840,16 T900,22 T960,14 T1020,20 T1080,18 T1140,24 T1200,16',
  };

  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ backgroundColor: bgColor }}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-[30px] sm:h-[40px]"
        aria-hidden="true"
      >
        <path
          d={paths[variant]}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d={paths[variant]}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
          transform="translate(0, 6)"
        />
      </svg>
    </div>
  );
}
