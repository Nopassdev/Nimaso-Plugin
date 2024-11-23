const defaultTheme = require('tailwindcss/defaultTheme')

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
        amber: '#D19C51',
        black: '#000',
        dark: '#231815',
        white: '#FFF',
        grey: '#666666',
        smoke: '#F0F0F0',
        smoke100: '#F7F7F7',
        smoke200: '#F8F8F8',
        red: '#EA4040',
        red100: '#F05050',
      },
    },
    fontSize: {
      base: ['1rem', '1.3'],
      lg: ['1.125rem', '1.3'],
      sm: ['0.875rem', '1.3'],
      xs: ['0.625rem', '1.3'],
    },
  },
  plugins: [require('tailwindcss-animate')],
}
