/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077B6',
          light: '#00B4D8',
          dark: '#005F92',
        },
        secondary: {
          DEFAULT: '#FFD166',
          light: '#FFE194',
          dark: '#F4B942',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          light: '#FF9E9E',
          dark: '#E63946',
        },
        success: {
          DEFAULT: '#06D6A0',
          light: '#50E3C2',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#FFBE0B',
          light: '#FFCE3A',
          dark: '#D69E00',
        },
        error: {
          DEFAULT: '#EF476F',
          light: '#F47A9F',
          dark: '#C62B54',
        },
      },
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'sydney-pattern': "url('/src/assets/sydney-pattern.svg')",
      },
    },
  },
  plugins: [],
};