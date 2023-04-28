/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#564AE0',
      'secondary': '#3A3E63',
      'dark': '#27293B',
      'white': '#FEFDFE',
      'grey': '#7B7D97',
      'transparent': 'transparent'
    },
    borderRadius: {
      DEFAULT: '10px'
    },
    extend: {},
  },
  plugins: [],
}
