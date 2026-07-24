'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, Dictionary, localePath, locales } from '@/lib/i18n'

// Strips the /pl prefix so paths can be compared and re-localized.
const basePath = (pathname: string): string => {
    if (pathname === '/pl' || pathname === '/pl/') return '/'
    return pathname.startsWith('/pl/') ? pathname.slice(3) : pathname
}

export default function Sidebar({
    locale,
    labels,
}: {
    locale: Locale
    labels: Dictionary['nav']
}) {
    const pathname = usePathname()
    const current = basePath(pathname).replace(/\/$/, '') || '/'

    const tabs = [
        { href: '/', label: labels.about },
        { href: '/projects', label: labels.projects },
        { href: '/events', label: labels.events },
    ]

    return (
        <nav className="mb-12 md:mb-0 md:w-36 shrink-0 md:sticky md:top-24 md:self-start">
            <ul className="flex gap-6 md:flex-col md:gap-4">
                {tabs.map((tab) => {
                    const active = current === tab.href
                    return (
                        <li key={tab.href}>
                            <Link
                                href={localePath(tab.href, locale)}
                                className={`text-sm transition-colors ${
                                    active
                                        ? 'text-gray-900 dark:text-gray-100'
                                        : 'text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                                }`}
                            >
                                {tab.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <div className="mt-6 md:mt-8 flex gap-3 text-xs">
                {locales.map((l) => (
                    <Link
                        key={l}
                        href={localePath(current, l)}
                        onClick={() => localStorage.setItem('locale', l)}
                        className={`uppercase transition-colors ${
                            l === locale
                                ? 'text-gray-900 dark:text-gray-100'
                                : 'text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                    >
                        {l}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
