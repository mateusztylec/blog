import type { MetadataRoute } from 'next'
import config from '@/lib/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = `https://${config.domainName}`
    return [
        { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
        { url: `${base}/projects`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/events`, changeFrequency: 'monthly', priority: 0.8 },
    ]
}
