import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bressolsAzul: "#1f2b44",
        bressols: "#f8aa4b",       // Naranja para navbar y footer
        fondo: "#fff1db",          // Fondo general de todas las páginas
      },
       fontFamily: {
      nunito: ['"Nunito"', "sans-serif"],
    },
    },

  },
  
  plugins: [],
};


export default config;
