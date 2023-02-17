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
        CreamWhite: '#FCFBF4',
        InputGray: '#383838',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
