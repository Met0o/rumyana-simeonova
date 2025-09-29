import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Update site URL after DNS + Pages are set. Use HTTPS canonical URL.
export default defineConfig({
  site: 'https://rumyanasimeonova.com',
  integrations: [mdx(), sitemap()],
  markdown: { shikiConfig: { themes: { light: 'min-light', dark: 'min-dark' } } },
});
