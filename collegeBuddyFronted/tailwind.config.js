/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-xs': { 'max': '325px' }, // Custom max-width breakpoint at 325px
        'max-sm-xs': { 'max': '376px' }, // Custom max-width breakpoint at 376px
        'max-md-xs': { 'max': '426px' }, // Custom max-width breakpoint at 426px
        'max-lg-xs': { 'max': '768px' }, // Custom max-width breakpoint at 426px
        
      },
    },
  },
  plugins: [],
}
