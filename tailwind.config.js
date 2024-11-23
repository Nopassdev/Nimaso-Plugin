const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amber: "#D19C51",
        black: "#000",
        dark: "#231815",
        white: "#FFF",
        grey: "#666666",
        smoke: "#F0F0F0",
      },
    },
    fontSize: {
      base: ["1rem", "1.3"],
    },
  },
  plugins: [require("tailwindcss-animate")],
}
