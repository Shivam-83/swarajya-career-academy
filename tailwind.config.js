/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        army: {
          950: '#09150F',
          900: '#0E1F17',
          800: '#142B20', // Primary deep army green
          700: '#1D3D2E',
          600: '#2A523E',
          500: '#3A6F55',
          100: '#E8EFEA',
          50: '#F2F7F4',
        },
        gold: {
          700: '#946F25',
          600: '#B0842E',
          500: '#C99A3B', // Primary muted gold
          400: '#DCB054',
          300: '#E8C57B',
          200: '#F3DEA8',
          100: '#FAF1DC',
          50: '#FDFBF5',
        },
        surface: {
          warm: '#F5F4EF', // Primary warm off-white background
          muted: '#EAE8DE',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        heading: ['"Poppins"', '"Noto Sans Devanagari"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(20, 43, 32, 0.05)',
        'card': '0 4px 20px rgba(20, 43, 32, 0.07)',
        'lifted': '0 10px 30px rgba(20, 43, 32, 0.12)',
      },
    },
  },
  plugins: [],
}
