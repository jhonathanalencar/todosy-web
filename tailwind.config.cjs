/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#fafafa",
          200: "#e6e6e6",
          300: "#d1d1d1",
          400: "#a2a2a2",
          500: "#969696",
          600: "#2b2b2b",
          700: "#202026",
          800: "#191726",
          900: "#121214",
        },
        primary: {
          200: "#9CD9CE",
          300: "#7EC2B5",
          400: "#44BBA4",
          500: "#2E6171",
          600: "#156064",
        },
        secondary: {
          400: "#733036",
          500: "#802830",
          600: "#822028",
          700: "#931E28",
        },
      },
    },
  },
  plugins: [],
};
