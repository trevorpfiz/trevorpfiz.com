/* eslint-disable @typescript-eslint/require-await */
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Mdx } from '~/components/mdx-components'
import '~/styles/mdx.css'
import { formatDate } from '~/lib/utils'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="pb-6 prose dark:prose-invert">
      <time dateTime={post.date} className="order-first flex items-center text-base">
        <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
        <span className="ml-3">{formatDate(post.date)}</span>
      </time>
      <h1 className="mb-6 font-sans mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
}
