module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        timesnewroman: ["'Times New Roman'", "Times", "serif"],
        sans: ["'Times New Roman'", "Times", "serif"], // Optionally, set as default
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        accent: "#cdcbd2"
      },
    },
  },
  plugins: [],
};
