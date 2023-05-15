/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightred: {
          500: "#ff0000",
        },
        darkBlue: {
          500: "#0a2454",
        },
      },
    },
  },
  plugins: [],
};
