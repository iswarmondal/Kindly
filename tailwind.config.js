const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'light-purple':'rgba(159, 125, 255, 0.3)',
      'light-orange':'rgba(255, 174, 78, 0.3)',
      'light-black':'rgba(165, 165, 165, 1)',
      'grey': colors.gray,
      'violet':colors.violet
    },
    extend: {
      boxShadow: {
        'soft': 'inset 0em 5px 5px #8885',
      }
    },
  },
  plugins: [],
}
