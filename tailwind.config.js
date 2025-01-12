/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      sans: ["IRANSansX", ...defaultTheme.fontFamily.sans],
      yekan: ["IRANYekanX", ...defaultTheme.fontFamily.serif],
    },
    colors: {
      "mainorange": "#f7763d",
      "mainblue": "#5124c4",
      "lightblue": "#E0F5FF",
      "maingrey":"#f2f2f2",
      "darkgrey":"#666666",
      "maingreen":"#79AF79"
    },
    extend: {},
  },
  plugins: [],
})

