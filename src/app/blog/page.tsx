import { allPosts } from 'contentlayer/generated'

import { siteConfig } from '~/config/site'
import { formatDate } from '~/lib/utils'
import { Card } from '~/components/Card'

export const metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: `The personal blog of Trevor Pfizenmaier`,
}

export default function BlogPage() {
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.datePublished).getTime()
    const dateB = new Date(b.datePublished).getTime()
    return dateB - dateA
  })

  return (
    <>
      <div className="prose dark:prose-invert">
        <h1 className="font-sans text-5xl font-bold">{`Writing on software, healthcare, and startups`}</h1>
        <p>{`All of my long-form thoughts on health, AI, and more, collected in chronological order.`}</p>
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 sm:mx-auto mt-16 sm:mt-20">
        <div className="flex max-w-3xl flex-col space-y-16">
          {sortedPosts.map((post) => (
            <article key={post._id} className="md:grid md:grid-cols-4 md:items-baseline">
              <Card className="md:col-span-3">
                <Card.Title href={post.slug}>{post.title}</Card.Title>
                <Card.Eyebrow
                  as="time"
                  dateTime={post.datePublished}
                  className="md:hidden"
                  decorate
                >
                  {formatDate(post.datePublished)}
                </Card.Eyebrow>
                <Card.Description>{post.summary}</Card.Description>
                <Card.Cta>Read post</Card.Cta>
              </Card>
              <Card.Eyebrow
                as="time"
                dateTime={post.datePublished}
                className="mt-1 hidden md:block"
              >
                {formatDate(post.datePublished)}
              </Card.Eyebrow>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
