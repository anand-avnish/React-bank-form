/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'raleway':['Raleway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'courgette':['Courgette', 'cursive'],
        'montserrat':['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
