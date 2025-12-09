// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://ogguevara07.github.io/',
    base: '/ritmo-y-raices/',
  vite: {
    plugins: [tailwindcss()]
  }
});