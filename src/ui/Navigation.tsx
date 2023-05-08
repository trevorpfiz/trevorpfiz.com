'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '~/lib/utils'

export interface NavLink {
  href: string
  name: string
}

const navLinks: NavLink[] = [
  { href: '/projects', name: 'Projects' },
  { href: '/blog', name: 'Blog' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <ul className="flex rounded-full bg-white/90 dark:bg-black px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-slate-50/5 backdrop-blur dark:text-slate-50">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)

        return (
          <li key={link.name}>
            <Link
              className={cn(
                'relative block px-3 py-2 hover:text-teal-500',
                isActive && 'text-teal-500'
              )}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
