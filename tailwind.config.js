module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c186d",
        secondary: "#13b1b7",
        primaryLight: "#3317ae",
      },
      dropShadow: {
        "4xl": ["0 30px 60px rgba(14,119,255,.15)"],
      },
    },
  },
  plugins: [],
};
