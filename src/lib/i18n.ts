import en from '@/dictionaries/en.json'
import pl from '@/dictionaries/pl.json'

export const locales = ['en', 'pl'] as const
export type Locale = (typeof locales)[number]

export type Dictionary = typeof en

const dictionaries: Record<Locale, Dictionary> = { en, pl }

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale]

// Maps a root-relative EN path to its equivalent in the given locale,
// e.g. ('/projects', 'pl') -> '/pl/projects', ('/', 'pl') -> '/pl'.
export const localePath = (path: string, locale: Locale): string => {
    if (locale === 'en') return path
    return path === '/' ? '/pl' : `/pl${path}`
}
