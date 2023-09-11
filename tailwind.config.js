/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "md-sm": { min: "575px" },
        md: { min: "768px" },
        "2lg": { min: "1080px" },
        "2xl": { min: "1440px" },
      },
    },
  },
  plugins: [],
};
