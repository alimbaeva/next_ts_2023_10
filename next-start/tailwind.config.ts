import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
