import type { Config } from 'tailwindcss';
import preset from '@tikno/config/tailwind-preset';

const config: Config = {
  presets: [preset],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    '../../packages/ui/**/*.{ts,tsx}',
  ],
};

export default config;
