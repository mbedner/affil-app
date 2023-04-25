/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Josefin Sans'", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#1c49c2",
          200: "#11389e",
        },
        secondary: {
          100: "#ffc80c",
          200: "#cffafe",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
