/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      spacing: {
        "11/10": "110%",
        "6/5": "120%",
      },
      screens: {
        "xs": "450px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      colors: {
        plain: colors.white,
        shade: colors.gray,
        primary: colors.slate,
        accent: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#c0dbfd",
          "300": "#94c5fc",
          "400": "#62a5f8",
          "500": "#4285f4",
          "600": "#2763e9",
          "700": "#1f4ed6",
          "800": "#2041ad",
          "900": "#1f3b89",
          "950": "#182553",
        },
      },
    },
  },
};

// background-color: #e5e5f7;
// opacity: 0.8;
// background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
// background-size: 10px 10px;
