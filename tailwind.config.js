/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#ebfbf9',
          100: '#d5f6f1',
          200: '#adf0e4',
          300: '#84e9d7',
          400: '#5ad2c6',
          500: '#33bcb5',
          600: '#28968f',
          700: '#1e6f6a',
          800: '#154844',
          900: '#0c2220',
          950: '#070f14'
        },
        secondary: {
          100: '#fce7f3',
          200: '#fbcfe8',
          700: '#be185d',
        }
      },
      fontFamily: {
        sans: ['Avenir Next', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Avenir Next', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide'),
  ],
}
