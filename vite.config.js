import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Используем входной файл HTML
    },
  },
});
