import Card from '../ui/Card'
import { getPublishedBlogPosts } from '@/lib/blog'

export default async function Blog() {
  const posts = await getPublishedBlogPosts()

  return (
    <section
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog de Psicanálise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conteúdos e reflexões para ampliar autoconhecimento, saúde emocional
            e qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-3">
                {new Date(post.published_at).toLocaleDateString('pt-BR')}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>
              <a
                href={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center text-primary font-semibold hover:underline"
              >
                Ler o post completo
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
