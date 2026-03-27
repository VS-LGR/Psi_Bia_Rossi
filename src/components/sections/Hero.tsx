'use client'

import Button from '../ui/Button'
import GameIcon from '../ui/GameIcon'

function BreezeText({
  text,
  className,
  delayMs = 0,
}: {
  text: string
  className?: string
  delayMs?: number
}) {
  return (
    <span className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span className="breeze-text" aria-hidden="true">
        {Array.from(text).map((char, idx) => (
          <span
            key={`${char}-${idx}`}
            className="breeze-letter"
            style={{ animationDelay: `${delayMs + idx * 18}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </span>
  )
}

const HERO_SKETCH = {
  /** Arte “Planos / Futuro” — apenas desktop (lg+); 1x / 2x conforme DPR */
  src1: '/images/hero/hero-plano-futuro-1x.png',
  src2: '/images/hero/hero-plano-futuro-2x.png',
} as const

export default function Hero() {
  const whatsappLink = 'https://wa.me/5515991126506?text=Ol%C3%A1%2C%20quero%20agendar%20minha%201%C2%AA%20consulta%20gratuita.'

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-secondary/40 px-4 pb-14 pt-24 sm:px-6 lg:px-8 shadow-[0_22px_56px_-18px_rgba(15,53,80,0.16),0_10px_28px_-12px_rgba(26,95,150,0.09),inset_0_-1px_0_0_rgba(15,53,80,0.07)]"
    >
      {/* Fundos recortados aqui para a sombra da section não ser cortada por overflow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 pattern-dots opacity-18"></div>
        <div className="absolute inset-0 pattern-grid opacity-8"></div>

        {/* Ilustração estilo anotações: só viewport web (lg+); omitida em mobile/tablet */}
        <div className="pointer-events-none absolute inset-0 hidden select-none lg:block">
          <img
            src={HERO_SKETCH.src1}
            srcSet={`${HERO_SKETCH.src1} 1x, ${HERO_SKETCH.src2} 2x`}
            sizes="100vw"
            alt=""
            decoding="async"
            fetchPriority="low"
            className="h-full w-full min-h-full object-cover object-center opacity-40"
          />
        </div>
      </div>

      {/* Elementos decorativos flutuantes (discretos) */}
      <div className="absolute top-24 left-8 w-14 h-14 text-primary/15 animate-float hidden lg:block">
        <GameIcon type="dice" className="w-full h-full" />
      </div>
      <div
        className="absolute top-28 right-10 w-12 h-12 text-accent/15 animate-float hidden lg:block"
        style={{ animationDelay: '2s' }}
      >
        <GameIcon type="piece" className="w-full h-full" />
      </div>
      <div
        className="absolute bottom-16 left-16 w-12 h-12 text-primary-light/18 animate-float hidden lg:block"
        style={{ animationDelay: '4s' }}
      >
        <GameIcon type="card" className="w-full h-full" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Content centralizado (sem imagem à direita) */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6 animate-breeze-in">
            <GameIcon type="board" className="w-5 h-5" />
            <span>Psicanálise para maiores de 14 anos e adultos</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05]">
            <span className="block">
              <BreezeText text="Cuidar da saúde mental" />
            </span>
            <span className="block mt-3 text-primary">
              <BreezeText text="pode ser leve." delayMs={180} />
            </span>
          </h1>

          <p
            className="mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto animate-breeze-in"
            style={{ animationDelay: '260ms' }}
          >
            Um espaço acolhedor, com escuta ativa e condução gradual, para você
            construir clareza emocional sem pressão.
          </p>

          <p className="mt-6 text-base text-gray-600 max-w-2xl mx-auto">
            Com{' '}
            <span className="font-semibold text-primary">
              Beatriz Favinchi Rossi
            </span>{' '}
            - CRP SP 179388. Primeira consulta gratuita mediante CPF e
            confirmação de horário via WhatsApp.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto transform hover:scale-105 transition-transform animate-pulse-glow"
              >
                Agende sua 1° consulta
              </Button>
            </a>
            <Button
              onClick={() => {
                const element = document.getElementById('servicos')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Ver atendimentos disponíveis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

