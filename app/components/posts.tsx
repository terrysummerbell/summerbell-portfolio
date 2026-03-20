import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

const DESCRIPTION_MAX_LENGTH = 110

function truncateDescription(description: string, maxLength = DESCRIPTION_MAX_LENGTH) {
  if (description.length <= maxLength) {
    return description
  }

  return `${description.slice(0, maxLength).trimEnd()}...`
}

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <ul className="space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <li key={post.slug}>
            <Link
              className="block rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
              href={`/blog/${post.slug}`}
            >
              <h3 className="text-base font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {truncateDescription(post.metadata.summary ?? '')}
              </p>
            </Link>
          </li>
        ))}
    </ul>
  )
}
