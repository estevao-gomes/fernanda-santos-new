/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightred: {
          500:'#ff0000'
        }
      }
    }
  },
  plugins: [],
}
