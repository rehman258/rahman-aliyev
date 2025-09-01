import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { heroui } = require("@heroui/theme");
const config: Config = {
  darkMode: ["class", "[data-theme=\"dark\"]"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        // Light theme colors
        light: {
          "background-primary": "#FEF6DD",
          "text-primary": "#000000",
          "heading": "#9D8640",
          "border-primary": "#B7A261",
          "info-text": "#000000",
          "card-text": "#685D5D",
          "nav": "#FEF6DD",
          "nav-active": "#B7A261",
          "resume-button": "#E0CE93",
          "shadow": "#F8DF91",
          "input-border": "#9D8640",
          "active": "#000000",
          "active-icon": "#FFFFFF",
        },
        // Dark theme colors
        dark: {
          "background-primary": "#131312",
          "text-primary": "#FFFFFF",
          "heading": "#7F6F3E",
          "border-primary": "#4B3D10",
          "info-text": "#CCC0C0",
          "card-text": "#D1D1CD",
          "nav": "#3B3729",
          "nav-active": "#B7A261",
          "resume-button": "#625839",
          "shadow": "#EFE0B2",
          "input-border": "#9D8640",
          "active-icon": "#A89D9D",
        },
      },
      spacing: {
        "55": "6.875rem",
        "50": "6.25rem",
        "40": "5.25rem",
        "30": "3.75rem",
        "22": "2.75rem",
        "20": "2.5rem",
        "18": "2.25rem",
        "17": "2.125rem",
        "16": "2rem",
        "15": "1.875rem",
        "14": "1.75rem",
        "13": "1.625rem",
        "12": "1.5rem",
        "11": "1.375rem",
        "10": "1.25rem",
        "8": "1rem",
        "7": "0.875rem",
        "6": "0.75rem",
        "5": "0.625rem",

      },
      
    },
    fontSize: {
      "13": "1.625rem",
      "11": "1.375rem",
      "10": "1.25rem",
      "9": "1.125rem",
      "8": "1rem",
      "7": "0.875rem",
      "6": "0.75rem",
    },
    gap:{
      "26":"3.25rem",
      "19":"2.375rem",
      "12":"1.5rem",
      "11":"1.375rem",
      "10":"1.25rem",
      "8" : "1rem",
    },
  },
  plugins: [heroui()],
};
export default config;
