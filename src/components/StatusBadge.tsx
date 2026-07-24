import { ProjectStatus } from '@/lib/projects'

const getProjectTooltip = (status: ProjectStatus) => {
    if (status === 'building') {
        return "🚀 Building in public on X/Twitter!"
    }
    return ''
}

export default function StatusBadge({ status }: { status: ProjectStatus }) {
    const baseClasses = "text-xs px-2.5 py-1 rounded-full relative"
    const statusClasses = {
        'waitlist': 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
        'failed': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        'failing': 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        'building': 'bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 dark:from-yellow-900/40 dark:via-yellow-700/40 dark:to-yellow-900/40 text-yellow-700 dark:text-yellow-300 animate-status-shimmer bg-[length:200%_100%] animate-status-glow',
        'live': 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400'
    }[status]

    return (
        <div className="relative">
            <span className={`${baseClasses} ${statusClasses} ${status === 'building' ? 'shadow-lg shadow-yellow-200/20 dark:shadow-yellow-500/10' : ''}`}>
                {status}
                {status === 'building' && (
                    <span className="absolute inset-0 rounded-full bg-yellow-300/20 dark:bg-yellow-400/20 blur-sm" />
                )}
            </span>
            {status === 'building' && (
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 -top-14 left-1/2 -translate-x-1/2 min-w-48">
                    <div className="bg-black/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm text-center shadow-lg border border-gray-100 dark:border-gray-800">
                        {getProjectTooltip(status)}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/95 rotate-45 border-b border-r border-gray-100 dark:border-gray-800"></div>
                    </div>
                </div>
            )}
        </div>
    )
}
