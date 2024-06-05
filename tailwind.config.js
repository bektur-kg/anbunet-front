/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'card': '38rem',
        'story': '34rem',
      },
      width:{
        'story': '30rem'
      }
    },
  },
  plugins: [],
}