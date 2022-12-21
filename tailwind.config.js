/** @type {import('tailwindcss').Config} */
const detailGalleryData = require("./detailGalleryData");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      headerColor: "#212427",
      middleColor: " #E5E5E5",
      borderColor: "#D9DCE0",
      bannerBg: detailGalleryData.detailsBackgroundColor,
      color: detailGalleryData.detailsElementsColor,
    },
    screens: {
      xs: "50px",
      sm: "420px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    extend: {},
  },
  plugins: [],
};
