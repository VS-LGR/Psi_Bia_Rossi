import { BlogPost } from '@/types'

const fallbackPosts: BlogPost[] = [
  {
    id: 'fallback-1',
    title: 'Como a psicanálise pode ajudar no manejo da ansiedade',
    slug: 'psicanalise-manejo-ansiedade',
    excerpt:
      'Entenda como o processo terapêutico pode oferecer mais clareza emocional e estratégias para lidar com ansiedade.',
    published_at: '2026-01-15',
    status: 'published',
  },
  {
    id: 'fallback-2',
    title: 'Adolescência 14+: quando buscar acompanhamento psicológico',
    slug: 'adolescencia-quando-buscar-acompanhamento',
    excerpt:
      'Sinais importantes para famílias e adolescentes identificarem o momento de iniciar atendimento psicológico.',
    published_at: '2026-01-08',
    status: 'published',
  },
  {
    id: 'fallback-3',
    title: 'Transparência emocional no cuidado em saúde mental',
    slug: 'transparencia-emocional-no-cuidado',
    excerpt:
      'Por que acolhimento e autenticidade são pilares para construir vínculo e evolução terapêutica consistente.',
    published_at: '2025-12-20',
    status: 'published',
  },
]

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return fallbackPosts
  }

  try {
    const endpoint = `${supabaseUrl}/rest/v1/blog_posts?select=id,title,slug,excerpt,published_at,status&status=eq.published&order=published_at.desc&limit=6`
    const response = await fetch(endpoint, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      // Garante que o Blog reflita publicações recém-criadas imediatamente.
      cache: 'no-store',
    })

    if (!response.ok) {
      return fallbackPosts
    }

    const data = (await response.json()) as BlogPost[]
    return data.length > 0 ? data : fallbackPosts
  } catch {
    return fallbackPosts
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  try {
    const endpoint = `${supabaseUrl}/rest/v1/blog_posts?select=id,title,slug,excerpt,content,published_at,status&slug=eq.${encodeURIComponent(
      slug
    )}&status=eq.published&limit=1`

    const response = await fetch(endpoint, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      cache: 'no-store',
    })

    if (!response.ok) return null

    const data = (await response.json()) as BlogPost[]
    return data[0] ?? null
  } catch {
    return null
  }
}
