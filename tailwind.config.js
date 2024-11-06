/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#F5F6FA",
        "dark-blue": "#1B3042",
        "blue": "#2D7CC1",
        "light-blue": "#E9F0FC",
        "gray": "#2D2D2D",
        "light-gray": "#D9D9D9",
        "yellow": "#E3C72A",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
