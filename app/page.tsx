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
        title: '🤫',
        description: '(sharing soon)',
        status: 'building',
        stack: ['nextjs', 'ts', 'supabase', 'railway', 'twilio', 'livekit', 'langgraph']
    },
    {
        title: 'gaidme',
        url: 'https://gaidme.app/?ref=mateusztylec.com',
        description: 'cli tool powered by ai to generate your terminal commands',
        status: 'failing',
        stack: ['nextjs', 'js', 'supabase', 'railway', 'tailwind', 'langchain', 'openai']
    },
    // Add other projects similarly...
]

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
                                className="block group"
                            >
                                <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-6 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-normal group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className={`text-xs px-2.5 py-1 rounded-full ${
                                            {
                                                'acquired': 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
                                                'failed': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
                                                'failing': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
                                                'building': 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
                                                'quit': 'bg-gray-50 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400'
                                            }[project.status]
                                        }`}>
                                            {project.status}
                                        </span>
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
                                className="border border-gray-100 dark:border-gray-800 rounded-lg p-6"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-normal">{project.title}</h3>
                                    <span className={`text-xs px-2.5 py-1 rounded-full ${
                                        {
                                            'acquired': 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
                                            'failed': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
                                            'failing': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
                                            'building': 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
                                            'quit': 'bg-gray-50 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400'
                                        }[project.status]
                                    }`}>
                                        {project.status}
                                    </span>
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
                        )
                    ))}
                </div>
            </section>
        </main>
    )
}
