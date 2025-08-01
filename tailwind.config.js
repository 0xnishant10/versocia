/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        30: "30deg",
      },
      width: {
        144.5: "36rem", // adjust to match your design
        288.75: "72rem", // adjust as needed
      },
      backgroundImage: {
        "linear-to-tr": "linear-gradient(to top right, #60d6dd, #2115c3)",
      },
      aspectRatio: {
        "1155/678": "1155 / 678",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
