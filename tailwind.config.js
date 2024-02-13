/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        textColor1: "#0D5152",
        textColor2: "#0D5152",
        textColor3: "#777986",
        accentColor: "#FF6321",
        backgroundMain: "#F2FAFA",
        dropShadow: "#B3D4D8",
        bgGradient1: "#069292",
        bgGradient2: "#143A3A",
        bgGradient3: "#DEECE8",
        bgGradient4: "#B3D4D8",
        textGradientTo: "#649697",
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
  plugins: [
    //..
    require("flowbite/plugin"),
  ],
};
