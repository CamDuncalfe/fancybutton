import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dos': ['"Perfect DOS VGA"', 'monospace'],
        'ost': ['"Open Sauce Two"', 'monospace'],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      fontSize: {
        "text-3xs": "8px",
        "text-2xs": "10px",
        "text-xs": "12px",
        "text-sm": "14px",
        "text-base": "16px",
        "text-lg": "18px",
        "text-xl": "20px",
        "text-2xl": "24px",
        "text-3xl": "30px",
        "text-4xl": "36px",
        "text-5xl": "48px",
        "text-6xl": "60px",
      },
      fontWeight: {
        regular: "400",
        bold: "700",
        extrabold: "800",
      },
      lineHeight: {
        "120": "120%",
      },
      colors: {
        accent: {
          cyan: "#0FFFF8",
          yellow: "#F6CA46",
          pink: "#F6439E",
          purple: "#AC38FF",
          blue: "#3131FF",
        },
        "cyan-grey": {
          "50": "#F9FAFA",
          "100": "#F4F5F5",
          "200": "#E2E5E5",
          "300": "#CFD4D4",
          "400": "#9CA6A6",
          "500": "#6A7676",
          "600": "#4D5656",
          "700": "#3B4343",
          "800": "#222727",
          "900": "#161B1B",
        },
        "blue-grey": {
          "50": "#F7F9FB",
          "100": "#F0F4F8",
          "200": "#E1E7EF",
          "300": "#CAD4E0",
          "400": "#93A2B7",
          "500": "#64748A",
          "600": "#475569",
          "700": "#334155",
          "800": "#1E293B",
          "900": "#0F172A",
        },
        "purple-grey": {
          "50": "#F9F9F9",
          "100": "#F3F3F4",
          "200": "#E3E3E6",
          "300": "#D3D3D7",
          "400": "#A0A0A9",
          "500": "#71717A",
          "600": "#52525B",
          "700": "#3F3F46",
          "800": "#27272A",
          "900": "#18181B",
        },
        "yellow-grey": {
          "50": "#F9F9F8",
          "100": "#F4F4F3",
          "200": "#E6E4E3",
          "300": "#D5D2D0",
          "400": "#A7A19D",
          "500": "#78716C",
          "600": "#57534E",
          "700": "#44403C",
          "800": "#292524",
          "900": "#1C1917",
        },
        "pink-grey": {
          "50": "#FAF9F9",
          "100": "#F5F4F4",
          "200": "#E6E3E5",
          "300": "#D6D1D3",
          "400": "#A99FA4",
          "500": "#7A6E74",
          "600": "#595055",
          "700": "#463E42",
          "800": "#292427",
          "900": "#1D181A",
        },
        alert: {
          red: "#FF464A",
          yellow: "#F6CA46",
          green: "#66D852",
        },
      },
    },
  },
  plugins: [],
} satisfies Config; 