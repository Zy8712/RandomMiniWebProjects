/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-cyan': '#2ca9bc',
      },
      fontFamily: {
        'theme-quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

