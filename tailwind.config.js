/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0f172a"
      },
      fontFamily: {
        roboto: ['roboto', 'sans']
      }
    },
  },
  plugins: [],
}

