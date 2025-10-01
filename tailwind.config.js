// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add jsx, ts, tsx
    "./app/**/*.{js,jsx,ts,tsx}", // If using app directory
    "./pages/**/*.{js,jsx,ts,tsx}", // If using pages directory
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};