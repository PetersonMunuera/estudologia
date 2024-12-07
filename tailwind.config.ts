import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        chivo: ['var(--font-chivo)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ["primary-gradient"]: "var(--purple-gradient)",
        ["primary-100"]: "var(--purple-100)",
        ["purple-500"]: "var(--purple-500)",
        ["gray-100"]: "var(--gray-100)",
        ["gray-200"]: "var(--gray-200)",
        ["gray-300"]: "var(--gray-300)",
        ["gray-500"]: "var(--gray-500)",
        ["gray-600"]: "var(--gray-600)",
        ["green-100"]: "var(--green-100)",
        ["green-500"]: "var(--green-500)",
        ["yellow-100"]: "var(--yellow-100)",
        ["yellow-500"]: "var(--yellow-500)",
        ["red-500"]: "var(--red-500)",
      },
    },
  },
  plugins: [],
};
export default config;
