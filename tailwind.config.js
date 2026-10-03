/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iitj: {
          sky: '#009FE3',
          'sky-light': '#E0F2FE',
          'sky-soft': '#F0F9FF',
          'sky-hover': '#0088C2',
          navy: '#003366',
          'navy-dark': '#002244',
          accent: '#38BDF8',
        },
        ieee: {
          blue: '#00629B',
          dark: '#004A75',
          light: '#E6F4FA',
          accent: '#0098D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
