/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat Variable', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        marco: ['Marco', 'serif'],
      },
      colors: {},
    },
  },
  daisyui: {
    themes: ["light","dark"]
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
});
