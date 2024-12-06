/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: ["class"], // Enable dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(30deg)" },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat Variable", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        marko: ["Marko One", "serif"],
      },
    },
  },
  plugins: [
    require("daisyui"), 
    require("tailwindcss-animate"), 
  ],
});
