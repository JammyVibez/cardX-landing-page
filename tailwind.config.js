/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← important
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        animeDark: '#0b0c10',
        animeText: '#ffffff',
        animeGlass: 'rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
