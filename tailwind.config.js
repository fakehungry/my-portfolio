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
        "primary-color-darker": "var(--primary-color-darker)",
        "secondary-color": "var(--secondary-color)",
        "dark-primary-color": "var(--dark-primary-color)",
        "dark-secondary-color": "var(--dark-secondary-color)",
      },
    },
  },
  plugins: [],
};
