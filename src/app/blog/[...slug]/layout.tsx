import Link from 'next/link'

import type { JSX, SVGProps } from 'react'

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-16 lg:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="relative">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              aria-label="Go back to all blog posts"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:mb-0 lg:-top-1.5 lg:left-0 lg:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </Link>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
