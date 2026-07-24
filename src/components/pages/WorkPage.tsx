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

            <section className="mt-12 rounded-lg bg-gray-900 dark:bg-gray-100 p-8 text-center">
                <h2 className="text-xl font-normal text-white dark:text-gray-900 mb-2">{work.cta.title}</h2>
                <p className="text-sm text-gray-400 dark:text-gray-600 mb-6">{work.cta.text}</p>
                <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-block rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    data-plausible-event="contact_email_click"
                >
                    {work.cta.button} → {CONTACT_EMAIL}
                </Link>
            </section>
        </main>
    )
}
