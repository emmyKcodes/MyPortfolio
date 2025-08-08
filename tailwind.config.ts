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
        shine: {
          "0%": { backgroundPosition: "-100%" },
          "100%": { backgroundPosition: "200%" },
        },
        animation: {
          shine: "shine 1.5s ease-out forwards",
        },
      },
      fontFamily: {
        josefin: ["var(--font-josefin)", "sans-serif"],
      },
    },
  },
  plugins: [],
  preflight: true,
};
