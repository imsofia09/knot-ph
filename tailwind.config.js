{import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F4",
        blush: "#F2B0AD",
        petal: "#F8D5D2",
        rose: "#9B7774",
        taupe: "#CDB8A8",
        mauve: "#8D6B68",

      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cute: ["Comic Sans MS", "cursive"],
      },

      boxShadow: {
        soft: "0 5px 20px rgba(91, 56, 51, 0.08)",
      },
    },
  },
  plugins: [],
};