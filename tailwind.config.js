/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#171b1a",
        "left-color": "#F5BD4D",
        "right-color": "#F89222",
      },
      screens: {
        sm: "480px",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
