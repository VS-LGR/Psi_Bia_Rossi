import Card from '../ui/Card'
import GameIcon from '../ui/GameIcon'

export default function About() {
  const qualifications = [
    {
      title: 'Formação',
      description: 'Graduada em Psicologia com especialização em Psicanálise',
    },
    {
      title: 'Especialização',
      description: 'Gamificação aplicada à saúde mental através de jogos de tabuleiro',
    },
    {
      title: 'Abordagem',
      description: 'Terapia psicanalítica inovadora combinada com metodologias lúdicas',
    },
  ]

  return (
    <section
      id="sobre"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-20 w-20 h-20 text-primary/5 animate-rotate-slow hidden lg:block">
        <GameIcon type="board" className="w-full h-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
            <GameIcon type="piece" className="w-5 h-5" />
            <span>Conheça a Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre a{' '}
            <span className="text-primary relative">
              Profissional
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-light/30 -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Biography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Beatriz Favinchi Rossi
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Psicóloga especializada em psicanálise, Beatriz Favinchi Rossi
              desenvolveu uma abordagem única e inovadora que combina os
              fundamentos da psicanálise tradicional com a gamificação através
              de jogos de tabuleiro.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com anos de experiência no atendimento clínico, Beatriz acredita
              que o processo terapêutico pode ser mais acolhedor e envolvente
              quando incorpora elementos lúdicos que facilitam a expressão e o
              autoconhecimento.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sua metodologia tem como objetivo tornar a terapia mais acessível
              e menos intimidadora, especialmente para aqueles que buscam uma
              forma diferente de trabalhar questões emocionais e de saúde
              mental.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary to-primary-light/20 flex items-center justify-center overflow-hidden shadow-lg relative">
              {/* Pattern de fundo */}
              <div className="absolute inset-0 pattern-grid opacity-20"></div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-4 right-4 w-10 h-10 text-primary/30 animate-float">
                <GameIcon type="dice" className="w-full h-full" />
              </div>
              <div className="absolute bottom-4 left-4 w-8 h-8 text-primary-light/30 animate-float" style={{ animationDelay: '2s' }}>
                <GameIcon type="card" className="w-full h-full" />
              </div>
              
              <div className="text-center p-8 relative z-10">
                <svg
                  className="w-32 h-32 mx-auto text-primary/40"
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
                <p className="text-primary/60 mt-4 text-sm font-medium">
                  Foto profissional
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualifications.map((qual, index) => {
            const icons: Array<'dice' | 'board' | 'piece' | 'card'> = ['piece', 'board', 'dice']
            return (
              <Card
                key={index}
                className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform">
                  <GameIcon
                    type={icons[index] || 'dice'}
                    className="w-8 h-8 text-primary"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary-dark transition-colors">
                  {qual.title}
                </h4>
                <p className="text-gray-600">{qual.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

