/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        robo: "Roboto, sans-serif",
      },
      colors: {
        signInButtonBorder: 'rgba(108, 96, 125, 0.53)'
      },
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
