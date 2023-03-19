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
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      colors: {
        plain: colors.white,
        shade: colors.gray,
        primary: colors.slate,
        accent: colors.emerald,
        // secondary: colors.zinc,
      },
    },
  },
};
