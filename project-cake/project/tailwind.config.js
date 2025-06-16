/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fef7f7',
          100: '#feecec',
          200: '#fddede',
          300: '#fbc5c5',
          400: '#f79d9d',
          500: '#f06b6b',
          600: '#e04545',
          700: '#c03131',
          800: '#a02929',
          900: '#852828',
        },
        peach: {
          50: '#fef9f3',
          100: '#fef0e6',
          200: '#fdddc7',
          300: '#fabea3',
          400: '#f6967d',
          500: '#f2735e',
          600: '#e54d2e',
          700: '#c23616',
          800: '#9f2e15',
          900: '#822b18',
        },
        ivory: {
          50: '#fffef7',
          100: '#fffceb',
          200: '#fff7d1',
          300: '#ffecab',
          400: '#ffdd7d',
          500: '#ffc947',
          600: '#ffab1d',
          700: '#ff8c00',
          800: '#cc6500',
          900: '#a35000',
        },
        champagne: {
          50: '#fffdf0',
          100: '#fffadb',
          200: '#fff3b6',
          300: '#ffe886',
          400: '#ffd545',
          500: '#ffbe15',
          600: '#f29e07',
          700: '#d17408',
          800: '#a8590e',
          900: '#89480f',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};