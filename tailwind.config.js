/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        2.5: "10px",
      },
      width: {
        2.5: "10px",
      },
    },
  },
  plugins: [],
};
