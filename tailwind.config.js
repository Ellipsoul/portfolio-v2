/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      colors: {
        // plain: colors.white,
        // primary: colors.slate,
        // secondary: colors.zinc,
        // accent: colors.sky,
        // shade: colors.gray,
      },
    },
  },
};
