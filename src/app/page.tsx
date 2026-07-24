import Link from 'next/link'

export default function Home() {
    return (
        <main>
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
                    outside of building, i organize local tech events, like{' '}
                    <Link
                        href="https://claudecommunity.pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                        claude community kraków
                    </Link>
                    . more in{' '}
                    <Link href="/events" className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        events
                    </Link>.
                </p>
            </section>
        </main>
    )
}
