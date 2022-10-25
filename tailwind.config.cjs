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
          600:'#36393e',
          800:'#282b30',
          900:'#1e2124'
        }
      },
    },
  },
  plugins: [],
}