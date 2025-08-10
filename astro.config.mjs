import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://onestopsites.net.au",
  integrations: [sitemap()],
  output: "server",
  adapter: netlify(),
});
