/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      green: '#00B897',
      cyan: '#215A6B',
      'light-cyan': '#3C7F90',
      'dark-cyan': '#173F4B',
    },
    fontFamily: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
    },
    boxShadow: {
      'md': '0px 4px 12px rgba(0, 0, 0, 0.25)'
    },
    extend: {
      fontSize: {
        base: '14px',
      },
    },
  },
  plugins: [],
};
