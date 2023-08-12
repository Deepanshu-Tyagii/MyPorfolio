/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        secondary : '#393A47',
        accent: '#483D8B',
      },
      animation : {
        'spin-slow': 'spin 6s linear infinite'
        },
      },
    },
  varients: {},
  plugins: [],
}

