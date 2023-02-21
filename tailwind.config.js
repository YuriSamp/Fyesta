const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        DarkModeGreen: '#138859',
        DarkModeBlack: '#03040B',
        DarkModeOrange: '#D8807D',
        CreamWhite: '#F6F6F2',
        InputGray: '#383838',
      },
      fontFamily: {
        Caveat: ['var(--font-Caveat)'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
