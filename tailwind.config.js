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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      colors: {
        plain: colors.white,
        shade: colors.gray,
        primary: colors.slate,
        accent: colors.sky,
        // secondary: colors.zinc,
      },
    },
  },
};

// background-color: #e5e5f7;
// opacity: 0.8;
// background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
// background-size: 10px 10px;
