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

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content?: string
  published_at: string
  status: 'draft' | 'published'
}
