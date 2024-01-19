/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor1: "#0D5152",
        textColor2: "#03A6A6",
        textColor3: "#777986",
        accentColor: "#F27457",
        backgroundMain: "#F2FAFA",
        dropShadow: "#B3D4D8",
        bgGradient1: "##069292",
        bgGradient2: "#143A3A",
        bgGradient3: "#DEECE8",
        bgGradient4: "#B3D4D8",
      },
      screens: {
        tab: "1100px",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        frank: ["Frank Ruhl Libre", "sans-serif"],
      },
    },
  },
  plugins: [],
};
