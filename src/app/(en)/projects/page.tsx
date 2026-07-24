import ProjectsPage from '@/components/pages/ProjectsPage'
import { getDictionary } from '@/lib/i18n'
import { getSEOTags } from '@/lib/seo'

const dict = getDictionary('en')

export const metadata = getSEOTags({
    title: dict.projects.metaTitle,
    description: dict.projects.metaDescription,
    canonicalUrlRelative: '/projects',
    languages: { en: '/projects', pl: '/pl/projects', 'x-default': '/projects' },
})

export default function Projects() {
    return <ProjectsPage locale="en" />
}
