import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/blog'

function renderMarkdownToElements(markdown: string) {
  // Render simples e seguro: suporta headings (#, ##, ###), listas (- ) e parágrafos.
  // Sem HTML raw e sem dependências externas.
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []

  const flushList = (key: string) => {
    if (listItems.length === 0) return
    elements.push(
      <ul key={key} className="list-disc pl-6 space-y-2 text-gray-700">
        {listItems.map((item, idx) => (
          <li key={`${key}-${idx}`}>{item}</li>
        ))}
      </ul>
    )
    listItems = []
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const line = raw.trim()

    if (!line) {
      flushList(`list-${i}`)
      continue
    }

    if (line.startsWith('- ')) {
      listItems.push(line.slice(2).trim())
      continue
    }

    flushList(`list-${i}`)

    const h3 = line.startsWith('### ')
    const h2 = line.startsWith('## ')
    const h1 = line.startsWith('# ')

    if (h1 || h2 || h3) {
      const text = line.replace(/^#{1,3}\s+/, '').trim()
      const Tag = h1 ? 'h2' : h2 ? 'h3' : 'h4'
      const className =
        Tag === 'h2'
          ? 'text-2xl font-bold text-gray-900 mt-8'
          : Tag === 'h3'
            ? 'text-xl font-bold text-gray-900 mt-7'
            : 'text-lg font-bold text-gray-900 mt-6'
      elements.push(
        <Tag key={`h-${i}`} className={className}>
          {text}
        </Tag>
      )
      continue
    }

    elements.push(
      <p key={`p-${i}`} className="text-gray-700 leading-relaxed">
        {line}
      </p>
    )
  }

  flushList('list-end')
  return elements
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) return notFound()

  const dateLabel = new Date(post.published_at).toLocaleDateString('pt-BR')

  return (
    <main className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <article className="container mx-auto max-w-3xl">
        <a href="/#blog" className="text-primary font-semibold hover:underline">
          ← Voltar ao Blog
        </a>

        <header className="mt-6">
          <p className="text-xs uppercase tracking-wide text-primary font-semibold">
            {dateLabel}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
        </header>

        <div className="mt-10 space-y-4">
          {post.content ? (
            renderMarkdownToElements(post.content)
          ) : (
            <p className="text-gray-700 leading-relaxed">
              Conteúdo indisponível.
            </p>
          )}
        </div>

        <div className="mt-12 rounded-2xl bg-secondary p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Quer conversar sobre este tema?
          </h2>
          <p className="text-gray-700 mb-4">
            Agende sua 1a consulta gratuita via WhatsApp (mediante CPF e confirmação de horário).
          </p>
          <a
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            href="https://wa.me/5515991126506?text=Ol%C3%A1%2C%20vi%20um%20post%20no%20blog%20e%20quero%20agendar%20minha%201%C2%AA%20consulta%20gratuita."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </article>
    </main>
  )
}

