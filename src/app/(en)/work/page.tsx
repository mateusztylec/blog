import WorkPage from '@/components/pages/WorkPage'
import { getDictionary } from '@/lib/i18n'
import { getSEOTags } from '@/lib/seo'

const dict = getDictionary('en')

export const metadata = getSEOTags({
    title: dict.work.metaTitle,
    description: dict.work.metaDescription,
    canonicalUrlRelative: '/work',
    languages: { en: '/work', pl: '/pl/work', 'x-default': '/work' },
})

export default function Work() {
    return <WorkPage locale="en" />
}
