/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#222E48",
        emeraldGreen: "#084C3F",
        amberYellow: "#FBB650",
        grayish: "#E7EDED",
      },
      screens: {
        tab: "1100px",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
