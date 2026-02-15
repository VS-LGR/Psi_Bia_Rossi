export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating?: number
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
}
