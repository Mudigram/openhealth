import { ReactNode } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50 transition-colors duration-300">
            <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                            <div className="h-6 w-6 rounded bg-gradient-to-br from-teal-500 to-emerald-600 shadow-sm shadow-teal-500/20" />
                            <h1 className="text-lg font-semibold tracking-tight">OpenHealth NG</h1>
                        </Link>
                        <div className="hidden h-6 w-px bg-zinc-200 dark:bg-zinc-800 sm:block" />
                        <span className="hidden text-sm text-zinc-500 dark:text-zinc-400 sm:block">Explorer</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:flex">
                            <Link href="/api/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">API Docs</Link>
                            <Link href="https://github.com/Mudigram/openhealth" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-50">GitHub</Link>
                        </nav>
                        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl p-4 sm:px-6 sm:py-8 lg:px-8">
                {children}
            </main>
        </div>
    )
}
