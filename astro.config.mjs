import { defineConfig } from 'astro/config';
import { imagetools } from 'vite-imagetools';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [imagetools()],
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
