'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import GameIcon from '../ui/GameIcon'

export default function Gamification() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)
  const benefits = [
    {
      title: 'Redução da Ansiedade',
      description:
        'O ambiente lúdico ajuda a reduzir a tensão e ansiedade durante as sessões.',
    },
    {
      title: 'Expressão Facilitada',
      description:
        'Os jogos servem como ponte para expressar sentimentos e pensamentos de forma mais natural.',
    },
    {
      title: 'Engajamento',
      description:
        'A gamificação aumenta o interesse e participação ativa no processo terapêutico.',
    },
    {
      title: 'Aprendizado Prático',
      description:
        'Situações do jogo refletem desafios reais, permitindo trabalho prático e aplicável.',
    },
  ]

  const games = [
    {
      name: 'Jogos de Estratégia',
      description:
        'Desenvolvem habilidades de planejamento, tomada de decisão e resolução de problemas.',
    },
    {
      name: 'Jogos Cooperativos',
      description:
        'Promovem trabalho em equipe, comunicação e empatia entre os participantes.',
    },
    {
      name: 'Jogos Narrativos',
      description:
        'Facilitam a expressão de histórias pessoais e o trabalho com narrativas internas.',
    },
  ]

  return (
    <section
      id="gamificacao"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-10 right-10 w-32 h-32 text-primary/5 animate-rotate-slow">
        <GameIcon type="board" className="w-full h-full" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-secondary-dark text-sm font-semibold mb-6">
            <GameIcon type="dice" className="w-5 h-5" />
            <span>Metodologia Única</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Gamificação na{' '}
            <span className="text-primary relative">
              Saúde Mental
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-light/30 -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A gamificação através de jogos de tabuleiro oferece uma abordagem
            inovadora e acolhedora para o trabalho terapêutico, tornando o
            processo de autoconhecimento mais envolvente e menos intimidador.
          </p>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-primary-light/10 to-accent/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-20 h-20 text-primary/10 animate-rotate-slow">
              <GameIcon type="board" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6 text-center relative z-10">
              Como Funciona
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Seleção do Jogo
                      <GameIcon type="card" className="w-5 h-5 text-primary/60" />
                    </h4>
                    <p className="text-gray-600">
                      Escolhemos jogos adequados aos objetivos terapêuticos e
                      perfil do paciente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Processo Lúdico
                      <GameIcon type="dice" className="w-5 h-5 text-primary/60" />
                    </h4>
                    <p className="text-gray-600">
                      Durante o jogo, observamos padrões comportamentais e
                      emocionais que emergem naturalmente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Reflexão e Análise
                      <GameIcon type="board" className="w-5 h-5 text-primary/60" />
                    </h4>
                    <p className="text-gray-600">
                      Após o jogo, trabalhamos as questões que surgiram,
                      conectando-as com a vida real do paciente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      Aplicação Prática
                      <GameIcon type="piece" className="w-5 h-5 text-primary/60" />
                    </h4>
                    <p className="text-gray-600">
                      Os insights obtidos são aplicados no dia a dia, promovendo
                      mudanças reais e duradouras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Benefícios da Gamificação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Games Types */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tipos de Jogos Utilizados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game, index) => {
              const gameIcons = ['board', 'dice', 'card'] as const
              return (
                <Card
                  key={index}
                  className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onMouseEnter={() => setHoveredGame(index)}
                  onMouseLeave={() => setHoveredGame(null)}
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary to-primary-light/20 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 pattern-grid opacity-20"></div>
                    <div className={`relative z-10 transition-all duration-300 ${hoveredGame === index ? 'scale-125 rotate-12' : ''}`}>
                      <GameIcon
                        type={gameIcons[index] || 'board'}
                        className="w-20 h-20 text-primary/60"
                      />
                    </div>
                    {hoveredGame === index && (
                      <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {game.name}
                  </h4>
                  <p className="text-gray-600">{game.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

