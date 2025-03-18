import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepAmethyst: "#610072",
        pureWhite: "#FFFFFF",
        electricMagenta: "#B600C6",
        crystalTeal: "#56D4C8",
      },
      fontFamily: {
        cairo: ['"Cairo", sans-serif'],
      }
    }
  },
  plugins: [],
}

export default config;