/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightred: {
          500: "#ff0000",
        },
        gradient: {
          500: "linear-gradient(135deg, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 59%, rgba(9,9,121,1) 100%, <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
