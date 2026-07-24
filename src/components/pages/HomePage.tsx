import Link from 'next/link'
import { Locale, getDictionary, localePath } from '@/lib/i18n'
import { renderSchemaTags } from '@/lib/seo'

const socials = [
    { href: 'https://twitter.com/mateusztylec', icon: 'bi-twitter-x', event: 'twitter_click' },
    { href: 'https://github.com/mateusztylec', icon: 'bi-github', event: 'github_click' },
    { href: 'https://linkedin.com/in/mateusztylec', icon: 'bi-linkedin', event: 'linkedin_click' },
]

export default function HomePage({ locale }: { locale: Locale }) {
    const dict = getDictionary(locale)
    const { home, nav } = dict

    return (
        <main>
            {renderSchemaTags()}
            <section className="mb-12">
                <h1 className="text-3xl font-normal mb-3">{home.greeting}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{home.tagline}</p>

                <div className="flex gap-6 mt-6">
                    {socials.map((social) => (
                        <Link
                            key={social.href}
                            href={social.href}
                            className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-plausible-event={social.event}
                        >
                            <i className={`bi ${social.icon} text-lg`}></i>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                    {home.bioProjects.before}
                    <Link href={localePath('/projects', locale)} className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        {home.bioProjects.link}
                    </Link>
                    {home.bioProjects.after}
                </p>
                <p>
                    {home.bioEvents.before}
                    <Link href={localePath('/events', locale)} className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        {home.bioEvents.link}
                    </Link>
                    {home.bioEvents.after}
                </p>
            </section>

            <section className="mt-12 grid gap-4 sm:grid-cols-2">
                <Link
                    href={localePath('/projects', locale)}
                    className="group border border-gray-100 dark:border-gray-800 rounded-lg p-5 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                >
                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-base font-normal">{nav.projects}</h2>
                        <i className="bi bi-arrow-right text-gray-400 dark:text-gray-500 group-hover:translate-x-0.5 transition-transform"></i>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{home.cards.projects}</p>
                </Link>

                <Link
                    href={localePath('/events', locale)}
                    className="group border border-gray-100 dark:border-gray-800 rounded-lg p-5 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                >
                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-base font-normal">{nav.events}</h2>
                        <i className="bi bi-arrow-right text-gray-400 dark:text-gray-500 group-hover:translate-x-0.5 transition-transform"></i>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{home.cards.events}</p>
                </Link>
            </section>
        </main>
    )
}
