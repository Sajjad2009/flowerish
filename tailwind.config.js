const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "serif"],
    },

    extend: {
      screens: {
        xs: "425px",
      },
      fontSize: {
        65: ["65px"],
        50: ["50px"],
        40: ["40px"],
        22: [
          "22px",
          {
            lineHeight: "32px",
          },
        ],

        16: [
          "16px",
          {
            lineHeight: "28px",
          },
        ],
      },

      colors: {
        primary: "#E95A08",
        headline: "#000",
        body: "#8987A1",
      },
    },
  },
  plugins: [],
};
