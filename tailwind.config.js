// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: ["animate-fadeIn"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
