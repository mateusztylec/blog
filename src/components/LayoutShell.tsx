import '@/app/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { geistSans, geistMono } from '@/lib/fonts'
import { Locale, getDictionary } from '@/lib/i18n'
import Sidebar from '@/components/Sidebar'
import LangSwitcher from '@/components/LangSwitcher'

// One-time language detection for the static export: on the very first visit,
// Polish browsers get redirected from the EN tree to /pl. Never redirects away
// from /pl (an explicit URL wins), so crawlers indexing /pl are unaffected.
const detectLanguageSnippet = `(function(){try{if(localStorage.getItem('locale'))return;var l=((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase();var pref=l.indexOf('pl')===0?'pl':'en';localStorage.setItem('locale',pref);var p=location.pathname;var onPl=p==='/pl'||p.indexOf('/pl/')===0;if(pref==='pl'&&!onPl){location.replace('/pl'+(p==='/'?'':p));}}catch(e){}})();`

export default function LayoutShell({
    locale,
    children,
}: Readonly<{
    locale: Locale
    children: React.ReactNode
}>) {
    const dict = getDictionary(locale)

    return (
        <html lang={locale}>
            <head>
                <script
                    defer
                    data-domain="mateusztylec.com"
                    src="https://plausible-prod.matsurge.com/js/script.js"
                ></script>
                <script dangerouslySetInnerHTML={{ __html: detectLanguageSnippet }}></script>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 md:flex md:gap-12">
                    <Sidebar locale={locale} labels={dict.nav} />
                    <div className="flex-1 min-w-0">{children}</div>
                </div>
                <footer className="max-w-3xl mx-auto px-6 pb-8 flex justify-end">
                    <LangSwitcher locale={locale} />
                </footer>
            </body>
        </html>
    )
}
