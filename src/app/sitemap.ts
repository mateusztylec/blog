import type { MetadataRoute } from 'next'
import config from '@/lib/config'

export const dynamic = 'force-static'

const base = `https://${config.domainName}`

// One entry per URL; hreflang alternates point both language versions at each other.
const entries = (enPath: string, enPriority: number, plPriority: number): MetadataRoute.Sitemap => {
    const plPath = enPath === '/' ? '/pl' : `/pl${enPath}`
    const languages = { en: `${base}${enPath}`, pl: `${base}${plPath}` }
    return [
        { url: `${base}${enPath}`, changeFrequency: 'monthly', priority: enPriority, alternates: { languages } },
        { url: `${base}${plPath}`, changeFrequency: 'monthly', priority: plPriority, alternates: { languages } },
    ]
}

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...entries('/', 1, 0.9),
        ...entries('/projects', 0.8, 0.7),
        ...entries('/events', 0.8, 0.7),
    ]
}
