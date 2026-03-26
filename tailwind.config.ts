import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6FA8FF',
          light: '#BFD9FF',
        },
        secondary: {
          DEFAULT: '#EAF3FF',
          dark: '#2E5EA8',
        },
        accent: {
          DEFAULT: '#8EC5FF',
        },
      },
    },
  },
  plugins: [],
}

export default config

