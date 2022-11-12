/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato", "sans-serif"],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "dark-primary-color": "var(--dark-primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
