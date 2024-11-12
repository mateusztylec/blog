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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 0 rgba(250, 204, 21, 0)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.03)',
            boxShadow: '0 0 15px rgba(250, 204, 21, 0.4)',
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '100% 0',
          },
          '100%': {
            backgroundPosition: '-100% 0',
          },
        }
      },
      animation: {
        'status-glow': 'glow 2s ease-in-out infinite',
        'status-shimmer': 'shimmer 2.5s linear infinite',
      },
      minWidth: {
        '48': '12rem',
      },
    },
  },
  plugins: [],
};
export default config;
