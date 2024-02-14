import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        handlee: ["var(--font-handlee)"],
        notojp: ["var(--font-notojp)"],
        notosjp: ["var(--font-notosjp)"],
        eb: ["var(--font-eb)"],
        mplus: ["var(--font-mplus)"],
        mplus1: ["var(--font-mplus1)"],
        nanum: ["var(--font-nanum)"],
        nanumgo: ["var(--font-nanumgo)"],
      },
    },
  },
  plugins: [],
};
export default config;
