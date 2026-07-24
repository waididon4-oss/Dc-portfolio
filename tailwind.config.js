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
          soft: '#f8f7f5',
          raised: '#ffffff',
          line: '#fffffe'
        },
        white: {
          50: '#c9c9c9',
          100: '#c9c9c9',
          200: '#c9c9c9',
          300: '#c9c8c8',
          400: '#c9c9c9',
          500: '#c9c9c9',
          600: '#c9c9c9',
          700: '#c9c9c9',
          800: '#c9c8c7',
          900: '#c9c9c9'
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
        'white-gradient': 'linear-gradient(135deg, #cfcfcd 0%, #bebdb6 45%, #d4d1ca 100%)',
        'white-radial': 'radial-gradient(circle at 50% 50%, rgba(143, 142, 139, 0.18), rgba(153, 153, 153, 0) 70%)'
      },
      boxShadow: {
        white: '0 0 0 1px rgba(155, 154, 152, 0.35), 0 18px 40px -20px rgba(173, 172, 168, 0.35)',
        whiteLg: '0 25px 60px -15px rgba(165, 163, 158, 0.25)'
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 32s linear infinite reverse'
      }
    }
  },
  plugins: []
}
