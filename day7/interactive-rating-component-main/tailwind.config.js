/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        sans: ['Overpass', 'serif'],
      },
    },
  },
  plugins: [],
};
