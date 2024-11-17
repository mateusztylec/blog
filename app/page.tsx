import Link from 'next/link'

interface Project {
    title: string
    url?: string
    description: string
    status: 'acquired' | 'failed' | 'quit' | 'failing' | 'building'
    stack: string[]
}

const projects: Project[] = [
    {
        title: 'secretary-ai',
        description: '(more details soon)',
        status: 'building',
        stack: ['nextjs', 'ts', 'supabase', 'railway', 'twilio', 'livekit', 'langgraph']
    },
    {
        title: 'gaidme',
        url: 'https://gaidme.app/?ref=mateusztylec.com',
        description: 'cli tool powered by ai to generate your terminal commands',
        status: 'failed',
        stack: ['nextjs', 'js', 'supabase', 'railway', 'tailwind', 'langchain', 'openai']
    },
    // Add other projects similarly...
]

const getProjectTooltip = (status: Project['status']) => {
    if (status === 'building') {
        return "🚀 Follow on X for launch updates!"
    }
    return ''
}

const StatusBadge = ({ status }: { status: Project['status'] }) => {
    const baseClasses = "text-xs px-2.5 py-1 rounded-full relative"
    const statusClasses = {
        'acquired': 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
        'failed': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        'failing': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        'building': 'bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 dark:from-yellow-900/40 dark:via-yellow-700/40 dark:to-yellow-900/40 text-yellow-700 dark:text-yellow-300 animate-status-shimmer bg-[length:200%_100%] animate-status-glow',
        'quit': 'bg-gray-50 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400'
    }[status]

    return (
        <div className="relative">
            <span className={`${baseClasses} ${statusClasses} ${status === 'building' ? 'shadow-lg shadow-yellow-200/20 dark:shadow-yellow-500/10' : ''}`}>
                {status}
                {status === 'building' && (
                    <span className="absolute inset-0 rounded-full bg-yellow-300/20 dark:bg-yellow-400/20 blur-sm" />
                )}
            </span>
            {status === 'building' && (
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 -top-14 left-1/2 -translate-x-1/2 min-w-48">
                    <div className="bg-black/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm text-center shadow-lg border border-gray-100 dark:border-gray-800">
                        {getProjectTooltip(status)}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/95 rotate-45 border-b border-r border-gray-100 dark:border-gray-800"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function Home() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-24">
            <section className="mb-20">
                <h1 className="text-3xl font-normal mb-3">hi, i'm mateusz 👋🏼</h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    devops • indie hacker • builder
                </p>

                <div className="flex gap-6 mt-6">
                    <Link
                        href="https://twitter.com/mateusztylec"
                        className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-twitter-x text-lg"></i>
                    </Link>

                    <Link
                        href="https://github.com/mateusztylec"
                        className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-github text-lg"></i>
                    </Link>

                    <Link
                        href="https://linkedin.com/in/mateusztylec"
                        className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin text-lg"></i>
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="text-sm font-normal text-gray-400 dark:text-gray-500 mb-8 uppercase tracking-wider">my stuff</h2>
                <div className="space-y-8">
                    {projects.map((project) => (
                        project.url ? (
                            <Link
                                key={project.title}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group relative"
                            >
                                <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-6 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-normal group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <StatusBadge status={project.status} />
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs text-gray-400 dark:text-gray-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div
                                key={project.title}
                                className="relative group"
                            >
                                <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-normal">{project.title}</h3>
                                        <StatusBadge status={project.status} />
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs text-gray-400 dark:text-gray-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </section>
        </main>
    )
}
