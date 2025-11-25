/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#02040A",
        card: "#050816"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem"
      }
    },
  },
  plugins: [],
}
