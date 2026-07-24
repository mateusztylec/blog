import EventsPage from '@/components/pages/EventsPage'
import { getDictionary } from '@/lib/i18n'
import { getSEOTags } from '@/lib/seo'

const dict = getDictionary('en')

export const metadata = getSEOTags({
    title: dict.events.metaTitle,
    description: dict.events.metaDescription,
    canonicalUrlRelative: '/events',
    languages: { en: '/events', pl: '/pl/events', 'x-default': '/events' },
})

export default function Events() {
    return <EventsPage locale="en" />
}
