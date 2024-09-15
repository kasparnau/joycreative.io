import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "black",
        foreground: "white",
        muted: {
          DEFAULT: colors.zinc[700],
          foreground: colors.zinc[400],
        },
      },
    },
  },
  plugins: [],
};
export default config;
