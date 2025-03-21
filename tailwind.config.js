/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#154360",
        secondary: "#F1C40F",
        danger: "#E74C3C",
        success: "#2ECC71",
        warning: "#FFC107",
        info: "#34495E",
        light: "#ECF0F1",
        dark: "#34495E",
      },
      animation: {
        "spin-smooth": "spin-smooth 2s linear infinite",
      },
      keyframes: {
        "spin-smooth": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
