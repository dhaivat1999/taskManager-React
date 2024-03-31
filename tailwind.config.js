/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            customGradient:{
                50:'#99e2b4',
                100:'#88d4ab',
                200:'#78c6a3',
                300:'#67b99a',
                400:'#56ab91',
                500:'#469d89',
                600:'#358f80',
                700:'#248277',
                800:'#14746f',
                900:'#036666'
            }
        }
      },
    },
    plugins: [],
  }