import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        'sm': '620px',
        'lg': '1200px',
        'xl': '1500px',
      },
      inset: {
        '100vh': '100vh'
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};

export default config;
