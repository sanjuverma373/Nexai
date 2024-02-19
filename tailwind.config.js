/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": "Poppins, sans-serif",
        "Recharge": "recharge, sans-serif",
        "Neuropolitical": "neuropolitical, sans-serif",
      },
      backgroundSize:{
        "size":"100% 100%"
      },
     
    },
  },
  plugins: [],
}

