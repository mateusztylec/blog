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
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{work.intro}</p>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {serviceKeys.map((key) => (
                    <div key={key} className="py-8">
                        <h2 className="text-lg font-normal mb-2">{work.services[key].title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{work.services[key].description}</p>
                    </div>
                ))}
            </div>

            <section className="border-t border-gray-100 dark:border-gray-800 pt-8">
                <h2 className="text-lg font-normal mb-2">{work.cta.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{work.cta.text}</p>
                <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-block rounded-full border border-gray-300 dark:border-gray-700 text-sm px-5 py-2.5 hover:border-gray-500 dark:hover:border-gray-400 transition-colors"
                    data-plausible-event="contact_email_click"
                >
                    {work.cta.button} → {CONTACT_EMAIL}
                </Link>
            </section>
        </main>
    )
}
