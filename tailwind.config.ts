import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'warm-white': '#fefefe',
        'cool-grey': '#f8f9fa',
        'accent-blue': '#2563eb',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
      },
      fontFamily: {
        'serif': ['Times New Roman', 'serif'],
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'wide': '0.025em',
      },
    },
  },
  plugins: [],
}
export default config