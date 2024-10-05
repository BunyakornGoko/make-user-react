/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#06b6d4",

          secondary: "#666666",

          accent: "#111827",

          neutral: "#44403c",

          "base-100": "#292524",

          info: "#60a5fa",

          success: "#16a34a",

          warning: "#facc15",

          error: "#ef4444"
        }
      }
    ]
  }
}
