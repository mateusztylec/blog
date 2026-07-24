import Link from 'next/link'
import { Locale, getDictionary } from '@/lib/i18n'
import { projects, Project } from '@/lib/projects'
import StatusBadge from '@/components/StatusBadge'

const ProjectCard = ({ project, locale }: { project: Project; locale: Locale }) => (
    <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-6 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-normal group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {project.title}
            </h3>
            <StatusBadge status={project.status} />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.description[locale]}</p>
        <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
                <span key={tech} className="text-xs text-gray-400 dark:text-gray-500">
                    {tech}
                </span>
            ))}
        </div>
    </div>
)

export default function ProjectsPage({ locale }: { locale: Locale }) {
    const dict = getDictionary(locale)

    return (
        <main>
            <h1 className="text-sm font-normal text-gray-400 dark:text-gray-500 mb-8 uppercase tracking-wider">
                {dict.projects.heading}
            </h1>
            <div className="space-y-8">
                {projects.map((project) =>
                    project.url ? (
                        <Link
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group relative"
                        >
                            <ProjectCard project={project} locale={locale} />
                        </Link>
                    ) : (
                        <div key={project.title} className="relative group">
                            <ProjectCard project={project} locale={locale} />
                        </div>
                    )
                )}
            </div>
        </main>
    )
}
