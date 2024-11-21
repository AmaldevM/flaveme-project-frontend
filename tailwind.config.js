/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ["DM Serif", "serif"],
        com: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
