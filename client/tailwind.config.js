/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#234ADB",
        secondary: "#2A74F5",
      },
      fontFamily: {
        header: ['Inter', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}