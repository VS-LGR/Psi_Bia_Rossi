'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import GameIcon from '../ui/GameIcon'
import { Service } from '@/types'

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const services: Service[] = [
    {
      id: '1',
      title: 'Psicanálise Individual',
      description:
        'Atendimento personalizado com foco em autoconhecimento, manejo emocional e melhora progressiva no dia a dia.',
    },
    {
      id: '2',
      title: 'Terapia com Gamificação',
      description:
        'Sessões com jogos de tabuleiro como recurso clínico complementar para expressão emocional e vínculo terapêutico.',
    },
    {
      id: '3',
      title: 'Atendimento Psicológico para Adolescentes 14+',
      description:
        'Acompanhamento focado em ansiedade, autoestima, conflitos familiares e desafios emocionais da adolescência.',
    },
    {
      id: '4',
      title: 'Atendimento Psicológico para Adultos',
      description:
        'Espaço acolhedor para trabalhar ansiedade, angústia, sobrecarga emocional e conflitos relacionais no seu ritmo.',
    },
    {
      id: '5',
      title: 'Avaliação Psicológica',
      description:
        'Processos de avaliação e diagnóstico psicológico quando necessário.',
    },
    {
      id: '6',
      title: 'Teleatendimento',
      description:
        'Atendimento remoto com a mesma condução clínica e segurança para quem prefere praticidade na rotina.',
    },
  ]

  const getServiceIcon = (id: string) => {
    const iconMap: Record<string, 'dice' | 'board' | 'piece' | 'card'> = {
      '1': 'piece',
      '2': 'dice',
      '3': 'board',
      '4': 'card',
      '5': 'piece',
      '6': 'board',
    }
    return iconMap[id] || 'dice'
  }

  return (
    <section
      id="servicos"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-24 h-24 text-primary/10 animate-float hidden lg:block">
        <GameIcon type="dice" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 text-primary-light/10 animate-float" style={{ animationDelay: '3s' }}>
        <GameIcon type="board" className="w-full h-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
            <GameIcon type="piece" className="w-5 h-5" />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Serviços{' '}
            <span className="text-primary relative">
              Oferecidos
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-light/30 -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serviços alinhados a psicanálise clínica e metodologias inovadoras,
            com foco em adolescentes 14+ e adultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background decorativo no hover */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 animate-pulse"></div>
              )}
              
              <div className="mb-4 relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center mb-4 transform transition-all duration-300 ${hoveredService === service.id ? 'scale-110 rotate-6' : ''}`}>
                  <GameIcon
                    type={getServiceIcon(service.id)}
                    className="w-8 h-8 text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

