/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
        pp: ['"PP Agrandir"', 'sans-serif'],
        sohne: ['Sohne', 'sans-serif'],
        bagoss: ['Bagoss', 'sans-serif'],
      },
      colors: {
        brandpurple: '#CDAAFF',
        brandblack: '#0C0D10',
      },
      borderRadius: {
        19: '19px'
      }
    },
  },
  plugins: [],
}

