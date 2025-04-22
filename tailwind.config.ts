/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#272829",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shine: {
          "0%": {
            backgroundPosition: "-100%",
          },
          "100%": {
            backgroundPosition: "100%",
          },
        },
      },
      fontFamily: {
        josefin: ["var(--font-josefin)"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        shine: "shine 2s infinite linear",
      },
    },
  },
  plugins: [],
};
