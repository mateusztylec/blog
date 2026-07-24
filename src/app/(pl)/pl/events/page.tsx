import EventsPage from '@/components/pages/EventsPage'
import { getDictionary } from '@/lib/i18n'
import { getSEOTags } from '@/lib/seo'

const dict = getDictionary('pl')

export const metadata = getSEOTags({
    title: dict.events.metaTitle,
    description: dict.events.metaDescription,
    canonicalUrlRelative: '/pl/events',
    languages: { en: '/events', pl: '/pl/events', 'x-default': '/events' },
    ogLocale: 'pl_PL',
})

export default function Events() {
    return <EventsPage locale="pl" />
}
