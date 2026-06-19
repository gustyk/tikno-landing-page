'use client';

interface CrayonUnderlineProps {
  color?: string;
  width?: string;
  variant?: 'wavy' | 'zigzag' | 'loop' | 'scribble';
  className?: string;
}

const paths = {
  wavy: 'M0,12 C15,4 35,20 55,12 C75,4 95,20 115,12 C135,4 155,20 175,12 C195,4 215,20 235,12',
  zigzag: 'M0,15 L15,5 L30,18 L45,3 L60,17 L75,5 L90,16 L105,3 L120,15 L135,5 L150,18 L165,3 L180,17 L195,5 L210,16 L225,3 L240,15',
  loop: 'M0,10 C10,0 20,20 30,10 C40,0 50,20 60,10 C70,0 80,20 90,10 C100,0 110,20 120,10 C130,0 140,20 150,10 C160,0 170,20 180,10 C190,0 200,20 210,10 C220,0 230,20 240,10',
  scribble: 'M2,8 Q12,2 22,10 T42,8 Q52,14 62,8 T82,12 Q92,4 102,10 T122,8 Q132,16 142,8 T162,10 Q172,2 182,12 T202,8 Q212,14 222,8 T242,10',
};

export function CrayonUnderline({
  color = '#F39F5F',
  width = '240px',
  variant = 'wavy',
  className = '',
}: CrayonUnderlineProps) {
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      className={`${className}`}
      style={{ width, height: 'auto' }}
      aria-hidden="true"
    >
      <path
        d={paths[variant]}
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 500,
          strokeDashoffset: 500,
          animation: 'drawCrayon 1.2s ease-out forwards',
        }}
      />
    </svg>
  );
}
