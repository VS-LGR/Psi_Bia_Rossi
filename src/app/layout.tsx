import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beatriz Favinchi Rossi | Psicóloga - Psicanálise com Gamificação',
  description: 'Psicóloga especializada em psicanálise com gamificação através de jogos de tabuleiro para melhora da saúde mental.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}

