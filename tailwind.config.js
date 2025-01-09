/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        spectral: ['Spectral', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customBlue: 'rgba(58, 91, 255, 0.15)',
        customWarning: 'rgba(245, 126, 119, 0.12)',
        customYellow: 'rgba(255, 204, 145, 0.20)',
      },
      boxShadow: {
        shadowUser: '0px 4px 30px 0px rgba(46, 45, 116, 0.05)',
      },
      scale: {
        ac: '500px',
      },
    },
  },
  plugins: [],
};
