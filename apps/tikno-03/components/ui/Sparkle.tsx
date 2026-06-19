'use client';

import { motion } from 'framer-motion';

interface SparkleProps {
  color?: string;
  size?: number;
  className?: string;
  delay?: number;
}

export function Sparkle({
  color = '#FFE66D',
  size = 24,
  className = '',
  delay = 0,
}: SparkleProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    >
      <path
        d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"
        fill={color}
      />
    </motion.svg>
  );
}
