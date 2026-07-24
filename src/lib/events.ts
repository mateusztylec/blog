import { Locale } from '@/lib/i18n'

export interface EventItem {
    title: string
    url: string
    urlLabel: string
    linkedin?: string
    description: Record<Locale, string>
    badge: string
}

export const events: EventItem[] = [
    {
        title: 'claude community kraków',
        url: 'https://claudecommunity.pl',
        urlLabel: 'claudecommunity.pl',
        linkedin: 'https://www.linkedin.com/company/claude-community-krakow/',
        description: {
            en: 'local meetups for engineers and makers building with claude',
            pl: 'lokalne meetupy dla inżynierów i twórców budujących z claude',
        },
        badge: 'live',
    },
]
