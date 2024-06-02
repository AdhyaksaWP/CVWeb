/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

module.exports = {
  mode: 'jit',
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      dropShadow: {
         '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
         '4xl': [
             '0 35px 35px rgba(0, 0, 0, 0.25)',
             '0 45px 65px rgba(0, 0, 0, 0.15)'
         ]
       }
     },
     fontFamily: {
      'Outfit': ['Outfit', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'],
     },
     colors: {
      'indigo-dye': '#284B63',
      'prussian-blue': '#153243',
      'ash-grey': '#B4B8AB',
      'ivory': '#F4F9E9',
      'alabaster': '#EEF0EB'
     }
  },
  plugins: [require('tailwind-scrollbar-hide')],
 }
 

