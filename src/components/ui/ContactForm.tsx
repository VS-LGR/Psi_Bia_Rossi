'use client'

import { useState, FormEvent } from 'react'
import { ContactFormData } from '@/types'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) return false
    if (!formData.email.trim() || !formData.email.includes('@')) return false
    if (!formData.phone.trim()) return false
    if (!formData.message.trim()) return false
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // TODO: Integrar com API quando backend estiver disponível
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   })
    //   if (response.ok) {
    //     setSubmitStatus('success')
    //     setFormData({ name: '', email: '', phone: '', message: '' })
    //   } else {
    //     setSubmitStatus('error')
    //   }
    // } catch (error) {
    //   setSubmitStatus('error')
    // } finally {
    //   setIsSubmitting(false)
    // }

    // Simulação temporária
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          placeholder="Como posso ajudar você?"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-accent/20 border border-accent rounded-lg text-secondary-dark">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          Por favor, preencha todos os campos corretamente.
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  )
}

