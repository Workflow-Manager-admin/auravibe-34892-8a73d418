module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        timesnewroman: ["'Times New Roman'", "Times", "serif"]
      },
      colors: {
        black: "#000",
        white: "#fff",
        accent: "#cdcbd2"
      }
    }
  },
  darkMode: "class",
  plugins: []
};
