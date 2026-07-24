import Link from 'next/link'
import { Locale, getDictionary } from '@/lib/i18n'
import config from '@/lib/config'

const CONTACT_EMAIL = 'hi@mateusztylec.com'

const serviceKeys = ['training', 'implementation', 'projects'] as const

const renderServiceSchema = (locale: Locale) => {
    const dict = getDictionary(locale)
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ProfessionalService',
                    name: 'Mateusz Tylec',
                    url: `https://${config.domainName}/${locale === 'pl' ? 'pl/work' : 'work'}`,
                    email: CONTACT_EMAIL,
                    description: dict.work.metaDescription,
                    areaServed: 'Kraków, Poland',
                    sameAs: ['https://linkedin.com/in/mateusztylec'],
                }),
            }}
        ></script>
    )
}

export default function WorkPage({ locale }: { locale: Locale }) {
    const dict = getDictionary(locale)
    const { work } = dict

    return (
        <main>
            {renderServiceSchema(locale)}
            <h1 className="text-sm font-normal text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider">
                {work.heading}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{work.intro}</p>

            <div className="space-y-8">
                {serviceKeys.map((key) => (
                    <div key={key} className="border border-gray-100 dark:border-gray-800 rounded-lg p-6">
                        <h2 className="text-lg font-normal mb-2">{work.services[key].title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{work.services[key].description}</p>
                    </div>
                ))}
            </div>

            <p className="mt-12 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {work.contactBefore}
                <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="underline underline-offset-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    data-plausible-event="contact_email_click"
                >
                    {CONTACT_EMAIL}
                </Link>
                {work.contactAfter}
            </p>
        </main>
    )
}
