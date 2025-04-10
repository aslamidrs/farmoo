// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#283618", // blue-800
        secondary: "#508991", // amber-500
        accent: "#DDA15E", // emerald-500
        background: "#F3F4F6", // gray-100
        "accent-secondary": "#BC6C25",
      },
    },
  },
  plugins: [],
};
