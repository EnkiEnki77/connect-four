/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        black: "#000000",
        darkPurple: "#5C2DD5",
        purple: "#7945FF",
        pink: "#FD6687",
        yellow: "#FFCE67",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      grotesk: ["Space Grotesk", "serif"],
    },
  },
  plugins: [],
};
