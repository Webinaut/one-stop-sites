import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://onestopsites.net.au",
  integrations: [sitemap()],
  output: "server",
});
