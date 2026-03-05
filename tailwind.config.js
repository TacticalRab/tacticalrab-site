/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07070f',
        surface: '#0e0e1c',
        surface2: '#141426',
        accent: '#e2ff00',
        muted: '#5a5a78',
        cod: '#ff6b35',
        val: '#ff4655',
        f1: '#e10600',
        f1light: '#ff4444',
        pink: '#ff69b4',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
