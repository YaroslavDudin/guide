import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 8080,
    watch: {
      usePolling: true,
      interval: 300,
    },
    proxy: {
      '/people': 'http://localhost:3000',
    },
  },
  cacheDir: '/var/tmp/.vite',
});
