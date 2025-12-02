import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fener: {
          // Eski: #002d72 (Parlak Lacivert) -> YENİ: Derin, Otoriter Lacivert
          navy: "#0f172a", 
          
          // Eski: #ffed00 (Civciv Sarısı) -> YENİ: Varaklı Altın (Gold) - Adalet temsili
          yellow: "#c29b40", 
          
          // Hover durumları için biraz daha açığı
          blue: "#1e293b", 
        },
        hukuk: {
          dark: "#0a0a0a", 
          gray: "#f8fafc", 
          silver: "#e2e8f0", 
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;