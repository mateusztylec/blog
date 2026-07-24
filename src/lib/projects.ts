import { Locale } from '@/lib/i18n'

export type ProjectStatus = 'waitlist' | 'failed' | 'failing' | 'building' | 'live'

export interface Project {
    title: string
    url?: string
    description: Record<Locale, string>
    status: ProjectStatus
    stack: string[]
}

export const projects: Project[] = [
    {
        title: 'omnipaper',
        url: 'https://omnipaper.app',
        description: {
            en: 'self-hosted ai document management with ocr and workflows',
            pl: 'self-hosted zarządzanie dokumentami z ai, ocr i workflowami',
        },
        status: 'live',
        stack: ['hono', 'ts', 'tanstack', 'postgres', 'ai'],
    },
    {
        title: 'fitresume.app',
        description: {
            en: 'here your resume fits the role',
            pl: 'tu twoje cv pasuje do roli',
        },
        status: 'failed',
        stack: ['nextjs', 'ts', 'supabase', 'railway', 'openai'],
    },
    {
        title: 'heyaiworld',
        description: {
            en: 'directory of great ai-powered apps and more',
            pl: 'katalog świetnych aplikacji ai i nie tylko',
        },
        status: 'failed',
        stack: ['nextjs', 'ts', 'supabase', 'coolify', 'openai'],
    },
    {
        title: 'rhea.chat',
        description: {
            en: 'chatbot with flowless access to many tools',
            pl: 'chatbot z płynnym dostępem do wielu narzędzi',
        },
        status: 'failed',
        stack: ['langgraph', 'ts', 'supabase', 'railway', 'llm', 'nextjs'],
    },
    {
        title: 'voicedesk.app',
        description: {
            en: 'your private ai phone secretary',
            pl: 'twój prywatny telefoniczny sekretarz ai',
        },
        status: 'failed',
        stack: ['nextjs', 'ts', 'supabase', 'railway', 'twilio', 'livekit', 'langgraph'],
    },
    {
        title: 'gaidme.app',
        description: {
            en: 'cli tool powered by ai to generate your terminal commands',
            pl: 'narzędzie cli z ai generujące komendy terminala',
        },
        status: 'failed',
        stack: ['nextjs', 'js', 'supabase', 'railway', 'tailwind', 'langchain', 'openai'],
    },
]
