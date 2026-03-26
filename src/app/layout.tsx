import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beatrizfavinchirossi.com.br'),
  title: 'Beatriz Favinchi Rossi | Psicóloga em Votorantim - Psicanálise para maiores de 14 anos e adultos',
  description:
    'Atendimento psicológico em Votorantim com foco em psicanálise para maiores de 14 anos e adultos. Primeira consulta gratuita mediante CPF e confirmação de horário via WhatsApp.',
  keywords: [
    'psicologa em votorantim',
    'psicanalise votorantim',
    'psicologa adolescentes',
    'psicologa adultos',
    'primeira consulta gratuita psicologa',
    'beatriz favinchi rossi',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Beatriz Favinchi Rossi | Psicóloga em Votorantim - Psicanálise para maiores de 14 anos e adultos',
    description:
      'Atendimento psicológico acolhedor em psicanálise. Primeira consulta gratuita mediante CPF e confirmação de horário no WhatsApp.',
    url: '/',
    siteName: 'Beatriz Favinchi Rossi',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Beatriz Favinchi Rossi | Psicóloga em Votorantim',
    description:
      'Psicanálise para maiores de 14 anos e adultos com abordagem acolhedora e progressiva.',
  },
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

