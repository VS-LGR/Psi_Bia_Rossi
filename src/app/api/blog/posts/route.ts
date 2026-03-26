import { NextResponse } from 'next/server'

type PostStatus = 'draft' | 'published'

function getEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

async function getSupabaseUserEmail(accessToken: string): Promise<string | null> {
  const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL')
  const supabaseAnonKey = getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')

  const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${accessToken}`,
    },
  })

  if (!response.ok) return null

  const data = (await response.json()) as { email?: string }
  return data.email ?? null
}

export async function POST(req: Request) {
  try {
    const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL')
    const serviceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY')
    const adminEmail = process.env.BLOG_ADMIN_EMAIL

    const authHeader = req.headers.get('authorization') || ''
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice('Bearer '.length)
      : ''

    if (!token) {
      return NextResponse.json(
        { error: 'Missing access token.' },
        { status: 401 }
      )
    }

    const email = await getSupabaseUserEmail(token)
    if (!email) {
      return NextResponse.json(
        { error: 'Unable to validate session.' },
        { status: 401 }
      )
    }

    if (adminEmail && email.toLowerCase() !== adminEmail.toLowerCase()) {
      return NextResponse.json(
        { error: 'Not authorized to publish posts.' },
        { status: 403 }
      )
    }

    const payload = (await req.json()) as Partial<{
      title: string
      slug: string
      excerpt: string
      content: string
      published_at: string
      status: PostStatus
    }>

    const title = (payload.title || '').trim()
    const slug = (payload.slug || '').trim()
    const excerpt = (payload.excerpt || '').trim()
    const content = (payload.content || '').trim()
    const publishedAt = (payload.published_at || '').trim()
    const status = (payload.status || 'draft') as PostStatus

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json(
        { error: 'title, slug, excerpt and content are required.' },
        { status: 400 }
      )
    }

    const isValidStatus = status === 'draft' || status === 'published'
    if (!isValidStatus) {
      return NextResponse.json({ error: 'Invalid status.' }, { status: 400 })
    }

    const body = {
      title,
      slug,
      excerpt,
      content,
      published_at: publishedAt || new Date().toISOString(),
      status,
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/blog_posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: 'return=representation',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => '')
      return NextResponse.json(
        { error: 'Failed to create post.', details: errorText || undefined },
        { status: 400 }
      )
    }

    const data = (await response.json()) as unknown[]
    const created = Array.isArray(data) ? data[0] : null

    return NextResponse.json({ post: created }, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

