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
          // Azul bebê com mais contraste (CTA/links)
          DEFAULT: '#2F7BFF',
          light: '#BFD9FF',
        },
        secondary: {
          // Fundos acolhedores + profundidade
          DEFAULT: '#EEF6FF',
          dark: '#163B6B',
        },
        accent: {
          // Acentos mais “bold” sem perder suavidade
          DEFAULT: '#7AB6FF',
        },
      },
    },
  },
  plugins: [],
}

export default config

