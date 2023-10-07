import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      "raleway": "var(--font-raleway)",
      "merriweather": "var(--font-merriweather)",
      "lora": "var(--font-lora)",
    },
    extend: {},
  },
  plugins: [],
}
export default config
