/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'bodoni': ['Libre Bodoni', 'sans-serif'],
        },
        colors: {
            'primary': '#2E3E5E',
            'secondary': '#EFA967',
            'tertiaire': '#F97E8D',
        },
    },
  },
  plugins: [],
}

