import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "nc-primary": "#28CB8B",
        "nc-secondary": "#263238",
        "nc-silver": "#F5F7FA",
        "nc-tint-5": "#E8F5E9",
        "nc-neutral-gray": "#717171",
        "nc-neutral-dgray": "#4D4D4D",
      },
    },
  },
  plugins: [],
};
export default config;
