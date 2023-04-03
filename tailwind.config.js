/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'jscl-yellow': '#eacf39',
        'jscl-black': '#333',
      },
      fontFamily: {
        'noto': ["Noto Sans JP"],
        'montserrat': ["Montserrat"],
      },
    },
  },
  plugins: [],
}

