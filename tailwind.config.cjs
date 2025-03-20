/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          dark: '#121212',
          light: '#2d2d2d',
        },
        secondary: {
          DEFAULT: '#00b4d8',
          dark: '#0096c7',
          light: '#48cae4',
        },
      },
    },
  },
  plugins: [],
} 