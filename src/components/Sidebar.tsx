'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
    { href: '/', label: 'about me' },
    { href: '/projects', label: 'projects' },
    { href: '/events', label: 'events' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <nav className="mb-12 md:mb-0 md:w-36 shrink-0 md:sticky md:top-24 md:self-start">
            <ul className="flex gap-6 md:flex-col md:gap-4">
                {tabs.map((tab) => {
                    const active = pathname === tab.href || pathname === `${tab.href}/`
                    return (
                        <li key={tab.href}>
                            <Link
                                href={tab.href}
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
        </nav>
    )
}
