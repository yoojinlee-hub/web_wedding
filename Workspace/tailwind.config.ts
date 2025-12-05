import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFEF7",
        beige: "#F5F1E8",
        blush: "#F9E5E5",
        rose: "#E8C4C4",
        "soft-pink": "#FFF5F5",
        gold: "#D4AF37",
        "dark-text": "#4A4A4A",
        "light-text": "#8B8B8B",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "var(--font-nanum)", "serif"],
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        desktop: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
export default config;
