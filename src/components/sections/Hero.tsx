'use client'

import Button from '../ui/Button'
import GameIcon from '../ui/GameIcon'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary via-white to-primary-light/10 relative overflow-hidden pattern-dots"
    >
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-16 h-16 text-primary/20 animate-float hidden lg:block">
        <GameIcon type="dice" className="w-full h-full" />
      </div>
      <div className="absolute top-40 right-20 w-12 h-12 text-primary-light/30 animate-float" style={{ animationDelay: '2s' }}>
        <GameIcon type="piece" className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-1/4 w-14 h-14 text-accent/20 animate-float" style={{ animationDelay: '4s' }}>
        <GameIcon type="card" className="w-full h-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              <GameIcon type="board" className="w-5 h-5" />
              <span>Metodologia Inovadora</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Psicanálise com{' '}
              <span className="text-primary relative inline-block">
                Gamificação
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-light/30 -z-10 transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Transforme sua jornada de autoconhecimento através de jogos de
              tabuleiro. Uma abordagem inovadora e acolhedora para melhorar sua
              saúde mental.
            </p>
            <p className="text-base text-gray-600">
              Com <span className="font-semibold text-primary">Beatriz Favinchi Rossi</span>, psicóloga especializada em psicanálise
              com gamificação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto transform hover:scale-105 transition-transform animate-pulse-glow"
              >
                Agendar Consulta
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('sobre')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Image Placeholder com elementos de jogo */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center overflow-hidden shadow-2xl relative">
              {/* Tabuleiro de fundo decorativo */}
              <div className="absolute inset-0 pattern-grid opacity-20"></div>
              
              {/* Elementos de jogo decorativos */}
              <div className="absolute top-8 left-8 w-12 h-12 text-primary/40 animate-rotate-slow">
                <GameIcon type="dice" className="w-full h-full" />
              </div>
              <div className="absolute bottom-8 right-8 w-10 h-10 text-primary-light/40 animate-float">
                <GameIcon type="piece" className="w-full h-full" />
              </div>
              
              <div className="text-center p-8 relative z-10">
                <div className="w-48 h-48 mx-auto mb-4 relative">
                  <svg
                    className="w-full h-full text-primary/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <p className="text-primary/60 mt-4 text-sm font-medium">
                  Foto da profissional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

