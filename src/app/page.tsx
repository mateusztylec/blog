import Link from 'next/link'
import { renderSchemaTags } from '@/lib/seo'

export default function Home() {
    return (
        <main>
            {renderSchemaTags()}
            <section className="mb-12">
                <h1 className="text-3xl font-normal mb-3">hi, i'm mateusz 👋🏼</h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    ai dev • indie hacker • builder • devops
                </p>

                <div className="flex gap-6 mt-6">
                    <Link
                        href="https://twitter.com/mateusztylec"
                        className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-plausible-event="twitter_click"
                    >
                        <i className="bi bi-twitter-x text-lg"></i>
                    </Link>

                    <Link
                        href="https://github.com/mateusztylec"
                        className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-plausible-event="github_click"
                    >
                        <i className="bi bi-github text-lg"></i>
                    </Link>

                    <Link
                        href="https://linkedin.com/in/mateusztylec"
                        className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-plausible-event="linkedin_click"
                    >
                        <i className="bi bi-linkedin text-lg"></i>
                    </Link>
                </div>
            </section>

            <section className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                    i build ai-powered products and the infrastructure they run on.
                    most of my time goes into shipping side projects. some live, most failed,
                    all of them lessons. you can find them in{' '}
                    <Link href="/projects" className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        projects
                    </Link>.
                </p>
                <p>
                    outside of building, i organize local tech events. more in{' '}
                    <Link href="/events" className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        events
                    </Link>.
                </p>
            </section>

            <section className="mt-12 grid gap-4 sm:grid-cols-2">
                <Link
                    href="/projects"
                    className="group border border-gray-100 dark:border-gray-800 rounded-lg p-5 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                >
                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-base font-normal">projects</h2>
                        <i className="bi bi-arrow-right text-gray-400 dark:text-gray-500 group-hover:translate-x-0.5 transition-transform"></i>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">stuff i've built and shipped</p>
                </Link>

                <Link
                    href="/events"
                    className="group border border-gray-100 dark:border-gray-800 rounded-lg p-5 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                >
                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-base font-normal">events</h2>
                        <i className="bi bi-arrow-right text-gray-400 dark:text-gray-500 group-hover:translate-x-0.5 transition-transform"></i>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">meetups i organize</p>
                </Link>
            </section>
        </main>
    )
}
