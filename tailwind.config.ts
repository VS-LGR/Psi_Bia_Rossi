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
          DEFAULT: '#805D93',
          light: '#F49FBC',
        },
        secondary: {
          DEFAULT: '#FFD3BA',
          dark: '#169873',
        },
        accent: {
          DEFAULT: '#9EBD6E',
        },
      },
    },
  },
  plugins: [],
}

export default config

