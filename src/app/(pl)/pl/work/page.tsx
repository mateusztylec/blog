import WorkPage from '@/components/pages/WorkPage'
import { getDictionary } from '@/lib/i18n'
import { getSEOTags } from '@/lib/seo'

const dict = getDictionary('pl')

export const metadata = getSEOTags({
    title: dict.work.metaTitle,
    description: dict.work.metaDescription,
    canonicalUrlRelative: '/pl/work',
    languages: { en: '/work', pl: '/pl/work', 'x-default': '/work' },
    ogLocale: 'pl_PL',
})

export default function Work() {
    return <WorkPage locale="pl" />
}
