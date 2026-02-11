/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add other paths here if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        dark: '#333333',
        lightGray: '#f2f2f2',
      },
    },
  },
  plugins: [],
}

