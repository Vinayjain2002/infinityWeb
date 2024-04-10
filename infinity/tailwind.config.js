/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/images/banner.jpg"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(0, 62, 84)',
        'hover-blue': 'rgb(20, 114, 168)',
        'light-blue': 'rgb(31, 120, 209)',
        'blackish': 'rgb(35, 49, 54)',
        'light-black': 'rgba(0, 0, 0, 0.75)',
        'opac-black': 'rgba(0, 0, 0, 0.75)'
      },
    },
  },
  plugins: [],
};
