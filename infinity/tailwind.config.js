/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/images/banner.jpg"
  ],
  theme: {
    extend: {
      scrollbar: (theme) => ({
        thin: {
          width: '1px', // Adjust width as desired
          height: '1px', // Adjust height as desired
          '&-thumb': {
            backgroundColor: theme('colors.gray.300'), // Customize thumb color
          },
          '&-track': {
            backgroundColor: theme('colors.gray.100'), // Customize track color
          },
        },
      }),
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
  plugins: [
    plugin(),
  ],
};
