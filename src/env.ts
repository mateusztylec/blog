import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    client: {
        // Public OpenPanel client id; analytics are skipped when unset.
        NEXT_PUBLIC_OPENPANEL_CLIENT_ID: z.string().min(1).optional(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_OPENPANEL_CLIENT_ID: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
    },
    emptyStringAsUndefined: true,
})
