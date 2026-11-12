import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy / near-black surfaces
        base: {
          900: '#05070d',
          800: '#070a14',
          700: '#0a0e1c',
          600: '#0f1526',
          500: '#141c33',
        },
        // Electric blue / cyan accents
        accent: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          sky: '#38bdf8',
          glow: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        // Restrained, premium depth — not neon glow.
        soft: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 50px -24px rgba(0,0,0,0.8)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.12), 0 10px 40px -16px rgba(34, 211, 238, 0.18)',
        'glow-strong': '0 0 40px -10px rgba(34, 211, 238, 0.35)',
      },
      backgroundImage: {
        'grid-cyber':
          'linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34, 211, 238, 0.14), transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
