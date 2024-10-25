/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      width: {
        100: "25rem",
        128: "32rem",
      },
      fontSize: {
        "10xl": [
          "10rem",
          {
            lineHeight: 1,
            letterSpacing: "-0.02em",
          },
        ],
      },
    },
  },
  plugins: [],
};
