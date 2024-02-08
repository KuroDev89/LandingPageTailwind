/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "close-menu": "url('../src/icon-close.svg')",
        "open-menu": "url('../src/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
}

