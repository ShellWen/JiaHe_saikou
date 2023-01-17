const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        dot: ['"Dotted Songti Diamond"', ...defaultTheme.fontFamily.sans]
      },
      backgroundColor: {
        default: '#eee'
      },
      textColor: {
        default: '#666'
      }
    }
  },
  plugins: []
}
