import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

import { defaultLang } from './src/i18n/ui';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    output: 'server',
    adapter: vercel({
        imageService: true,
        webAnalytics: {
            enabled: true,
        },
        speedInsights: {
            enabled: true,
        },
    }),
    redirects: {
        '/': '/' + defaultLang + '/',
    },
});
