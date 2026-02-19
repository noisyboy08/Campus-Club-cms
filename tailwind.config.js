/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pop-black': '#000000',
        'pop-bg': '#FAFAF8',  // Off-white light base
        'pop-yellow': '#FFF033',
        'pop-purple': '#8C9EFF',
        'pop-pink': '#FF3385',
        'pop-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        pixel: ['VT323', 'monospace'],
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px #000000',
        'hard-sm': '3px 3px 0px 0px #000000',
        'hard-xl': '10px 10px 0px 0px #000000',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
        'paper-pattern': "radial-gradient(#00000022 1px, transparent 1px)",
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 1.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
      },
    },
  },
  plugins: [],
}
