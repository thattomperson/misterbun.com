/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        flower: '"Indie Flower", cursive',
      },
      colors: {
        'deep-blue': 'rgb(0, 47, 60)',
        yellow: 'rgb(247, 244, 116)',
        aqua: 'rgb(0, 255, 255)',
      },
    },
  },
  plugins: [],
};
