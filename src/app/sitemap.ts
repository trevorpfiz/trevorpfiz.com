import { allPages, allPosts } from 'contentlayer/generated'

import type { MetadataRoute } from 'next'
import { siteConfig } from '~/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
    },
    ...allPages.map((page) => ({
      url: `${siteConfig.url}/${page.slugAsParams}`,
      lastModified: new Date(),
    })),
    ...allPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slugAsParams}`,
      lastModified: new Date(post.dateModified),
    })),
  ]
}
