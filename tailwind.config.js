let colors = {
  'tranparent': 'tranparent',
  'black': 'hsl(0, 0%, 0%)',
  'navy-darker': 'hsl(210, 50%, 9%)',
  'navy-dark': 'hsl(210, 49%, 15%)',
  'navy': 'hsl(210, 47%, 19%)',
  'navy-light': 'hsl(210, 22%, 48%)',
  'navy-lighter': 'hsl(210, 22%, 77%)',
  'white': 'hsl(0, 0%, 100%)',

  'yellow-dark': 'hsl(42, 100%, 36%)',
  'yellow': 'hsl(42, 97%, 66%)',

}
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fonts: {
      'sans': 'Inter UI'
    },
    colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    './public/**/*.html',
    './src/**/*.vue'
  ]
}
