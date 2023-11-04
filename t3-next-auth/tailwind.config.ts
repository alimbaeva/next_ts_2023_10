import type { Config } from 'tailwindcss'

const config: Config = {
  // mode: 'jit',
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
    extend: {
      typography: {
        // пользовательские классы типографии
        'body': {
          css: {
            fontFamily: 'var(--font-raleway) !important',
            fontSize: '0.875rem !important',
            fontWeight: '900 !important',
            lineHeight: '150% !important',
          },
        },
      },
      colors: {
        // собственные цвета
        primary: '#FF5733',
        secondary: '#2E3A87',
      },
      spacing: {
        // собственные отступы
        '3.5': '0.875rem',
        '4.5': '1.125rem',
      },
      translate: {
        '50': 'translate(-50%, -50%)',
      },
      margin: {
        'auto': '0 auto',
      },
      width: {
        '1200': '1200px',
      },
    },
  },
  plugins: [],
}
export default config
