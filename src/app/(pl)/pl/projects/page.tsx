import ProjectsPage from '@/components/pages/ProjectsPage'
import { getDictionary } from '@/lib/i18n'
import { getSEOTags } from '@/lib/seo'

const dict = getDictionary('pl')

export const metadata = getSEOTags({
    title: dict.projects.metaTitle,
    description: dict.projects.metaDescription,
    canonicalUrlRelative: '/pl/projects',
    languages: { en: '/projects', pl: '/pl/projects', 'x-default': '/projects' },
    ogLocale: 'pl_PL',
})

export default function Projects() {
    return <ProjectsPage locale="pl" />
}
