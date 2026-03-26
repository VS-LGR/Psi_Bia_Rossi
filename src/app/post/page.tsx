'use client'

import { FormEvent, useMemo, useState } from 'react'

type PostStatus = 'draft' | 'published'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function BlogPostAdminPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isBusy, setIsBusy] = useState(false)

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false)
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<PostStatus>('published')
  const [publishedAt, setPublishedAt] = useState(() => {
    const d = new Date()
    const pad = (n: number) => String(n).padStart(2, '0')
    const local = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
      d.getHours()
    )}:${pad(d.getMinutes())}`
    return local
  })

  const canSave = useMemo(() => {
    if (!accessToken) return false
    return (
      title.trim().length > 0 &&
      slug.trim().length > 0 &&
      excerpt.trim().length > 0 &&
      content.trim().length > 0
    )
  }, [accessToken, title, slug, excerpt, content])

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!supabaseUrl || !supabaseAnonKey) {
      setError('Supabase não está configurado (NEXT_PUBLIC_SUPABASE_URL/ANON_KEY).')
      return
    }

    setIsBusy(true)
    try {
      if (mode === 'login') {
        const endpoint = `${supabaseUrl}/auth/v1/token?grant_type=password`
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })

        const data = await response.json()
        if (!response.ok) {
          throw new Error(data?.error_description || data?.msg || 'Falha no login.')
        }

        const token = data?.access_token as string | undefined
        if (!token) throw new Error('Token de acesso não retornado.')

        setAccessToken(token)
        setSuccess('Login realizado com sucesso.')
        return
      }

      const signupEndpoint = `${supabaseUrl}/auth/v1/signup`
      const signupResponse = await fetch(signupEndpoint, {
        method: 'POST',
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const signupData = await signupResponse.json()
      if (!signupResponse.ok) {
        throw new Error(signupData?.error_description || signupData?.msg || 'Falha no cadastro.')
      }

      setSuccess(
        'Cadastro enviado. Se a confirmação de e-mail estiver ativada no Supabase, você precisará confirmar antes de logar.'
      )
      setMode('login')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado.')
    } finally {
      setIsBusy(false)
    }
  }

  const handleCreatePost = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!accessToken) {
      setError('Faça login para publicar.')
      return
    }

    if (!canSave) {
      setError('Preencha título, slug e resumo.')
      return
    }

    setIsBusy(true)
    try {
      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: title.trim(),
          slug: slugify(slug.trim()),
          excerpt: excerpt.trim(),
          content: content.trim(),
          status,
          published_at: new Date(publishedAt).toISOString(),
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error || 'Falha ao publicar.')
      }

      setSuccess('Post publicado com sucesso na seção Blog.')
      setTitle('')
      setSlug('')
      setSlugManuallyEdited(false)
      setExcerpt('')
      setContent('')
      setStatus('published')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado.')
    } finally {
      setIsBusy(false)
    }
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Área Profissional</h1>
          <p className="text-gray-600">
            Login via Supabase Auth para publicar posts no Blog.
          </p>
        </div>

        {!accessToken ? (
          <form onSubmit={handleAuth} className="bg-[#F0F7FF] rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <button
                type="button"
                onClick={() => {
                  setError(null)
                  setSuccess(null)
                  setMode('login')
                }}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  mode === 'login' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary/20'
                }`}
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => {
                  setError(null)
                  setSuccess(null)
                  setMode('signup')
                }}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  mode === 'signup'
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border border-primary/20'
                }`}
              >
                Criar conta
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}
              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={isBusy}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isBusy ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleCreatePost} className="bg-[#F0F7FF] rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Criar post</h2>
                <p className="text-sm text-gray-600">
                  O status <span className="font-semibold">publicado</span> aparece na seção Blog.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setAccessToken(null)
                  setError(null)
                  setSuccess(null)
                }}
                className="px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-semibold"
              >
                Sair
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="title">
                  Título
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => {
                    const value = e.target.value
                    setTitle(value)
                    if (!slugManuallyEdited) {
                      setSlug(slugify(value))
                    }
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Ex.: Transparência emocional no cuidado"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="slug">
                  Slug (único)
                </label>
                <input
                  id="slug"
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value)
                    setSlugManuallyEdited(true)
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="transparencia-emocional-no-cuidado"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="excerpt">
                  Resumo
                </label>
                <textarea
                  id="excerpt"
                  required
                  rows={5}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Resumo do artigo para aparecer no card do Blog."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="content">
                  Conteúdo completo (Markdown)
                </label>
                <textarea
                  id="content"
                  required
                  rows={10}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Escreva o texto completo aqui. Use Markdown simples (títulos, listas, negrito)."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as PostStatus)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Publicado</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="published_at"
                  >
                    Data/Hora
                  </label>
                  <input
                    id="published_at"
                    type="datetime-local"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}
              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={!canSave || isBusy}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isBusy ? 'Publicando...' : 'Publicar'}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}

