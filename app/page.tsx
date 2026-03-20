import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="space-y-8">
      <header className="text-left">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Portfolio
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your Name</h1>
      </header>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Articles</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
