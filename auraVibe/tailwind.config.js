module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Times New Roman'", "Times", "serif"], // Set Times New Roman as default sans
        timesnewroman: ["'Times New Roman'", "Times", "serif"]
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        accent: "#cdcbd2"
      }
    }
  },
  plugins: []
};
