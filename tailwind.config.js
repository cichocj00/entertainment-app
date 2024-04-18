/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    colors: {
      red: 'hsl(0, 97%, 63%)',
      blue: {
        DEFAULT: 'hsl(223, 23%, 46%)',
        semiDark: 'hsl(223, 36%, 14%)',
        dark: 'hsl(223, 30%, 9%)',
      },
      white: 'hsl(0, 0%, 100%)',
      extend: {},
    },
    plugins: [],
  },
};
