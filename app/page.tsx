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
        url: 'https://gaidme.app',
        description: 'reach your personal goals with a little help from ai',
        status: 'failing',
        stack: ['nextjs', 'js', 'supabase', 'railway', 'tailwind', 'langchain', 'openai']
    },
    // Add other projects similarly...
]

export default function Home() {
    return (
        <main className="max-w-2xl mx-auto px-4 py-16">
            <section className="mb-16">
                <h1 className="text-4xl font-bold mb-2">hi, i'm mateusz 👋🏼</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    devops, indie hacker, builder
                </p>

                <div className="flex gap-4 mt-4">
                    <Link
                        href="https://twitter.com/mateusztylec"
                        className="text-gray-600 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-twitter-x text-2xl"></i>
                    </Link>

                    <Link
                        href="https://github.com/mateusztylec"
                        className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-github text-2xl"></i>
                    </Link>

                    <Link
                        href="https://linkedin.com/in/mateusztylec"
                        className="text-gray-600 hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin text-2xl"></i>
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-8">my stuff</h2>
                <div className="space-y-6">
                    {projects.map((project) => (
                        <div key={project.title} className="border rounded-lg p-6">
                            <div className="flex justify-between items-start mb-2">
                                {project.url ? (
                                    <Link 
                                        href={project.url}
                                        className="text-xl font-semibold hover:text-blue-600 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.title}
                                    </Link>
                                ) : (
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                )}
                                <span className={`px-3 py-1 rounded-full text-sm ${project.status === 'acquired' ? 'bg-green-100 text-green-800' :
                                        project.status === 'failed' ? 'bg-red-200 text-red-800' :
                                            project.status === 'failing' ? 'bg-red-100 text-red-800' :
                                                project.status === 'building' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-gray-100 text-gray-800'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
