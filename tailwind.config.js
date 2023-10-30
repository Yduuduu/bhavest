/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral1: "#222",
        neutral2: "#7d7d7d",
        neutral3: "#cecece",
        surface1: "#fff",
        surface2: "#f9f9f9",
        surface3: "#2222220d",
        surface4: "#ffffffa3",
        surface5: "#0000000a",
        accent1: "#fc72ff",
        accent2: "#ffefff",
      },
      fontFamily: {
        Basel: ["Basel"],
      },
      fontWeight: {
        re: "485",
        me: "535",
      },
    },
    screens: {
      screens_sm: { min: "640px" },
      screens_md: { min: "768px" },
      screens_lg: { min: "1024px" },
    },
  },
  plugins: [],
};
