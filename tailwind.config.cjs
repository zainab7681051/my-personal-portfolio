/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#7289da",
        secondary:"#aab8e8",
        back:{
          500: '#243447',
          600: '#0e141c',
          800: '#243447',
          900: '#141d26'
        }
      },
    },
  },
  plugins: [],
}