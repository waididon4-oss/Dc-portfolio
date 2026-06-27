/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#141414',
          raised: '#1c1b18',
          line: '#2b2924'
        },
        ivory: {
          DEFAULT: '#f5f1e8',
          soft: '#ece4d3',
          raised: '#ffffff',
          line: '#ddd3ba'
        },
        gold: {
          50: '#fbf6e9',
          100: '#f5e9c7',
          200: '#ead08c',
          300: '#dfb85a',
          400: '#d4af37',
          500: '#b8932a',
          600: '#9c7a24',
          700: '#7a5e1c',
          800: '#5c4715',
          900: '#3d2f0e'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.35em'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5e9c7 0%, #d4af37 45%, #9c7a24 100%)',
        'gold-radial': 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.18), rgba(212,175,55,0) 70%)'
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(212,175,55,0.35), 0 18px 40px -20px rgba(212,175,55,0.35)',
        goldLg: '0 25px 60px -15px rgba(212,175,55,0.25)'
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 32s linear infinite reverse'
      }
    }
  },
  plugins: []
}
