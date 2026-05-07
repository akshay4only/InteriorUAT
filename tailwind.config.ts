import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        ivory: '#fdfdfd',
        bronze: '#b38b6d',
        gold: '#c6a86f'
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 40px 120px rgba(255, 255, 255, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
