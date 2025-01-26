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
          50: "#ecf0ff",
          100: "#dde3ff",
          200: "#c2cbff",
          300: "#9ca7ff",
          400: "#7578ff",
          500: "#635bff",
          600: "#4e36f5",
          700: "#432ad8",
          800: "#3725ae",
          900: "#302689",
          950: "#1e1650",
        },
      },
    },
  },
};

// background-color: #e5e5f7;
// opacity: 0.8;
// background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
// background-size: 10px 10px;
