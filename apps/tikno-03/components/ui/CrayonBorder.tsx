'use client';
import type { ReactNode } from 'react';

interface CrayonBorderProps {
  children: ReactNode;
  color?: string;
  className?: string;
  variant?: 'rough' | 'wavy' | 'dashed';
}

export function CrayonBorder({
  children,
  color = '#F39F5F',
  className = '',
  variant = 'rough',
}: CrayonBorderProps) {
  const paths = {
    rough: 'M8,2 Q2,2 2,8 L2,38 Q2,44 8,44 L182,44 Q188,44 188,38 L188,8 Q188,2 182,2 Z',
    wavy: 'M8,2 Q2,2 2,8 Q2,14 8,14 Q14,14 14,8 Q14,2 20,2 L170,2 Q176,2 176,8 Q176,14 182,14 Q188,14 188,8 Q188,2 182,2 L8,2 M2,44 Q2,38 8,38 Q14,38 14,44 Q14,50 8,50 Q2,50 2,44 M176,44 Q176,38 182,38 Q188,38 188,44 Q188,50 182,50 Q176,50 176,44',
    dashed: 'M8,2 L182,2 M188,8 L188,38 M182,44 L8,44 M2,38 L2,8',
  };

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 190 46"
        fill="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={paths[variant]}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {children}
    </div>
  );
}
