import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import { defaultLang } from "./src/i18n/ui";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://icehockeypro57.com",
  integrations: [tailwind(), react(), sitemap()],
  output: "server",
  prefetch: {
    defaultStrategy: "viewport",
  },
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
    "/": "/" + defaultLang + "/",
  },
});
