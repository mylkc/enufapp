/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6f2ec",
        card: "#ffffff",
        ink: "#1f1f1f",
        muted: "#6f6a63",
        stroke: "#e7dfd5",
        accent: "#7f927c"
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "ui-sans-serif", "sans-serif"]
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem"
      }
    },
  },
  plugins: [],
}
