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
          // Azul bebê mais suave (CTA/links)
          DEFAULT: '#5B9DFF',
          light: '#CFE5FF',
        },
        secondary: {
          // Fundos acolhedores (azul gelo com toque quente)
          DEFAULT: '#F3F8FF',
          dark: '#244A7A',
        },
        accent: {
          // Acentos delicados (chips, detalhes, hovers)
          DEFAULT: '#8ABEFF',
        },
      },
    },
  },
  plugins: [],
}

export default config

