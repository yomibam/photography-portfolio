/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B0530",
        secondary: "#131313",
        tertiary: "#FF105D",
      },
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
      serif: ["Londrina Outline", "sans-serif"],
    },
    screens: {
      tab: "640px",
      // => @media (min-width: 640px)

      lap: "1024px",
      // => @media (min-width: 1024px)

      TV: "1900px",
      // => @media (min-width: 1280px)
    },
  },
  plugins: [],
};
