/* eslint-disable @typescript-eslint/require-await */
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { getPlaiceholder } from 'plaiceholder'

import { Mdx } from '~/components/mdx-components'
import '~/styles/mdx.css'
import Image from 'next/image'

import { siteConfig } from '~/config/site'
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

  const ogUrl = post.image ? `${siteConfig.url}/${post.image}` : siteConfig.ogImage

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      url: `${siteConfig.url}/blog/${post.slugAsParams}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [ogUrl],
    },
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

  const { base64, img } = await getPlaiceholder(`/${post.image}`)

  return (
    <article className="pb-6 prose dark:prose-invert mx-auto">
      <time dateTime={post.datePublished} className="order-first flex items-center text-base">
        <span className="h-4 w-0.5 rounded-full bg-zinc-200"></span>
        <span className="ml-3">{formatDate(post.datePublished)}</span>
      </time>
      <h1 className="mb-6 font-sans mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        {post.title}
      </h1>
      {post.image && (
        <div className="-mx-4 my-10 sm:mx-0">
          <Image
            src={img.src}
            alt={post.title}
            priority
            width={img.width}
            height={img.height}
            // FIXME - not static?
            placeholder="blur"
            blurDataURL={base64}
            className="w-full h-auto sm:rounded-3xl"
          />
        </div>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
}
