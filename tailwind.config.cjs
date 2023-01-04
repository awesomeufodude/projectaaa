/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        project_black: "#060608",
        project_orange: "#E25715",
        project_black_shade: "#111111",
        project_white: "#ffffff",
      },
    },
  },
  plugins: [],
};
