/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      colors: {
        plain: colors.white,
        shade: colors.gray,
        primary: colors.zinc,
        // secondary: colors.zinc,
        // accent: colors.sky,
      },
    },
  },
};
