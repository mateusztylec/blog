import Link from 'next/link'
import { getSEOTags } from '@/lib/seo'

export const metadata = getSEOTags({
    title: 'Events | Mateusz Tylec',
    description: 'Tech events organized by Mateusz Tylec, including Claude Community Kraków.',
    canonicalUrlRelative: '/events',
})

interface Event {
    title: string
    url: string
    linkedin?: string
    description: string
    role: string
}

const events: Event[] = [
    {
        title: 'claude community kraków',
        url: 'https://claudecommunity.pl',
        linkedin: 'https://www.linkedin.com/company/claude-community-krakow/',
        description: 'local meetups for engineers and makers building with claude',
        role: 'live',
    },
]

export default function Events() {
    return (
        <main>
            <h1 className="text-sm font-normal text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider">events i organize</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                all my events live on{' '}
                <Link
                    href="https://luma.com/user/mateusztylec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    data-plausible-event="luma_click"
                >
                    luma
                </Link>
            </p>
            <div className="space-y-8">
                {events.map((event) => (
                    <div key={event.title} className="border border-gray-100 dark:border-gray-800 rounded-lg p-6 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <Link
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-normal hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                data-plausible-event="claude_community_click"
                            >
                                {event.title}
                            </Link>
                            <span className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                {event.role}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{event.description}</p>
                        <div className="flex gap-5 items-center">
                            <Link
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                            >
                                claudecommunity.pl
                            </Link>
                            {event.linkedin && (
                                <Link
                                    href={event.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
