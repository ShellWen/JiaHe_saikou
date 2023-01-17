const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        dot: ['"Dotted Songti Diamond"', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        default: '#eeeeee',
        dark: '#1f1f1f',
        darkPrimary: '#232323'
      },
      textColor: {
        default: '#666666',
        dark: '#f8f8ff'
      }
    },
  },
  plugins: [],
}
