'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p ref={ref} className={className} style={style}>
      {text.split('').map((char, i) => {
        const start = i / text.length;
        const end = start + 1 / text.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <motion.span key={i} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}
