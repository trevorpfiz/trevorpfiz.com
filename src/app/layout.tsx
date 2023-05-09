import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Analytics } from '~/components/analytics'
import { ModeToggle } from '~/components/mode-toggle'
import { ThemeProvider } from '~/components/theme-provider'
import '~/styles/globals.css'
import { siteConfig } from '~/config/site'
import { Navigation } from '~/ui/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl lg:max-w-5xl mx-auto pt-6 pb-24 px-4">
            <header>
              <nav className="flex flex-wrap items-center justify-between">
                <Link href="/">
                  <Image
                    src="/spark-logo.png"
                    width={40}
                    height={40}
                    alt="Profile Picture"
                    className="rounded-full"
                  />
                </Link>
                <Navigation />
                <ModeToggle />
              </nav>
            </header>
            <main className="mt-16 sm:mt-32">{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
