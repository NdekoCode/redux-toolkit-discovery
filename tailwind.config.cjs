/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,tsx,html}", "*.{js,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "input-dark": "#25273C",
        "bg-light": "#fafafa",
        "bg-dark": "#181824",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["dark"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
