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
        65: [
          "65px",
          {
            lineHeight: "80px",
          },
        ],
        50: ["50px"],
        40: ["40px"],
        24: [
          "24px",
          {
            lineHeight: "34px",
          },
        ],
        22: [
          "22px",
          {
            lineHeight: "32px",
          },
        ],

        20: [
          "20px",
          {
            lineHeight: "30px",
          },
        ],

        16: [
          "16px",
          {
            lineHeight: "28px",
          },
        ],
        14: [
          "14px",
          {
            lineHeight: "24px",
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
