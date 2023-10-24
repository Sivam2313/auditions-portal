/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0F0913",
        primary: "#E6C449",
        onPrimary: "#3B2F00",
        onSecondary: "#B2CBD2",
        onSurface: "#CDE7EE",
        surface: "#334A50",
        onBackground: "#FFFFFF",
        outline: "#899295",
        secondary: "#191C1D",
        surfaceOutline: "#3f484b",
        error: "#8C1D18",
        onError: "#F9DEDC",
        onSurface2: "#9E857F",
        inputBackground: "#191C1D",
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
