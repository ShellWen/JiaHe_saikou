const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        dot: ['"Dotted Songti Diamond"', ...defaultTheme.fontFamily.sans]
      },
      backgroundColor: {
        'default': '#eee',
        'default-dark': '#111'
      },
      textColor: {
        'default': '#666',
        'default-dark': '#aaa'
      }
    }
  },
  plugins: []
}
