// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add jsx, ts, tsx
    "./app/**/*.{js,jsx,ts,tsx}", // If using app directory
    "./pages/**/*.{js,jsx,ts,tsx}", // If using pages directory
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["selector", "body[data-theme=\"dark\"]"], // Target body element
  theme: {
    extend: {},
    colors:{
      "theme": {
        "dark": {
          "default":"#030712",
          "50":"#111827",
          "100":"#1f2937",
          "200":"#374151",
          "300":"#4b5563",
          "400":"#6b7280",
          "500":"#9ca3af",
          "600":"#d1d5db",
          "700":"#f3f4f6",
          "800":"#f3f4f6",
          "900":"#f9fafb",
          "950":"#ffffff",
        },
        "light": {
          "default":"#ffffff",
          "50":"#f9fafb",
          "100":"#f3f4f6",
          "200":"#f3f4f6",
          "300":"#d1d5db",
          "400":"#9ca3af",
          "500":"#6b7280",
          "600":"#4b5563",
          "700":"#374151",
          "800":"#1f2937",
          "900":"#111827",
          "950":"#030712",
        },
      },
    },
  },
  plugins: [],
};
export default config;