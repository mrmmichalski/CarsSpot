/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        darkBlue: "#0147FF",
        darkGray: "#282828",
        lightWhite: "#FFFFFF",
        darkWhite: "#F7F7F7",
      },
      fontFamily: {
        "roboto-flex": ["Roboto Flex", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
