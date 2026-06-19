const preset = require('@tikno/config/tailwind-preset');
const path = require('path');

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [preset],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    path.resolve(__dirname, '../../packages/ui/**/*.{ts,tsx}'),
  ],
};

module.exports = config;
