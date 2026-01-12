import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(main)/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(brand)/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(legal)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#002147",
        gold: "#fc0",
        aqua: "#00ffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
};
export default config;
