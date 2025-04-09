/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // Example: Define dark mode colors if needed directly
      // colors: {
      //   dark: {
      //     background: '#1a202c',
      //     text: '#e2e8f0',
      //     // ... other dark mode colors
      //   }
      // }
    },
  },
  plugins: [],
}
