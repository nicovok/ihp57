import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

import { defaultLang } from './src/i18n/ui';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    output: 'hybrid',
    adapter: vercel({
        imageService: true,
        devImageService: true,
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
