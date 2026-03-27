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
          // Eixo azul bebê profundificado — CTA/links (AA em texto sobre branco)
          DEFAULT: '#1A5F96',
          light: '#B9E3F5',
        },
        secondary: {
          DEFAULT: '#EAF5FA',
          dark: '#0F3550',
        },
        accent: {
          // Terracota suave — contraste com branco em botões; quebra monocromia azul
          DEFAULT: '#9C4D38',
        },
        rating: {
          // Estrelas de depoimentos — amarelo-ouro chamativo sobre fundo claro
          DEFAULT: '#EAB308',
        },
      },
    },
  },
  plugins: [],
}

export default config

