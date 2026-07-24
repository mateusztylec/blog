'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, localePath, locales } from '@/lib/i18n'

// Strips the /pl prefix so the current page can be re-localized.
const basePath = (pathname: string): string => {
    if (pathname === '/pl' || pathname === '/pl/') return '/'
    return pathname.startsWith('/pl/') ? pathname.slice(3) : pathname
}

export default function LangSwitcher({ locale }: { locale: Locale }) {
    const pathname = usePathname()
    const current = basePath(pathname).replace(/\/$/, '') || '/'

    return (
        <div className="flex gap-2 text-xs text-gray-300 dark:text-gray-700">
            {locales.map((l, i) => (
                <span key={l} className="flex gap-2">
                    {i > 0 && <span>/</span>}
                    <Link
                        href={localePath(current, l)}
                        onClick={() => localStorage.setItem('locale', l)}
                        className={`transition-colors ${
                            l === locale
                                ? 'text-gray-500 dark:text-gray-400'
                                : 'hover:text-gray-500 dark:hover:text-gray-400'
                        }`}
                    >
                        {l}
                    </Link>
                </span>
            ))}
        </div>
    )
}
