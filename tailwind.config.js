/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#23272F",
        primary: "#E6C449",
        onPrimary: "#3B2F00",
        onSecondary: "#9E857F",
        onSurface: "#CDE7EE",
        surface: "#334A50",
        onBackground: "#FFFFFF",
        outline: "#899295",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      head: ["Montserrat", "sans-serif"],
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  plugins: [],
};
