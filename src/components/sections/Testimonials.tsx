'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import { Testimonial } from '@/types'

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Eliana',
      text: 'Maravilhosa.. me senti acolhida, tudo oque eu precisava neste momento.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Isabelle Vilela',
      text: 'Uma psicóloga acolhedora e que transmite calma em todas as sessões, muito atenciosa e interessada em ajudar.',
      rating: 5,
    },
    {
      id: '3',
      name: 'E.F',
      text: 'Dra. Beatriz é uma excelente profissional, muito dedicada e atenciosa.',
      rating: 5,
    },
    {
      id: '4',
      name: 'Luciana Rosa',
      text: 'Excelente profissional. Tem me ajudado muito. Sou paciente há quase 2 anos.',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section
      id="depoimentos"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/35 relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trechos de avaliações públicas de pacientes sobre os atendimentos.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div className="relative z-10">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="min-w-full px-4"
                  >
                    <Card className="max-w-3xl mx-auto text-center">
                      <div className="mb-4">
                        {testimonial.rating && (
                          <div className="flex justify-center space-x-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-accent"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        )}
                        <p className="text-lg text-gray-700 italic mb-6">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                        <p className="text-base font-semibold text-primary">
                          {testimonial.name}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg shadow-primary/10 ring-1 ring-primary/10 hover:bg-white transition-colors"
              aria-label="Depoimento anterior"
            >
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg shadow-primary/10 ring-1 ring-primary/10 hover:bg-white transition-colors"
              aria-label="Próximo depoimento"
            >
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-center">
              {testimonial.rating && (
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              <p className="text-base text-gray-700 italic mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-sm font-semibold text-primary">
                {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
        <p className="text-sm text-center text-gray-500 mt-8">
          Fonte: {' '}
          <a
            href="https://www.doctoralia.com.br/beatriz-favinchi-rossi/psicologo/votorantim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            página oficial da profissional na Doctoralia
          </a>
          .
        </p>
      </div>
    </section>
  )
}

