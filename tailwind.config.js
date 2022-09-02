/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "weather-primary": "#408CA7",
        "weather-secondary": "#00668A"
      },
      fontFamily:{
        Roboto: ["Roboto, sans-serif"],
      }
    },
    container:{
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
